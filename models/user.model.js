import mongoose from 'mongoose'

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

export default mongoose.model('User', UserModel)
