import { OperatorKeys } from "../enums/operator-keys.enum";


export class Evaluator {
    constructor() {};

    public evaluate(firstOperand: number, secondOperand: number, operator: OperatorKeys): number {

        let result: number = 0;

        switch(operator) {
            case(OperatorKeys.PLUS):
                result = firstOperand + secondOperand;
            case(OperatorKeys.MINUS):
                result = firstOperand - secondOperand;
            case(OperatorKeys.DIV):
                result = firstOperand / secondOperand;
            case(OperatorKeys.MULT):
                result = firstOperand * secondOperand;
        }

        return result;
    }
} 