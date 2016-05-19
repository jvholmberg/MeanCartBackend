var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ClanSchema = new Schema({

  // Credentials
  name: String,
  members: String,
  alliances: String,
  conflicts: String

});

ClanSchema.virtual('date')
  .get(function() {
    return this._id.getTimestamp();
  });

mongoose.model('Clan', ClanSchema);
