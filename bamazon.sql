USE bamazon_db;

CREATE TABLE products (
	item_id INTEGER AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
("Yamaha MusicCast", "Electronics", 299, 10),
("GreenForest Dining Chairs", "Furniture", 129.99, 8),
("GreenForest Dining Table White", "Furniture", 105.99, 3),
("Vitamin C Facial Cleanser", "Bathroom", 99, 150),
("IT Cosmetics CC Cream", "Beauty", 45.99, 1000),
("Womens Basic Skater Skirt", "Apparel", 12.99, 2000),
("Bissell Vacuum", "Cleaning", 79.99, 550),
("RXBAR Protein Bar", "Groceries", 12.99, 5000),
("Neoprene Dumbbells", "Fitness", 8.49, 300),
("The Great Gatsby", "Books", 9.99, 200);