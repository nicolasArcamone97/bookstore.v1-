import * as dotenv from 'dotenv'
import { SnakeNamingStrategy } from 'typeorm-snake-naming-strategy'

// import { SnakeNamingStrategy } from 'typeorm-snake-naming-strategy'  error con este packete

dotenv.config()

export const dbConfig = {
    type:'mysql' as any,
      host:'localhost',
      port:3306,
      username: 'root',
      password: '',
      database: 'api_v3',
      autoLoadEntities:true,
      synchronize: true,
      migrations: [],
      migrationsRun: true
}
