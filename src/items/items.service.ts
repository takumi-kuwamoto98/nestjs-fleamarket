import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './dto/items.model';
import { CreateItemDto } from './dto/create-item.dto';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class ItemsService {
  private items: Item[] = [];
  findAll(): Item[] {
    return this.items;
  }

  findById(id: string): Item {
    const found = this.items.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  create(createItemDto: CreateItemDto): Item {
    const item: Item = { id: uuidv4(), ...createItemDto, status: 'ON_SALE' };
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
