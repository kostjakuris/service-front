import React from 'react'

type ButtonVariants = 'primary'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariants
}

const Button = ({
	className,
	variant,
	children,
	onClick,
	disabled,
	onMouseLeave,
	onMouseEnter,
}: ButtonProps) => {
	const buttonConfig: Record<string, string> = {
		primary: 'bg-light-green text-big-regular cursor-pointer text-white rounded-[28px]',
	}

	const buttonClassname = buttonConfig[variant as ButtonVariants]
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			onMouseLeave={onMouseLeave}
			onMouseEnter={onMouseEnter}
			className={`${buttonClassname ? buttonClassname : ''} ${className ? className : ''}`}
		>
			{children}
		</button>
	)
}

export default Button
