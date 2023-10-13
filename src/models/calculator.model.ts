
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { ICalculatorState } from '../interfaces/calculator-state.interface';
import { FirstOperand } from './states/calculator.first-state';
import { Evaluator } from './evaluator';

export class CalculatorModel implements ICalculatorModel {

  private _operands: Array<string> = [];
  private _buffer: string = '';
  private _operators: Array<OperatorKeys> = [];

  private _evaluator: Evaluator = new Evaluator();

  // state
  private state: ICalculatorState;

  constructor() {
    this.state = new FirstOperand();
  }

  public clear() {
    this._buffer = '';
    this._operands = [];
    this._operators = [];
  }

  public storeNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  public storeOperator(key: OperatorKeys): void {

    this._operators.push(key);
    this._operands.push(this._buffer);
     // pushes both the previous number pressed and the new operator. 
    this._buffer = '';
  }

  storeResult(result: number) {
    this._buffer = String(result);
  }

  public changeState(newState: ICalculatorState) {
    this.state = newState;
  }

  public pressNumericKey(key: NumericKeys): void {
    this.state.numericPressed(this, key);
  }

  public pressOperatorKey(key: OperatorKeys): void {
    this.state.operationPressed(this, key);
  }

  public pressActionKey(key: ActionKeys): void {
    this.state.actionPressed(this, key);
  }

  public display(): string {
    return this._buffer;
  }

  public evaluate(): string {

    this._operands.push(this._buffer);
    console.log(this._operands[0], this._operands[1]);
    this._buffer = '';

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

  public evaluateThirdOperand(): string {

    let currentResult: number = parseFloat(this._operands.pop());
    
    console.log(currentResult);

    while(this._operators.length > 0) {
      // takes first operator from the operators list
      const operator: OperatorKeys = this._operators.pop();
      // takes first operand from operands
      const operandOne: number = parseFloat(this._operands.pop());
      
      switch(operator) {
        case OperatorKeys.PLUS:
          currentResult = (operandOne + currentResult);
          break;
        case OperatorKeys.MINUS:
          currentResult = (operandOne - currentResult);
          break;
        case OperatorKeys.MULT:
          currentResult = (operandOne * currentResult);
          break;  
        case OperatorKeys.DIV:
          currentResult = (operandOne / currentResult);
          break;
        default:
          break;
      }

      this._buffer = currentResult.toString();
      // 
      this._operands.unshift(this._buffer);
    }
  
    return this._operands.shift();
  }

}
