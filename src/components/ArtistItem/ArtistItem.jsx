import React, { memo } from "react";

import CtaButton from "../../components/CtaButton/CtaButton";
import PlayLink from "../../components/PlayLink/PlayLink";

import "./ArtistItem.scss";

const ArtistItem = ({ data, sliderClass }) => {
  console.log("render from ArtistItem");
  return (
    <div className={`ArtistItem ${sliderClass}`}>
      <img
        className="ArtistItem__img"
        src={data.picture_xl}
        alt="img"
      />
      <span className="abs-center">
        <PlayLink to={`/artist/${data.id}`} />
        <h2 className="artist-name">{data.name}</h2>
        <div className="mt-md">
          <CtaButton to={`/artist/${data.id}`}>
            More from this artist
          </CtaButton>
        </div>
      </span>
    </div>
  );
};

export default memo(ArtistItem);
