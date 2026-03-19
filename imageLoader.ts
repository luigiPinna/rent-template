type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

export default function imageLoader({ src }: ImageLoaderProps): string {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${src}`;
}
