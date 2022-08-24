export interface IconProps {
  alt?: string;
  src?: string;
  size?: string;
  classMods?: string | string[];
}

export interface ImageProps {
  src?: string;
  alt?: string;
  size?: string;
  classMods?: string | string[];
  loading?: 'lazy' | 'eager';
  fit?: 'cover' | 'contain';
}
