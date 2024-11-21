import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(
    private authService: AuthService,
    ) { }

    felhasznalo: string = 'te kis halvány bocifing :p';
    showMenu: boolean = false;

    userIsAuthenticated = false;
    private authListenerSubs!: Subscription;

    onLogout() {
      this.authService.logoutUser();
    }

    setFelhasznalo(): void {
      this.felhasznalo = this.authService.getUserName();
    }

    toggleMenu(): void {
      this.showMenu = !this.showMenu;
    }

    ngOnInit(): void {
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated,
        this.setFelhasznalo();
      });
    }

    ngOnDestroy(): void {
      this.authListenerSubs.unsubscribe();
    }

  }
