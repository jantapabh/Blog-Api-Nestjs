//database connection

import { Injectable } from '@nestjs/common'
import  {} from '@nestjs/common'
import { TypeOrmConnectionFactory, TypeOrmModule, TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'


@Injectable()
export class DatabaseConnectionServec implements TypeOrmOptionsFactory{

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            name: "default",
            type: 'postgres',
            host: process.env.DATABASR_HOST,
            port: Number(process.env.DATABASR_PORT),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_DB,
            synchronize: true,
            dropSchema: false,
            logging: true,
            entities: ['dist/**/*.entity.js'],
        }
    }
}