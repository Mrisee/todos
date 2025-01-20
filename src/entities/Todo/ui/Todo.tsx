import { memo } from 'react'
import cn from 'classnames'

import './Todo.scss'

interface TodoProps {
	id: string
	title: string
	completed: boolean
	onToggle: (id: string) => void
}

const Todo: React.FC<TodoProps> = memo(({ id, title, completed, onToggle }) => {
	return (
		<li className={cn('todo', { 'todo--active': completed })} id={id}>
			<div
				data-testid={`toggle-status-${id}`}
				className="todo__status"
				onClick={() => onToggle(id)}
			></div>
			<div className="todo__title">{title}</div>
		</li>
	)
})

export default Todo
