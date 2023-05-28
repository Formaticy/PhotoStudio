import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements
ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const request = context.getRequest<Request>();
        const response = context.getResponse<Response>();

        response.send(
            // status: exception.getStatus(),
            exception.getResponse(), //ВЫБИРАЕМ КАК БУДУТ ОТОБРАЖАТЬСЯ ВСЕ ИСКЛЮЧЕНИЯ (НИЖЕ ВТОРОЙ ВАРИАНТ)
        );

        // response.sendStatus(exception.getStatus());
    }
}