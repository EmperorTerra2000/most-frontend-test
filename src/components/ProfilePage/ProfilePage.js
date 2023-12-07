import './ProfilePage.css';

import React from 'react';

function ProfilePage({ profileData }) {
  return (
    <>
      {Object.keys(profileData).length !== 0 && (
        <section className="profile-page">
          <div className="profile-page__content page__spacing">
            <div className="profile-page__left">
              <div className="profile-page__left-content">
                <img
                  className="profile-page__img"
                  src={profileData.image}
                  alt={profileData.username}
                />
              </div>
            </div>
            <div className="profile-page__right">
              <div className="profile-page__right-content">
                <div className="profile-page__right-icon">
                  <h3 className="profile-page__manufacturer">{profileData.gender}</h3>
                </div>
                <h2 className="profile-page__title">{profileData.firstName}</h2>
                <p className="profile-page__description">{profileData.lastName}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ProfilePage;
