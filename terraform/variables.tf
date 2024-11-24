variable "profile" {
    type = string
}
variable "password" {
    type = string
}
variable"vpc_name" {
    type = string
}
variable "vpcCIDR" {
    type = string
}
variable "subnetNames" {
  type        = list(string)
  default     = ["subnet-a", "subnet-b", "subnet-c"]
}
variable "zone" {
    type = string
}
variable "subnetCIDR" {
  type        = list(string)
  default     = ["192.168.1.0/24", "192.168.2.0/24", "192.168.3.0/24"]
}
variable "ami" {
    type = string
}
variable "instances" {
    type = list(string)
}
variable "instanceType" {
    type = list(string)
}
variable "publicIP" {
    type = list(bool)
}
variable "subnetAssoc" {
    type = list(string)
}
variable "gatewayName" {
    type = string
    default = [vpc_name + "GW"]
}
variable "CustomInput" {
    type = string
}