import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

const upperCaseMenuItems = [ 'Каталог', 'Стройматериалы ', 'Инструменты ', 'Электрика', 'Интерьер и одежда' ];

function menuItem (item: string) {
  return item
}

const headermMenuItem: string = menuItem('О компании')

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ NgFor, NgIf, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isShowCatalog = !false;
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

}
