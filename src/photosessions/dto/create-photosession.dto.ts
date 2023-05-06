import { Client } from "src/clients/client.entity"
import { Photographer } from "src/photographers/photographer.entity"

export class CreatePhotosessionDto {
    place: string
    date: Date
    peopleAmount: number
    client: Client
    photographer: Photographer
}