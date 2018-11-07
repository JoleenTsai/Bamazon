module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('products', {
    item_id: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    department_name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock_quantity: DataTypes.INTEGER
  });

  return Products
}