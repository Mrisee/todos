import React, { InputHTMLAttributes, memo } from 'react'
import './Input.scss'

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
	className?: string
	value?: string | number
	onChange?: (value: string) => void
}

const Input = memo(
	({
		className = '',
		value,
		onChange,
		type = 'text',
		placeholder,
		...otherProps
	}: InputProps) => {
		const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
			onChange?.(e.target.value)
		}

		return (
			<div className="input">
				<input
					type={type}
					value={value}
					onChange={onChangeHandler}
					placeholder={placeholder}
					{...otherProps}
				/>
			</div>
		)
	}
)

export default Input
