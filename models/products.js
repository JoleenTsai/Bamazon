module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('products', {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    department_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: DataTypes.DECIMAL(10, 2),
    stock_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Products
}