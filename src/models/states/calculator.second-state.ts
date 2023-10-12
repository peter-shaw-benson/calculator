import { ICalculatorState } from "../../interfaces/calculator-state.interface";
import { ICalculatorModel } from "../../interfaces/calculator-model.interface";
import { OperatorKeys } from "../../enums/operator-keys.enum";
import { ThirdOperand } from "./calculator.third-state";
import { NumericKeys } from "../../enums/numeric-keys.enum";
import { ActionKeys } from "../../enums/action-keys.enum";

export class SecondOperand implements ICalculatorState {
    constructor() {}

    numericPressed(calc: ICalculatorModel, key: NumericKeys): void {
        // add to buffer, this is the second operand
    }

    operationPressed(calc: ICalculatorModel, key: OperatorKeys): void {
        //calc.changeState(new SecondOperand());

        switch (key) {
            case OperatorKeys.MULT:
                calc.changeState(new ThirdOperand()); 
        }
    }

    actionPressed(calc: ICalculatorModel, key: ActionKeys): void {
        // can accept equals or clear. 
    }

    
}