import { ROUTES } from 'constants/routes';
import { ISidebarConfig } from '../layout';

import { KeyIcon } from 'components/icons/KeyIcon';
import { MessageIcon } from 'components/icons/MessageIcon';
import { FlagIcon } from 'components/icons/FlagIcon';
import { CartIcon } from 'components/icons/CartIcon';
import { ExitIcon } from 'components/icons/ExitIcon';
import { TransparentAchiveIcon } from 'components/icons/AchiveIcon';
import { StoreIcon } from 'components/icons/StoreIcon';
import { PaymentIcon } from 'components/icons/PaymentIcon';
import { TotalsIcon } from 'components/icons/TotalsIcon';

import { SquaresIcon } from 'components/icons/SquaresIcon';

export const buyerConfig: ISidebarConfig = {
  items: [
    {
      icon: <SquaresIcon />,
      title: 'dashboard',
      href: ROUTES.PRIVATE.DASHBOARD,
    },
    { icon: <MessageIcon />, title: 'messages', href: ROUTES.PRIVATE.MESSAGES },
    {
      icon: <TotalsIcon />,
      title: 'sections',
      href: ROUTES.PRIVATE.SECTIONS,
    },
    { icon: <StoreIcon />, title: 'sellers', href: ROUTES.PRIVATE.SELLERS },
    { icon: <CartIcon />, title: 'buyers', href: ROUTES.PRIVATE.BUYERS },
    {
      icon: <PaymentIcon />,
      title: 'financial',
      href: ROUTES.PRIVATE.FINANCIAL,
    },
    {
      icon: <TransparentAchiveIcon />,
      title: 'achievement',
      href: ROUTES.PRIVATE.ACHIEVEMENT,
    },
    { icon: <KeyIcon />, title: 'security', href: ROUTES.PRIVATE.SECURITY },
    { icon: <FlagIcon />, title: 'report', href: ROUTES.PRIVATE.REPORT },
    { icon: <ExitIcon />, title: 'logout', href: ROUTES.PRIVATE.LOGOUT },
  ],
};
