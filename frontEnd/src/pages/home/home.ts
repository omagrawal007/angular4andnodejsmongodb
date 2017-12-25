import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BookStories} from '../books/storieslist';
import { BookServices } from '../../app/services/HttpServices/BooksServices';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[BookServices]
})
export class HomePage implements OnInit {
  constructor(public navCtrl: NavController, public bookservices:BookServices) {}
  bookList=[];
  ngOnInit() {
    this.bookservices.getBookList().subscribe(bookResponse=>this.bookList=bookResponse);
  }

  getBooks=function(bookInfo){        
    this.navCtrl.push(BookStories,{id:bookInfo.id});
  }

  // doRefresh(refresher){
  //   alert(123);
  //   setTimeout(() => {
  //     console.log('Async operation has ended');
  //     refresher.complete();
  //   }, 2000);
  // }
}
