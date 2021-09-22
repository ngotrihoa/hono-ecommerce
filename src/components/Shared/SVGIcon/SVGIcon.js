import React from 'react';
import { ReactComponent as Wishlist } from '../../../assets/icons/heart.svg';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';
import { ReactComponent as Bag } from '../../../assets/icons/shopping-bag.svg';
import { ReactComponent as Menu } from '../../../assets/icons/menu.svg';
import { ReactComponent as Facebook } from '../../../assets/icons/facebook.svg';
import { ReactComponent as Twitter } from '../../../assets/icons/twitter.svg';
import { ReactComponent as Instagram } from '../../../assets/icons/instagram.svg';
import { ReactComponent as Linkedin } from '../../../assets/icons/linkedin.svg';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import { ReactComponent as LeftArrow } from '../../../assets/icons/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../../assets/icons/right-arrow.svg';
import { ReactComponent as RightLengthArrow } from '../../../assets/icons/right-length-arrow.svg';
import { ReactComponent as LeftLengthArrow } from '../../../assets/icons/left-length-arrow.svg';
import { ReactComponent as Star } from '../../../assets/icons/star.svg';
import { ReactComponent as StarChecked } from '../../../assets/icons/star-checked.svg';
import { ReactComponent as Compare } from '../../../assets/icons/compare.svg';

const mapIcon = {
  wishlist: Wishlist,
  search: Search,
  menu: Menu,
  bag: Bag,
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  close: Close,
  leftarrow: LeftArrow,
  rightarrow: RightArrow,
  rightLengthArrow: RightLengthArrow,
  leftLengthArrow: LeftLengthArrow,
  star: Star,
  starChecked: StarChecked,
  compare: Compare,
};

function SVGIcon({ name, width = 21, height = width, ...rest }) {
  const MatchIcon = mapIcon[name] || null;

  if (!MatchIcon) return null;
  return <MatchIcon width={width} height={height} {...rest} />;
}

export default SVGIcon;
