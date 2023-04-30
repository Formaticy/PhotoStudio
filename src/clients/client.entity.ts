import { Photosession } from 'src/photosessions/photosession.entity'
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

@Entity('clients')
export class Client {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    phone: string

    @Column()
    mail: string

    @OneToMany(() => Photosession, (photosession) => photosession.client)
    photosessions: Photosession[]
}
