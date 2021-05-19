import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

// このアプリのルートモジュール
// importsの配列の中に他のmoduleを入れると別のmoduleをimportすることが可能
@Module({
  imports: [
    TasksModule,

    // TypeORM … TypeScriptで記述できるORMapper
    TypeOrmModule.forRoot({
      type: 'postgres', // DBの種類
      port: 5432, // 使用ポート
      database: 'todoapp', // データベース名
      host: 'localhost', // DBホスト名
      username: 'postgres', // DBユーザ名
      password: 'postgres', // DBパスワード
      synchronize: true, // モデル同期（trueで同期）
      entities: [__dirname + '/**/*.entity.{js, ts}'], // ロードするエンティティ
    }),
  ],
})
export class AppModule {}
