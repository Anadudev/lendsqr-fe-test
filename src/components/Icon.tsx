import React from "react";

const Icon = ({
  src,
  size,
  style,
  className,
}: {
  src: string;
  alt?: string;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}) => {
  return (
    <span
      className={className}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: size,
        height: size,
        display: "inline-block",
        ...style,
      }}
    />
  );
};

export default Icon;
