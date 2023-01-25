
import mongoose from 'mongoose'

const patternModel = mongoose.Schema({
  pattern: {
    type: String,
    required: true,
  },
},
  {
    minimize: false,
    timestamps: true
  }
)


const Pattern = mongoose.model('pattern', patternModel)

export default Pattern