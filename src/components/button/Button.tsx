
import { FaSpinner } from 'react-icons/fa';
import type { ButtonProps } from './Button.types';

const colorClasses = {
    primary: 'bg-blue-200 text-blue-800 hover:bg-blue-300 focus:ring-blue-400',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    success: 'bg-green-200 text-green-800 hover:bg-green-300 focus:ring-green-400',
    danger: 'bg-red-200 text-red-800 hover:bg-red-300 focus:ring-red-400',
    'sky-nude': 'bg-sky-200 text-sky-800 hover:bg-sky-300 focus:ring-sky-400',
};

const sizeClasses = {
    sm: {
        iconOnly: 'w-8 h-8 p-1',
        withText: 'px-3 py-1.5 text-sm',
        iconSize: 'text-sm',
    },
    md: {
        iconOnly: 'w-10 h-10 p-2',
        withText: 'px-4 py-2 text-base',
        iconSize: 'text-base',
    },
    lg: {
        iconOnly: 'w-12 h-12 p-2.5',
        withText: 'px-6 py-3 text-lg',
        iconSize: 'text-lg',
    },
};

export const Button = ({
    title,
    Icon,
    colorStyle = 'primary',
    size = 'md',
    isLoading = false,
    className = '',
    disabled,
    ...rest
}: ButtonProps) => {

    const isIconOnly = Icon && !title;
    const sizeClass = isIconOnly
        ? sizeClasses[size].iconOnly
        : sizeClasses[size].withText;


    const baseClasses = `
    flex gap-1 items-center justify-center 
    font-medium rounded-lg 
    focus:outline-none focus:ring-2 focus:ring-opacity-50 
    transition duration-150 ease-in-out cursor-pointer
    ${colorClasses[colorStyle]} 
    ${sizeClass}
    ${className}
  `;

    const buttonDisabled = disabled || isLoading;
    const finalClasses = buttonDisabled
        ? `${baseClasses} opacity-50 cursor-not-allowed`
        : baseClasses;

    return (
        <button
            className={finalClasses}
            disabled={buttonDisabled}
            {...rest}
        >

            {isLoading && (
                <FaSpinner className={`animate-spin ${sizeClasses[size].iconSize} ${title ? 'ltr:mr-2 rtl:ml-2' : ''}`} />
            )}

            {!isLoading && Icon && (
                <Icon className={`${sizeClasses[size].iconSize} ${title ? 'ltr:mr-2 rtl:ml-2' : ''}`} />
            )}

            {title && <span>{title}</span>}
        </button>
    );
};
