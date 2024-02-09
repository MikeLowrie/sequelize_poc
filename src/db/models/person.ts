import { Column, DataType, ForeignKey, HasOne, Model, PrimaryKey, Table } from 'sequelize-typescript';
import License from './license.ts';

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

    //@ForeignKey(() => License)
    //@Column(DataType.NUMBER)
    //public licensenumber!: number;

    //@HasOne(() => License)
    public license: License;
}

//https://stackoverflow.com/questions/60014874/how-to-use-typescript-with-sequelize