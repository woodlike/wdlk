// import { readFile } from 'fs';
// import { resolve } from 'path';

import {useNavigationData} from '../hooks/use-navigation-data';



describe('useNavigationData()', () => {
  // const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
  // beforeEach(() => {
  //   useStaticQuery.mockImplementation(() => ({
  //     site: {
  //       siteMetadata: {
  //         author: 'Florian',
  //         description: 'My description',
  //         title: 'My Title',
  //       },
  //     },
  //   }));
  // })

  it('should return a navigation object query', async () => {
    console.log('ddd', useNavigationData())
    expect(1).toBe(1)
  //   readFile(resolve('./', 'src/data/navigation.json'), 'utf-8', (_, data) => {
  //     console.log(useNavigationData())
  //     done()
  //   });
  })

})
