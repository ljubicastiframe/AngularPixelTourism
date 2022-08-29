import { Component, OnInit } from '@angular/core';
import { putovanja } from '../putovanja';
import { CartService } from '../services/cart.service';



@Component({
  selector: 'app-lista-putovanja',
  templateUrl: './lista-putovanja.component.html',
  styleUrls: ['./lista-putovanja.component.scss']
})

export class ListaPutovanjaComponent implements OnInit {

  putovanja: any = putovanja;

  searchKey:string ="";
  public searchTerm : string = '';
  constructor(private cartService : CartService) { }

  ngOnInit(): void {

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  

  


}
