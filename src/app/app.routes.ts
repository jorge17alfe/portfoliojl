import { Routes } from '@angular/router';
import {Contactme } from './components/contactme/contactme';
import {Welcome } from './components/welcome/welcome';
import {Legal } from './components/legal/legal';


export const routes: Routes = [
     {path: "", component:Welcome},
     {path: "contactme", component:Contactme},
     {path:"legal", component:Legal},
     { path: '**', redirectTo: '/' }
];
