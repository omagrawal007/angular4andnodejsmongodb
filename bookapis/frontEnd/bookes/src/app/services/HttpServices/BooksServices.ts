import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import { globalVariable } from '../../global.variable';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';  // we need to import this now
// baseAppUrl
@Injectable()
export class BookServices {
    // , private globalVariable:globalVariable
    constructor(private _http: Http,private globalVariable:globalVariable) { };    
    getBookList = function () {  
        return this._http.get(this.globalVariable.baseAppUrl)
            .map(data => {                
                console.log("I CAN SEE DATA HERE: ", data.json());
                return data.json();
            },error=>{

                console.log(error);
            });
    };
}