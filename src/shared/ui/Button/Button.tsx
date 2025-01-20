import { FC, memo } from 'react'

import './Button.scss'

export enum ThemeButton {
	CLEAR = 'clear',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ThemeButton
}

const Button: FC<ButtonProps> = memo((props) => {
	const { className, children, theme, ...otherProps } = props
	return (
		<button type="button" className="button" {...otherProps}>
			{children}
		</button>
	)
})

export default Button
