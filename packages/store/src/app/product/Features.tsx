import { Column, Columns, Heading, ScaleArea } from '@wdlk/components';
import { useMedia } from '@wdlk/hooks';
import { useTheme } from 'emotion-theming';
import React from 'react';

import { contestScales, Image, Title } from '../..';
import { ProductFeatures, ProductImage } from '../../gatsby';

export interface FeaturesProps {
  readonly features: ProductFeatures;
  readonly images: ProductImage[];
}

export const Features: React.FC<FeaturesProps> = props => {
  const { breakpoints } = useTheme();
  const scales = useMedia<ScaleArea>(
    [
      `(min-width: ${breakpoints[3]})`,
      `(min-width: ${breakpoints[2]})`,
      `(min-width: ${breakpoints[1]})`,
    ],
    contestScales,
    contestScales[contestScales.length - 1],
  );
  const {
    features: {
      remoteId,
      features,
      fitAndCoverageTitle,
      fitAndCoverageFeatureList,
      name,
      modelTitle,
      productMarineProtection,
    },
    images,
  } = props;
  return (
    <Columns collapseBelow={3}>
      <Column basis="1/2" padding={scales}>
        <Title as="h2">{name}</Title>
        <Heading as="h3" size="m" type="primary">
          {modelTitle}
        </Heading>
        <ul>
          {features.map(feature => (
            <li key={`${remoteId}-${feature}`}>{feature}</li>
          ))}
        </ul>
        <Heading as="h3" size="m" type="primary">
          {fitAndCoverageTitle}
        </Heading>
        <ul>
          {fitAndCoverageFeatureList.map(feature => (
            <li key={`${remoteId}-${feature}`}>{feature}</li>
          ))}
        </ul>
        <Heading as="h3" size="m" type="primary">
          {productMarineProtection.title}
        </Heading>
        <ul>
          {productMarineProtection.features.map(feature => (
            <li key={`${remoteId}-${feature}`}>{feature}</li>
          ))}
        </ul>
      </Column>
      {images.length > 0 && (
        <Column basis="1/2">
          <Image
            alt={`${name}-${modelTitle}`}
            fit="cover"
            height="100%"
            src={images[4].originalSrc}
          />
        </Column>
      )}
    </Columns>
  );
};
