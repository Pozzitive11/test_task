import React from 'react';
import { useTranslations } from 'next-intl';
import { SellerRating } from 'components/common/SellerRating';
import { Section } from 'components/common/profile/Section';
import { Reviews } from 'components/common/Review/Reviews';
import { IUserDetail } from 'types/shopTypes';
import { IReview } from 'types/userTypes';
import ReviewsAvatar from 'assets/images/reviewsAvatar.png';

import s from './ProductDetails.module.scss';
import { SecondaryLinkButton } from 'ui/components/Button';
import { ArrowLeft } from 'components/icons/ArrowIcons';
import { ProductInfo } from '../../../components/ProductInfo';
import { OrderProductInfo } from '../../../components/OrderProductInfo';

const sampleUser: IUserDetail = {
  avatarURL: ReviewsAvatar,
  userName: 'Annette Black',
};
const sampleReviews: IReview[] = [
  {
    createdAt: '2023-01-03T10:45:00.000Z',
    createdBy: sampleUser,
    id: '1',
    rating: 4,
    receivedBy: sampleUser,
    text: 'always been, thanks for this accurate, valuable information!',
    updatedAt: '2023-01-01T12:00:00.000Z',
  },
  {
    createdAt: '2023-01-03T10:45:00.000Z',
    createdBy: sampleUser,
    id: '2',
    rating: 3,
    receivedBy: sampleUser,
    text: 'always been, thanks for this accurate, valuable information!',
    updatedAt: '2023-01-03T11:15:00.000Z',
  },
];

export const ProductDetails = () => {
  const t = useTranslations('ProfilePage.BoughtProducts.ProductDetail');

  const review = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.Reviews'
  );

  return (
    <div>
      <Section>
        <Section.Header className={s.section__header}>
          <SecondaryLinkButton className={s.button_back} href={'back'}>
            <ArrowLeft />
          </SecondaryLinkButton>
          <h3>{t('title')}</h3>
        </Section.Header>
        <Section.Body>
          <div className={s.wrapper}>
            <ProductInfo />
            <OrderProductInfo />
          </div>
          <Section.Block>
            <Section.BlockHeader>
              <h3>{review('title')}</h3>
            </Section.BlockHeader>
            <Section.BlockBody>
              <SellerRating className={s.rating} />
              <Reviews reviews={sampleReviews} />
            </Section.BlockBody>
          </Section.Block>
        </Section.Body>
      </Section>
    </div>
  );
};
