import { Injectable } from '@nestjs/common';
import { Item } from './dto/items.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  findAll(): Item[] {
    return this.items;
  }

  findById(id: string): Item {
    return this.items.find((item) => item.id === id);
  }

  create(item: Item) {
    this.items.push(item);
    return item;
  }

  updateStatus(id: string): Item {
    const item = this.findById(id);
    item.status = 'SOLD_OUT';
    return item;
  }

  delete(id: string) {
    const item = this.items.filter((item) => item.id !== id);
    this.items = item;
  }
}
