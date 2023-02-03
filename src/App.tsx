import React from 'react';
import { Main } from 'Containers/Main';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';
import { Portfolio } from 'Containers/Portfolio';
import { CaseOne } from 'Containers/Cases/Case1';
import { CaseTwo } from 'Containers/Cases/Case2';
import { CaseThree } from 'Containers/Cases/Case3';
import { ContactPage } from 'Containers/Contacts';
import { RegPage } from 'Containers/RegPage';
import { PageWrapper } from 'Components/Common/PageWrapper';
import { PersonPage } from 'Containers/Person';

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<PageWrapper />}>
        <Route index element={<Main />} />
        <Route path={routes.portfolio} element={<Portfolio />} />
        <Route path={routes.contacts} element={<ContactPage />} />
        <Route path={routes.reg} element={<RegPage />} />
        <Route path={routes.case1} element={<CaseOne />} />
        <Route path={routes.case2} element={<CaseTwo />} />
        <Route path={routes.case3} element={<CaseThree />} />
        <Route path={routes.person} element={<PersonPage />} />
      </Route>
    </Routes>
  );
}

export default App;
