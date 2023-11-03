import { AppLayout } from "@/Layout/AppLayout";
import { ThemeProvider } from "@/theme/ThemeProvider";

type AppProvidersProps = {
    children: React.ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => {
    return (
        <ThemeProvider>
            <AppLayout>{children}</AppLayout>
        </ThemeProvider>
    );
};
