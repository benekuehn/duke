import React from 'react';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
    button: {
        backgroundColor: 'blue',
        border: '1px solid #ddd',
        borderRadius: 4,
        color: '#333',
        fontSize: 16,
        padding: '3px 10px',
    },
});

export const Button = () => {
    return (
        <button {...stylex.props(styles.button)}>Button</button>
    )
}
