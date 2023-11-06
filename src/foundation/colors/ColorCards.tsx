import { Typography } from "@/shared/Typography/Typography";
import { colorCardHeader, headerBackground, headerTitleWrapper } from "./colorCards.css";



type ColorCardProps = {
  title: string;
  subtitle?: string;
  color: string;
  dark?: boolean;
};

export const ColorCardHeader = ({
  title,
  color,
  subtitle = "",
  dark,
}: ColorCardProps) => {
  return (
    <div className={colorCardHeader}>
      <div
        className={headerTitleWrapper}
        style={{
          ...(dark && {
            // color: vars.color.neutrals.blacks.B60,
            // background: vars.color.neutrals.whites.W100,
          }),
        }}
      >
        <Typography >
          {title}
        </Typography>
        <Typography>{subtitle}</Typography>
      </div>
      <div>
        <div
          className={headerBackground}
          style={{ backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};
