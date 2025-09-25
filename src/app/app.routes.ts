import { Routes } from '@angular/router';
import {Contactme } from './components/contactme/contactme';
import {Welcome } from './components/welcome/welcome';
import { Aboutme } from './components/aboutme/aboutme';
import { Projects } from './components/projects/projects';



import { appRoutes } from './services/appRoutes';
import { personalOwn } from './services/api';


const title = personalOwn.web.nameWeb;
const separate = " - ";

export const routes: Routes = [
     {path: appRoutes.a1.path, component:Welcome, title: personalOwn.own.nameOwn},
     {path: appRoutes.c1.path, component:Contactme, title: appRoutes.c1.title+separate+ title},
     {path: appRoutes.p1.path, component:Projects, title: appRoutes.p1.title+separate+ title},
     {path:appRoutes.b1.path, component:Aboutme, title: appRoutes.b1.title+separate+ title},
     { path: '**', redirectTo: appRoutes.a1.path}
];


