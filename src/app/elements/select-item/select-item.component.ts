import { Component, HostListener, Input } from '@angular/core';
import { SelectItemService } from './select-item.service';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrl: './select-item.component.css'
})
export class SelectItemComponent {

  constructor(
    public s: SelectItemService,
  ) {}

  @Input() selectedId: string = '';

  showSimple: boolean = true;

  @HostListener('click', ['$event']) onClick() {
    if (this.s.selected.includes(this.selectedId)) {
      this.s.selected = this.s.selected.filter(x=> x !== this.selectedId);
      this.showSimple = true;
    } else {
      this.s.selected.push(this.selectedId);
      this.showSimple = false;
    }
  }

}
