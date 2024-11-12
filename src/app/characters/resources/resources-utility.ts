export const resUtil: Array<resInterface> = [
  {tipus: 'karma', nev: 'Alap Karma', fcName: 'alapKarma'},
  {tipus: 'karma', nev: 'Szerzett Karma', fcName: 'szerzettKarma'},
  {tipus: 'karma', nev: 'Elköltött Karma', fcName: 'elkoltottKarma'},
  {tipus: 'toke', nev: 'Alap Tőke', fcName: 'alapToke'},
  {tipus: 'toke', nev: 'Szerzett Tőke', fcName: 'szerzettToke'},
  {tipus: 'toke', nev: 'Elköltött Tőke', fcName: 'elkoltottToke'},
];

export interface resInterface {
  tipus: string,
  nev: string,
  fcName: string,
}

export const exchangeResUtil : Array<exchangeInterface> = [
  {
    tipus: 'karma',
    fejlec: 'Karmából Tőke vásárlás',
    megjegyzes: 'K 1 => 7500 NY',
    lepes: 10,
    valto: 7500,
    tokeKtsg: 0,
    karmaKtsg: 1,
    esszKtsg: 0,
    celErtek: 'toke',
    egyseg: 'NY',
    minErtek: 0,
    maxErtek: 'karma',
  },
  {
    tipus: 'toke',
    fejlec: 'Tőkéből Karma vásárlás',
    megjegyzes: '7500 NY => K 1',
    lepes: 10,
    valto: 1,
    tokeKtsg: 7500,
    karmaKtsg: 0,
    esszKtsg: 0,
    celErtek: 'karma',
    egyseg: 'K',
    minErtek: 0,
    maxErtek: 'toke',
  }
];

export interface exchangeInterface {
  tipus: string,
  fejlec: string,
  megjegyzes: string,
  lepes: number,
  valto: number,
  tokeKtsg: number,
  karmaKtsg: number,
  esszKtsg: number,
  celErtek: string,
  egyseg: string,
  minErtek: number,
  maxErtek: string,
}

