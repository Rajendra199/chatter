import React from 'react';
import CoreLayout from './layouts/CoreLayout';
import { GlobalProvider } from './context/GlobalState';

export default function App() {
  return (
    <GlobalProvider>
        <CoreLayout />
    </GlobalProvider>
    

  );
}
