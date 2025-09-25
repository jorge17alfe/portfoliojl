import { query, stagger, trigger, transition, style, animate, animation, useAnimation } from '@angular/animations';


/**
 * Animación genérica fade + slide
 * Parametrizable con eje (X/Y), distancia, duración y delay
 */
export const fadeIn = animation(
  [
    style({ opacity: 0, transform: 'translate{{axis}}({{distance}})' }),
    animate(
      '{{duration}}ms {{delay}}ms ease-out',
      style({ opacity: 1, transform: 'translate{{axis}}(0)' })
    )
  ],
  {
    // valores por defecto
    params: {
      axis: 'Y',       // 'X' o 'Y'
      distance: '50px', // desplazamiento inicial
      duration: 600,    // duración en ms
      delay: 0          // delay en ms
    }
  }
);

/**
 * Triggers listos para usar con direcciones específicas
 */
export const fadeInUpTrigger = trigger('fadeInUp', [
  transition(':enter', [
    useAnimation(fadeIn, {
      params: { axis: 'Y', distance: '550px', duration: 800 }
    })
  ])
]);

export const fadeInDownTrigger = trigger('fadeInDown', [
  transition(':enter', [
    useAnimation(fadeIn, {
      params: { axis: 'Y', distance: '-550px', duration: 1200 }
    })
  ])
]);

export const fadeInLeftTrigger = trigger('fadeInLeft', [
  transition(':enter', [
    useAnimation(fadeIn, {
      params: { axis: 'X', distance: '-550px', duration: 800 }
    })
  ])
]);

export const fadeInRightTrigger = trigger('fadeInRight', [
  transition(':enter', [
    useAnimation(fadeIn, {
      params: { axis: 'X', distance: '550px', duration: 800 }
    })
  ])
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
            params: { distance: '-550px', duration: 600 }
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

