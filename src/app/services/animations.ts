import { query, stagger, trigger, transition, style, animate, animation, useAnimation } from '@angular/animations';

// Animación básica fade + slide up
export const fadeInUpTrigger = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-320px)' }),
    animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);


// Animación parametrizada para stagger
export const fadeInUp = animation([
  style({ opacity: 0, transform: 'translateY(-300px)' }),
  animate('{{duration}}ms {{delay}}ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
]);

 //desde Right

export const fadeInLeftTrigger = trigger('fadeInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-500px)' }),
    animate('1000ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);


export const fadeInLeft = animation([
  style({ opacity: 0, transform: 'translateX(-500x)' }),
  animate('{{duration}}ms {{delay}}ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
]);
////desde Left

export const fadeInRightTrigger = trigger('fadeInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(500px)' }),
    animate('1000ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

export const fadeInRight = animation([
  style({ opacity: 0, transform: 'translateX(500px)' }),
  animate('{{duration}}ms {{delay}}ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
]);



export const fadeInUp1 = animation(
  [
    style({ opacity: 0, transform: 'translateX({{distance}})' }),
    animate(
      '{{duration}}ms {{delay}}ms ease-out',
      style({ opacity: 1, transform: 'translateX(0)' })
    )
  ],
  {
    params: {
      distance: '-800px', // desplazamiento inicial
      duration: 100,    // duración en ms
      delay: 0          // delay en ms
    }
  }
);


export const listStaggerTrigger = trigger('listStagger', [
  transition(':enter', [
    query(
      ':enter',
      [
        stagger(300, [
          useAnimation(fadeInUp1, {
            params: { distance: '-850px', duration: 600 }
          })
        ])
      ],
      { optional: true }
    )
  ])
]);



export const fade1 = animation(
  [
    style({ opacity: '{{start}}' }),
    animate('{{duration}}ms ease-out', style({ opacity: '{{end}}' }))
  ],
  {
    params: {
      start: 0,       // opacidad inicial (0 = invisible)
      end: 1,         // opacidad final (1 = visible)
      duration: 1000  // duración en ms
    }
  }
);

