############################################
# Amazon EKS Cluster
############################################

resource "aws_eks_cluster" "this" {
  name     = "${var.project_name}-${var.environment}"
  role_arn = var.cluster_role_arn
  version  = var.cluster_version

  enabled_cluster_log_types = [
    "api",
    "audit",
    "authenticator",
    "controllerManager",
    "scheduler"
  ]

  access_config {
    authentication_mode                         = "API_AND_CONFIG_MAP"
    bootstrap_cluster_creator_admin_permissions = true
  }

  vpc_config {
    subnet_ids              = var.private_subnet_ids
    security_group_ids      = [var.cluster_security_group_id]
    endpoint_private_access = false
    endpoint_public_access  = true
  }

  tags = {
    Name        = "${var.project_name}-${var.environment}"
    Project     = var.project_name
    Environment = var.environment
    ManagedBy   = "Terraform"
  }

  timeouts {
    create = "60m"
    update = "60m"
    delete = "60m"
  }
}

############################################
# EKS Managed Node Group
############################################

resource "aws_eks_node_group" "default" {
  cluster_name    = aws_eks_cluster.this.name
  node_group_name = "${var.project_name}-${var.environment}-default"
  node_role_arn   = var.node_role_arn
  subnet_ids      = var.private_subnet_ids

  ami_type             = "AL2023_x86_64_STANDARD"
  capacity_type        = "ON_DEMAND"
  instance_types       = var.node_instance_types
  disk_size            = var.disk_size
  force_update_version = true

  scaling_config {
    desired_size = var.desired_size
    min_size     = var.min_size
    max_size     = var.max_size
  }

  update_config {
    max_unavailable = 1
  }

  labels = {
    role = "worker"
  }

  tags = {
    Name        = "${var.project_name}-${var.environment}-default"
    Project     = var.project_name
    Environment = var.environment
    ManagedBy   = "Terraform"
  }

  timeouts {
    create = "60m"
    update = "60m"
    delete = "60m"
  }

  depends_on = [
    aws_eks_cluster.this
  ]
}

############################################
# Amazon EKS Managed Add-ons
############################################

resource "aws_eks_addon" "vpc_cni" {
  cluster_name                = aws_eks_cluster.this.name
  addon_name                  = "vpc-cni"
  resolve_conflicts_on_create = "OVERWRITE"

  depends_on = [
    aws_eks_node_group.default
  ]
}

resource "aws_eks_addon" "coredns" {
  cluster_name                = aws_eks_cluster.this.name
  addon_name                  = "coredns"
  resolve_conflicts_on_create = "OVERWRITE"

  depends_on = [
    aws_eks_node_group.default
  ]
}

resource "aws_eks_addon" "kube_proxy" {
  cluster_name                = aws_eks_cluster.this.name
  addon_name                  = "kube-proxy"
  resolve_conflicts_on_create = "OVERWRITE"

  depends_on = [
    aws_eks_node_group.default
  ]
}

resource "aws_eks_addon" "pod_identity_agent" {
  cluster_name                = aws_eks_cluster.this.name
  addon_name                  = "eks-pod-identity-agent"
  resolve_conflicts_on_create = "OVERWRITE"

  depends_on = [
    aws_eks_node_group.default
  ]
}

resource "aws_eks_addon" "ebs_csi_driver" {
  cluster_name                = aws_eks_cluster.this.name
  addon_name                  = "aws-ebs-csi-driver"
  resolve_conflicts_on_create = "OVERWRITE"

  pod_identity_association {
    role_arn        = var.ebs_csi_driver_role_arn
    service_account = "ebs-csi-controller-sa"
  }

  depends_on = [
    aws_eks_addon.pod_identity_agent
  ]
}
