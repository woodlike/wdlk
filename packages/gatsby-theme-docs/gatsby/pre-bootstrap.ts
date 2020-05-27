import { existsSync, mkdir } from 'fs';
import { resolve } from 'path';
import { Reporter } from 'gatsby';

export const verifyDir = ({ reporter }: { reporter: Reporter }): void => {
  const contentPath = resolve('./content');
  if (existsSync(contentPath)) {
    return;
  }

  mkdir(contentPath, err => {
    reporter.info(`Creating content directory at: ${contentPath}`);
    if (err) {
      throw new Error(`ERROR creating content directory ${err}`);
    }
  });
};
