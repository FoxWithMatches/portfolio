import React from 'react';
import { Main } from 'Containers/Main';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';
import { Portfolio } from 'Containers/Portfolio';
import { CaseOne } from 'Containers/Cases/Case1';

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.portfolio} element={<Portfolio />} />
      <Route path={routes.case1} element={<CaseOne />} />
    </Routes>
  );
}

export default App;
