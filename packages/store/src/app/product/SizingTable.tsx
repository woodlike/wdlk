import React from 'react';
import { Box, Table } from '@wdlk/components';

export const SizingTable: React.FC = () => (
  <>
    <Box padding={[0, 0, 4, 0]}>
      <Table.Frame>
        <thead>
          <tr>
            <Table.Cell as="th"> Woodlike </Table.Cell>
            <Table.Cell as="th">XS</Table.Cell>
            <Table.Cell as="th">S</Table.Cell>
            <Table.Cell as="th">M</Table.Cell>
            <Table.Cell as="th">L</Table.Cell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Table.Cell>DE</Table.Cell>
            <Table.Cell>34/36</Table.Cell>
            <Table.Cell>36/38</Table.Cell>
            <Table.Cell>38/40</Table.Cell>
            <Table.Cell>40/42</Table.Cell>
          </tr>
          <tr>
            <Table.Cell>FR</Table.Cell>
            <Table.Cell>36/38</Table.Cell>
            <Table.Cell>38/40</Table.Cell>
            <Table.Cell>40/42</Table.Cell>
            <Table.Cell>42/44</Table.Cell>
          </tr>
          <tr>
            <Table.Cell>UK</Table.Cell>
            <Table.Cell>8/10</Table.Cell>
            <Table.Cell>10/12</Table.Cell>
            <Table.Cell>12/14</Table.Cell>
            <Table.Cell>14/16</Table.Cell>
          </tr>
          <tr>
            <Table.Cell>US</Table.Cell>
            <Table.Cell>6/8</Table.Cell>
            <Table.Cell>8/10</Table.Cell>
            <Table.Cell>10/12</Table.Cell>
            <Table.Cell>12/14</Table.Cell>
          </tr>
          <tr>
            <Table.Cell>CAN</Table.Cell>
            <Table.Cell>4/6</Table.Cell>
            <Table.Cell>6/8</Table.Cell>
            <Table.Cell>8/10</Table.Cell>
            <Table.Cell>10/12</Table.Cell>
          </tr>
          <tr>
            <Table.Cell borderless>JPN</Table.Cell>
            <Table.Cell borderless>9/11</Table.Cell>
            <Table.Cell borderless>11/13</Table.Cell>
            <Table.Cell borderless>13/15</Table.Cell>
            <Table.Cell borderless>15/17</Table.Cell>
          </tr>
        </tbody>
      </Table.Frame>
    </Box>

    <Box padding={[0, 0, 4, 0]}>
      <Table.Frame>
        <thead>
          <tr>
            <Table.Cell as="th">CUP</Table.Cell>
            <Table.Cell as="th">AA/A</Table.Cell>
            <Table.Cell as="th">A/B</Table.Cell>
            <Table.Cell as="th">B/C</Table.Cell>
            <Table.Cell as="th">C/D</Table.Cell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Table.Cell>1. BUST</Table.Cell>
            <Table.Cell>75-80cm</Table.Cell>
            <Table.Cell>80-90cm</Table.Cell>
            <Table.Cell>89-96cm</Table.Cell>
            <Table.Cell>96-102cm</Table.Cell>
          </tr>
          <tr>
            <Table.Cell>2. UNDERBUST</Table.Cell>
            <Table.Cell>69-74cm</Table.Cell>
            <Table.Cell>74-79cm</Table.Cell>
            <Table.Cell>79-84cm</Table.Cell>
            <Table.Cell>85-90cm</Table.Cell>
          </tr>
          <tr>
            <Table.Cell>3. WAIST</Table.Cell>
            <Table.Cell>76-80cm</Table.Cell>
            <Table.Cell>81-85cm</Table.Cell>
            <Table.Cell>86-90cm</Table.Cell>
            <Table.Cell>91-95cm</Table.Cell>
          </tr>
          <tr>
            <Table.Cell borderless>4. HIPS</Table.Cell>
            <Table.Cell borderless>89-93cm</Table.Cell>
            <Table.Cell borderless>93-98cm</Table.Cell>
            <Table.Cell borderless>98-102cm</Table.Cell>
            <Table.Cell borderless>103-107cm</Table.Cell>
          </tr>
        </tbody>
      </Table.Frame>
    </Box>
  </>
);
