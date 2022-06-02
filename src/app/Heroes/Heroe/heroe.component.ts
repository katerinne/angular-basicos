import { Component } from '@angular/core';


@Component ({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})

export class HeroesComponent{

    nombre: string = 'Iroman';
    edad : number = 45;

    get nombrecapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenernombre(): string{
        return ` ${ this.nombre} - ${ this.edad}`;
    }

    cambiarnombre(): void{
        this.nombre='Spiderman';
    }
    
    cambiaredad(): void{
        this.edad=25;
    }
}