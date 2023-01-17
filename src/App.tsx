import React from 'react';
import { Main } from 'Containers/Main';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
    </Routes>
  );
}

export default App;
