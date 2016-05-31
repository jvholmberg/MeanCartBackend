var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BrandSchema = new Schema({
  name: String,
  description: String
});

BrandSchema.virtual('date')
  .get(function() {
    return this._id.getTimestamp();
  });

mongoose.model('Brand', BrandSchema);
