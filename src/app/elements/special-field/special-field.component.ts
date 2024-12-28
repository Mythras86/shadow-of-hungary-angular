import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-field',
  templateUrl: './special-field.component.html',
  styleUrls: ['./special-field.component.scss']
})
export class SpecialFieldComponent implements OnInit {

  constructor() {
    this.fieldsUtil = [
      {nev: 'karma', egyseg: '&#x262F;', hatter: 'bg-purple'},
      {nev: 'toke', egyseg: 'N&#165;', hatter: 'bg-orange'},
      {nev: 'esszencia', egyseg: '&#8364;', hatter: 'bg-grey'},
      {nev: 'pancel', egyseg: '&#9820;', hatter: 'bg-blue'},
      {nev: 'szint', egyseg: '&starf;', hatter: 'bg-green'},
      {nev: 'sebzes', egyseg: '&#9876;', hatter: 'bg-red'},
      {nev: 'suly', egyseg: 'Kg', hatter: 'bg-grey'},
      {nev: 'akcio', egyseg: 'AP', hatter: 'bg-orange'},
    ];
  }

  @Input() ertek: any;
  @Input() tipus: string = '';
  @Input() egyeniEgyseg: any;
  @Input() egyeniSzin: string = '';

  @HostBinding('className') color: string = 'color-white bg-black-teal';

  fieldsUtil: Array<any> = [];

  egyseg: any = '';

  getEgyseg(): void {
    if (this.egyeniEgyseg == '') {
      this.egyseg = this.egyeniEgyseg;
    } else {
      const egysegByTipus = this.fieldsUtil.filter(x=> x.nev == this.tipus).map(x=> x.egyseg)[0];
      this.egyseg = egysegByTipus;
    }
  }

  getSzin(tipus: string): string {
    const hatter = this.fieldsUtil.filter(x=> x.nev == tipus).map(x=> x.hatter)[0];
    return hatter;
  }

  ngOnInit(): void {
    this.getEgyseg();
    this.color = 'color-white ' + this.getSzin(this.tipus);
  }

}
