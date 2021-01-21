import { BaseModel } from './baseModel';

export class Label extends BaseModel{

    title : string;
    color : string;

    constructor(title : string, color? : string ){
        super();
        this.title = title;
        this.color = color;
    }
}