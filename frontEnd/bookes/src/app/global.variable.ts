import {Injectable} from '@angular/core';

@Injectable()
export class globalVariable{
    readonly baseAppUrl: string = 'http://localhost:1337/';
    // readonly baseAPIUrl: string = 'https://api.github.com/';
}