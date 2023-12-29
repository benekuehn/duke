export enum ButtonVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    // DESTRUCTIVE = "destructive",
    OUTLINE = 'outline',
    GHOST = 'ghost',
}

export type ButtonProps = {
    children: React.ReactNode;
    variant: ButtonVariant;
    size?: 'icon';
    isDisabled?: boolean;
};
