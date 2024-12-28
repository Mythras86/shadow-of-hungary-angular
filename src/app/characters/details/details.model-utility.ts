import { dnsUtil } from "./details.model-dns";

const dns = dnsUtil.map(x=>x.dns);

export const TIPUS = {
  text: 'text',
  number: 'number',
  color: 'color',
  date: 'date',
} as const;

export const detailsUtil: Array<detailsInterface> = [

  //nem módosítható jellemzők
  {
    nev: 'DNS',
    fcName:'dns',
    szerkesztes: false,
    megjegyzes:'Nem faj! Legfeljebb fajta te rasszista állat!',
    tipus: TIPUS.text,
    lista: [dns]
  },
  {
    nev: 'Születési nem',
    fcName:'szuletesiNem',
    szerkesztes: false,
    megjegyzes:'Nem? De! Vagy mit tudom én!?',
    tipus: TIPUS.text,
    lista: [
      'Nő',
      'Férfi',
      'Mindkettő',
      'Egyik sem',
      'Egyéb'
    ]
  },
  {
    nev: 'Születési dátum',
    fcName:'szuletesiDatum',
    szerkesztes: false,
    megjegyzes: 'Amikor megérkeztél ebbe a csodálatos sárgödörbe!',
    tipus: TIPUS.date,
  },
  {
    nev: 'Születési név',
    fcName:'szuletesiNev',
    szerkesztes: false,
    megjegyzes: 'Amit a sírodra vésnek, ha kisimultak az intenzív vonalaid...',
    tipus: TIPUS.text,
  },
  {
    nev: 'Életkor',
    fcName:'kor',
    szerkesztes: false,
    megjegyzes: 'Ezért a vénségért mennyit kapni a rabszolgapiacon?',
    tipus: TIPUS.date,
    egyseg: ' év'
  },
  {
    nev: 'Anyanyelv',
    fcName:'anyanyelv',
    szerkesztes: false,
    megjegyzes:'Kezdj el csicseregni, de ha kitolod, levágjuk...',
    tipus: TIPUS.text,
    lista: [
      'Magyar',
      'Angol',
      'Francia',
      'Orosz',
      'Japán',
      'Kínai',
      'Indiai',
      'Egyéb'
    ]
  },
  {
    nev: 'Különleges képességek',
    megjegyzes:'',
    szerkesztes: false,
    fcName:'kepessegek',
    tipus: TIPUS.text,
  },

  //módosítható jellemzők
  {
    nev: 'Aktuális dátum',
    fcName:'datum',
    szerkesztes: true,
    megjegyzes: 'Szerinted a jelenlegi életviteleddel meddig jutsz?',
    tipus: TIPUS.date,
  },
  {
    nev: 'Becenév/nevek',
    fcName:'becenev',
    szerkesztes: true,
    megjegyzes: 'Ahogy a haverok ismernek, már ha még élnek...',
    tipus: TIPUS.text,
  },
  {
    nev: 'Álnév/nevek',
    fcName:'alnev',
    szerkesztes: true,
    megjegyzes: 'Az alvilágban jobb, ha csak ezt ismerik...',
    tipus: TIPUS.text,
  },
  {
    nev: 'Testsúly',
    fcName:'testsuly',
    szerkesztes: true,
    megjegyzes: 'Szerinted lecsontozva mennyit ér a húsod?',
    tipus: TIPUS.number,
    egyseg: ' kg'
  },
  {
    nev: 'Magasság',
    fcName:'magassag',
    szerkesztes: true,
    megjegyzes: 'Ettől függ, hogy hokedlinek, vagy toronynak becéznek.',
    tipus: TIPUS.number,
    egyseg: ' cm'
  },
  {
    nev: 'Kedvenc szín',
    fcName:'kedvencszin',
    szerkesztes: true,
    megjegyzes: 'Mi a kedvenc színed? Barna? Nem, a kékááá...',
    tipus: TIPUS.color,
  },
  {
    nev: 'Testalkat',
    fcName:'testalkat',
    szerkesztes: true,
    megjegyzes: 'Ki a mellet, be a hasat, hadd mártom meg benned a vasat!',
    tipus: TIPUS.text,
  },
  {
    nev: 'Bőrszín',
    fcName:'borszin',
    szerkesztes: true,
    megjegyzes: 'Hidd el, lassan már senkit nem érdekel, kivéve ha ember vagy.',
    tipus: TIPUS.color,
    lista: []
  },
  {
    nev: 'Szemszín',
    fcName:'szemszin',
    szerkesztes: true,
    megjegyzes: 'Kék a szeme, arca csupa derű...',
    tipus: TIPUS.color,
    lista: []
  },
  {
    nev: 'Hajszín',
    fcName:'hajszin',
    szerkesztes: true,
    megjegyzes: 'Milyet szeretnél? Van egyáltalán saját hajad?',
    tipus: TIPUS.color,
    lista: []
  },
  {
    nev: 'Szőrzet szín',
    fcName:'szorszin',
    szerkesztes: true,
    megjegyzes: 'A hajat szokták festeni, de milyen színű a fa... famentes papír?',
    tipus: TIPUS.color,
    lista: []
  },
  {
    nev: 'Hajstílus',
    fcName:'hajstilus',
    szerkesztes: true,
    megjegyzes: 'Az Árnyak között is fontos a jó megjelenés!',
    tipus: TIPUS.text,
  },
  {
    nev: 'Félelem',
    fcName:'felelem',
    szerkesztes: true,
    megjegyzes: 'Mindenki fél valamitől...',
    tipus: TIPUS.text,
  },
  {
    nev: 'Ösztönző',
    fcName:'osztonzo',
    szerkesztes: true,
    megjegyzes: 'De van, ami képes bátorítani!',
    tipus: TIPUS.text,
  },
  {
    nev: 'Gyűlölet',
    fcName:'gyulolet',
    szerkesztes: true,
    megjegyzes: 'Ne a gyűlölet vezéreljen...',
    tipus: TIPUS.text,
  },
  {
    nev: 'Kedvenc',
    fcName:'kedvenc',
    szerkesztes: true,
    megjegyzes: 'Hanem az, ami boldoggá tesz!',
    tipus: TIPUS.text,
  },
  {
    nev: 'Írtózat',
    fcName:'irtozat',
    szerkesztes: true,
    megjegyzes: 'Lehet, hogy valamitől kifordul a beled...',
    tipus: TIPUS.text,
  },
  {
    nev: 'Vonzalom',
    fcName:'vonzalom',
    szerkesztes: true,
    megjegyzes: 'De ennek te sem tudsz ellenállni!',
    tipus: TIPUS.text,
  },
  {
    nev: 'Egyéb jellemzők, megjelenés',
    fcName:'megjelenes',
    szerkesztes: true,
    megjegyzes: 'Szakáll, smink, tetkó, meg ami a többi helyre nem fér el :)',
    tipus: TIPUS.text,
  },
];

export interface detailsInterface {
  nev: string,
  fcName: string,
  tipus: string,
  szerkesztes: boolean,
  megjegyzes: string,
  egyseg?: string,
  lista?: Array<any>
}

