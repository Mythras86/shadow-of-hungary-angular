import { Component, OnInit } from '@angular/core';
import {ResourcesService } from './resources.service';
import { ModalService } from 'src/app/elements/modals/modal.service';
import { LevelcontrolComponent } from 'src/app/elements/levelcontrol/levelcontrol.component';
import { resUtil, resInterface, exchangeResUtil } from './resources-utility';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor(
    public s: ResourcesService,
    private modalS: ModalService,
  ) {
    this.resUtil = resUtil;
    this.resTipusok = [...new Set(resUtil.map(x=>x.tipus))];
    this.szabadKarma = s.getSzabadEroforras('karma');
    this.szabadToke = s.getSzabadEroforras('toke');
  }

  resTipusok: Array<string> = [];
  resUtil: Array<resInterface> = [];
  szabadKarma: number = 0;
  szabadToke: number = 0;


  exchange(tipus: string):void {
    let exCh;
    exCh = exchangeResUtil.filter(x=> x.tipus == tipus)[0];

    this.modalS.openModal(LevelcontrolComponent, {
      fejlec: exCh.fejlec,
      megjegyzes: exCh.megjegyzes,
      lepes: exCh.lepes,
      valto: exCh.valto,
      tokeKtsg: exCh.tokeKtsg,
      karmaKtsg: exCh.karmaKtsg,
      esszKtsg: exCh.esszKtsg,
      celErtek: this.s.getSzabadEroforras(exCh.celErtek),
      egyseg: exCh.lepes,
      minErtek: exCh.lepes,
      maxErtek: this.s.getSzabadEroforras(exCh.maxErtek),
    }).subscribe(
      w => this.updateRes(w, tipus)
    );
  }

  updateRes(valtozas: number, tipus: string): void {
    if (tipus == 'karma') {
      // kifizetés
      this.s.payToke(valtozas*7500);
      // értékszerzés
      this.s.getKarma(valtozas);
    }
    if (tipus == 'toke') {
      // kifizetés
      this.s.payKarma(valtozas);
      // értékszerzés
      this.s.getToke(valtozas*7500);
    }
    return
  }

  ngOnInit(): void {
    this.s.resourcesForm.valueChanges.subscribe(
      ()=> {
        this.szabadKarma = this.s.getSzabadEroforras('karma'),
        this.szabadToke = this.s.getSzabadEroforras('toke')
      }
    )
  }
}
