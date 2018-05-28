
export interface ImageForDisplay{
    imageUrl : string,
    displayType? : 'cover' | 'contain'
  }

export interface ISimpleProduct{
  id : string;
  slug : string;
  name : string;
  thumbnail : ImageForDisplay;
}

export interface IProduct{
    id : string;
    slug : string;
  
    name : string;
    price : number;
    salePrice? : number;
    images : Array<ImageForDisplay>;
    description : string;
    categories : string[];
  
    quantity : number;
    quantityLimit? : number;
    stockQuantity : number;
  }
  
  export class Product implements IProduct {
  
    id : string;
    slug : string;
  
    name : string;
    price : number;
    salePrice : number;
    images : Array<ImageForDisplay> = new Array<ImageForDisplay>();
    description : string;
    categories : string[];
  
    quantity : number = 0;
    quantityLimit : number;
    stockQuantity : number = 10;
  
    canPlusQuantity(){
      return this.quantityLimit === this.quantity ||
              this.stockQuantity === this.quantity;
    }
    plusQuantity(){
      if(this.canPlusQuantity()){ return; }
      this.quantity += 1;
    }
  
    canMinusQuantity(){
      return this.quantity === 0;
    }
    minusQuantity(){
      if(this.canMinusQuantity()){ return; }
      this.quantity -= 1;
    }
  
  
  }

  export interface ProductFilter{
    categories? : Array<string>;
    priceRange? : Array<number>;
    sortBy? : 'low-price' | 'high-price' | 'newest' | 'popular';
  }