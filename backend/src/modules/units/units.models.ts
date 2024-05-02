import { DataTypes, Model } from "sequelize";
import { UnitsModel } from "./interface/units.interface";
import sequelize from "../../database/config";

class Units extends Model<UnitsModel> implements UnitsModel {
    public id!: number;
    public name!: string;
    public address!: string;
    public isDelete!: boolean;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Units.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    isDelete: {
        type: DataTypes.BOOLEAN
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
    modelName: "Units",
    sequelize: sequelize
})

export default Units