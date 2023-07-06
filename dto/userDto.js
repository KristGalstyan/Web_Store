class UserDto {
  email
  id
  isActivated
  name
  constructor(model) {
    this.name = model.name
    this.email = model.email
    this.id = model._id
    this.isActivated = model.isActivated
  }
}
export { UserDto }
