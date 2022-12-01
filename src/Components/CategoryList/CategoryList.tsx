import React from 'react';
import './CategoryList.scss';

export default function CategoryList() {
  const categoryList = [
    {
      id: 1,
      title: 'All',
      active: true,
    },
    {
      id: 2,
      title: 'Documentary',
      active: false,
    },
    {
      id: 2,
      title: 'Comedy',
      active: false,
    },
    {
      id: 3,
      title: 'Horror',
      active: false,
    },
    {
      id: 4,
      title: 'Crime',
      active: false,
    },
  ];

  return (
    <div>
      <ul className="category-list">
        {categoryList.map((item) => (
          <li
            key={item.id}
          >
            <button
              type="button"
              title={item.title}
              className={
                item.active
                  ? 'category-list__item category-list__item_active'
                  : 'category-list__item'
              }
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
