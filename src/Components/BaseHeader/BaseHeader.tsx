import React from 'react';
import './baseHeader.scss';

export default function BaseHeader() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/" className="link" aria-label="netflix roulette">
              <strong>netflix</strong>
              roulette
            </a>
          </li>
          <li>
            <button type="button" aria-label="add movie" className="add-movie">
              + add movie
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
