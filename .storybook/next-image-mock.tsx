import type { CSSProperties } from "react";

/**
 * Mock de `next/image` pour Storybook (builder Vite, sans runtime Next).
 * Rend un `<img>` simple servi depuis `staticDirs` (../public). Reproduit
 * le comportement de `fill` (position absolue + object-fit cover) pour que
 * les compositions rendent comme sur le site. Aliasé dans .storybook/main.ts.
 */
export default function NextImageMock({
  src,
  alt = "",
  fill,
  className,
  style,
  // Props spécifiques à next/image, non valides sur <img> → on les écarte.
  priority: _priority,
  quality: _quality,
  loader: _loader,
  placeholder: _placeholder,
  blurDataURL: _blurDataURL,
  unoptimized: _unoptimized,
  onLoadingComplete: _onLoadingComplete,
  fetchPriority: _fetchPriority,
  ...rest
}: {
  src: string | { src: string };
  alt?: string;
  fill?: boolean;
  className?: string;
  style?: CSSProperties;
  [key: string]: unknown;
}) {
  const resolved = typeof src === "string" ? src : src?.src;
  const fillStyle: CSSProperties = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
    : {};
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={resolved} alt={alt} className={className} style={{ ...fillStyle, ...style }} {...rest} />;
}
