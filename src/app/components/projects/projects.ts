import { CommonModule } from '@angular/common';
import { Component, signal, Input} from '@angular/core';

import { listStaggerTrigger, fadeInUpTrigger, fadeInDownTrigger, fadeInRightTrigger} from '../../services/animations';

import { Head } from '../add/head/head';

import { projects } from '../../services/api';
import { appRoutes } from '../../services/appRoutes';

@Component({
  selector: 'app-projects',
   standalone: true,
  imports: [CommonModule, Head],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  animations: [
    fadeInUpTrigger, listStaggerTrigger, fadeInRightTrigger, fadeInDownTrigger, 
  ]
})

export class Projects {
  protected readonly title= signal(appRoutes.p1.title);
   projects= projects
}

