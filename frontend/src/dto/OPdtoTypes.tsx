export interface OPdtoTypes {
  id: number;
  saga: string;
  arcName: string;
  epsRange: string;
  totalEps: number|string;
  description: string;
  imageUrl: string;
  Episodes: Episode[];
}

export interface Episode {
  episodeNumber: number;
  title: string;
  synopsis: string;
}