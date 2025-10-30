import type { IconType } from 'react-icons';
import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title?: string;
    Icon?: IconType;
    colorStyle?: 'primary' | 'secondary' | 'success' | 'danger' | 'sky-nude';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
};
