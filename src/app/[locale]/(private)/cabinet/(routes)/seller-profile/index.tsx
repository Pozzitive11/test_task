'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { Section } from 'components/common/profile/Section';
import { FolderEmpty } from 'components/common/Empty';
import { ITab, Tabs } from 'components/common/Tabs';
import { Achievements } from 'components/common/Acievments';
import { IAchievement, IBoughtProduct } from 'types/userTypes';
import Arknights from 'assets/images/maketplaces/arknights.png';

import s from './SellerProfile.module.scss';
import { ArrowLeft } from 'components/icons/ArrowIcons';
import { SecondaryLinkButton } from 'ui/components/Button';
import { useSearchParams } from 'next/navigation';
import { BoughtProducts } from 'components/common/BoughtProducts';
import { SellerInfo } from '../../components/SellerProfile';

const sampleAchievements: IAchievement[] = [
  {
    bonusPoints: 10,
    createdAt: '2023-11-25T12:00:00Z',
    description: 'Reached level 10',
    id: '1',
    image: 'achievement_image_1.jpg',
    name: 'Level 10 Master',
    updatedAt: '2023-11-25T15:30:00Z',
    criteria: [
      { field: 'experience', count: 1000 },
      { field: 'quests_completed', count: 20 },
    ],
  },
  {
    bonusPoints: 5,
    createdAt: '2023-11-24T18:45:00Z',
    description: 'Completed 100 quests',
    id: '2',
    image: 'achievement_image_2.jpg',
    name: 'Quest Conqueror',
    updatedAt: '2023-11-24T20:15:00Z',
    criteria: [{ field: 'quests_completed', count: 100 }],
  },
];
const bought_products: IBoughtProduct[] = [
  { productId: 1, imgURL: Arknights, title: 'Arknights', date: '3 Sep 2023' },
  { productId: 2, imgURL: Arknights, title: 'Arknights', date: '3 Sep 2023' },
  { productId: 3, imgURL: Arknights, title: 'Arknights', date: '3 Sep 2023' },
];
const tabsData: ITab[] = [
  {
    name: 'Seller Profile',
    filter: 'seller-profile',
    component: <BoughtProducts products={bought_products} />,
  },
  {
    name: 'Offers',
    filter: 'offers',
    component: <Achievements achievements={sampleAchievements} />,
  },
  {
    name: 'Payments',
    filter: 'payments',
    component: <BoughtProducts products={bought_products} />,
  },
  {
    name: 'Achievements',
    filter: 'achievements',
    component: <Achievements achievements={sampleAchievements} />,
  },
  {
    name: 'Bought Products',
    filter: 'bought-products',
    component:
      bought_products.length === 0 ? (
        <FolderEmpty
          title="There is no product!"
          subtitle="There is no bought product yet."
        />
      ) : (
        <BoughtProducts products={bought_products} />
      ),
  },
];

export const SellerProfile = () => {
  const title = useTranslations('SellerPage');
  const searchParams = useSearchParams();
  const searchTab = searchParams.get('tab');
  const activeTab = searchTab || tabsData[0].filter;

  const getComponentForTab = (tabFilter: string) => {
    const selectedTab = tabsData.find((tab) => tab.filter === tabFilter);
    return selectedTab ? selectedTab.component : null;
  };

  const activeComponent = getComponentForTab(activeTab);
  return (
    <Section>
      <Section.Header className={s.section__header}>
        <SecondaryLinkButton className={s.button_back} href={'back'}>
          <ArrowLeft />
        </SecondaryLinkButton>
        <h3>{title('title')}</h3>
      </Section.Header>
      <Section.Body>
        <Section.Block>
          <Section.BlockHeader>
            <SellerInfo />
          </Section.BlockHeader>
          <Section.BlockBody>
            <Tabs tabs={tabsData} />
          </Section.BlockBody>
        </Section.Block>
        <Section.Block>
          <Section.BlockBody className={s.section__body}>
            {activeComponent && <div>{activeComponent}</div>}
          </Section.BlockBody>
        </Section.Block>
      </Section.Body>
    </Section>
  );
};
