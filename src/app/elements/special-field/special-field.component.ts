import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-field',
  templateUrl: './special-field.component.html',
  styleUrls: ['./special-field.component.scss']
})
export class SpecialFieldComponent implements OnInit {

  constructor() {
    this.fieldsUtil = [
      {nev: 'karma', egyseg: '&#x262F;'},
      {nev: 'toke', egyseg: 'N&#165;'},
      {nev: 'esszencia', egyseg: '&#8364;'},
      {nev: 'pancel', egyseg: '&#9820;'},
      {nev: 'szint', egyseg: '&starf;'},
      {nev: 'sebzes', egyseg: '&#9876;'},
      {nev: 'suly', egyseg: 'Kg'},
      {nev: 'akcio', egyseg: 'AP'},
    ];
  }

  @Input() ertek: any;
  @Input() tipus: string = '';
  @Input() egyeniEgyseg: any;
  @Input() egyeniSzin: string = '';

  @HostBinding('className') color: string = 'cwhite bg-black-teal';

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

  ngOnInit(): void {
    this.getEgyseg();
    this.color = 'cwhite ' + this.tipus;
  }

}
