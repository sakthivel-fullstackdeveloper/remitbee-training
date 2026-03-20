import { sequelize } from "../config/database";
import { initUserModel, User } from "./user.model";

/**
 * 1. Initialize all models
 */
initUserModel(sequelize);

/**
 * 2. Create DB object
 */
const db: any = {
  sequelize,
  User,
};

/**
 * 3. Run associations (if any)
 */
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

/**
 * 4. Export everything
 */
export default db;
export { sequelize, User };