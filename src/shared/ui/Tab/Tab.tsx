import React, { Dispatch, FC, memo, SetStateAction } from 'react'
import { Filter } from '../../../app/types/global'

import cn from 'classnames'

import './Tab.scss'

interface TabProps {
	tab: Filter
	handleFilterChange: (newFilter: Filter) => void
	activeName: string
	setActiveName: Dispatch<SetStateAction<string>>
}

export const Tab: FC<TabProps> = memo(
	({ tab, handleFilterChange, activeName, setActiveName }) => {
		const handlClick = () => {
			handleFilterChange(tab)
			setActiveName(tab)
		}
		return (
			<div
				className={cn('tab', {
					tab_active: activeName === tab,
				})}
				onClick={handlClick}
			>
				{tab}
			</div>
		)
	}
)
