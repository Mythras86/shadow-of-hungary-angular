import { Component, OnInit } from '@angular/core';
import { DetailsService } from './details.service';
import { detailsInterface, detailsUtil } from './details.model-utility';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    public s: DetailsService,
  ) { }

  detailsUtil: Array<detailsInterface> = detailsUtil;
  alapJellemzok: boolean = true;
  kepessegek: Array<string> = [];

  ngOnInit(): void {
  }

}
