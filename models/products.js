module.exports = (sequelize, DataTypes) =>
  sequelize.define('products', {
    product_name: DataTypes.STRING,
    department_name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock_quantity: DataTypes.INTEGER
  })
