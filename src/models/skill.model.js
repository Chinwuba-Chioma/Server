const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  skillId: {
    type: String,
    required: [true, 'Skill ID is required'],
    unique: true,
    trim: true,
    minlength: [5, 'Skill ID must be at least 5 characters long'],
    maxlength: [20, 'Skill ID can have a maximum of 20 characters']
  },
  skillName: {
    type: String,
    required: [true, 'Skill name is required'],
    trim: true,
    minlength: [3, 'Skill name must be at least 3 characters long'],
    maxlength: [50, 'Skill name can have a maximum of 50 characters']
  }
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
