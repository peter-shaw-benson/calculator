import { OperatorKeys } from "../enums/operator-keys.enum";


export class Evaluator {
    constructor() {};

    public evaluate(firstOperand: number, secondOperand: number, operator: OperatorKeys): number {

        let result: number = 0;

        switch(operator) {
            case(OperatorKeys.PLUS):
                result = firstOperand + secondOperand;
                break;
            case(OperatorKeys.MINUS):
                result = firstOperand - secondOperand;
                break;
            case(OperatorKeys.DIV):
                result = firstOperand / secondOperand;
                break;
            case(OperatorKeys.MULT):
                result = firstOperand * secondOperand;
                break;
            default:
                throw new Error('Invalid Operation');
                break;
        }

        return result;
    }
} 