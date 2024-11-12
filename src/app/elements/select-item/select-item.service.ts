import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectItemService {

  constructor() { }

  selected: Array<string> = [];

  clearSelected() {
    this.selected = [];
  }
}
