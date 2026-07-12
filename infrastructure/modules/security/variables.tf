variable "project_name" {
  description = "Project name used for naming AWS resources."
  type        = string
}

variable "environment" {
  description = "Deployment environment (e.g. dev, staging, prod)."
  type        = string
}

variable "vpc_id" {
  description = "VPC ID where the security groups will be created."
  type        = string
}
