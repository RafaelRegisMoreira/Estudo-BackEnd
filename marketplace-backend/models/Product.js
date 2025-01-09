// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database').default;
// const Stock = require('./Stock');
// const Image = require('./Image');
// const Review = require('./Review')
import { DataTypes } from 'sequelize';
import {sequelize} from '../config/database.js';
import Stock from './Stock.js';
import Image from './Image.js';
import Review from './Review.js';

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  produto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  parcelas: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  genero: {
  type: DataTypes.STRING,
  allowNull: false
},
  categoria: {
  type: DataTypes.INTEGER,
  allowNull: false
},
  colecao: {
  type: DataTypes.INTEGER,
  allowNull: false
},
}, {
  tableName: 'products',
    timestamps: false,
});

Product.hasMany(Stock, { as: 'estoque', foreignKey: 'productId' });
Product.hasMany(Image, { as: 'imagem', foreignKey: 'productId' });
Product.hasMany(Review, { as: 'avaliacoes', foreignKey: 'productId' });

export default Product;
