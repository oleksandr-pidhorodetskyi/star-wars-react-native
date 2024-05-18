import React from 'react';
import {store} from './src/store';
import {Provider} from 'react-redux';
import {AppRouter} from './src/navigation/AppRouter.tsx';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
export default App;
