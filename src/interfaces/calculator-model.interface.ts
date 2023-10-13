
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorState } from './calculator-state.interface';

export interface ICalculatorModel {

  storeResult(result: number): void;

  storeNumericKey(key: NumericKeys): void;

  storeOperator(key: OperatorKeys): void;

  clear(): void ;

  evaluate(): void;

  evaluateThirdOperand(): void;

  changeState(newState: ICalculatorState): void;
  // numeric key pressed <0, 1, 2, 3, 4, 5, 6, 7, 8, 9>
  pressNumericKey(key: NumericKeys): void;

  // operator key pressed <+, -, *, />
  pressOperatorKey(key: OperatorKeys): void;

  // action key pressed <C, =, .>
  pressActionKey(key: ActionKeys): void;

  // returns the contents of the calculator's display
  display(): string;

}
