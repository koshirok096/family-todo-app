import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: ''
  },
  members: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }],
  // groupUser: {
  //   type: [String], 
  //   required: true,
  //   default: [],
  // },
  description: {
    type: String,
    required: true,
    default: 'Hello There!'
  },
  personInCharge: {
    type: String,
    required: false,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

const Group = mongoose.model('Group', groupSchema);

export default Group;
