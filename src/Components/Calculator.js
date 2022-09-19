import React from 'react';
import './Calculator.css';
import ButtonPanel from './ButtonPanel';
import Screen from './Screen';
import ThemeSwitch from './ThemeSwitch';
import Button from './Button';

const Calculator = () => {
  const btnValues = [
    [7, 8, 9, 'DEL'],
    [4, 5, 6, '+'],
    [1, 2, 3, '-'],
    ['.', 0, '/', 'x'],
    ['Reset', '='],
  ];

  return (
    <div className="calculator">
      <div className="header">
        <h1>calc</h1>
        <ThemeSwitch />
      </div>

      <Screen />
      <ButtonPanel>
        {btnValues.flat().map((btn, idx) => (
          <Button value={btn} key={idx} />
        ))}
      </ButtonPanel>
    </div>
  );
};

export default Calculator;
