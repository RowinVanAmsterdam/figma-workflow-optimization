import { ButtonType } from '../types/ButtonType';
import * as styles from '../Button.css';

const defaultVariant = 'text';

export const getButtonVariant = (variant: ButtonType['variant'] = defaultVariant) => {
    switch (variant) {
        case 'primary':
            return `${styles.baseButton} ${styles.primaryButton}`;
        case 'secondary':
            return '';
        case 'text':
            return '';
    }
};
