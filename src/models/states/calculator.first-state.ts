import { ICalculatorState } from "../../interfaces/calculator-state.interface";
import { ICalculatorModel } from "../../interfaces/calculator-model.interface";
import { SecondOperand } from "./calculator.second-state";
import { OperatorKeys } from "../../enums/operator-keys.enum";
import { NumericKeys } from "../../enums/numeric-keys.enum";
import { ActionKeys } from "../../enums/action-keys.enum";

export class FirstOperand implements ICalculatorState {
    constructor() {};

    numericPressed(calc: ICalculatorModel, key: NumericKeys): void {
        // add to buffer here, keep making the first operand
    }

    operationPressed(calc: ICalculatorModel, key: OperatorKeys): void {

        calc.changeState(new SecondOperand());
    }

    actionPressed(calc: ICalculatorModel, key: ActionKeys): void {
        // should only really do somethin on a "CLEAR". 
    }
}