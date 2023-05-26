import { ApiProperty } from '@nestjs/swagger'
import { Client } from 'src/clients/client.entity'
import { Photographer } from 'src/photographers/photographer.entity'
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

@Entity('photosessions')
export class Photosession {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({ example: 'safari', description: 'Место фотосессии' })
    @Column()
    place: string

    @ApiProperty({ example: '12.12.2022', description: 'Дата' })
    @Column()
    date: Date

    @ApiProperty({ example: '3', description: 'Кол-во людей' })
    @Column()
    peopleAmount: number

    @ApiProperty({ example: {id: 5}, description: 'id клиента' })
    @ManyToOne(() => Client, (client) => client.photosessions)
    client: Client

    @ApiProperty({ example: {id: 3}, description: 'id фотографа' })
    @ManyToOne(() => Photographer, (photographer) => photographer.photosessions)
    photographer: Photographer
}