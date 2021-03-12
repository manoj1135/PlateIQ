import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  sub:string,
  quantity: number;
  unitPrice: string;
  total: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Gruyere-greyezer', sub:"Dairy 4410-6680", quantity: 3, unitPrice: '$1.00 unit', total:"$328.27"},
  {name: 'Gruyere-greyezer', sub:"Dairy 4410-6680", quantity: 3, unitPrice: '$1.00 unit', total:"$328.27"},
  {name: 'Gruyere-greyezer', sub:"Dairy 4410-6680", quantity: 3, unitPrice: '$1.00 unit', total:"$328.27"},
  {name: 'Gruyere-greyezer', sub:"Dairy 4410-6680", quantity: 3, unitPrice: '$1.00 unit', total:"$328.27"},
];
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})


export class VendorComponent implements OnInit {
  panelExpanded:boolean = false;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }
  

}
