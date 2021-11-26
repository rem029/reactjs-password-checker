import { useEffect, useMemo } from 'react';

const InputGuessTime = ({ text = '', time = 0, currentStrength = 0 }) => {
  const textColor = useMemo(() => {
    if (currentStrength >= 0 && currentStrength <= 1) return 'red';
    if (currentStrength === 2) return 'yellow';
    if (currentStrength >= 3) return 'green';
  }, [currentStrength]);

  const guessText = `It will take ${text} to guess your password.`;
  return (
    <p style={{ gridArea: 'guessTime', color: textColor }}>
      {text && guessText}
    </p>
  );
};

export default InputGuessTime;
