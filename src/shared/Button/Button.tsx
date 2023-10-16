import Link from "next/link";
import { getButtonVariant } from "./helpers/getButtonVariant";
import { ButtonType } from "./types/ButtonType";
import * as styles from './Button.css';

export const Button = (props: ButtonType) => {
    const { children, variant, href, className, onClick } = props;
    const buttonVariant = getButtonVariant(variant);

    if (href) {
        return (
            <Link href={href} className={buttonVariant}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={buttonVariant}>
            {children}
        </button>
    );
};
