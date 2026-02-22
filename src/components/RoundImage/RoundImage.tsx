import React from "react";
import styles from "./RoundImage.module.scss";
import { clsx } from "clsx";

interface RoundImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: "small" | "medium" | "large";
  border?: boolean;
}

const RoundImage: React.FC<RoundImageProps> = ({
  size = "medium",
  className,
  border = false,
  ...rest
}) => {
  return (
    <img
      {...rest}
      className={clsx(
        styles.roundImage,
        styles[size],
        border && styles.withBorder,
        className
      )}
    />
  );
};

export default RoundImage;