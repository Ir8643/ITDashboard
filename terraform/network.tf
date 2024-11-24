locals {
  subnets = tomap(zipmap(var.subnetNames, var.subnetCIDR))
}
resource "aws_vpc" "main" {
    cidr_block = var.vpcCIDR
    tags = {
      Name = var.vpc_name
    }
}
resource "aws_subnet" "name" {
    vpc_id = aws_vpc.main.id
    for_each = local.subnets
    cidr_block = each.value
    availability_zone = var.zone
    tags = {
      name = each.key
    }
}
resource "aws_internet_gateway" "name" {
    vpc_id = aws_vpc.main.id
    tags = {
      Name = var.gatewayName
    }
}