export type ButtonType = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "text";
    href?: string;
    className?: string;
    onClick?: () => void;
};