export interface ThumbnailType {
  path: string;
  extension: string;
}

export interface CharacterType {
  id: number;
  name: string;
  thumbnail: ThumbnailType;
}
