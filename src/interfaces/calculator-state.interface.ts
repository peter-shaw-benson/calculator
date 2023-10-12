import { ICalculatorModel } from "./calculator-model.interface";
import { OperatorKeys } from "../enums/operator-keys.enum";
import { NumericKeys } from "../enums/numeric-keys.enum";
import { ActionKeys } from "../enums/action-keys.enum";


export interface ICalculatorState {
    
    numericPressed(calc: ICalculatorModel, key: NumericKeys): void;

    operationPressed(calc: ICalculatorModel, key: OperatorKeys): void;

    actionPressed(calc: ICalculatorModel, key: ActionKeys): void;
  }