import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

import { ETableNames } from '../database/ETableNames';
import Image from './Image';

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

    @OneToMany(() => Image, image => image.orphanage, { cascade: ['insert', 'update'] })
    @JoinColumn({ name: 'orphanage_id' })
    images: Image[];
}
