import { Injectable } from '@nestjs/common';

// このデコレータでproviderとして認識される。
// そして、controllerのconstructorからDIされる。
@Injectable()
export class AppService {
  // メソッド名はなんでもいい。controllerで指定した名前と違ってもいい。（同じにした方が分かりやすい）
  getHello(): string {
    return 'Hello World!';
  }
}
