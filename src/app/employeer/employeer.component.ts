import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employeer',
  templateUrl: './employeer.component.html',
  styleUrls: ['./employeer.component.css']
})
export class EmployeerComponent {
    constructor(
      public route: ActivatedRoute
    ){}
}
