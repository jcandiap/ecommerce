import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CarsModule } from './cars/cars.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [ProductsModule, CarsModule, UsersModule, OrdersModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
