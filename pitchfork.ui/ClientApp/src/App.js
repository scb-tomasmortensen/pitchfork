import React from 'react';
import './css/App.css';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
      </header>
      
      <article className="main">
        <SearchForm />
        <SearchResult />
      </article>

      <aside className="aside aside-1">
        <p>P i T C H F O R K</p>
      </aside>
      
      <footer className="footer">
        Copyright &copy; 2019 Tomas Mortensen, All rights reserved
      </footer>
    </div>
  );
}

export default App;
