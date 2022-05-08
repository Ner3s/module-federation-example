import { Link } from 'react-router-dom';

function Host() {
  return (
    <div>
      <h1>Página de Host</h1>
      <Link to="/mfe1">Ir para Mfe 1</Link>
      <br />
      <Link to="/mfe2">Ir para Mfe 2</Link>
    </div>
  );
}
export { Host };
