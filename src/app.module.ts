import { Module } from '@nestjs/common';
// import { TasksModule } from './tasks/tasks.module';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeormConfigService } from '../config/typeorm-config.service';

// このアプリのルートモジュール
// importsの配列の中に他のmoduleを入れると別のmoduleをimportすることが可能
@Module({
  imports: [
    /**
     * env読み込み
     * 環境変数 NODE_ENV の値によって読み込むファイルを切り替える。
     * default.envは後続で呼ばれる。同じ変数がある場合は先に定義されているものが優先される。
     */
    ConfigModule.forRoot({
      envFilePath: [`.env/${process.env.NODE_ENV}.env`, '.env/default.env'],
      isGlobal: true,
    }),

    // TypeORM … TypeScriptで記述できるORMapper
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeormConfigService,
    }),

    TasksModule,
  ],
})
export class AppModule {}
