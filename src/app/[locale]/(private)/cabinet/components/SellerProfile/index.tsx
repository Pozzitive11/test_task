import React from 'react';
import { useTranslations } from 'next-intl';
import { UserAvatar } from 'components/common/UserAvatar';
import { AchiveIcon } from 'components/icons/AchiveIcon';
import { RobotIcon } from 'components/icons/RobotIcon';
import { BrainIcon } from 'components/icons/BrainIcon';
import { CircleMinusIcon } from 'components/icons/CircleMinusIcon';
import SellerAvatar from 'assets/images/seller-avatar.png';
import AccentHexagon from 'assets/images/hexagon/accent-hexagon.png';

import s from './SellerInfo.module.scss';

export const SellerInfo = () => {
  const total_offers = useTranslations('SellerPage');
  const confident_lvl = useTranslations('SellerPage');
  const level = useTranslations('SellerPage');
  return (
    <div className={s.seller}>
      <div className={s.seller__img}>
        <UserAvatar avatarURL={SellerAvatar} size={148} square={true} />
        <div className={s.seller__level}>
          <span className="text_accent">{level('level')}8</span>
        </div>
      </div>
      <div className={s.seller__content}>
        <div className={s.seller__top}>
          Lois Lane
          <div className={s.progress}>
            <span
              className={s.progress__done}
              style={{ width: '60%', background: '#00A190' }}
            >
              {confident_lvl('confident_lvl')} 60%
            </span>
          </div>
          <div className={s.progress}>
            <span
              className={s.progress__done}
              style={{
                width: '60%',
                background:
                  'linear-gradient(77deg, #0C44AC 7.87%, #548BF3 102.55%)',
              }}
            >
              EXP: 60%
            </span>
          </div>
        </div>
        <div className={s.seller__offers}>
          <span>120</span>
          {total_offers('total_offers')}
        </div>
        <ul className={s.seller__achievements}>
          <li className={s.seller__achievement}>
            <AchiveIcon />
          </li>
          <li className={s.seller__achievement}>
            <RobotIcon />
          </li>
          <li className={s.seller__achievement}>
            <BrainIcon />
          </li>
        </ul>
      </div>
      <button className={s.seller__button}>
        <CircleMinusIcon />
      </button>
    </div>
  );
};
