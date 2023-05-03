import CONNECTION from "./db.connection"
import { DataSource } from "typeorm"

// @ts-ignore
const AppDataSource = new DataSource({
    ...CONNECTION,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['src/migrations/*{.ts,.js}'],
    logging: true,
    synchronize: false
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default AppDataSource;