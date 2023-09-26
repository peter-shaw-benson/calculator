
import { CalculatorModel } from './calculator.model';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ActionKeys } from '../enums/action-keys.enum';

describe('CalculatorModel', (): void => {

  let calculator: ICalculatorModel;

  beforeEach((): void => {
    calculator = new CalculatorModel();
  });

  it('should contain a CalculatorModel class that implements ICalculatorModel', (): void => {

    expect(calculator).toBeDefined();

  });

  it('should have an empty display on init', (): void => {

    // Act
    const displayValue: string = calculator.display();

    // Assert
    expect(displayValue).toEqual('');

  });

  it('should display `1` when the `1` key is pressed', (): void => {

    // Act
    calculator.pressNumericKey(NumericKeys.ONE);
    const displayValue: string = calculator.display();

    // Assert
    expect(displayValue).toEqual('1');

  });

  it('should display `2` when the `2` key is pressed', (): void => {

    calculator.pressNumericKey(NumericKeys.TWO);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('2');

  });

  it('should display `98` when the `9` key is pressed followed by the `8` key', (): void => {

    calculator.pressNumericKey(NumericKeys.NINE);
    calculator.pressNumericKey(NumericKeys.EIGHT);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('98');
  
  });

});

describe("Arithmetic Operations", (): void => {
  let calculator: ICalculatorModel;

  beforeEach((): void => {
    calculator = new CalculatorModel();
  });

  it('should display the correct arithmetic expression of 2 + 2', (): void => {
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.TWO);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('2+2');
  });

  it('should display the correct arithmetic expression of 2 - 2', (): void => {
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.MINUS);
    calculator.pressNumericKey(NumericKeys.TWO);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('2-2');
  });

  it('should display the correct arithmetic expression of 2 / 2', (): void => {
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.DIV);
    calculator.pressNumericKey(NumericKeys.TWO);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('2/2');
  });

  it('should display the correct arithmetic expression of 2 * 2', (): void => {
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.MULT);
    calculator.pressNumericKey(NumericKeys.TWO);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('2*2');
  });

  // Test for replacing the recent operator
  it('should replace the most recent operator with the new operator (minus)', (): void => {
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressOperatorKey(OperatorKeys.MINUS);
    calculator.pressNumericKey(NumericKeys.TWO);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('2-2');
  });

  // Test for replacing the recent operator
  it('should replace the most recent operator with the new operator (divide)', (): void => {
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.MINUS);
    calculator.pressOperatorKey(OperatorKeys.DIV);
    calculator.pressNumericKey(NumericKeys.TWO);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('2/2');
  });

  it('should evaluate the correct arithmetic expression of 2 + 2 = 4', (): void => {
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('2+2=4');
  });
});