import React, { FC, memo, useState } from 'react'
import { Tab } from '../../../shared/ui/Tab/Tab'
import { Filter } from '../../../app/types/global'

import './TabList.scss'

interface TabListProps {
	tabNames: Filter[]
	handleFilterChange: (newFilter: Filter) => void
	activeTab: string
}

const TabList: FC<TabListProps> = memo(
	({ tabNames, handleFilterChange, activeTab }) => {
		const [activeName, setActiveName] = useState(activeTab)

		return (
			<div className="tab-list">
				{tabNames.map((tab: Filter) => {
					return (
						<Tab
							activeName={activeName}
							setActiveName={setActiveName}
							handleFilterChange={handleFilterChange}
							key={tab}
							tab={tab}
						/>
					)
				})}
			</div>
		)
	}
)

export default TabList
