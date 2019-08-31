const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const movieSchema = new Schema({
  title: {type:String, required:true},
  director: {type: String, required:true},
  starts: Array,
  image: String,
  description: String,
  showtimes: Array
})

const Movies = mongoose.model('Movies', movieSchema);
module.exports = Movies;