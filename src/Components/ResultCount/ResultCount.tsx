import React from 'react';
import './resultCount.scss';

interface ResultCountProps {
  props: number
}

export default function ResultCount({ props }: ResultCountProps) {
  return (
    <div className="result-count">
      {props}
      {props === 1 ? ' movie found' : ' movies found'}
    </div>
  );
}
