import React from 'react';
import './NavigationPanel.scss';

interface Layout extends React.HTMLAttributes<Element> {
  children: React.ReactNode;
}

export default function NavigationPanel({ children }: Layout) {
  return (<div className="navigation-panel">{children}</div>);
}
