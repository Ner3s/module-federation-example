import { ReactElement, Fragment } from 'react';

const modulesRotes = {
  mfe1: () => require('mfe1/routes'),
  mfe2: () => require('mfe2/routes'),
};

function ModuleRoute() {
  return (
    <>
      {Object.entries(modulesRotes).map(
        // eslint-disable-next-line array-callback-return
        ([key, mfeModule]): ReactElement | undefined => {
          try {
            const { AppRoutes } = mfeModule();

            return (
              <Fragment key={key}>
                <AppRoutes />
              </Fragment>
            );
          } catch (err) {
            // eslint-disable-next-line no-console
            console.warn(`Não foi possível importar as rotas do módulo ${key}`);
          }
        },
      )}
    </>
  );
}

export { modulesRotes, ModuleRoute };
