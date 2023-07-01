import mongoose from 'moongose'

const UserModel = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    isActivated: {
      type: Boolean,
      default: false
    },
    activationLink: {
      type: String
    }
  },
  { timestamps: true }
)

export default UserModel.model('User', UserModel)
