import { Download } from './download.model';

export class Torrent {
  torrentId: string;
  hash: string;
  status: TorrentStatus;
  rdId: string;
  rdName: string;
  rdSize: number;
  rdHost: string;
  rdSplit: number;
  rdProgress: number;
  rdStatus: string;
  rdAdded: Date;
  rdEnded: Date;
  rdSpeed: number;
  rdSeeders: number;
  rdFiles: string;

  files: TorrentFile[];
  downloads: Download[];
}

export class TorrentFile {
  id: string;
  path: string;
  bytes: number;
  selected: boolean;

  download: Download;
}

export enum TorrentStatus {
  RealDebrid = 0,
  WaitingForDownload = 1,
  DownloadQueued = 2,
  Downloading = 3,
  Finished = 4,

  Error = 99,
}
