import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
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
}
