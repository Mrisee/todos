import React, { FC, memo } from 'react'

import { Filter, TodoItem } from '../../../app/types/global'
import { TabList } from '../../TabList'
import Button from '../../../shared/ui/Button/Button'

import './Footer.scss'

interface FooterProps {
	todoList: TodoItem[]
	setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>
	setFilter: (newFilter: Filter) => void
	activeTab: string
}

const Footer: FC<FooterProps> = memo(
	({ activeTab, todoList, setTodoList, setFilter }) => {
		const uncompletedCount = todoList.filter((todo) => !todo.completed).length

		const handleFilterChange = (newFilter: Filter) => {
			setFilter(newFilter)
		}

		const clearCompleted = () => {
			setTodoList((prevList) => prevList.filter((todo) => !todo.completed))
		}

		const isClearDisabled = !todoList.filter((todo) => todo.completed).length

		return (
			<div className="footer">
				<span>{uncompletedCount} items left</span>
				<div className="footer__filters">
					<TabList
						activeTab={activeTab}
						handleFilterChange={handleFilterChange}
						tabNames={['All', 'Active', 'Completed']}
					/>
				</div>
				<Button
					data-testid="clear-completed"
					disabled={isClearDisabled}
					onClick={clearCompleted}
				>
					Clear completed
				</Button>
			</div>
		)
	}
)

export default Footer
