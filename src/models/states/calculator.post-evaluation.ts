import { ICalculatorState } from "../../interfaces/calculator-state.interface";
import { ICalculatorModel } from "../../interfaces/calculator-model.interface";
import { OperatorKeys } from "../../enums/operator-keys.enum";
import { ThirdOperand } from "./calculator.third-state";
import { NumericKeys } from "../../enums/numeric-keys.enum";
import { ActionKeys } from "../../enums/action-keys.enum";
import { SecondOperand } from "./calculator.second-state";

export class PostEvaluation implements ICalculatorState {
    constructor() {}

    numericPressed(calc: ICalculatorModel, key: NumericKeys): void {
        // can't add new numbers here. 
        //calc.storeNumericKey(key);
    }

    operationPressed(calc: ICalculatorModel, key: OperatorKeys): void {
        //calc.changeState(new SecondOperand());

        calc.storeOperator(key);

        switch (key) {
            case OperatorKeys.MULT:
                calc.changeState(new SecondOperand()); 
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