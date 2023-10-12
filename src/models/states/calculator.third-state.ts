import { ICalculatorState } from "../../interfaces/calculator-state.interface";
import { ICalculatorModel } from "../../interfaces/calculator-model.interface";
import { SecondOperand } from "./calculator.second-state";
import { OperatorKeys } from "../../enums/operator-keys.enum";
import { NumericKeys } from "../../enums/numeric-keys.enum";
import { ActionKeys } from "../../enums/action-keys.enum";

export class ThirdOperand implements ICalculatorState {
    constructor() {};

    numericPressed(calc: ICalculatorModel, key: NumericKeys): void {
        // add to buffer here, keep making the first operand
    }

    operationPressed(calc: ICalculatorModel, key: OperatorKeys): void {
        // do nothing here.
    }

    actionPressed(calc: ICalculatorModel, key: ActionKeys): void {
        // this is the only one that should work – and only on equals or clear. 
    }
}