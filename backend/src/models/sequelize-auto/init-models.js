var DataTypes = require("sequelize").DataTypes;
var _Comments = require("./Comments");
var _Follows = require("./Follows");
var _Photo_Likes = require("./Photo_Likes");
var _Photos = require("./Photos");
var _User_Sessions = require("./User_Sessions");
var _Users = require("./Users");

function initModels(sequelize) {
  var Comments = _Comments(sequelize, DataTypes);
  var Follows = _Follows(sequelize, DataTypes);
  var Photo_Likes = _Photo_Likes(sequelize, DataTypes);
  var Photos = _Photos(sequelize, DataTypes);
  var User_Sessions = _User_Sessions(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);

  Comments.belongsTo(Photos, { as: "photo", foreignKey: "photo_id"});
  Photos.hasMany(Comments, { as: "Comments", foreignKey: "photo_id"});
  Photo_Likes.belongsTo(Photos, { as: "photo", foreignKey: "photo_id"});
  Photos.hasMany(Photo_Likes, { as: "Photo_Likes", foreignKey: "photo_id"});
  Comments.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(Comments, { as: "Comments", foreignKey: "user_id"});
  Follows.belongsTo(Users, { as: "follower", foreignKey: "follower_id"});
  Users.hasMany(Follows, { as: "Follows", foreignKey: "follower_id"});
  Follows.belongsTo(Users, { as: "following", foreignKey: "following_id"});
  Users.hasMany(Follows, { as: "following_Follows", foreignKey: "following_id"});
  Photo_Likes.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(Photo_Likes, { as: "Photo_Likes", foreignKey: "user_id"});
  Photos.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(Photos, { as: "Photos", foreignKey: "user_id"});
  User_Sessions.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(User_Sessions, { as: "User_Sessions", foreignKey: "user_id"});

  return {
    Comments,
    Follows,
    Photo_Likes,
    Photos,
    User_Sessions,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
