import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SelectItemService {

  constructor() { }

  selected = new BehaviorSubject('');

  updateSelected(value: any): void {
    this.selected.next(value);
  }

}
