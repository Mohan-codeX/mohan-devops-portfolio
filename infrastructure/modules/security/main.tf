############################################
# EKS Cluster Security Group
############################################

resource "aws_security_group" "eks_cluster" {
  name        = "${var.project_name}-${var.environment}-eks-cluster-sg"
  description = "Security group for the Amazon EKS control plane"
  vpc_id      = var.vpc_id

  tags = {
    Name        = "${var.project_name}-${var.environment}-eks-cluster-sg"
    Project     = var.project_name
    Environment = var.environment
    ManagedBy   = "Terraform"
  }
}

############################################
# Cluster Egress
############################################

resource "aws_vpc_security_group_egress_rule" "cluster_egress" {
  security_group_id = aws_security_group.eks_cluster.id

  cidr_ipv4   = "0.0.0.0/0"
  ip_protocol = "-1"

  description = "Allow outbound traffic from the EKS control plane"
}
