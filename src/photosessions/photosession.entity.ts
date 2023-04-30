import { Client } from 'src/clients/client.entity'
import { Photographer } from 'src/photographers/photographer.entity'
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

@Entity('photosessions')
export class Photosession {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    place: string

    @Column()
    date: Date

    @Column()
    peopleAmount: number

    @ManyToOne(() => Client, (client) => client.photosessions)
    client: Client

    @ManyToOne(() => Photographer, (photographer) => photographer.photosessions)
    photographer: Photographer
}