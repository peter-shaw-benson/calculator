import { ICalculatorState } from "../../interfaces/calculator-state.interface";
import { ICalculatorModel } from "../../interfaces/calculator-model.interface";
import { SecondOperand } from "./calculator.second-state";
import { OperatorKeys } from "../../enums/operator-keys.enum";
import { NumericKeys } from "../../enums/numeric-keys.enum";
import { ActionKeys } from "../../enums/action-keys.enum";
import { PostEvaluation } from "./calculator.post-evaluation";
import { Evaluator } from "../evaluator";

export class ThirdOperand implements ICalculatorState {
    
    private _secondOperator: OperatorKeys;
    private _secondNumber: number;

    private _thirdOperand: string;

    constructor(secondNumber: number, secondOperator: OperatorKeys) {
        this._secondOperator = secondOperator;
        this._secondNumber = secondNumber;

        this._thirdOperand = '';
    }

    numericPressed(calc: ICalculatorModel, key: NumericKeys): void {
        // add to buffer here, keep making the third operand
        calc.storeNumericKey(key);
    }

    operationPressed(calc: ICalculatorModel, key: OperatorKeys): void {
        // do nothing here.
    }

    actionPressed(calc: ICalculatorModel, key: ActionKeys): void {
        // this is the only one that should work – and only on equals or clear. 
        switch (key) {
            case ActionKeys.CLEAR:
                calc.clear();
                break;
            case ActionKeys.EQUALS:
                // resolve from the back (i.e. start with the multiplication at the back.)
                let tempEval = new Evaluator();
                let thirdNumber: number = parseFloat(this._thirdOperand);

                let result: number = tempEval.evaluate(this._secondNumber, thirdNumber, this._secondOperator);

                calc.evaluateThirdOperand();

                calc.changeState(new PostEvaluation());
                break;
            default:
                throw new Error('Invalid Action');
                break;
        }
    }
}