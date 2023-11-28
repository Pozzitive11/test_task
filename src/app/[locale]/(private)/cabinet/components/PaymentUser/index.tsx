import React, { FC } from 'react';
import { ChatIcon } from 'components/icons/ChatIcon';
import { StaticImageData } from 'next/image';

import s from './PaymentUser.module.scss';
import { UserAvatar } from '../../../../../../components/common/UserAvatar';
import Link from 'next/link';
import { ROUTES } from 'constants/routes';

interface PaymentUserProps {
  userStatus: string;
  avatarURL: StaticImageData | string;
  userName: string;
  userEmail: string;
  chatButton?: boolean;
}

export const PaymentUser: FC<PaymentUserProps> = ({
  userStatus,
  avatarURL,
  userName,
  userEmail,
  chatButton = false,
}) => {
  return (
    <Link href={ROUTES.PRIVATE.SELLER.PROFILE}>
      <div className={s.user}>
        <span className={s.user__top}>{userStatus}</span>
        <div className={s.user__content}>
          <div className={s.user__left}>
            <UserAvatar
              className={s.user__image}
              avatarURL={avatarURL}
              size={48}
              userName={userName}
            />
            <div className={s.user__info}>
              <p className={s.user__name}>{userName}</p>
              <p className={s.user__email}>{userEmail}</p>
            </div>
          </div>
          {chatButton ? (
            <button className={s.user__button}>
              <ChatIcon />
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Link>
  );
};
