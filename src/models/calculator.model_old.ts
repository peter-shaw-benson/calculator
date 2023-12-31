
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { buffer } from 'stream/consumers';
import { PassThrough } from 'stream';

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
    
      // check if last key is an operator key
      if (Object.values(OperatorKeys).includes(lastKey as OperatorKeys)) {
        // don't do anything here.
        this._buffer += "";
      } else {
        // these are already implemented in the key
        this._buffer += key;
      }
    }
  }

  public pressActionKey(key: ActionKeys): void {
    if(key == ActionKeys.CLEAR) {
      this._buffer = ""
    } else if (key == ActionKeys.EQUALS) {
      var eq = this._buffer.split("+").join(" ").split("*").join(" ").split("-").join(" ").split("/").join(" ").split(" ")

      var nums:number[] = new Array(eq.length)
      var operators:string[] = new Array(eq.length - 1)
      var lastOperatorChar = -1
      nums[0] = +eq[0]
      for(var i = 0; i < operators.length; i++) {
        nums[i + 1] = +eq[i + 1];
        lastOperatorChar = lastOperatorChar + eq[i].length + 1
        operators[i] = this._buffer.charAt(lastOperatorChar)
      }

      var result = nums[0]
      for(var i = 0; i < operators.length; i++) {
        switch(operators[i]) {
          case('+'):
            result = result + nums[i + 1]
            break;
          case('-'):
            result = result - nums[i + 1]
            break;
          case('*'):
            result = result * nums[i + 1]
            break;
          case('/'):
            result = result / nums[i + 1]
            break;
        }
      }
      this._buffer += '='
      this._buffer += result.toString();
    }
  }

  public display(): string {
    return this._buffer;
  }

}
