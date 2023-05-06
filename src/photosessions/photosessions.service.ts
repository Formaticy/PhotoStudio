import { Injectable, NotFoundException } from '@nestjs/common';
import { Photosession } from './photosession.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotosessionRepository } from './photosession.repository';
import { IncompletePhotosessionDto } from './dto/incomplete-photosession.dto';
import { CreatePhotosessionDto } from './dto/create-photosession.dto';

@Injectable()
export class PhotosessionsService {
    constructor(
        @InjectRepository(Photosession)
        private readonly photosessionRepository: PhotosessionRepository
    ) {}

    async getPhotosessionById(id: number): Promise<Photosession> {
        const found = await this.photosessionRepository.findOne({
            where: { id },
            relations: {
                photographer: true,
                client: true
            }
        })

        if (! found) {
            throw new NotFoundException(`Photosession with ID = ${id} not found`); 
          }
    
          return found;
    }

    async findAllPhotosessions(): Promise<Photosession[]> {
        const photosessions = await this.photosessionRepository.find({
            relations: {
                photographer: true,
                client: true
            }
        })

        if (! photosessions) {
            throw new NotFoundException(`Photosessions are not found`); 
          }
    
          return photosessions;
    }

    async findIncompletePhotosessions(): Promise<IncompletePhotosessionDto[]> {
        const photosessions = await this.photosessionRepository.find({
            relations: {
                photographer: true,
                client: true
            }
        });
        const incompletePhotosessionsDto: IncompletePhotosessionDto[] = photosessions.map((photosession) => {
          const incompletePhotosessionDto = new IncompletePhotosessionDto();
          incompletePhotosessionDto.place = photosession.place;
          incompletePhotosessionDto.date = photosession.date;
          incompletePhotosessionDto.clientFirstname = photosession.client.firstname;
  
          return incompletePhotosessionDto;
        })
  
        return incompletePhotosessionsDto;
      } 

      async createPhotosession(createPhotosessionDto: CreatePhotosessionDto): Promise<Photosession> {
        const photosession = this.photosessionRepository.create();
        
        photosession.place = createPhotosessionDto.place;
        photosession.date = createPhotosessionDto.date;
        photosession.peopleAmount = createPhotosessionDto.peopleAmount;
        photosession.client = createPhotosessionDto.client;
        photosession.photographer = createPhotosessionDto.photographer;
  
        await this.photosessionRepository.save(photosession);
        return photosession;
      }  

      async updatePhotosession(id: number, updatedPhotosession: Photosession): Promise<Photosession> {
        const photosession = await this.getPhotosessionById(id);
  
        photosession.place = updatedPhotosession.place;
        photosession.date = updatedPhotosession.date;
        photosession.peopleAmount = updatedPhotosession.peopleAmount;
        photosession.client = updatedPhotosession.client;
        photosession.photographer = updatedPhotosession.photographer;
  
        await this.photosessionRepository.save(photosession);
        return photosession;
      }

      async deletePhotosession(id: number): Promise<void> {
        const result = await this.photosessionRepository.delete(id);
        console.log(result);
      }
}
