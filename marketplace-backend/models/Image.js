import { DataTypes } from 'sequelize';
import {sequelize} from '../config/database.js';
import Product from './Product.js';


const Image = sequelize.define('Image', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    caminho: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    destaque: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
}, {
    tableName: 'images',
    timestamps: false,
});

export default Image