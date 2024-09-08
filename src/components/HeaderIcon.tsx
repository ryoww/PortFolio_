import { Box, IconButton } from "@chakra-ui/react";
import { ReactElement } from "react";

export interface HeaderIconProps {
    ariaLabel: string;
    icon: ReactElement;
    onClick: () => void;
    pr: number;
}

const HeaderIcon = ({ pr, ariaLabel, icon, onClick }: HeaderIconProps) => {
    return (
        <>
            <Box pr={pr}>
                <IconButton
                    aria-label={ariaLabel}
                    icon={icon}
                    isRound={true}
                    onClick={onClick}
                    size={"lg"}
                ></IconButton>
            </Box>
        </>
    );
};

export default HeaderIcon;
