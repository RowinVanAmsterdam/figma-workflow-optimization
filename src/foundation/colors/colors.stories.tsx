import { Typography } from "@/shared/Typography/Typography";
import { Meta, StoryObj } from "@storybook/react";
import { ColorCardHeader } from "./ColorCards";


const meta: Meta = {
  title: "Foundation/Colors",
};

export default meta;

type Story = StoryObj<any>;

export const Colors: Story = {
  render: () => {
    return (
      <div>
      
          <Typography >
            Colors
          </Typography>

          <Typography >
            The colors are set using a vanilla extract theme. This means when
            you inspect it in the devtools the names are obfuscated. Internally
            however, they match the names from Figma.
          </Typography>

         
      </div>
    );
  },
};
