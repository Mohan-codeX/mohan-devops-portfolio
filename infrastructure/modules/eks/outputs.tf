output "cluster_name" {
  description = "Amazon EKS cluster name."
  value       = aws_eks_cluster.this.name
}

output "cluster_arn" {
  description = "Amazon EKS cluster ARN."
  value       = aws_eks_cluster.this.arn
}

output "cluster_endpoint" {
  description = "Amazon EKS cluster API server endpoint."
  value       = aws_eks_cluster.this.endpoint
}

output "cluster_certificate_authority_data" {
  description = "Base64 encoded certificate data required to communicate with the cluster."
  value       = aws_eks_cluster.this.certificate_authority[0].data
}

output "cluster_version" {
  description = "Amazon EKS Kubernetes version."
  value       = aws_eks_cluster.this.version
}

output "oidc_issuer" {
  description = "OIDC issuer URL for the EKS cluster."
  value       = aws_eks_cluster.this.identity[0].oidc[0].issuer
}

output "node_group_name" {
  description = "Managed node group name."
  value       = aws_eks_node_group.default.node_group_name
}

output "node_group_arn" {
  description = "Managed node group ARN."
  value       = aws_eks_node_group.default.arn
}

output "node_group_status" {
  description = "Managed node group status."
  value       = aws_eks_node_group.default.status
}
