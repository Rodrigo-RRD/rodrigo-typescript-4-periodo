import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cidade-crud',
  templateUrl: './cidade-crud.component.html',
  styleUrls: ['./cidade-crud.component.css']
})
export class CidadeCrudComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigateToCidadeCreate(): void {
    this.router.navigate(["/cidades/create"])
  }
}
