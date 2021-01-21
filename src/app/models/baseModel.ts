import { v4 as uuidv4 } from 'uuid';

export class BaseModel {

    id : string;  
    createAt : Date;

    constructor(){
        
        this.id = uuidv4();

        this.createAt = new Date();       
    }
}