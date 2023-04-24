const mongoose = require('mongoose');

const searchFilterSchema = new mongoose.Schema({
  searchFilterId: {
    type: String,
    required: [true, 'Search Filter ID is required.'],
    unique: true
  },
  skillId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill',
    required: [true, 'Skill ID is required.']
  },
  budget: {
    type: Number,
    required: [true, 'Budget is required.']
  },
  location: {
    type: String,
    required: [true, 'Location is required.']
  }
});

module.exports = mongoose.model('SearchFilter', searchFilterSchema);
