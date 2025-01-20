import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders heading element', () => {
	render(<App />)
	const headingElement = screen.getByText(/todos/i)
	expect(headingElement).toBeInTheDocument()
})
