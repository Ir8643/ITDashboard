locals {
    instances = zip(var.instances, var.ami, var.subnetAssoc, var.publicIP, var.instanceType)
}
resource "aws_instance" "name" {
    for_each = local.instances
    subnet_id = each.value[2]
    ami = each.value[1]
    associate_public_ip_address = each.value[3]
    instance_type = each.value[4]
    tags = {
      Name = each.value[0]
    }
}