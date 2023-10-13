import { ICalculatorState } from "../../interfaces/calculator-state.interface";
import { ICalculatorModel } from "../../interfaces/calculator-model.interface";
import { OperatorKeys } from "../../enums/operator-keys.enum";
import { ThirdOperand } from "./calculator.third-state";
import { NumericKeys } from "../../enums/numeric-keys.enum";
import { ActionKeys } from "../../enums/action-keys.enum";
import { PostEvaluation } from "./calculator.post-evaluation";

export class SecondOperand implements ICalculatorState {

    private _firstOperand: number;
    private _secondOperand: string;

    constructor(first: number) {
        this._firstOperand = first;

        this._secondOperand = '';
    }

    numericPressed(calc: ICalculatorModel, key: NumericKeys): void {
        // add to buffer, this is the second operand
        calc.storeNumericKey(key);

        this._secondOperand += key;
    }

    operationPressed(calc: ICalculatorModel, key: OperatorKeys): void {
        //calc.changeState(new SecondOperand());

        calc.storeOperator(key);

        let secondNumber: number = parseFloat(this._secondOperand);

        switch (key) {
            case OperatorKeys.MULT:
                calc.changeState(new ThirdOperand(key, secondNumber)); 
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
                // resolve from the front as normal
                calc.evaluate();

                calc.changeState(new PostEvaluation());
                break;
            default:
                throw new Error('Invalid Action');
                break;
        }
    }

    
}