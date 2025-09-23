import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink  } from '@angular/router';

import { fadeInUp, listStaggerTrigger,  fadeInUpTrigger, fadeInRightTrigger,fadeInLeftTrigger, fadeInLeft, fadeInRight} from '../../services/animations';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [CommonModule, RouterLink ],
  
  templateUrl: './contactme.html',
  styleUrl: './contactme.css',
  animations: [listStaggerTrigger,  fadeInUpTrigger, fadeInRightTrigger,fadeInLeftTrigger]
  
})
export class Contactme {
 
  protected title = signal("Alocraise");

 contacts=[
  ["E-mail", "mailto:alocraise@gmail.com" ],
  ["Teléfono", "tel:+34608457312", ],
  ["Linkedin", "https://www.linkedin.com/in/jorge-luis-ord%C3%B3%C3%B1ez-morales-a1b565256/"],
    
 ]
}
