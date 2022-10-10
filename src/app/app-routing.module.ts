import {  NgModule  } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent, // primer componente que se desea mostar
        pathMatch: 'full' // caiga en ese lugar
    },
    {
        path: 'region',
        component: PorRegionComponent,        

    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id', // truco para ver pais
        component: VerPaisComponent
    },

    {
        path: '**', // si se coloca algo que no existe
        redirectTo: '' , // redirecciona a la ruta principa  
    }
    
];



@NgModule({
    imports: [
        RouterModule.forRoot(routes), // rutas principales 
    ],
    exports:[
        RouterModule,
    ]
})



export class AppRoutingModule{

}