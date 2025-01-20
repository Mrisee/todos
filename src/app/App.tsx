import React from 'react'

import { TodoList } from '../widgets/TodoList'

function App() {
	return (
		<div className="app">
			<div className="container">
				<h1 className="title">todos</h1>
				<TodoList />
			</div>
		</div>
	)
}

export default App
