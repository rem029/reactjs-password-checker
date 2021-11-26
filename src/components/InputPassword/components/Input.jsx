import ContainerInput from '../containers/ContainerInput.jsx';

import './Input.css';

const Input = ({
  showPassword = false,
  togglePassword = () => {},
  value = '',
  onInputChange = () => {},
  placeholder = 'Enter a password',
}) => {
  const handleInputChange = (e) => {
    if (onInputChange) onInputChange(e.target.value);
  };
  const handleToggleClick = (e) => {
    e.preventDefault();
    if (togglePassword) togglePassword();
  };
  return (
    <ContainerInput>
      <input
        className="input"
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <button className="button" onClick={handleToggleClick}>
        {showPassword ? 'HIDE' : 'SHOW'}
      </button>
    </ContainerInput>
  );
};

export default Input;
