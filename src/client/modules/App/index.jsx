import React from 'react';
// import '../../css/modules/App/styles.scss';
import { Link } from 'react-router-dom';

function App(props) {
  return (
    <section className="app-section">
      App
      <Link to="/profile"> go to profile</Link>
    </section>
  );
}

export default App;
