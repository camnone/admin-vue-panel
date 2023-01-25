import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  password: {
    type: String,
    required: true
  },
  login: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
    required: true
  },
  bayerId: {
    type: Number,
    required: true
  }
},
  {
    minimize: false,
    timestamps: true
  }
)

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User