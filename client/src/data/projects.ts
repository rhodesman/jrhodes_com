export type ProjectLink = {
  name: string;
  url: string;
};

export type ProjectColumn = {
  key: 'designer' | 'developer' | 'tech';
  title: string;
  projects: ProjectLink[];
};

export const projectColumns: ProjectColumn[] = [
  {
    key: 'designer',
    title: 'UX Designer',
    projects: [
      { name: 'Vagrant Coffee', url: 'http://vagrant.wm-development.com/' },
      { name: 'Cleco Neotek', url: 'https://neotek.jasonrhodes.me/' },
      { name: 'YMCA of Maryland 5k', url: 'https://ymdturkeytrot.org/' },
      { name: 'Curious George', url: 'https://curiousgeorge.jasonrhodes.me/' },
      { name: 'Curious World', url: '/live-demos/curious-world/#' },
    ],
  },
  {
    key: 'developer',
    title: 'Full Stack Developer',
    projects: [
      { name: 'Window Nation', url: 'https://windownation.com/' },
      { name: 'Cleco Neotek', url: 'https://neotek.jasonrhodes.me/' },
      { name: 'Power to Decide Online Store', url: 'https://shop.powertodecide.org/' },
      { name: 'Liberty Mutual', url: '/live-demos/liberty-mutual/' },
      { name: 'oPower - PG&E', url: '/live-demos/opower-pge/' },
    ],
  },
  {
    key: 'tech',
    title: 'Tech Expert',
    projects: [
      { name: 'Power Dashboard', url: 'https://dash.wblabs.co/d/EDge3c4Zk/live-graph?orgId=1' },
      { name: 'City Garage Kiosk (4k touch)', url: 'https://cgkiosk.wblabs.co/' },
      { name: 'Plex Web Service', url: 'https://plex.wblabs.co' },
    ],
  },
];
