import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import TodoList from '../ui/TodoList'

describe('TodoList Component', () => {
	test('renders TodoList component', () => {
		render(<TodoList />)
		const inputElement = screen.getByPlaceholderText(/What needs to be done?/i)
		expect(inputElement).toBeInTheDocument()
	})

	test('filters tasks correctly', () => {
		render(<TodoList />)
		const activeFilterButton = screen.getByText(/Active/i)
		fireEvent.click(activeFilterButton)
		const tasks = screen.getAllByRole('listitem')
		tasks.forEach((task) => {
			expect(task).not.toHaveClass('todo--active')
		})
	})

	test('adds a new task correctly', () => {
		render(<TodoList />)

		const inputElement = screen.getByTestId('todo-input')
		const addButton = screen.getByTestId('add-button')

		fireEvent.change(inputElement, { target: { value: 'New Task' } })
		fireEvent.click(addButton)

		const newTask = screen.getByText(/New Task/i)
		expect(newTask).toBeInTheDocument()
	})

	test('toggles task completion', () => {
		render(<TodoList />)

		const firstTask = screen.getAllByRole('listitem')[0]

		const statusToggle = screen.getByTestId(`toggle-status-${firstTask.id}`)
		fireEvent.click(statusToggle)

		expect(firstTask).toHaveClass('todo--active')
	})

	test('clears completed tasks', () => {
		render(<TodoList />)

		const clearButton = screen.getByTestId('clear-completed')

		fireEvent.click(clearButton)

		const completedTasks = screen.queryAllByRole('listitem')
		completedTasks.forEach((task) => {
			expect(task).not.toHaveClass('todo--active')
		})
	})

	test('does not rerender tasks on input change', () => {
		render(<TodoList />)

		const initialTodoItems = screen.getAllByRole('listitem')

		const inputElement = screen.getByPlaceholderText(/What needs to be done?/i)
		fireEvent.change(inputElement, { target: { value: 'Testing' } })

		const todoItemsAfterChange = screen.getAllByRole('listitem')
		expect(initialTodoItems.length).toBe(todoItemsAfterChange.length)
	})
})
