const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  price: {
    type: String,
    required: true
  },
  startdate: {
    type: String,
    required: true
  },
  enddate: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  pickup: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  photoFile: {
    type: String
  },
  photoUrl: {
    type: String
  }
});

module.exports = Post = mongoose.model('posts', PostSchema);