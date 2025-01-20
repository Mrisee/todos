import { useCallback, useMemo, useState } from 'react'

import { Todo } from '../../../entities/Todo'
import { Header } from '../../../entities/Header'
import { Footer } from '../../../entities/Footer'
import { Filter, TodoItem } from '../../../app/types/global'

import { todoData } from '../../../shared/data/data'

import './TodoList.scss'

const TodoList = () => {
	const [todoList, setTodoList] = useState<TodoItem[]>(todoData)
	const [filter, setFilter] = useState<Filter>('All')

	const toggleComplete = useCallback((id: string) => {
		setTodoList((prevList) =>
			prevList.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		)
	}, [])

	const filteredTodoList = useMemo(() => {
		return todoList.filter((todo) => {
			switch (filter) {
				case 'Active':
					return !todo.completed
				case 'Completed':
					return todo.completed
				default:
					return true
			}
		})
	}, [todoList, filter])

	return (
		<div className="todo-list">
			<Header todoList={todoList} setTodoList={setTodoList} />
			<ul className="todo-list__list">
				{todoList.length > 0 ? (
					filteredTodoList.map((todo) => {
						return (
							<Todo
								key={todo.id}
								id={todo.id}
								title={todo.title}
								completed={todo.completed}
								onToggle={toggleComplete}
							/>
						)
					})
				) : (
					<div className="todo">All todos is complete!</div>
				)}
			</ul>
			<Footer
				todoList={todoList}
				setFilter={setFilter}
				setTodoList={setTodoList}
				activeTab={filter}
			/>
		</div>
	)
}

export default TodoList
