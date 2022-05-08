import { Link } from 'react-router-dom';

import { useMfe } from '~/contexts/use-mfe';

function Mfe1() {
  const { value, setValue } = useMfe();
  return (
    <div>
      <h1>Página de Mfe1</h1>
      <Link to="/mfe2">Ir para Mfe 2</Link>
      <br />
      <Link to="/">Ir para Home</Link>

      <p>Valor da context: {value}</p>
      <button onClick={() => setValue('Context da MFE 1')}>
        Trocar valor por: Context da MFE1
      </button>
    </div>
  );
}
export { Mfe1 };
