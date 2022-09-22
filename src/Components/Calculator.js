import ButtonPanel from './ButtonPanel';
import Screen from './Screen';
import ThemeSwitch from './ThemeSwitch';
import Button from './Button';
import { StyledHeader } from './Styled/Header.styled';
import { StyledCalculator } from './Styled/Calculator.styled';

const Calculator = () => {
  const btnValues = [
    [7, 8, 9, 'DEL'],
    [4, 5, 6, '+'],
    [1, 2, 3, '-'],
    ['.', 0, '/', 'x'],
    ['Reset', '='],
  ];

  return (
    <StyledCalculator>
      <StyledHeader>
        <h1>calc</h1>
        <ThemeSwitch />
      </StyledHeader>

      <Screen />
      <ButtonPanel>
        {btnValues.flat().map((btn, idx) => (
          <Button value={btn} key={idx} />
        ))}
      </ButtonPanel>
    </StyledCalculator>
  );
};

export default Calculator;
