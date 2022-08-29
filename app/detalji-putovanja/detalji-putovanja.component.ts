import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Putovanje, putovanja } from '../putovanja';
import { CartService } from '../services/cart.service';



@Component({
  selector: 'app-detalji-putovanja',
  templateUrl: './detalji-putovanja.component.html',
  styleUrls: ['./detalji-putovanja.component.scss']
})
export class DetaljiPutovanjaComponent implements OnInit {

  putovanje: Putovanje | undefined;
  
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const putovanjeIdFromRoute = Number(routeParams.get('putovanjeId'));

    this.putovanje = putovanja.find(putovanje => putovanje.id === putovanjeIdFromRoute);
  }

  addToCart(putovanje: any){
    this.cartService.addToCart(putovanje);
    window.alert('Putovanje je dodato u korpu!')
  } 

  

}
