import { Type } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsInt, IsNotEmpty, IsNumber, IsString, Length, Max, Min, ValidateNested } from "class-validator"
import { Client } from "src/clients/client.entity"
import { Photographer } from "src/photographers/photographer.entity"

export class CreatePhotosessionDto {
    @ApiProperty({ example: 'safari', description: 'место фотосессии' })
    @IsString()
    @Length(2, 50)
    @IsNotEmpty({ message: 'Place is required' })
    place: string

    @ApiProperty({ example: '12.12.2022', description: 'дата' })
    @IsDate()
    @Type(() => Date)
    @IsNotEmpty({ message: 'Date is required' })
    date: Date

    @ApiProperty({ example: 5, description: 'кол-во людей' })
    @IsNumber()
    @IsInt()
    @Min(1)
    @Max(20)
    @IsNotEmpty({ message: 'People amount is required' })
    peopleAmount: number

    @ApiProperty({ example: {id: 5}, description: 'id клиента' })
    @ValidateNested()
    @Type(() => Client)
    @IsNotEmpty({ message: 'Client`s id is required' })
    client: Client

    @ApiProperty({ example: {id: 3}, description: 'id фотографа' })
    @ValidateNested()
    @Type(() => Photographer)
    @IsNotEmpty({ message: 'Photographer`s id is required' })
    photographer: Photographer
}