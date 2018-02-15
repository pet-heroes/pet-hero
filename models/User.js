// Global modules/packages
const mongoose = require('mongoose');

/**
 * Create a new User schema
 */

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  favoriteAnimals: {
    type: [String],
  },
});

// TODO: Implement hook for password hashing
// TODO: Implement hook for comparing password to hashed password

// Export the User model
module.exports = mongoose.model('user', UserSchema);
