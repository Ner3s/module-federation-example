import { Link } from 'react-router-dom';

import { useMfe } from '~/contexts/use-mfe';

function Mfe2() {
  const { value, setValue } = useMfe();
  return (
    <div>
      <h1>Página de Mfe2</h1>
      <Link to="/mfe1">Ir para Mfe 1</Link>
      <br />
      <Link to="/">Ir para Home</Link>

      <p>Valor da context: {value}</p>
      <button onClick={() => setValue('Context da MFE 2')}>
        Trocar valor por: Context da MFE2
      </button>
    </div>
  );
}
export { Mfe2 };
