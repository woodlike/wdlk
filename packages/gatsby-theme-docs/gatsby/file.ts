import { readdir, readFile } from 'fs';
export const read = async (path: string): Promise<string> =>
  new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err: unknown, data: string) => {
      if (err) {
        reject(new Error(`ERROR reading file content ${err}`));
      }
      resolve(data);
    });
  });

export const readDir = async (path: string): Promise<string[]> =>
  new Promise((resolve, reject) => {
    readdir(path, (err: unknown, files: string[]) => {
      if (err) {
        reject(new Error(`ERROR reading directory  ${err}`));
      }
      resolve(files);
    });
  });
