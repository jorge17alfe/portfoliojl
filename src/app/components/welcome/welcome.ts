
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {   listStaggerTrigger,  fadeInUpTrigger, fadeInRightTrigger,fadeInLeftTrigger } from '../../services/animations';
import {  projects } from '../../services/api';

import {  RouterLink  } from '@angular/router';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterLink ],
  template:`<app-legal [contacts]="projects"></app-legal>`,
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css' ],
  styles: [`.box { width:200px; height:100px; background:#4cafef; margin-top:10px;}`],
  animations: [ listStaggerTrigger, fadeInUpTrigger, fadeInRightTrigger, fadeInLeftTrigger,]
})

export class Welcome {

  protected readonly projectName= signal('Jorge Luis Ordóñez Morales');
  protected readonly projectSubt= signal('Freelance Developer');
  
 projects = projects



}
