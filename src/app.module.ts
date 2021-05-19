import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// このアプリのルートモジュール
// importsの配列の中に他のmoduleを入れると別のmoduleをimportすることが可能
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
