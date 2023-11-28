import type { Preview } from "@storybook/react";
import React from "react";
import { AppProviders } from "../src/app/AppProviders";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        options: {
            storySort: {
                method: "",
                order: ["Foundation", "Components"],
                locales: "",
            },
        },
    },

    decorators: [
        (Story) => (
            <AppProviders>
                <div
                    className="custom-story-wrapper"
                    style={{
                        maxWidth: "1000px",
                        margin: "0 auto",
                    }}>
                    <Story />
                </div>
            </AppProviders>
        ),
    ],
};

export default preview;
