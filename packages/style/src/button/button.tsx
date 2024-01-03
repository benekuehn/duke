import React, { FunctionComponent } from 'react';

import * as stylex from '@stylexjs/stylex';

import '../global.css';

const styles = stylex.create({
    button: {
        display: 'inline-flex',
        padding: '8px 16px',
        alignItems: 'center',
        gap: '8px',
        borderRadius: '4px',
        fontFamily: "'Inter', sans-serif",
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
        border: 'none',
        cursor: 'pointer',
        color: {
            default: '#E5E5F0',
            ':hover': '#B7B7C3',
            ':active': '#5C5C6A',
        },
    },
    disabled: {
        color: '#2E2F3D',
        background: '#000350',
        cursor: 'not-allowed',
    },
});

const variants = stylex.create({
    primary: {
        background: {
            default: '#0007B0',
            ':hover': '#000690',
            ':active': '#000350',
        },
    },
    secondary: {
        background: {
            default: '#2E2F3D',
            ':hover': '#171826',
            ':active': 'transparent',
        },
    },
    outline: {
        background: {
            default: 'transparent',
            ':hover': '#000690',
            ':active': '#000350',
        },
        border: {
            default: '2px solid #0007B0',
            ':hover': '2px solid #000690',
            ':active': '2px solid #000350',
        },
    },
    ghost: {
        background: {
            default: 'transparent',
            ':hover': '#000350',
            ':active': '#000230',
        },
    },
});

export type ButtonProps = {
    children: React.ReactNode;
    variant: keyof typeof variants;
    size?: 'icon';
    isDisabled?: boolean;
};

export const Button: FunctionComponent<ButtonProps> = ({
    children,
    variant = "primary",
    isDisabled = false,
}) => {
    return (
        <button
            type="button"
            {...stylex.props(styles.button, variants[variant], isDisabled && styles.disabled)}
        >
            {children}
        </button>
    );
};
