import { Model, DataTypes, Optional, Sequelize } from "sequelize";

/**
 * 1. Define attributes
 */
interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
}

/**
 * 2. For creation (id optional)
 */
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

/**
 * 3. Model class
 */
export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  /**
   * 4. Associations (future use)
   */
  static associate(models: any) {
    // example:
    // User.hasMany(models.Post)
  }
}

/**
 * 5. Init function
 */
export const initUserModel = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      timestamps: true,
    }
  );

  return User;
};