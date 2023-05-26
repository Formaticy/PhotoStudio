import { HttpException, HttpStatus } from "@nestjs/common";

export class ClientNotFoundException extends HttpException {
    constructor(msg?: string, status?: HttpStatus) {
        super(msg || 'Client Not Found', status || HttpStatus.NOT_FOUND);

    }
}