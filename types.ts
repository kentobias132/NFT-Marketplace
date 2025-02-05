// src/types.ts
export type ImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  style?: React.CSSProperties;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  objectPosition?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  placeholder?: "blur" | "empty";
  sizes?: string;
};
