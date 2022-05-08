import { Route, Switch } from 'react-router-dom';

import { Host } from '~/pages/Host';

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Host} exact />
    </Switch>
  );
}
export { AppRoutes };
