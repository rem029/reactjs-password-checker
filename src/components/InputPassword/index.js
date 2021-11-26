import ContainerMain from './containers/ContainerMain';
import Input from './components/Input';
import InputBars from './components/InputBars.jsx';
import InputGuessTime from './components/InputGuessTime.jsx';
import InputWarning from './components/InputWarning.jsx';
import InputSuggestions from './components/InputSuggestions.jsx';

import useInput from './hooks/useInput.js';

const InputPassword = () => {
  const { value, onValueChange, toggleShowPassword, showPassword, response } =
    useInput('');

  return (
    <ContainerMain>
      <Input
        showPassword={showPassword}
        onInputChange={onValueChange}
        value={value}
        togglePassword={toggleShowPassword}
        placeholder="Enter a password"
      />
      <InputBars
        maxStrength={5}
        currentStrength={response.score}
        passwordLength={value.length}
      />
      <InputGuessTime
        text={response.guessTimeString}
        time={response.guessTimeSeconds}
        currentStrength={response.score}
      />
      <InputWarning text={response.warning} />
      <InputSuggestions suggestions={response.suggestions} />
    </ContainerMain>
  );
};

export default InputPassword;
