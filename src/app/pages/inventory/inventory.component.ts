import { Component, OnInit } from '@angular/core';
import { ITableMetadata } from '../../components/table/table.component';
import { Router } from '@angular/router';
import { ContextService } from '../../services/context.service';
import { IProduct } from '../../models/product.models';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  productList : IProduct[];

  tableMeta : ITableMetadata = {
    columns: [
      {name:'name', dataType:'text', title:'Product' },
      {name:'stockQuantity', dataType:'text', title:'In Stock' },
      {name:'price', dataType:'money', title:'Price' },
    ]
  }

  constructor(
    private router : Router,
    private _context : ContextService
  ) { }

  ngOnInit() {
    this.loadProducts()
  }

  loadProducts(){
    this.productList = [];
    this._context.getProductInventory((inventory) => {
      this.productList = inventory;
    })
  }

  rowSelected(rowObject : IProduct){
    this.router.navigateByUrl(`admin/inventory/${rowObject.slug}`);
  }

}
