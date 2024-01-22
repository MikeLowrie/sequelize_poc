import { Column, DataType, Model, Table } from 'sequelize-typescript';
import sequelizeConnection from '../config.js';

@Table
class Person extends Model {
    @Column
    public firstname: string;
    
    @Column
    public lastname: string;
    
    @Column
    public birthday: Date;

    //public readonly createdAt: Date;
    //public readonly updatedAt: Date;
    //public readonly deletedAt: Date;
}

/*
Person.init({
    firstname: {
        type: DataType.STRING,
        primaryKey: true
    },
    lastname: {
        type: DataType.STRING,
        primaryKey: true
    },
    birthday: {
        type: DataType.DATE,
        allowNull: true
    },
    _attributes: '',
    sequelize: '',
    destroy: '',
    restore: '',
    update: '',
    increment: '',
    decrement: '',
    addHook: '',
    removeHook: '',
    hasHook: '',
    hasHooks: '',
    createdAt: '',
    updatedAt: '',
    deletedAt: '',
    $add: '',
    $set: '',
    $get: '',
    $count: '',
    $create: '',
    $has: '',
    $remove: '',
    reload: '',
    dataValues: '',
    _creationAttributes: '',
    isNewRecord: '',
    where: '',
    getDataValue: '',
    setDataValue: '',
    get: '',
    set: '',
    setAttributes: '',
    changed: '',
    previous: '',
    save: '',
    validate: '',
    equals: '',
    equalsOneOf: '',
    toJSON: '',
    isSoftDeleted: '',
    _model: ''
}, {
    sequelize: sequelizeConnection,
    timestamps: true,
    paranoid: true //imposes soft delete with a deletedAt attribute
}); */

export default Person;