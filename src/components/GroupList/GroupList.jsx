import React from "react";

import PlayLink from "../../components/PlayLink/PlayLink";

import "./GroupList.scss";

const GroupList = ({ data, provideInfo, to }) => (
  <div className="center-page">
    <ul className="grouplist mt-md">
      {data.map(
        ({
          id,
          cover_medium,
          picture_medium,
          title,
          artist,
          user,
        }) => (
          <li
            className="grouplist__item"
            key={id}
            style={{
              backgroundImage: `url(${cover_medium ||
                picture_medium}`,
            }}
          >
            <div className="gradient-overlay">
              <span className="abs-center">
                <PlayLink to={`/${to}/${id}`} type="hover" />
              </span>
            </div>

            {provideInfo && (
              <div className="grouplist__info">
                <p>{title}</p>
                <p className="artist-name">
                  <span>by </span>
                  {artist && artist.name}
                  {user && user.name}
                </p>
              </div>
            )}
          </li>
        )
      )}
    </ul>
  </div>
);

export default GroupList;
