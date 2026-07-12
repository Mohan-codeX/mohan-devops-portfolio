output "vpc_id" {
  description = "ID of the project VPC."
  value       = module.networking.vpc_id
}

output "github_actions_role_arn" {
  description = "GitHub Actions IAM Role ARN."
  value       = module.iam.github_actions_role_arn
}

output "github_actions_role_name" {
  description = "GitHub Actions IAM Role Name."
  value       = module.iam.github_actions_role_name
}

output "cluster_name" {
  description = "Amazon EKS Cluster Name."
  value       = module.eks.cluster_name
}
