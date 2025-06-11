import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
 
const newPages = [ 5, 4, 3, 2, 1 ];

const upperCaseMenuItems = [ 'Каталог', 'Стройматериалы ', 'Инструменты ', 'Электрика', 'Интерьер и одежда' ];

function menuItem (item: string) {
  return item
}

const headermMenuItem: string = menuItem('О компании')

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NgIf, NgFor ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  isShowCatalog = !false;
  isShowBanner = !false;
  isUpperCase = true;

  menuItems = upperCaseMenuItems;

  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase;
  }

  readonly aboutCompany = headermMenuItem;

  readonly headerItem1 = 'Главная';
  readonly headerItem3 = 'Каталог';

  readonly newPages = newPages;

}
