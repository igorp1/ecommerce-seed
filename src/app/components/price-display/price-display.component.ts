import { Component, OnInit, Input } from '@angular/core';
import { ContextService } from '../../services/context.service';

@Component({
  selector: 'price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.scss']
})
export class PriceDisplayComponent implements OnInit {

  @Input() price : number;
  @Input() salePrice : number;

  constructor(private _context : ContextService) { }

  ngOnInit() { }

}
