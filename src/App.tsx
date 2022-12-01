import React from 'react';
import './app.scss';
import Home from './Containers/Home';
import BaseLayout from './Layouts/BaseLayout/BaseLayout';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <BaseLayout>
      <main>
        <ErrorBoundary>
          <Home />
        </ErrorBoundary>
      </main>
    </BaseLayout>
  );
}

export default App;
