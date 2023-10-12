
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { ICalculatorState } from '../interfaces/calculator-state.interface';
import { FirstOperand } from './states/calculator.first-state';

export class CalculatorModel implements ICalculatorModel {

  private _operands: Array<string> = [];
  private _buffer: string = '';
  private _operators: Array<OperatorKeys> = [];

  // state
  private state: ICalculatorState;

  constructor() {
    this.state = new FirstOperand();
  }

  public changeState(newState: ICalculatorState) {
    this.state = newState;
  }

  public pressNumericKey(key: NumericKeys): void {
    this.state.numericPressed(this, key);

    this._buffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    this.state.operationPressed(this, key);

    this._operators.push(key);
    this._operands.push(this._buffer);
     // pushes both the previous number pressed and the new operator. 
    this._buffer = '';
  }

  public pressActionKey(key: ActionKeys): void {
    this.state.actionPressed(this, key);

    switch (key) {
      case ActionKeys.CLEAR:
        this._buffer = '';
        this._operands = [];
        this._operators = [];
        break;
      case ActionKeys.DOT:
        this._buffer += '.';
        break;
      case ActionKeys.EQUALS:
        this._operands.push(this._buffer);
        if (this._operators.length !== this._operands.length - 1) {
          this.pressActionKey(ActionKeys.CLEAR);
          break;
        }
        this._buffer = this.evaluate();
        break;
      default:
        throw new Error('Invalid Action');
    }
  }

  public display(): string {
    return this._buffer;
  }

  private evaluate(): string {

    while(this._operators.length > 0) {
      const operator: OperatorKeys = this._operators.shift();
      const operandOne: number = parseFloat(this._operands.shift());
      const operandTwo: number = parseFloat(this._operands.shift());
      
      switch(operator) {
        case OperatorKeys.PLUS:
          this._buffer = (operandOne + operandTwo).toString();
          break;
        case OperatorKeys.MINUS:
          this._buffer = (operandOne - operandTwo).toString();
          break;
        case OperatorKeys.MULT:
          this._buffer = (operandOne * operandTwo).toString();
          break;  
        case OperatorKeys.DIV:
          this._buffer = (operandOne / operandTwo).toString();
          break;
        default:
          break;
      }
      this._operands.unshift(this._buffer);
    }
  
    return this._operands.shift();

  }

}
