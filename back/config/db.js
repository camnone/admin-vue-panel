import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (e) {
    console.error(`Error: ${e.message}`.red.underline.bold)
    process.exit(1)
  }
}