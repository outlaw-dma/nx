export interface Schema {
  directory: string;
  name: string;
  npmScope?: string;
  skipInstall?: boolean;
  skipGit?: boolean;
  style?: string;
  commit?: { name: string; email: string; message?: string };
  cli: 'nx' | 'angular';
  layout: 'apps-and-libs' | 'packages';
  defaultBase?: string;
}
