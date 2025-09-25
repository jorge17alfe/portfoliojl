import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink  } from '@angular/router';

import { listStaggerTrigger,  fadeInDownTrigger, fadeInUpTrigger, fadeInRightTrigger,fadeInLeftTrigger} from '../../services/animations';
import { Head } from '../add/head/head';
import { contactMe} from '../../services/api';
import { appRoutes } from '../../services/appRoutes';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [CommonModule, Head],
  templateUrl: './contactme.html',
  styleUrl: './contactme.css',
  animations: [listStaggerTrigger, fadeInDownTrigger,  fadeInUpTrigger, fadeInRightTrigger,fadeInLeftTrigger]
  
})
export class Contactme {
protected title = signal(appRoutes.a1.title);
contactMe = contactMe;
}
