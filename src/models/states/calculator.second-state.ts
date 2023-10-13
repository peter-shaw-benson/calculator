import { ICalculatorState } from "../../interfaces/calculator-state.interface";
import { ICalculatorModel } from "../../interfaces/calculator-model.interface";
import { OperatorKeys } from "../../enums/operator-keys.enum";
import { ThirdOperand } from "./calculator.third-state";
import { NumericKeys } from "../../enums/numeric-keys.enum";
import { ActionKeys } from "../../enums/action-keys.enum";
import { PostEvaluation } from "./calculator.post-evaluation";
import { Evaluator } from "../evaluator";

export class SecondOperand implements ICalculatorState {

    private _firstNumber: number;
    private _secondOperand: string;

    private _operator: OperatorKeys;

    private tempEval: Evaluator = new Evaluator();

    constructor(first: number, operator: OperatorKeys) {
        this._firstNumber = first;
        this._operator = operator;

        this._secondOperand = '';
    }

    numericPressed(calc: ICalculatorModel, key: NumericKeys): void {
        // add to buffer, this is the second operand

        this._secondOperand += key;
    }

    operationPressed(calc: ICalculatorModel, key: OperatorKeys): void {
        //calc.changeState(new SecondOperand());

        let secondNumber: number = parseFloat(this._secondOperand);

        let firstResult: number = this.tempEval.evaluate(this._firstNumber, secondNumber, this._operator);  

        switch (key) {
            case OperatorKeys.PLUS:

                calc.changeState(new SecondOperand(firstResult, key));
                break;

            case OperatorKeys.MINUS:

                calc.changeState(new SecondOperand(firstResult, key));
                break;
            
            case OperatorKeys.DIV:
                calc.changeState(new ThirdOperand(this._firstNumber, this._operator,
                    secondNumber, key));
                break;

            case OperatorKeys.MULT:
                calc.changeState(new ThirdOperand(this._firstNumber, this._operator,
                                                secondNumber, key)); 
                break;
            default:
                throw new Error("Invalid Operator");
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
                let secondNumber: number = parseFloat(this._secondOperand);

                let finalResult: number = this.tempEval.evaluate(this._firstNumber, secondNumber, this._operator);

                calc.storeResult(finalResult);

                calc.changeState(new PostEvaluation(String(finalResult)));
                break;
            default:
                throw new Error('Invalid Action');
                break;
        }
    }

    
}