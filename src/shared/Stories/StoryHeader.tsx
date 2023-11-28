import { mb10 } from "@/foundation/spacing/margin.css";
import { Typography } from "@/foundation/typography/Typography";
import { mergeClassNames } from "@/utils/mergeClassNames";

type StoryHeaderProps = {
    children: React.ReactNode;
    className?: string;
};

export const StoryHeader = (props: StoryHeaderProps) => {
    const { children, className } = props;
    const classNames = mergeClassNames(className, mb10);

    return (
        <Typography component="h1" variant="text-6xl" className={classNames}>
            {children}
        </Typography>
    );
};
