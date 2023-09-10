import mongoose from 'mongoose';

const connectMongoDB = () => {
  try {
    mongoose.connect(process.env.local.MONGODB_URI);
    console.log('Connected to MOngoDB');
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
