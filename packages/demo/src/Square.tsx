import { MovingBox } from "movingbox";

type SquareProps = {
  color: "red" | "green"
} & Record<string, any>;

export const Square = ({ color, ...rest }: SquareProps) => {
  return (
    <MovingBox
      {...rest}
      fromFade
      from={{ yDelta: 0, xDelta: 0, heightRatio: 0.4, widthRatio: 1 }}
      style={{
        minWidth: "50px",
        height: `100px`,
        background: color,
        border: "1px solid white",
      }}
    />
  );
};
