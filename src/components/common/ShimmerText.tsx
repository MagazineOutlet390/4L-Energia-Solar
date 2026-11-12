import React from "react";

export interface ShimmerTextProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

/**
 * Componente reutilizável para aplicar o efeito Shimmer padronizado da 4L Energia Solar
 * nos títulos principais (H1) e títulos de destaque das seções.
 *
 * - variant="light": Para fundos escuros (Heroes e banners em slate-950/blue-950)
 * - variant="dark": Para fundos claros (Cards e seções em branco/slate-50)
 *
 * Respeita automaticamente `@media (prefers-reduced-motion: reduce)` em src/index.css.
 */
export const ShimmerText: React.FC<ShimmerTextProps> = ({
  children,
  variant = "light",
  className = ""
}) => {
  const baseClass = variant === "light" ? "title-shimmer-light" : "title-shimmer";
  return <span className={`${baseClass} ${className}`.trim()}>{children}</span>;
};
