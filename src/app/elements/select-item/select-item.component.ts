import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { SelectItemService } from './select-item.service';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrl: './select-item.component.scss'
})
export class SelectItemComponent implements OnInit {

  constructor(
    public s: SelectItemService,
  ) {
    this.componentClass = ''
  }

  @HostBinding('className') componentClass: string;
  @Input() selectedId: string = '';
  @Input() arrowBefore: boolean = false;
  @Input() arrowColor: string = 'cteal';

  serviceId: string = '';
  showSimple: boolean = true;

  @HostListener('click', ['$event']) onClick() {
    if (this.selectedId == this.serviceId) {
      this.s.updateSelected('');
    } else {
      this.s.updateSelected(this.selectedId);
    }
  }

  changeState():void {
    if (this.serviceId == this.selectedId) {
      this.showSimple = false;
      this.componentClass = 'selected';
    } else {
      this.showSimple = true;
      this.componentClass = '';
    }
  }

  ngOnInit(): void {
    this.s.selected.subscribe(x=> {
      this.serviceId = x,
      this.changeState()
    });
  }

}
