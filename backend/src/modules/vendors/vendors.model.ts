import { DataTypes, Model } from "sequelize";
import { VendorsModel } from "./interface/vendors.interface";
import sequelize from "../../database/config";
import Units from "../units/units.models";

class Vendors extends Model<VendorsModel> implements VendorsModel {
    public id!: number;
    public vendorId!: string;
    public vendorName!: string;
    public address!: string;
    public unitId!: number;
    public isDelete!: boolean;
    public createdAt?: Date;
    public updatedAt?: Date;
}

Vendors.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    vendorId: {
        allowNull: false,
        type: DataTypes.STRING
    },
    vendorName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    address: {
        allowNull: false,
        type: DataTypes.STRING
    },
    unitId: {
        type: DataTypes.INTEGER,
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
    modelName: "Vendors",
    sequelize: sequelize
})

Vendors.belongsTo(Units, {
    foreignKey: 'unitId',
    as: 'units'
})

export default Vendors