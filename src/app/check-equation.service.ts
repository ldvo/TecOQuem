import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckEquationService {

  validateAnswer(actualAnswer: number[], userAnswer: number[]) : boolean[] {
    let ans : boolean[] = [];

    for (let i = actualAnswer.length; i--;) {
        if(actualAnswer[i] !== userAnswer[i]) {
            ans.push(false);
        } else {
          ans.push(true);
        }
    }
    return ans;
  }

  constructor() { }
}
