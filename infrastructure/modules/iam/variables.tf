variable "project_name" {
  description = "Project name used for naming AWS resources."
  type        = string
}

variable "environment" {
  description = "Deployment environment (e.g. dev, staging, prod)."
  type        = string
}
