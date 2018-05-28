import { ISimpleProduct } from "./product.models";
import { IRange, IDateRange } from "./common.models";

export interface IOrder{
    id: string;
    userID : string;
    amount : number;
    products : Array<ISimpleProduct>;
    date : string;
    status : 'ordered' | 'shipping' | 'delivered' | 'completed';
}

export interface IOrderFilter{
    amountRange? : IRange;
    userID? :string;
    userEmail? : string;
    dateRange? : IDateRange;
    sortBy? : 'date' | 'amount' | 'userEmail';
}