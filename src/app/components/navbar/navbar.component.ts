import { Component, inject, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { AuthentificationService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    loggedIn$: Observable<boolean>;
    loggedOut$: Observable<boolean>;
    constructor() {
        this.loggedIn$ = this.authService.userLoggedIn$;
        this.loggedOut$ = this.authService.userLoggedOut$;
    }

    private authService: AuthentificationService = inject(AuthentificationService)
    router: Router = inject(Router);




    logout() {
        if (this.authService.logout()) {
            alert("Logged Out !")
            this.router.navigate(['cv'])
        } else {
            alert("An error has occurred. Please try again !")
        }
    }


}
