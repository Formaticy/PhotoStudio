import { config } from "dotenv";
config();

const CONNECTION = {
    type: 'postgres', //тип подключаемой БД
    port: process.env.DATABASE_PORT, //порт
    username: process.env.DATABASE_USER, //имя пользователя
    password: process.env.DATABASE_PASS, //пароль
    host: process.env.DATABASE_HOST, //хост, в нашем случае БД развернута локально
    database: process.env.DATABASE_NAME,
}

export default CONNECTION;