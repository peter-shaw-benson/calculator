import { ICalculatorState } from "../../interfaces/calculator-state.interface";
import { ICalculatorModel } from "../../interfaces/calculator-model.interface";
import { OperatorKeys } from "../../enums/operator-keys.enum";
import { ThirdOperand } from "./calculator.third-state";
import { NumericKeys } from "../../enums/numeric-keys.enum";
import { ActionKeys } from "../../enums/action-keys.enum";
import { SecondOperand } from "./calculator.second-state";
import { parse } from "path";

export class PostEvaluation implements ICalculatorState {

    private _resultString: string;

    constructor(result: string) {
        this._resultString = result;
    }

    numericPressed(calc: ICalculatorModel, key: NumericKeys): void {
        // can't add new numbers here. 
        //calc.storeNumericKey(key);
    }

    operationPressed(calc: ICalculatorModel, key: OperatorKeys): void {
        //calc.changeState(new SecondOperand());

        switch (key) {
            case OperatorKeys.MULT:
                // placeholder value of 0
                calc.changeState(new SecondOperand(parseFloat(this._resultString), key)); 
                break;
        }
    }

    actionPressed(calc: ICalculatorModel, key: ActionKeys): void {
        // can accept equals or clear. 
        switch (key) {
            case ActionKeys.CLEAR:
                calc.clear();
                break;
            case ActionKeys.EQUALS:
                // do nothing.
                break;
            default:
                throw new Error('Invalid Action');
        }
    }

    
}