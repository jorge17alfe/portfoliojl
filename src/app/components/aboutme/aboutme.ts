import { Component, signal } from '@angular/core';
import { Head } from '../add/head/head';
import { fadeInDownTrigger, fadeInLeftTrigger, fadeInRightTrigger, fadeInUpTrigger} from '../../services/animations';
import { personalOwn } from '../../services/api';
import { routes } from '../../app.routes';
import { appRoutes } from '../../services/appRoutes';


@Component({
  selector: 'app-aboutme',
  imports: [Head],
  templateUrl: './aboutme.html',
  styleUrl: './aboutme.css',
  animations:[ fadeInDownTrigger, fadeInLeftTrigger, fadeInRightTrigger, fadeInUpTrigger]
})

export class Aboutme {
  protected readonly title = signal(appRoutes.b1.title);
  personalOwn = personalOwn.own;

}
