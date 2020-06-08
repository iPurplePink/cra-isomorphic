import React from 'react';
// import '../../css/modules/Profile/styles.scss';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <section className="profile-section">
      Profile
      <Link to="/"> go to app</Link>
    </section>
  );
}

export default Profile;
