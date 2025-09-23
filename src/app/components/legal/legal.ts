import { CommonModule } from '@angular/common';
import { Component, signal, Input} from '@angular/core';
import { listStaggerTrigger, fadeInUpTrigger, fadeInRightTrigger} from '../../services/animations';
import { RouterLink  } from '@angular/router';
import {  projects } from '../../services/api';


@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './legal.html',
  styleUrl: './legal.css',
  animations: [
    fadeInUpTrigger, listStaggerTrigger, fadeInRightTrigger, 
  ]
})
export class Legal {
 
  protected title = signal("Alocraise");

  contacts = projects;


}
