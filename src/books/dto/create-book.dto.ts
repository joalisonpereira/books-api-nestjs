import { OmitType } from '@nestjs/mapped-types';
import { Book } from '../entities/book.entity';

export class CreateBookDto extends OmitType(Book, ['id']) {}
