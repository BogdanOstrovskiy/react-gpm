import React from 'react';
import './errorBoundary.scss';

interface ErrorBoundaryInterface extends React.HTMLAttributes<Element> {
  children: React.ReactNode
}

export default function ErrorBoundary({ children }: ErrorBoundaryInterface) {
  const isEverythingOK = true;

  return (
    <div>
      {isEverythingOK ? children : (
        <h2>
          Oops, something went wrong...
          <div>test</div>
        </h2>
      )}
    </div>
  );
}
