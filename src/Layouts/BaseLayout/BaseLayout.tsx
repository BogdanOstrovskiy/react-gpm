import React from 'react';
import './BaseLayout.scss';
import Header from '../../Components/BaseHeader/BaseHeader';
import BaseFooter from '../../Components/BaseFooter/BaseFooter';

interface Layout extends React.HTMLAttributes<Element> {
  children: React.ReactNode
}

export default function BaseLayout({ children }: Layout) {
  return (
    <div className="layout">
      <Header />
      {children}
      <BaseFooter />
    </div>
  );
}
