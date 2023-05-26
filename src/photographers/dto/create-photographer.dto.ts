import { Type } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty, IsPhoneNumber, IsDate, Length } from "class-validator"

export class CreatePhotographerDto {
    @ApiProperty({ example: 'Иван', description: 'имя' })
    @IsString()
    @Length(2, 15)
    @IsNotEmpty({ message: 'The photographer should has a firstname' })
    firstname: string

    @ApiProperty({ example: 'Иванов', description: 'фамилия' })
    @IsString()
    @Length(2, 20)
    @IsNotEmpty({ message: 'The photographer should has a lastname' })
    lastname: string

    @ApiProperty({ example: '+79296788998', description: 'тел.' })
    @IsNotEmpty({ message: 'The photographer should has a phone' })
    @IsPhoneNumber()
    phone: string

    @ApiProperty({ example: '12.12.2000', description: 'дата рождения' })
    @IsNotEmpty({ message: 'The photographer should has a birthday date' })
    @IsDate()
    @Type(() => Date)
    birthday: Date
}