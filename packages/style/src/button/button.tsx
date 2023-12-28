import React, { FunctionComponent } from 'react';
import * as stylex from '@stylexjs/stylex';
import { fonts } from '../tokens.stylex'
import { ButtonProps } from './button.types';
import "../global.css";

const styles = stylex.create({
    button: {
        display: 'inline-flex',
        padding: '8px 16px',
        alignItems: 'center',
        gap: '30px',
        borderRadius: '4px',
        background: {
            default: '#0007B0',
            ':hover': '#000690',
            ':active': '#000350',
        },
        color: {
            default: '#E5E5F0',
            ':hover': '#B7B7C3',
            ':active': '#5C5C6A',
        },
        fontFamily: fonts.fontFamily,
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
        border: 'none',
        cursor: 'pointer',
    },
    disabled: {
        color: '#2E2F3D',
        background: '#000350',
        cursor: 'not-allowed',
    },
});

export const Button: FunctionComponent<ButtonProps> = ({ children, isDisabled = false }) => {

    return (
        <button {...stylex.props(styles.button, isDisabled && styles.disabled)}>Button text</button>
    )
}
