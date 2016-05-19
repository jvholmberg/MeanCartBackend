var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({

  // Credentials
  username: String,
  password: String,
  userToken: String,
  email: String,

  // Misc
  lastOnline: Date,
  clan: Number

  /*resources: String,
  research: String,
  units: String,
  upgrades: String*/

});

UserSchema.virtual('date')
  .get(function() {
    return this._id.getTimestamp();
  });

mongoose.model('User', UserSchema);
