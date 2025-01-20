import React, { FC, memo, useState } from 'react'

import Button from '../../../shared/ui/Button/Button'
import Input from '../../../shared/ui/Input/Input'
import { TodoItem } from '../../../app/types/global'

import './Header.scss'

interface HeaderProps {
	todoList: TodoItem[]
	setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>
}

const Header: FC<HeaderProps> = memo(({ todoList, setTodoList }) => {
	const [inputValue, setInputValue] = useState<string>('')

	const addNewTodo = () => {
		const newId =
			todoList.length > 0
				? (parseInt(todoList.slice(-1)[0].id) + 1).toString()
				: '1'

		const newTodo = {
			id: newId,
			title: inputValue,
			completed: false,
		}

		if (newTodo) {
			setTodoList((prev) => [...prev, newTodo])
			setInputValue('')
		}
	}

	return (
		<div className="header">
			<Button
				data-testid="add-button"
				onClick={addNewTodo}
				disabled={!inputValue}
			>
				Add
			</Button>
			<Input
				data-testid="todo-input"
				value={inputValue}
				onChange={(text) => setInputValue(text)}
				placeholder="What needs to be done?"
			/>
		</div>
	)
})

export default Header
