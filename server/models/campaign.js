const mongoose = require("mongoose");
/*
Need to do validation
*/
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name : String,
        description: String,
        donation_target: String, 
        date: { type: Date, default: Date.now },
        date_expired: Date,
        public_key: String
      }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Campaign = mongoose.model("Campaign", schema);
    return Campaign;
  };
  