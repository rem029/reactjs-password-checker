import { useMemo } from 'react';
import './InputBar.css';
import ContainerInputBars from '../containers/ContainerInputBars.jsx';

const InputBars = ({ maxStrength = 4, currentStrength = 0, passwordLength = 0 }) => {
  const barsCount = useMemo(() => {
    return new Array(maxStrength).fill();
  }, [maxStrength]);

  const barsStyle = useMemo(() => {
    if (!passwordLength) return '';
    if (currentStrength >= 0 && currentStrength <= 1) return 'bars-weak';
    if (currentStrength === 2) return 'bars-medium';
    if (currentStrength >= 3) return 'bars-strong';
  }, [currentStrength, passwordLength]);

  return (
    <ContainerInputBars>
      {barsCount.map((_, index) => {
        const isIndexToFill = index <= currentStrength;

        return (
          <span
            key={index}
            className={isIndexToFill ? `input-bars ${barsStyle}` : 'input-bars'}
          ></span>
        );
      })}
    </ContainerInputBars>
  );
};

export default InputBars;
