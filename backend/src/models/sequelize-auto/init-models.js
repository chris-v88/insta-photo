var DataTypes = require("sequelize").DataTypes;
var _Comments = require("./Comments");
var _Follows = require("./Follows");
var _Post_Likes = require("./Post_Likes");
var _Posts = require("./Posts");
var _User_Sessions = require("./User_Sessions");
var _Users = require("./Users");

function initModels(sequelize) {
  var Comments = _Comments(sequelize, DataTypes);
  var Follows = _Follows(sequelize, DataTypes);
  var Post_Likes = _Post_Likes(sequelize, DataTypes);
  var Posts = _Posts(sequelize, DataTypes);
  var User_Sessions = _User_Sessions(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);

  Comments.belongsTo(Posts, { as: "post", foreignKey: "post_id"});
  Posts.hasMany(Comments, { as: "Comments", foreignKey: "post_id"});
  Post_Likes.belongsTo(Posts, { as: "post", foreignKey: "post_id"});
  Posts.hasMany(Post_Likes, { as: "Post_Likes", foreignKey: "post_id"});
  Comments.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(Comments, { as: "Comments", foreignKey: "user_id"});
  Follows.belongsTo(Users, { as: "follower", foreignKey: "follower_id"});
  Users.hasMany(Follows, { as: "Follows", foreignKey: "follower_id"});
  Follows.belongsTo(Users, { as: "following", foreignKey: "following_id"});
  Users.hasMany(Follows, { as: "following_Follows", foreignKey: "following_id"});
  Post_Likes.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(Post_Likes, { as: "Post_Likes", foreignKey: "user_id"});
  Posts.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(Posts, { as: "Posts", foreignKey: "user_id"});
  User_Sessions.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(User_Sessions, { as: "User_Sessions", foreignKey: "user_id"});

  return {
    Comments,
    Follows,
    Post_Likes,
    Posts,
    User_Sessions,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
