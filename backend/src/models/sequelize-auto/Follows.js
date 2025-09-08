import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Follows extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    follower_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    following_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'Follows',
    timestamps: false,
    freeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "unique_follow",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "follower_id" },
          { name: "following_id" },
        ]
      },
      {
        name: "following_id",
        using: "BTREE",
        fields: [
          { name: "following_id" },
        ]
      },
    ]
  });
  }
}
