import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule globally available
      envFilePath: '.env' // Load the database config
    }),
    MongooseModule.forRoot(`mongodb://localhost:27017`, {
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
      dbName: process.env.DB_NAME,
    }),
    ProductsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

//  Instant db
// MongooseModule.forRoot(`mongodb://localhost:27017`,{
//   user: 'root',
//   pass: '1234',
//   dbName: 'mongotest'
// }),

//  .ENV config file Version Still not good enough

// import databaseConfig from './config/database.config'
// import { ConfigModule,ConfigService } from '@nestjs/config';

// ConfigModule.forRoot({
//   isGlobal: true, // Makes ConfigModule globally available
//   load: [databaseConfig], // Load the database config
// }),
// MongooseModule.forRootAsync({
//   imports: [ConfigModule],
//   useFactory: async (configService: ConfigService) => ({
//     uri: configService.get<string>('database.uri'), // Get URI from the config file
//     user: configService.get<string>('database.user'),
//     pass: configService.get<string>('database.pass'),
//     name: configService.get<string>('database.name'),
//   }),
//   inject: [ConfigService],
// }),