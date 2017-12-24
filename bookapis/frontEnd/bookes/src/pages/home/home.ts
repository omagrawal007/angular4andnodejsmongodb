import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookServices } from '../../app/services/HttpServices/BooksServices';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[BookServices]
})
export class HomePage implements OnInit {
  constructor(public navCtrl: NavController, public bookservices:BookServices) {

    // console.log("bookservices.....",bookservices);
  }
  bookList=[];
  ngOnInit() {

    console.log(this.bookservices);
    
    var getResult=this.bookservices.getBookList().subscribe(bookResponse=>this.bookList=bookResponse);


    console.log('ngOnInit fired',getResult);
  }
  

  


}
