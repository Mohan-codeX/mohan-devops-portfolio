output "eks_cluster_role_arn" {
  description = "ARN of the EKS cluster IAM role."
  value       = aws_iam_role.eks_cluster.arn
}

output "eks_cluster_role_name" {
  description = "Name of the EKS cluster IAM role."
  value       = aws_iam_role.eks_cluster.name
}

output "eks_node_group_role_arn" {
  description = "ARN of the EKS managed node group IAM role."
  value       = aws_iam_role.eks_node_group.arn
}

output "eks_node_group_role_name" {
  description = "Name of the EKS managed node group IAM role."
  value       = aws_iam_role.eks_node_group.name
}

output "ebs_csi_driver_role_arn" {
  description = "ARN of the IAM role used by the Amazon EBS CSI Driver."
  value       = aws_iam_role.ebs_csi_driver.arn
}

output "ebs_csi_driver_role_name" {
  description = "Name of the IAM role used by the Amazon EBS CSI Driver."
  value       = aws_iam_role.ebs_csi_driver.name
}

output "aws_load_balancer_controller_role_arn" {
  description = "ARN of the IAM role used by the AWS Load Balancer Controller."
  value       = aws_iam_role.aws_load_balancer_controller.arn
}

output "aws_load_balancer_controller_role_name" {
  description = "Name of the IAM role used by the AWS Load Balancer Controller."
  value       = aws_iam_role.aws_load_balancer_controller.name
}

output "github_actions_role_arn" {
  description = "ARN of the GitHub Actions IAM Role."
  value       = aws_iam_role.github_actions.arn
}

output "github_actions_role_name" {
  description = "Name of the GitHub Actions IAM Role."
  value       = aws_iam_role.github_actions.name
}
