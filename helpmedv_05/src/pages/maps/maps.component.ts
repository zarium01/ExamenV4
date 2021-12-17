import { Component } from "@angular/core";
import { GoogleMapsModule } from "@angular/google-maps";
@Component({
    selector: 'maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
}) 
export class mapsComponent {

    tittle= 'gmaps';

    position={
        lat:-33.80495132083597,
        lng:-70.74124808506912, 
        
    };

   

    constructor(){}


}