import {prioritizeByValue} from '../../utils/array';

describe('prioritizeByValue', function () {
  test('should return array with property with true value as first element', () => {
    // Arrange
    const inputArray = [{id:1, display_first:false}, {id:2, display_first: true}];

    const expectedOutput = [{id:2, display_first: true}, {id:1, display_first:false}];;

    // Act
    const result = prioritizeByValue(inputArray, 'display_first');

    // Assert
    expect(result).toStrictEqual(expectedOutput);
  });

  test('should return empty array empty array is passed', () => {
    // Arrange
    const inputArray:Array<object> = [];

    const expectedOutput:Array<object> = [];

    // Act
    const result = prioritizeByValue(inputArray, 'display_first');

    // Assert
    expect(result).toStrictEqual(expectedOutput);
  });

});