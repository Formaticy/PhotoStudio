import { Photosession } from "src/photosessions/photosession.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity('photographers')
export class Photographer {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    phone: string

    @Column()
    birthday: Date

    @OneToMany(() => Photosession, (photosession) => photosession.photographer)
    photosessions: Photosession[]
}
