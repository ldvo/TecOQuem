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

  done = false;

  currentProblemIndex = 0;
  problemStatement: string;
  problemQuestion: string;
  availableElements: string[];
  solution: string;
  answerState: string;

  ngOnInit() {
    this.setUpProblem(this.game.problems[this.currentProblemIndex]);
  }

  setUpProblem(problem) {
    this.answerState = "default";
    this.problemStatement = problem.problemStatement;
    this.problemQuestion = problem.problemQuestion;
    this.availableElements = problem.availableElements;
    this.solution = problem.solution;
  }

  game = {
    problems: [
      {
        problemStatement: "Completa la reacción de hidrogenación:",
        problemQuestion: [ 'assets/img/problema1.png', undefined ],
        availableElements: ['assets/img/problema1-op1.png', 'assets/img/problema1-op2.png', 'assets/img/problema1-op3.png'],
        solution: 'assets/img/problema1-op2.png'
      },
      {
        problemStatement: "Completa la reacción de adición de amina:",
        problemQuestion: [ 'assets/img/problema2-1.png', undefined,  'assets/img/problema2-2.png'],
        availableElements: ['assets/img/problema2-op1.png', 'assets/img/problema2-op2.png', 'assets/img/problema2-op3.png'],
        solution: 'assets/img/problema2-op3.png'
      },
      {
        problemStatement: "Completa la reacción de síntesis de ésteres:",
        problemQuestion: [ 'assets/img/problema3-1.png', undefined,  'assets/img/problema3-2.png'],
        availableElements: ['assets/img/problema3-op1.png', 'assets/img/problema3-op2.png', 'assets/img/problema3-op3.png'],
        solution: 'assets/img/problema3-op3.png'
      },
      {
        problemStatement: "Completa la reacción de hidrólisis de aníhidridos:",
        problemQuestion: [ undefined, 'assets/img/problema4.png'],
        availableElements: ['assets/img/problema4-op1.png', 'assets/img/problema4-op2.png', 'assets/img/problema4-op3.png'],
        solution: 'assets/img/problema4-op2.png'
      },
      {
        problemStatement: "Completa la reacción de hidrólisis de amidas:",
        problemQuestion: [ undefined,  'assets/img/problema5.png'],
        availableElements: ['assets/img/problema5-op1.png', 'assets/img/problema5-op2.png', 'assets/img/problema5-op3.png'],
        solution: 'assets/img/problema5-op2.png'
      }
    ]
  }

  nextProblem() {
    this.currentProblemIndex += 1;
    if(this.currentProblemIndex < this.game.problems.length)
      this.setUpProblem(this.game.problems[this.currentProblemIndex]);
    else {
      this.done = true;
    }
  }

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
