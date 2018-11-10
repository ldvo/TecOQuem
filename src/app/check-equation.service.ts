import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckEquationService {

  validateAnswer(actualAnswer: number[], userAnswer: number[]) : boolean {
    if (actualAnswer.length !== userAnswer.length) {
        return false;
    }
    for (let i = actualAnswer.length; i--;) {
        if(actualAnswer[i] !== userAnswer[i]) {
            return false;
        }
    }
    return true;
  }

  constructor() { }
}
