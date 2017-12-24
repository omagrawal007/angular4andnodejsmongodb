import {Injectable} from '@angular/core';

@Injectable()
export class globalVariable{
    readonly baseAppUrl: string = 'https://api.github.com/users/seeschweiler';
    // readonly baseAPIUrl: string = 'https://api.github.com/';
}