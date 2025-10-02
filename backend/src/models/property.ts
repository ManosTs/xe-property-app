import { DataTypes, Model, type Optional } from 'sequelize';
import { sequelize } from "./index.ts";

interface PropertyAttributes {
  id: number;
  title: string;
  price: number;
  type: number;
  placeId: string;
  typeDescription: string;
  placeDescription: string;
  description: string | null | undefined;
}

interface PropertyCreationAttributes extends Optional<PropertyAttributes, "id"> {}


export class Property
  extends Model<PropertyAttributes, PropertyCreationAttributes>
  implements PropertyAttributes
{
  public id!: number;
  public title!: string;
  public price!: number;
  public type!: number;
  public placeId!: string;
  public typeDescription!: string;
  public placeDescription!: string;
  public description: string | null | undefined;
}


Property.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: new DataTypes.STRING(155),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    placeId: {
      type: new DataTypes.STRING(500),
      allowNull: false
    },
    description: {
      type: new DataTypes.STRING(500),
      allowNull: true
    },
    placeDescription: {
      type: new DataTypes.STRING(500),
      allowNull: false
    },
    typeDescription: {
      type: new DataTypes.STRING(500),
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: "ads"
  }
);

Property.sync().then(() => {
  console.log('Property table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});