import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

import * as stylex from '@stylexjs/stylex';

import '../global.css';

// TODO use defineVars API once thats working with Next

const styles = stylex.create({
    button: {
        display: 'inline-flex',
        padding: '8px 16px',
        alignItems: 'center',
        gap: '8px',
        borderRadius: '4px',
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.87rem',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
        border: 'none',
        cursor: 'pointer',
        color: {
            default: 'var(--light-500)',
            ':hover': 'var(--grey-100)',
            ':active': 'var(--grey-300)',
        },
    },
    disabled: {
        color: 'var(--grey-500)',
        background: 'var(--primary-900)',
        cursor: 'not-allowed',
    },
});

const variants = stylex.create({
    primary: {
        background: {
            default: 'var(--primary-500)',
            ':hover': 'var(--primary-700)',
            ':active': 'var(--primary-900)',
        },
    },
    secondary: {
        background: {
            default: 'var(--grey-700)',
            ':hover': 'var(--grey-900)',
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
            default: '2px solid var(--primary-500)',
            ':hover': '2px solid var(--primary-700)',
            ':active': '2px solid var(--primary-900)',
        },
    },
    ghost: {
        background: {
            default: 'transparent',
            ':hover': 'var(--primary-700)',
            ':active': 'var(--primary-900)',
        },
    },
});

export type ButtonProps = {
    variant?: keyof typeof variants;
    size?: 'icon';
    isDisabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FunctionComponent<ButtonProps> = ({
    variant = 'primary',
    isDisabled = false,
    ...props
}) => {
    return (
        <button
            type="button"
            {...stylex.props(styles.button, variants[variant], isDisabled && styles.disabled)}
            disabled
            {...props}
        />
    );
};
