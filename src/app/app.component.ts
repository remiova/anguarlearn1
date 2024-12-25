import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuComponent } from './+components/menu/menu.component';
import { FooterComponent } from './+components/footer/footer.component';
import { BannerComponent } from './+components/banner/banner.component';
import { LineComponent } from './+components/line/line.component';
// import * as THREE from '@angular/animations'

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenuComponent,
    FooterComponent,
    BannerComponent,
    LineComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project1';
}
