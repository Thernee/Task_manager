import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name field is required'],
    maxlength: [30, 'Maximum 30 characters allowed for name'],
    trim: true
  },
  accomplished: {
    type: Boolean,
    default: true,
  },
});

export default schema;