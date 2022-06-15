import { DataTypes } from "sequelize";

import { db } from "../db";

export const NotesModel = db.define("notes", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  note: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
});
