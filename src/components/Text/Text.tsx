import React from "react";
import styles from "./Text.module.scss";
import clsx from "clsx";

type Font = "default" | "betania" | "japanese";
type Color = "primary" | "accent";
type Variant = "body-sm" | "body-md" | "body-lg" | "heading-xl";
type Align = "left" | "center" | "right";

type TextProps<T extends React.ElementType> = {
  as?: T;
  font?: Font;
  color?: Color;
  variant?: Variant;
  align?: Align;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const fontClasses: Record<Font, string> = {
  default: styles.default,
  betania: styles.betania,
  japanese: styles.japanese,
};

const colorClasses: Record<Color, string> = {
  primary: styles.primary,
  accent: styles.accent,
};

const variantClasses: Record<Variant, string> = {
  "body-sm": styles.small,
  "body-md": styles.medium,
  "body-lg": styles.large,
  "heading-xl": styles.heading,
};

const alignClasses: Record<Align, string> = {
  left: styles.alignLeft,
  center: styles.alignCenter,
  right: styles.alignRight,
};

const Text = <T extends React.ElementType = "p">({
  as,
  font = "default",
  color = "primary",
  variant = "body-sm",
  align = "left",
  className,
  children,
  ...rest
}: TextProps<T>) => {
  const Component = as || "p";

  return (
    <Component
      className={clsx(
        styles.text,
        fontClasses[font],
        colorClasses[color],
        variantClasses[variant],
        alignClasses[align],
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Text;