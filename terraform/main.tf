locals {
    instances = tomap(zipmap(var.instances, var.publicIP))
    type = tomap(zipmap(var.instances, var.instanceType))
    subnetAssoc = tomap(zipmap(var.instances, var.subnetAssoc))
    subnet_data = tomap(zipmap(var.subnetNames, var.subnetCIDR))
    subnet_name_to_id = {
    for name, subnet in aws_subnet.example :
    subnet.tags["Name"] => subnet.id
    }
    subnet_name_to_zone = {
    for name, subnet in aws_subnet.example :
    subnet.tags["Name"] => subnet.availability_zone
    }
    
}
provider "aws" {
    profile = var.profile
}
resource "aws_vpc" "main" {
    cidr_block = var.vpcCIDR
    tags = {
      Name = var.vpc_name
    }
}
resource "aws_subnet" "example" {
  for_each = local.subnet_data

  vpc_id            = aws_vpc.main.id
  cidr_block        = each.value       
  tags = {
    Name = each.key                  
  }
}
resource "aws_internet_gateway" "name" {
    vpc_id = aws_vpc.main.id
    tags = {
      Name = var.gatewayName
    }
}
resource "aws_instance" "name" {
    for_each = local.instances
    ami = var.ami
    availability_zone = local.subnet_name_to_zone[local.subnetAssoc[each.key]]
    subnet_id = local.subnet_name_to_id[local.subnetAssoc[each.key]]
    associate_public_ip_address = each.value
    instance_type = local.type[each.key]
    tags = {
      Name = each.key
    }
}