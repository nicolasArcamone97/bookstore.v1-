import * as dotenv from 'dotenv'
import { SnakeNamingStrategy } from 'typeorm-snake-naming-strategy'

// import { SnakeNamingStrategy } from 'typeorm-snake-naming-strategy'  error con este packete

dotenv.config()

export const dbConfig = {
    type:'mysql' as any,
      host:process.env.DB_HOST,
      port:Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities:true,
      synchronize: true,
      migrations: [],
      migrationsRun: true
}