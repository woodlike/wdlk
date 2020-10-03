import React from 'react';
import { axe } from 'jest-axe';
import { matchers } from 'jest-emotion';

import { cleanup, render } from '../../testing-library';
import { Table, theme } from '..';

expect.extend(matchers);

describe('<Table />', () => {
  let id: string;

  beforeEach(() => {
    id = 'table-id';
  });

  afterEach(() => {
    id = (undefined as unknown) as string;
  });

  describe('Accessibility', () => {
    it('should not have any accessibility violations', async done => {
      const { container, unmount } = render(
        <Table.Frame>
          <thead>
            <tr>
              <Table.Cell as="th"> Woodlike </Table.Cell>
              <Table.Cell as="th">XS</Table.Cell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Table.Cell>DE</Table.Cell>
              <Table.Cell>34/36</Table.Cell>
            </tr>

            <tr>
              <Table.Cell borderless>JPN</Table.Cell>
              <Table.Cell borderless>9/11</Table.Cell>
            </tr>
          </tbody>
        </Table.Frame>,
      );

      const a11yResults = await axe(container);
      expect(a11yResults).toHaveNoViolations();
      cleanup();
      unmount();
      done();
    });
  });

  describe('Table Cell', () => {
    it('should have the default themed border styled', () => {
      const { getByText, unmount } = render(
        <Table.Frame>
          <tbody>
            <tr>
              <Table.Cell>{id}</Table.Cell>
            </tr>
          </tbody>
        </Table.Frame>,
      );

      const cell = getByText(id);
      expect(cell).toHaveStyleRule('border-width', '0 0 1px 0');
      expect(cell).toHaveStyleRule('border-width', '0 1px 1px 0', {
        target: ':first-of-type',
      });
      unmount();
    });

    it('should have the borderless themed border styled', () => {
      const { getByText, unmount } = render(
        <Table.Frame>
          <tbody>
            <tr>
              <Table.Cell borderless>{id}</Table.Cell>
            </tr>
          </tbody>
        </Table.Frame>,
      );

      const cell = getByText(id);
      expect(cell).toHaveStyleRule('border-width', '0');
      expect(cell).toHaveStyleRule('border-width', '0 1px 0 0', {
        target: ':first-of-type',
      });
      unmount();
    });

    it('should have a default theme cell color for a table cell', () => {
      const { getByText, unmount } = render(
        <Table.Frame>
          <tbody>
            <tr>
              <Table.Cell borderless>{id}</Table.Cell>
            </tr>
          </tbody>
        </Table.Frame>,
      );
      const cell = getByText(id);
      expect(cell).toHaveStyleRule(
        'color',
        theme.table.color.replace(/\s/g, ''),
      );
      unmount();
    });

    it('should have a default theme text color for the table header cell color', () => {
      const { getByText, unmount } = render(
        <Table.Frame>
          <thead>
            <tr>
              <Table.Cell as="th" borderless>
                {id}
              </Table.Cell>
            </tr>
          </thead>
        </Table.Frame>,
      );
      const cell = getByText(id);
      expect(cell).toHaveStyleRule(
        'color',
        theme.colors.text.replace(/\s/g, ''),
      );
      unmount();
    });

    it('should have a defined theme cell color', () => {
      const { getByText, unmount } = render(
        <Table.Frame>
          <tbody>
            <tr>
              <Table.Cell as="td" borderless>
                {id}
              </Table.Cell>
            </tr>
          </tbody>
        </Table.Frame>,
      );
      const cell = getByText(id);
      expect(cell).toHaveStyleRule(
        'color',
        theme.table.color.replace(/\s/g, ''),
      );
      unmount();
    });
  });
});
