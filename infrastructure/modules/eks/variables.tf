variable "project_name" {
  description = "Project name."
  type        = string
}

variable "environment" {
  description = "Deployment environment."
  type        = string
}

variable "cluster_version" {
  description = "Amazon EKS Kubernetes version."
  type        = string
}

variable "vpc_id" {
  description = "VPC ID where the EKS cluster will be deployed."
  type        = string
}

variable "private_subnet_ids" {
  description = "Private subnet IDs for the EKS cluster and managed node group."
  type        = list(string)
}

variable "cluster_role_arn" {
  description = "IAM role ARN for the EKS cluster."
  type        = string
}

variable "node_role_arn" {
  description = "IAM role ARN for the managed node group."
  type        = string
}

variable "ebs_csi_driver_role_arn" {
  description = "IAM role ARN for the Amazon EBS CSI Driver."
  type        = string
}

variable "cluster_security_group_id" {
  description = "Security group ID for the EKS cluster."
  type        = string
}

variable "node_instance_types" {
  description = "EC2 instance types for the managed node group."
  type        = list(string)
  default     = ["t3.small"]
}

variable "desired_size" {
  description = "Desired number of worker nodes."
  type        = number
}

variable "min_size" {
  description = "Minimum number of worker nodes."
  type        = number
}

variable "max_size" {
  description = "Maximum number of worker nodes."
  type        = number
}

variable "disk_size" {
  description = "Root EBS volume size in GiB."
  type        = number
}
