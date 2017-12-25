import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { books } from '../book/books.component';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  constructor() {

  }
  tab1Root = HomePage;
  tab4Root = books;
}
