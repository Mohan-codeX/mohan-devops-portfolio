module "networking" {
  source = "./modules/networking"

  project_name = var.project_name
  environment  = var.environment

  vpc_cidr = "10.0.0.0/16"

  availability_zones = [
    "ap-south-2a",
    "ap-south-2b"
  ]

  public_subnet_cidrs = [
    "10.0.1.0/24",
    "10.0.2.0/24"
  ]

  private_subnet_cidrs = [
    "10.0.101.0/24",
    "10.0.102.0/24"
  ]
}

module "iam" {
  source = "./modules/iam"

  project_name = var.project_name
  environment  = var.environment
}

module "security" {
  source = "./modules/security"

  project_name = var.project_name
  environment  = var.environment

  vpc_id = module.networking.vpc_id
}

module "eks" {
  source = "./modules/eks"

  project_name = var.project_name
  environment  = var.environment

  cluster_version = "1.33"

  vpc_id = module.networking.vpc_id

  private_subnet_ids = module.networking.private_subnet_ids

  cluster_role_arn = module.iam.eks_cluster_role_arn
  node_role_arn    = module.iam.eks_node_group_role_arn

  ebs_csi_driver_role_arn = module.iam.ebs_csi_driver_role_arn

  cluster_security_group_id = module.security.cluster_security_group_id

  node_instance_types = [
    "t3.small"
  ]

  desired_size = 2
  min_size     = 2
  max_size     = 4

  disk_size = 30
}
############################################
# GitHub Actions EKS Access
############################################

resource "aws_eks_access_entry" "github_actions" {
  cluster_name  = module.eks.cluster_name
  principal_arn = module.iam.github_actions_role_arn
  type          = "STANDARD"
}

resource "aws_eks_access_policy_association" "github_actions_admin" {
  cluster_name  = module.eks.cluster_name
  principal_arn = module.iam.github_actions_role_arn
  policy_arn    = "arn:aws:eks::aws:cluster-access-policy/AmazonEKSClusterAdminPolicy"

  access_scope {
    type = "cluster"
  }

  depends_on = [
    aws_eks_access_entry.github_actions
  ]
}
