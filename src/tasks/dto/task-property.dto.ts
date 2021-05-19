import { IsNotEmpty } from 'class-validator';

export class TaskPropertyDto {
  // '', null, undefinedを受け入れない
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
