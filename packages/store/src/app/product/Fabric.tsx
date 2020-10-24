import { Box, Columns, Heading, ScaleArea, Text } from '@wdlk/components';
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
import { FabricFeature, ProductImage } from '../../gatsby';

export interface FabricProps {
  readonly fabricFeature: FabricFeature;
  readonly images: ProductImage[];
}

export const Fabric: React.FC<FabricProps> = props => {
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
    fabricFeature: {
      remoteId,
      features,
      title,
      materialTitle,
      description,
      compositionTitle,
      compositionFeatureList,
    },
    images,
  } = props;

  return (
    <Columns collapseBelow={3}>
      {!!images.length && (
        <StickyBox breakpoint={3}>
          <Image
            alt={`${name}-${title}`}
            fit="cover"
            height="100%"
            src={images[5].originalSrc}
          />
        </StickyBox>
      )}
      <HighlightSection basis="1/2" direction="right" padding={scales}>
        <Title as="h2">{materialTitle}</Title>
        <Box padding={[5, 0, 4, 0]}>
          <Text size="m">{description}</Text>
        </Box>
        {!!features.length && (
          <>
            <Box padding={[0, 0, 4, 0]}>
              <Heading as="h3" size="m" type="primary">
                {title}
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
        {!!compositionFeatureList.length && (
          <>
            <Heading as="h3" size="m" type="primary">
              {compositionTitle}
            </Heading>
            <Box padding={[5, 0, 4, 0]}>
              <List indent={6} space={2}>
                {compositionFeatureList.map(feature => (
                  <ListItem key={`${remoteId}-${feature}`}>{feature}</ListItem>
                ))}
              </List>
            </Box>
          </>
        )}
      </HighlightSection>
    </Columns>
  );
};
