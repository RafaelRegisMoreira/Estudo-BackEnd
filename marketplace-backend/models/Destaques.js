import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const Highlights = sequelize.define('Highlights', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    destaque: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'destaques',
    timestamps: false,
})

export default Highlights