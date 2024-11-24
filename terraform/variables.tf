variable "profile" {
    type = string
}
variable "accessKey" {
    type = string
}
variable "secretKey" {
    type = string
}
variable"vpc_name" {
    type = string
    default = "vpc-a"
}
variable "vpcCIDR" {
    type = string
    default = "192.168.0.0/16"
}
variable "subnetNames" {
  type        = list(string)
  default     = ["subnet-a", "subnet-b", "subnet-c"]
}
variable "subnetCIDR" {
  type        = list(string)
  default     = ["192.168.1.0/24", "192.168.2.0/24", "192.168.3.0/24"]
}
variable "ami" {
    type = string
    default = "ami-0ea3c35c5c3284d82"
}
variable "instances" {
    type = list(string)
    default = [ "server-a" ]
}
variable "instanceType" {
    type = list(string)
    default = [ "t2.micro" ]
}
variable "publicIP" {
    type = list(bool)
    default = [ false ]
}
variable "gatewayName" {
    type = string
    default = "gw-a"
}
variable "subnetAssoc" {
    type = list(string)
    default = [ "subnet-a" ]
}