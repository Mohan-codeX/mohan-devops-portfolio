# Terraform Infrastructure

This directory contains the Terraform Infrastructure as Code (IaC) for the **Mohan DevOps Portfolio** project.

## Purpose

The infrastructure defined here provisions and manages the AWS resources required to run the application in a production-like environment.

## Planned Infrastructure

- VPC
- Public and Private Subnets
- Internet Gateway
- NAT Gateway
- Route Tables
- Security Groups
- IAM Roles and Policies
- Amazon EKS Cluster
- EKS Managed Node Group

## Directory Structure

```text
infrastructure/
├── main.tf
├── provider.tf
├── versions.tf
├── variables.tf
├── outputs.tf
├── terraform.tfvars.example
└── modules/
    ├── networking/
    ├── iam/
    ├── security/
    └── eks/
```

## Prerequisites

- Terraform >= 1.13
- AWS CLI configured
- An AWS IAM user or role with permissions to provision infrastructure

## Deployment Strategy

The infrastructure will be built using reusable Terraform modules that follow production best practices. The root module orchestrates child modules for networking, IAM, security, and EKS.

Each module will be implemented incrementally while keeping the project in a deployable state.
