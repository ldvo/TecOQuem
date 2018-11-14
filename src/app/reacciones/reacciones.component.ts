import {Component, OnInit} from '@angular/core';
import {trigger, state, transition, animate, style, keyframes} from '@angular/animations'

@Component({
  selector: 'app-reacciones',
  templateUrl: './reacciones.component.html',
  styleUrls: ['./reacciones.component.scss'],
  animations: [
    trigger('correctAnswer', [
      state('wrong', style({
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'rgba(256,0,0,0.5)',
        backgroundColor: 'rgba(256,0,0,0.3)'
      })),
      state('anotherWrong', style({
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'rgba(256,0,0,0.5)',
        backgroundColor: 'rgba(256,0,0,0.3)'
      })),
      state('correct', style({
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'rgba(0,256,0,0.5)',
        backgroundColor: 'rgba(0,256,0,0.3)'
      })),
      transition('wrong => correct', [
        animate('1s')
      ]),
      transition('default => wrong', [
        animate('0.25s', keyframes([
          style({transform: 'translateX(-7%)'}),
          style({transform: 'translateX(7%)'}),
          style({transform: 'translateX(-7%)'}),
          style({transform: 'translateX(7%)'})
        ])),
        style({
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: 'rgba(256,0,0,0.5)',
          backgroundColor: 'rgba(256,0,0,0.3)'
        })
      ]),
      transition('wrong => anotherWrong', [
        animate('0.25s', keyframes([
          style({transform: 'translateX(-7%)'}),
          style({transform: 'translateX(7%)'}),
          style({transform: 'translateX(-7%)'}),
          style({transform: 'translateX(7%)'})
        ])),
        style({
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: 'rgba(256,0,0,0.5)',
          backgroundColor: 'rgba(256,0,0,0.3)'
        })
      ]),
      transition('anotherWrong => wrong', [
        animate('0.25s', keyframes([
          style({transform: 'translateX(-7%)'}),
          style({transform: 'translateX(7%)'}),
          style({transform: 'translateX(-7%)'}),
          style({transform: 'translateX(7%)'})
        ])),
        style({
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: 'rgba(256,0,0,0.5)',
          backgroundColor: 'rgba(256,0,0,0.3)'
        })
      ])
    ]),
  ]
})
export class ReaccionesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  answerState = "default";

  problemStatement = "Completa la reacción de hidrogenación:"
  problem = [ 'assets/img/problema1.png', undefined ];

  availableElements = ['assets/img/problema1-op1.png', 'assets/img/problema1-op2.png', 'assets/img/problema1-op3.png'];
  solution = 'assets/img/problema1-op2.png';

  drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("draggedElement");
    console.log(data);
    var domElement = document.getElementById(data);
    if(data == this.solution) {
      event.target.appendChild(domElement);
      this.answerState = "correct";
    }
    else {
      if(this.answerState == "wrong")
        this.answerState = "anotherWrong";
      else
        this.answerState = "wrong";
    }
  }

  drag(event) {
    event.dataTransfer.setData("draggedElement", event.target.id);
  }

  allowDrop(event) {
    event.preventDefault();
  }
}
