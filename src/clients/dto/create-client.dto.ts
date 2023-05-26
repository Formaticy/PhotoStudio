import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, Length } from "class-validator";

export class CreateClientDto {
    @ApiProperty({ example: 'Иван', description: 'имя' })
    @IsString()
    @Length(2, 15)
    @IsNotEmpty({ message: 'The client should has a firstname' })
    firstname: string;

    @ApiProperty({ example: 'Иванов', description: 'фамилия' })
    @IsString()
    @Length(2, 20)
    @IsNotEmpty({ message: 'The client should has a lasttname' })
    lastname: string;

    @ApiProperty({ example: '+79296788998', description: 'тел.' })
    @IsPhoneNumber()
    @IsNotEmpty({ message: 'The client should has phone' })
    phone: string;

    @ApiProperty({ example: 'ivan@gmail.com', description: 'эл. почта' })
    @IsEmail()
    @IsNotEmpty({ message: 'The client should has a mail' })
    mail: string;
}