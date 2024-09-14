import { Injectable } from '@nestjs/common';
import { Item } from './dto/items.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  findAll() {
    return 'This is ItemsService';
  }

  create(item: Item) {
    this.items.push(item);
    return item;
  }
}
