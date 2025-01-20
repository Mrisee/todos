declare module '*.scss' {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames
	export = classNames
}

export type Filter = 'All' | 'Active' | 'Completed'

export interface TodoItem {
	id: string
	title: string
	completed: boolean
}
