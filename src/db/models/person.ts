import { Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';
import sequelize from '../db.ts';

@Table
export default class Person extends Model {
    
    @PrimaryKey
    @Column(DataType.STRING)
    public firstname!: string;

    @PrimaryKey
    @Column(DataType.STRING)
    public lastname!: string;
    
    @Column(DataType.DATE)
    public birthday!: Date;
}