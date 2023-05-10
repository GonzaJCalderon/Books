const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING, 
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rol: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
  },
  { timestamps: false}
  );
};
