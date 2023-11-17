import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-page-principal',
  templateUrl: './page-principal.component.html',
  styleUrls: ['./page-principal.component.css']
})
export class PagePrincipalComponent {
onRegisterWorker() {
  this.router.navigate(['/worker'])
}
  
  constructor (
    private router: Router
  ) {}

  onRegisterEmployeer() {
    this.router.navigate(['/employeer'])
  };

}
