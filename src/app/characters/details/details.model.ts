import { AbstractControl, FormGroup } from "@angular/forms";

export interface DetailsModel {
  //alapjellemzők
  dns:string,
  szuletesiNev: string,
  szuletesiDatum: Date,
  szuletesiNem: string,
  anyanyelv: string,
  //szöveges
  becenev:string,
  alnev:string,
  testalkat:string,
  hajstilus:string,
  //értékválasztó
  magassag:number,
  testsuly:number,
  //szín
  szemszin:string,
  hajszin:string,
  szorszin:string,
  borszin:string,
  kedvencszin:string,
  // hosszú szöveg
  felelem:string,
  osztonzo:string,
  gyulolet:string,
  kedvenc:string,
  irtozat:string,
  vonzalom:string,
  megjelenes:string,
};

export interface DetailsFG extends FormGroup {
  value: DetailsModel;
  controls: {
    //alapjellemzők
    dns:AbstractControl,
    szuletesiNem: AbstractControl,
    szuletesiDatum:AbstractControl,
    szuletesiNev: AbstractControl,
    anyanyelv: AbstractControl,
    //szöveges
    becenev:AbstractControl,
    alnev:AbstractControl,
    testalkat:AbstractControl,
    hajstilus:AbstractControl,
    //értékválasztó
    magassag:AbstractControl,
    testsuly:AbstractControl,
    //szín
    szemszin:AbstractControl,
    hajszin:AbstractControl,
    szorszin:AbstractControl,
    borszin:AbstractControl,
    kedvencszin:AbstractControl,
    // hosszú szöveg
    felelem:AbstractControl,
    osztonzo:AbstractControl,
    gyulolet:AbstractControl,
    kedvenc:AbstractControl,
    irtozat:AbstractControl,
    vonzalom:AbstractControl,
    megjelenes:AbstractControl,
  }
}
