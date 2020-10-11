import { Heading } from '@wdlk/components';
import React from 'react';
import { Title } from '../..';
import { ProductFeatures } from '../../gatsby';

export interface FeaturesProps {
  readonly features: ProductFeatures;
}

export const Features: React.FC<FeaturesProps> = props => {
  const {
    features: { remoteId, features, name, modelTitle },
  } = props;
  return (
    <div>
      <Title as="h2">{name}</Title>
      <Heading as="h3" size="m" type="primary">
        {modelTitle}
      </Heading>
      <ul>
        {features.map(feature => (
          <li key={`${remoteId}-${feature}`}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};
