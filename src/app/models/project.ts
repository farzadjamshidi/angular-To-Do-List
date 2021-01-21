import { BaseModel } from './baseModel';

export class Project extends BaseModel{

    title : string;

    constructor(title : string){
        super();
        this.title = title;
    }
}