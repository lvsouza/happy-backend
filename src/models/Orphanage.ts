import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ETableNames } from '../database/ETableNames';

@Entity(ETableNames.orphanages)
export default class Orphanage {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    about: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    instructions: string;

    @Column()
    opening_hours: number;

    @Column()
    open_on_weekends: boolean;
}
