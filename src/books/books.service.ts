import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  create(createBookDto: CreateBookDto) {
    const book = { ...createBookDto, id: randomUUID() };

    this.books.push(book);

    return book;
  }

  findAll() {
    return this.books;
  }

  findOne(id: string) {
    return this.books.find((item) => item.id === id);
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    const book = this.findOne(id);

    book.name = updateBookDto.name ?? book.name;

    book.author = updateBookDto.author ?? book.author;
  }

  remove(id: string) {
    this.books = this.books.filter((item) => item.id === id);
  }
}
