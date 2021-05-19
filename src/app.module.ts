import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

// このアプリのルートモジュール
// importsの配列の中に他のmoduleを入れると別のmoduleをimportすることが可能
@Module({
  imports: [TasksModule],
})
export class AppModule {}
