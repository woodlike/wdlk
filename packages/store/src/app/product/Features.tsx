import { Box, Columns, Heading, ScaleArea } from '@wdlk/components';
import { useMedia } from '@wdlk/hooks';
import { useTheme } from 'emotion-theming';
import React from 'react';

import {
  contestScales,
  Image,
  List,
  HighlightSection,
  ListItem,
  Title,
  StickyBox,
} from '../..';
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
      <HighlightSection basis="1/2" direction="right" padding={scales}>
        <Title as="h2">{name}</Title>
        {!!features.length && (
          <>
            <Box padding={[5, 0, 4, 0]}>
              <Heading as="h3" size="m" type="primary">
                {modelTitle}
              </Heading>
            </Box>
            <Box padding={[0, 0, 4, 0]}>
              <List indent={6} space={2}>
                {features.map(feature => (
                  <ListItem key={`${remoteId}-${feature}`}>{feature}</ListItem>
                ))}
              </List>
            </Box>
          </>
        )}
        {!!fitAndCoverageFeatureList.length && (
          <>
            <Heading as="h3" size="m" type="primary">
              {fitAndCoverageTitle}
            </Heading>
            <Box padding={[5, 0, 4, 0]}>
              <List indent={6} space={2}>
                {fitAndCoverageFeatureList.map(feature => (
                  <ListItem key={`${remoteId}-${feature}`}>{feature}</ListItem>
                ))}
              </List>
            </Box>
          </>
        )}
        {!!productMarineProtection.features && (
          <>
            <Heading as="h3" size="m" type="primary">
              {productMarineProtection.title}
            </Heading>
            <Box padding={[5, 0]}>
              <List indent={6} space={2}>
                {productMarineProtection.features.map(feature => (
                  <ListItem key={`${remoteId}-${feature}`}>{feature}</ListItem>
                ))}
              </List>
            </Box>
          </>
        )}
      </HighlightSection>
      {!!images.length && (
        <StickyBox breakpoint={2}>
          <Image
            alt={`${name}-${modelTitle}`}
            fit="cover"
            height="100%"
            src={images[4].originalSrc}
          />
        </StickyBox>
      )}
    </Columns>
  );
};
