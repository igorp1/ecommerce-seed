export interface IRange {
    min? : number,
    max? : number
}

export interface IDateRange {
    begin? : string;
    end? : string;
}

export function rangeToArray (range : IRange ) : Array<number>{
    return [range.min, range.max]; // could be null too.
} 