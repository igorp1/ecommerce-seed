import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product/product.component';
import { ITableMetadata } from '../../components/table/table.component';
import { Router } from '@angular/router';

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
    private router : Router
  ) { }

  ngOnInit() {
    this.loadProducts()
  }

  loadProducts(){
    this.productList = [
      {id: '0', slug:'peace-incense', description:'hola', quantity:0, stockQuantity:10, categories:[], name:'Peace Freedom Vitality Sandalwood Incense', images:['https://images.urbanoutfitters.com/is/image/UrbanOutfitters/43797539_070_b?$xlarge$&hei=900&qlt=80&fit=constrain'], price: 20, salePrice: 15},
      {id: '0', slug:'sometsuke-bowl', description:'hola', quantity:0, stockQuantity:0, categories:[], name:'Sometsuke Bowl', images:['http://www.japanpotterynet.com/en/upload/save_image/0030276.jpg'], price: 20, salePrice: 15},
      {id: '0', slug:'gyutou-knife', description:'hola', quantity:0, stockQuantity:10, categories:[], name:'Gyutou Knife', images:['https://www.teruyasu.net/products/pcategorym/deba_s.jpg'], price: 100},
      {id: '0', slug:'pocky', description:'hola', quantity:0, stockQuantity:10, categories:[], name:'Pocky', images:['https://www.blippo.com/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/0/20130315_125_1.jpg'], price: 10},
    ]
  }

  rowSelected(rowObject : IProduct){
    this.router.navigateByUrl(`admin/inventory/${rowObject.slug}`);
  }

}
