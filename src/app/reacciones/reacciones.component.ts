import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem, CdkDragExit} from '@angular/cdk/drag-drop';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-reacciones',
  templateUrl: './reacciones.component.html',
  styleUrls: ['./reacciones.component.scss'],
  animations: [
    trigger('correctAnswer', [
      state('wrong', style({
        borderStyle: 'none'
      })),
      state('correct', style({
        borderStyle: 'solid',
        borderColor: 'green',
        backgroundColor: 'rgba(0,256,0,0.3)'
      })),
      transition('wrong => correct', [
        animate('1s')
      ]),
      transition('correct => wrong', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class ReaccionesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  problem = "Construye agua";

  isCorrect = false;

  availableElements = [
    'O',
    'O',
    'H',
    'N',
    'K'
  ];

  selectedElements = [];
  solution = ['H', 'O', 'O'];

  drop(event: CdkDragDrop<string[]>) {
    /*if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if(event.previousContainer.data == this.availableElements) {
        copyArrayItem(event.previousContainer.data, event.previousContainer.data, event.previousIndex, event.previousIndex);
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
      else {
        event.previousContainer.data.splice(event.previousIndex, 1);
      }
      this.isCorrect = true;
    }*/
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
    
    var sortedSol = this.solution.sort();
    var sortedAns = this.selectedElements.sort();
    if(sortedSol.length != sortedAns.length)
      return;
    for(var i = 0; i < sortedSol.length; i++) {
      if(sortedSol[i] != sortedAns[i])
        return;
    }
    this.isCorrect = true;
  }
}
