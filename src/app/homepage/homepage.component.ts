import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

const newPages = [ 5, 4, 3, 2, 1 ];

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ NgFor, NgIf, RouterModule ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})

export class HomepageComponent {

  isShowBanner = !false;
  readonly newPages = newPages;

}
