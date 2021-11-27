const InputError = ({ text = '' }) => (
  <p
    style={{
      fontWeight: 400,
      fontSize: '16px',
      gridArea: 'error',
      color: 'red',
    }}
  >
    {text}
  </p>
);

export default InputError;
