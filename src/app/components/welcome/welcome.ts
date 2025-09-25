
import { Component, signal  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { listStaggerTrigger, fadeInDownTrigger ,   fadeInUpTrigger, fadeInRightTrigger,fadeInLeftTrigger } from '../../services/animations';

import {  RouterLink  } from '@angular/router';
import { VideoHomePage } from '../add/video-home-page/video-home-page';
import { appRoutes } from '../../services/appRoutes';
import { personalOwn } from '../../services/api';



@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterLink , VideoHomePage ],
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css'],
  styles: [],
  animations: [listStaggerTrigger, fadeInUpTrigger, fadeInRightTrigger, fadeInLeftTrigger,fadeInDownTrigger ]
})

export class Welcome  {
  protected readonly  personalOwn = personalOwn.own;
  appRoutes = [appRoutes.p1, appRoutes.c1, appRoutes.b1]
}
