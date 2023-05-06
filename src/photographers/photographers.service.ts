import { Injectable, NotFoundException } from '@nestjs/common';
import { Photographer } from './photographer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotographerRepository } from './photographer.repository';
import { IncompletePhotographerDto } from './dto/incomplete-photographer.dto';
import { CreatePhotographerDto } from './dto/create-photographer.dto';

@Injectable()
export class PhotographersService {
    constructor(
        @InjectRepository(Photographer)
        private readonly photographerRepository: PhotographerRepository
    ) {}

    async getPhotographerById(id: number): Promise<Photographer> {
        const found = await this.photographerRepository.findOne({
            where: { id },
            relations: { photosessions: true }
        })

        if (! found) {
            throw new NotFoundException(`Photographer with ID = ${id} not found`); 
          }
    
          return found;
    }

    async findAllPhotographers(): Promise<Photographer[]> {
        const photographers = await this.photographerRepository.find({
            relations: { photosessions: true }
        })

        if (! photographers) {
            throw new NotFoundException(`Photographers are not found`); 
          }
    
          return photographers;
    }

    async findIncompletePhotographers(): Promise<IncompletePhotographerDto[]> {
        const photographers = await this.photographerRepository.find();
        const incompletePhotographersDto: IncompletePhotographerDto[] = photographers.map((photographer) => {
          const incompletePhotographerDto = new IncompletePhotographerDto();
          incompletePhotographerDto.firstname = photographer.firstname;
          incompletePhotographerDto.lastname = photographer.lastname;
          incompletePhotographerDto.phone = photographer.phone;
  
          return incompletePhotographerDto;
        })
  
        return incompletePhotographersDto;
      } 

      async createPhotographer(createPhotographerDto: CreatePhotographerDto): Promise<Photographer> {
        const photographer = this.photographerRepository.create();
        
        photographer.firstname = createPhotographerDto.firstname;
        photographer.lastname = createPhotographerDto.lastname;
        photographer.phone = createPhotographerDto.phone;
        photographer.birthday = createPhotographerDto.birthday;
  
        await this.photographerRepository.save(photographer);
        return photographer;
      }  

      async updatePhotographer(id: number, updatedPhotographer: Photographer): Promise<Photographer> {
        const photographer = await this.getPhotographerById(id);
  
        photographer.firstname = updatedPhotographer.firstname;
        photographer.lastname = updatedPhotographer.lastname;
        photographer.phone = updatedPhotographer.phone;
        photographer.birthday = updatedPhotographer.birthday;
        photographer.photosessions = updatedPhotographer.photosessions;
  
        await this.photographerRepository.save(photographer);
        return photographer;
      }

      async deletePhotographer(id: number): Promise<void> {
        const result = await this.photographerRepository.delete(id);
        console.log(result);
      }
}
