import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  passwordHash: String,
  name: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  purchases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

export default mongoose.models.User || mongoose.model('User', userSchema);
