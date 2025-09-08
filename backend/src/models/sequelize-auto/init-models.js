import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Comments from  "./Comments.js";
import _Follows from  "./Follows.js";
import _Photo_Likes from  "./Photo_Likes.js";
import _Photos from  "./Photos.js";
import _User_Sessions from  "./User_Sessions.js";
import _Users from  "./Users.js";

export default function initModels(sequelize) {
  const Comments = _Comments.init(sequelize, DataTypes);
  const Follows = _Follows.init(sequelize, DataTypes);
  const Photo_Likes = _Photo_Likes.init(sequelize, DataTypes);
  const Photos = _Photos.init(sequelize, DataTypes);
  const User_Sessions = _User_Sessions.init(sequelize, DataTypes);
  const Users = _Users.init(sequelize, DataTypes);

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
