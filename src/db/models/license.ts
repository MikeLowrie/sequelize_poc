import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, NotNull, PrimaryKey, Table } from 'sequelize-typescript';
import Person from './person.ts';

//https://dev.to/jctaveras/sequelize-typescript-what-you-need-to-know-41mj

@Table
export default class License extends Model {
    
    @PrimaryKey
    @Column(DataType.NUMBER)
    public licensenumber!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    public licenseholder!: string;

    @PrimaryKey
    @Column(DataType.STRING)
    public licensetype!: string;

    @ForeignKey(() => Person)
    //@Column(DataType.STRING)
    public firstname!: string;

    //@BelongsTo(() => Person)
    //@BelongsTo(() => Person, "firstname")
    //person: Person;
}