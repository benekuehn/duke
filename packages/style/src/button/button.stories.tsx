import { CubeIcon } from '@radix-ui/react-icons';

import { Button } from './button';

export default {
    title: 'Button',
    component: Button,
};

export const Primary = {
    args: {
        children: 'Test Button',
    },
};

export const Secondary = {
    args: {
        variant: 'secondary',
        children: 'Test Button',
    },
};

export const Outline = {
    args: {
        variant: 'outline',
        children: 'Test Button',
    },
};

export const Ghost = {
    args: {
        variant: 'ghost',
        children: 'Test Button',
    },
};

export const Icon = {
    args: {
        size: 'icon',
        children: <CubeIcon />,
    },
};

export const WithIcon = {
    args: {
        children: (
            <>
                <CubeIcon />
                Test Button
            </>
        ),
    },
};
