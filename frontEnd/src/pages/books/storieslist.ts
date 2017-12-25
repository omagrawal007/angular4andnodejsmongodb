import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

import {} from '';
import { from } from 'rxjs/observable/from';
@Component({

    templateUrl: 'storieslist.html'

})
export class BookStories implements OnInit {
    constructor(private navparam: NavParams) { }
    bookId: string;
    ngOnInit() {
        this.bookId = this.navparam.get('id');
        alert(this.bookId);
    }
}