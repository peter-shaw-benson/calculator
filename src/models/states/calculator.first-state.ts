import { ICalculatorState } from "../../interfaces/calculator-state.interface";
import { ICalculatorModel } from "../../interfaces/calculator-model.interface";
import { SecondOperand } from "./calculator.second-state";
import { OperatorKeys } from "../../enums/operator-keys.enum";
import { NumericKeys } from "../../enums/numeric-keys.enum";
import { ActionKeys } from "../../enums/action-keys.enum";

export class FirstOperand implements ICalculatorState {

    private _firstOperand: string = '';

    constructor() {};

    numericPressed(calc: ICalculatorModel, key: NumericKeys): void {
        // add to buffer here, keep making the first operand
        calc.storeNumericKey(key);

        this._firstOperand += key;
    }

    operationPressed(calc: ICalculatorModel, key: OperatorKeys): void {

        let firstNumber: number = parseFloat(this._firstOperand)

        calc.changeState(new SecondOperand(firstNumber, key));

        // push to the first operator buffer, and the operators buffer? 
    }

    actionPressed(calc: ICalculatorModel, key: ActionKeys): void {
        // should only really do somethin on a "CLEAR". 
        switch (key) {
            case ActionKeys.CLEAR:
                calc.clear();
                break;
            case ActionKeys.EQUALS:
                // do nothing
                break;
            default:
                throw new Error('Invalid Action');
        }
    }
}