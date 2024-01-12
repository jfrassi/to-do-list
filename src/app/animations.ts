import { animate, state, style, transition, trigger } from '@angular/animations';


export const highlightedStateTrigger = trigger('highlightedState', [
  state('default', style({
    border: '1.5px solid #b2b6ff',

  })),
  state('highlighted', style({
    border: '2.3px solid #b2b6ff',
    filter: 'brightness(97%)'

  })),
  transition('default => highlighted', [
    animate('400ms ease-in-out', style({
      transform: 'scale(1.02)'
    })),

    animate('500ms')
  ])
])


export const shownStateTrigger = trigger('shownState', [

  transition(':enter', [
  style({
  opacity: 0
  }),
  animate(300, style({
  opacity: 1
}))
]),
transition(':leave', [
animate(300, style({
  opacity: 0
}))
])
])




export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate('400ms ease-in', style({
      transform: 'scale(0.4)'
    }))
  ])
])
