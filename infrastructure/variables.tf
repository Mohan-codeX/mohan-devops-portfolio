variable "aws_region" {
  description = "AWS region where AWS resources will be deployed."
  type        = string
}

variable "project_name" {
  description = "Project name used for resource naming and tagging."
  type        = string
}

variable "environment" {
  description = "Deployment environment (e.g. dev, staging, production)."
  type        = string
}
