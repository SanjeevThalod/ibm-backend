import mongoose from 'mongoose';

const tuitionCenterSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  location: { 
    type: String, 
    required: true
  },

  courses: {
     type: [String], 
     required: true 
  },
  ratings: { 
    type: Number, 
    default: 0 
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Review' 
  }],
  contactNumber: { 
    type: String, 
    required: true, 
    validate: {
      validator: function(v) {
        // Simple validation for a contact number (e.g., must be a 10-digit number)
        return /\d{10}/.test(v);
      },
      message: props => `${props.value} is not a valid contact number!`
    }
  }
});

const TuitionCenter = mongoose.model('TuitionCenter', tuitionCenterSchema);
export default TuitionCenter;
