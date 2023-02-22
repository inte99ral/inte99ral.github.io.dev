// -- API & Library
import React from 'react';

// -- Styles
import {
  Styled_ProfileBannerPhoto,
  Styled_ProfileBannerPhotoSet,
  Styled_ProfileBannerPhoto1,
  Styled_ProfileBannerPhoto2,
} from './style';

export const ProfileBannerPhoto = () => {
  // -- return
  return (
    <Styled_ProfileBannerPhoto className="profile-banner-photo inner">
      <Styled_ProfileBannerPhotoSet></Styled_ProfileBannerPhotoSet>
      {/* <Styled_ProfileBannerPhoto1 />
      <Styled_ProfileBannerPhoto2 /> */}
    </Styled_ProfileBannerPhoto>
  );
};
