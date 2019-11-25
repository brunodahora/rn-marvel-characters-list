export interface ThumbnailType {
  path: string;
  extension: string;
}
export interface ItemType {
  resourceURI: string;
  name: string;
}

export interface ItemArrayType {
  items: Array<ItemType>;
}

export interface CharacterType {
  id: number;
  name: string;
  description: string;
  thumbnail: ThumbnailType;
  series: ItemArrayType;
  events: ItemArrayType;
}
