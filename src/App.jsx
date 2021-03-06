import React from 'react';
import Button from './components/Buttons/Button';
import ResetCSS from './components/reset-css';

function App()
{
  return (
    <>
      <ResetCSS />
      <Button variant="default">
        Primary
      </Button>
    </>
  );
}

export default App;
