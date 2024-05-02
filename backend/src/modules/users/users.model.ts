import { Model, DataTypes } from "sequelize";
import { UsersModel } from "./interface/users.interface";
import sequelize from "../../database/config"

class Users extends Model<UsersModel> implements UsersModel {
    public id!: number;
    public name!: string;
    public password!: string;
    public email!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Users.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.NUMBER
    },
    name: {
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
    }
}, {
    modelName: 'Users',
    sequelize: sequelize
})

export default Users