import { CheckAuth } from 'Components/Common/CheckAuth';
import { Person } from 'Components/Person';
import React from 'react';

export const PersonPage = () => {
  return (
    <CheckAuth>
      <Person />
    </CheckAuth>
  );
};
