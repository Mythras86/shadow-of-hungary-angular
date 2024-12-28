import { Component, Input, OnInit } from '@angular/core';
import { detailsInterface } from '../details.model-utility';
import { DetailsService } from '../details.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  host: {
    '[class.editMode]': 'editMode',
    '(click)': 'editMode? "" : toggleSelect()',
  }
})
export class DetailComponent implements OnInit {

  constructor(
    public s: DetailsService,
  ) {
    this.detail = {
      nev: '',
      fcName: '',
      tipus: '',
      megjegyzes: '',
      egyseg: '',
      szerkesztes: false,
      lista: []
    }
    this.ertek = '';
    this.valasztottErtek = '';
  }

  @Input() detail: detailsInterface;
  @Input() control!: FormControl;

  ertek: string | number;
  valasztottErtek: string | number;
  editMode: boolean = false;
  selectedMe: boolean = false;

  toggleSelect(): void {
    if (this.s.selected == '' || this.s.selected !== this.detail.fcName) {
      this.s.selected = this.detail.fcName;
      this.selectedMe = true;
    } else {
      this.s.selected = '';
      this.selectedMe = false;
    }
  }

  toggleEdit(): void {
    this.editMode = !this.editMode;
    if (this.editMode) {
      document.body.classList.add('overflowHidden');
    } else {
      document.body.classList.remove('overflowHidden');
    }
  }

  onSave(): void {
    const control = this.s.getFc(this.detail.fcName);
    if (this.valasztottErtek !== '') {
      control.setValue(this.valasztottErtek);
    } else {
      control.setValue(this.ertek);
    }
    this.toggleEdit();
    this.toggleSelect();
  }

  cancel(): void {
    this.valasztottErtek = '';
    this.toggleEdit();
    this.toggleSelect();
  }

  selectOption(selected: string | number): void {
    this.valasztottErtek = selected;
  }

  getErtek(): string | number {
    const ertek = this.s.getFc(this.detail.fcName).value;
    return this.ertek = ertek;
  }

  ngOnInit(): void {
    this.s.detailsForm.get(this.detail.fcName)?.valueChanges.subscribe(
      ()=>this.getErtek()
    );
  }

}
