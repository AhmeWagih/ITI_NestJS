import {
  IsString,
  IsUrl,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsArray,
} from 'class-validator';

export class CreateBookmark {

  @IsNotEmpty()
  @MinLength(2)
  @IsString()
  @MaxLength(50)
  title: string;

  @IsString()
  @MaxLength(200)
  description?: string;

  @IsUrl()
  url: string;

  @IsArray()
  tags?: string[];
}
