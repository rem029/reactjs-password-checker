import ContainerSuggestions from '../containers/ContainerSuggestions.jsx';

const InputSuggestions = ({ suggestions = [] }) => (
  <ContainerSuggestions>
    {suggestions.length > 0 && <h3 style={{ fontWeight: 500 }}>Suggestions</h3>}
    {suggestions.map((suggestion, id) => (
      <p key={id}>{suggestion}</p>
    ))}
  </ContainerSuggestions>
);

export default InputSuggestions;
