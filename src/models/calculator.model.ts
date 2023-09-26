
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { buffer } from 'stream/consumers';

export class CalculatorModel implements ICalculatorModel {

  private _buffer: string = '';

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    throw new Error('Method not implemented.');
  }

  public pressActionKey(key: ActionKeys): void {
    if(key == ActionKeys.CLEAR) {
      this._buffer = ""
    } else if (key == ActionKeys.EQUALS) {
      this._buffer += '='
      var eq = this._buffer.split("+").join(" ").split("*").join(" ").split("-").join(" ").split("/").join(" ").split(" ") 
      var num1 = +eq[0]
      var num2 = +eq[2]
      switch(this._buffer.charAt(eq[0].length + 1)) {
        case('+'):
          this._buffer += num1 + num2
          break;
        case('-'):
          this._buffer += num1 - num2
          break;
        case('*'):
          this._buffer += num1 * num2
          break;
        case('/'):
          this._buffer += num1 / num2
          break;
      }
    }
  }

  public display(): string {
    return this._buffer;
  }

}
