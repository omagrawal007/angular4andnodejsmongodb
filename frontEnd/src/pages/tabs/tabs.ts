import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { books } from '../book/books.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  constructor() {

  }
  tab1Root = HomePage;
  // tab2Root = AboutPage;
  // tab3Root = ContactPage;
  tab4Root = books;


}
