import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BannerComponent } from '../../+components/banner/banner.component';
import { Product3dComponent } from '../../+components/product3d/product3d.component';
import { NormalproductComponent } from '../../+components/normalproduct/normalproduct.component';
import { LineComponent } from '../../+components/line/line.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,
    RouterLink ,
    BannerComponent,
    Product3dComponent,
    NormalproductComponent,
    LineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
