import mongoose from "mongoose";

const internshipApplicationSchema = new mongoose.Schema({
  // Personal Information
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Please enter a valid email address']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },

  // Academic Information
  university: {
    type: String,
    required: [true, 'University is required'],
    trim: true
  },
  graduationYear: {
    type: Number,
    required: [true, 'Graduation year is required'],
    validate: {
      validator: function(year) {
        const currentYear = new Date().getFullYear();
        return year >= currentYear && year <= currentYear + 5;
      },
      message: 'Graduation year must be between current year and 5 years from now'
    }
  },

  // Professional Information
  practiceArea: {
    type: String,
    required: [true, 'Practice area is required'],
    enum: {
      values: [
        'Corporate Law',
        'Litigation',
        'Intellectual Property',
        'Family Law',
        'Criminal Law',
        'Real Estate',
        'Tax Law',
        'Environmental Law',
        'Other'
      ],
      message: 'Please select a valid practice area'
    }
  },
  resume: {
    type: String, // Store file path or URL
    required: [true, 'Resume is required']
  },
  coverLetter: {
    type: String, // Store file path or URL
    required: false
  },
  message: {
    type: String,
    trim: true,
    maxlength: [1000, 'Message cannot be more than 1000 characters']
  },

  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true // Automatically manage createdAt and updatedAt
});

// Add index for faster queries
internshipApplicationSchema.index({ email: 1 });
internshipApplicationSchema.index({ createdAt: -1 });

// Add method to get full name
internshipApplicationSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

// Add method to check if application is recent (within last 30 days)
internshipApplicationSchema.methods.isRecent = function() {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  return this.createdAt >= thirtyDaysAgo;
};

// Add static method to find applications by practice area
internshipApplicationSchema.statics.findByPracticeArea = function(practiceArea) {
  return this.find({ practiceArea });
};

// Add static method to find recent applications
internshipApplicationSchema.statics.findRecent = function() {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  return this.find({ createdAt: { $gte: thirtyDaysAgo } });
};

// Create and export the model
const InternshipApplication = mongoose.model('InternshipApplication', internshipApplicationSchema);
export default InternshipApplication;
