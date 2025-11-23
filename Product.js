const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  specs: {
    type: [String],
    default: []
  },
  reviews: [{
    user: String,
    comment: String,
    rating: Number
  }],
  // For 3D representation
  shapeType: {
    type: String,
    enum: ['cube', 'sphere', 'torus', 'cone', 'cylinder'],
    default: 'cube'
  },
  color: {
    type: String, // Hex code or CSS color name
    default: '#3498db'
  }
});

module.exports = mongoose.model('Product', productSchema);
