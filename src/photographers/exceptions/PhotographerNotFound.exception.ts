import { HttpException, HttpStatus } from "@nestjs/common";

export class PhotographerNotFoundException extends HttpException {
    constructor(msg?: string, status?: HttpStatus) {
        super(msg || 'Photographer Not Found', status || HttpStatus.NOT_FOUND);

    }
}