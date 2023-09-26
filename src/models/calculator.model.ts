
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

    switch(key) {
      case OperatorKeys.MULT:
        this._buffer += " * ";
      case OperatorKeys.DIV:
        this._buffer += " / ";
      case OperatorKeys.PLUS:
        this._buffer += " + ";
      case OperatorKeys.MINUS:
        this._buffer += " - ";
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
