import {sequelize} from './config/database.js';
// import Product from './models/Product.js';
// import Stock from './models/Stock.js';
// import Image from './models/Image.js';
// import Review from './models/Review.js';
// import Category from './models/Category.js';

(async () => {
  try {
    await sequelize.sync({ force: true }); // Use { force: true } apenas em desenvolvimento
    console.log('All tables created successfully!');
  } catch (error) {
    console.error('Unable to create tables:', error);
  } finally {
    sequelize.close();
  }
})();
