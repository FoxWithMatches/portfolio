import React from 'react';
import { Main } from 'Containers/Main';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';
import { Portfolio } from 'Containers/Portfolio';

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.portfolio} element={<Portfolio />} />
    </Routes>
  );
}

export default App;
