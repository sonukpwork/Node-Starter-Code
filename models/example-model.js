//Create your model in models folder with diffrent name or rename this.

// Example of creating a mongoose model
// Given below is a example of user model

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 32,
  },
  lastName: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 32,
  },
  oAuthId: {
    type: String,
    required: false,
  },
  profilePic: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 64,
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: false,
  },
  CreatedOn: {
    type: Date,
    required: true,
    default: Date.now,
  },
  status: {
    type: Number,
    required: true,
    default: 2,
  },
  resetToken: {
    type: String,
    required: false,
  },
  modifiedOn: {
    type: Date,
    required: false,
  },
});

module.exports = mongoose.model('users', UserSchema);
