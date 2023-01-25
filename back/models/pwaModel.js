
import mongoose from 'mongoose'
const { ObjectId } = mongoose.Schema
const pwaModel = mongoose.Schema({
  user: {
    type: ObjectId,
    ref: 'User',
    required: false,
  },
  status: {
    type: String,
  },
  pattern: {
    type: String,
    required: true
  },
  domain: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  }
},
  {
    minimize: false,
    timestamps: true
  }
)


const PWA = mongoose.model('pwa', pwaModel)

export default PWA