import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes: string [] = ["Spiderman", "Iroman", "Hulk", "Thor", "Capitan america"];  
  heroeborrado: string = "";

    borrarheroe(): void{      
      this.heroeborrado = this.heroes.shift() || "";
      
  }

  
}
