import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-profile0',
  templateUrl: './profile0.component.html',
  styleUrls: ['./profile0.component.css']
})
export class Profile0Component implements OnInit {
miPortfolio: any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {console.log(data)});
    this.miPortfolio="data";
  }
}
