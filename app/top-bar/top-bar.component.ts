import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import { CartService } from '../services/cart.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  profileOpened: boolean = false;

  constructor(private cartService: CartService, public userService: UserService, private dialog: MatDialog) { }

  openProfile(userId: number){
    this.profileOpened = true;

    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: "30vw",
      data: {user: this.userService.getUserById(userId)}
    });

    profileDialog.afterClosed().subscribe(result => {
      this.profileOpened = false;
    })
  }

  ngOnInit(): void {
  }

  itemCount(){
    return this.cartService.itemsCount();
  }

}
