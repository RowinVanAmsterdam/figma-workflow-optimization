import { generatedTheme } from "./theme.css";

type ThemeProps = {
    children: React.ReactNode;
}

export const ThemeProvider = ({children}: ThemeProps) => {

    return (
        <div className={`${generatedTheme}`}>
            {children}
        </div>
    )
}