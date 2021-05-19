// statusに関するパイプ機能
import { BadRequestException, PipeTransform } from '@nestjs/common';

// PipeTransformを継承することによって検証機能をもつパイプを自ら作成することができる
export class TaskStatusPipe implements PipeTransform {
  readonly allowStatus = ['OPEN', 'PROGRESS', 'DONE'];

  transform(value: any): any {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException();
    }

    return value;
  }

  // statusが'OPEN', 'PROGRESS', 'DONE' のいずれかでないとエラーを返す
  private isStatusValid(status: any) {
    const result = this.allowStatus.indexOf(status);
    return result !== -1;
  }
}
