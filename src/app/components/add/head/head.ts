import { Component , signal} from '@angular/core';
import { listStaggerTrigger, fadeInUpTrigger, fadeInRightTrigger ,fadeInLeftTrigger} from '../../../services/animations';
import { RouterLink  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { appRoutes } from '../../../services/appRoutes';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [RouterLink , CommonModule],
  templateUrl: './head.html',
  styleUrl: './head.css',
  animations: [
    fadeInUpTrigger, listStaggerTrigger, fadeInRightTrigger, fadeInLeftTrigger
  ]
})
export class Head {
   appRoutes =Object.values(appRoutes)
}
