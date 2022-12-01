import React from 'react';
import './ResultsSort.scss';

export default function ResultsSort() {
  const sortItems = [
    {
      id: 1,
      title: 'release date',
      active: true,
    },
    {
      id: 2,
      title: 'top list 1',
      active: false,
    },
    {
      id: 2,
      title: 'top list 2',
      active: false,
    },
    {
      id: 3,
      title: 'top list 3',
      active: false,
    },
  ];

  return (
    <div className="results-sort">
      <span className="results-sort__title">Sort by</span>
      <div className="results-sort__select-wrap">
        <select className="results-sort__select" name="ResultsSort">
          {sortItems.map((item) => (
            <option key={item.id} value={item.title}>{item.title}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
