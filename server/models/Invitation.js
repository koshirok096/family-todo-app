import mongoose from 'mongoose';

  const invitationSchema = new mongoose.Schema({
    group: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Group' 
    },
    invitingUser: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    invitedUser: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    status: { 
        type: String, 
        enum: ['pending', 'accepted', 'rejected'], 
        default: 'pending' 
    },
  }, { timestamps: true });
  
  const Invitation = mongoose.model('Invitation', invitationSchema);
  
  export default Invitation;