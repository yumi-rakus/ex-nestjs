import { Module } from '@nestjs/common';

// このアプリのルートモジュール
// importsの配列の中に他のmoduleを入れると別のmoduleをimportすることが可能
@Module({
  imports: [],
})
export class AppModule {}
