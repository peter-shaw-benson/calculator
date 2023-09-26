
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { buffer } from 'stream/consumers';

export class CalculatorModel implements ICalculatorModel {

  private _buffer: string = '';

  public pressNumericKey(key: NumericKeys): void {

    // test for containing equals sign:
    if (!this._buffer.includes('=')) {
      this._buffer += key;
    }
  }

  public pressOperatorKey(key: OperatorKeys): void {
    // check for operator just pressed
    if (!this._buffer.includes('=')) {
      let lastKey = this._buffer.slice(-1);
    
      if (lastKey in OperatorKeys) {
        let tempBuffer = this._buffer.split('');
        // set the last character to the most recently pressed buffer, 
        // if the most recent key is an operator
        tempBuffer[-1] = key;
        
        this._buffer = tempBuffer.join('');

        console.log(tempBuffer);
        console.log(this._buffer);
      } else {
        // these are already implemented in the key
        this._buffer += key;
      }
    }
  }

  public pressActionKey(key: ActionKeys): void {
    throw new Error('Method not implemented.');

    // idea: construct "clauses" where each one is an operator and two numbers.
    // find and resolve clauses based on operator precedence

    // clear method: buffer = ''. 

    // the dot method will be harder.
  }

  public display(): string {
    return this._buffer;
  }

}
