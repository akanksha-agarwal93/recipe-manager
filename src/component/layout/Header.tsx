import Image from "next/image"

export const Header = () => {
	const selectedTab = "home"

	const selectedClass =
		"rounded-(--flavorly-radius-pill) bg-white px-4 text-sm font-semibold text-(--flavorly-tomato) shadow-[0_8px_18px_rgba(78,42,28,0.07)]"

	const defaultClass =
		"px-2 text-sm font-medium text-(--flavorly-text-secondary)"

	return (
		<header className='px-2 py-1.5'>
			<div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
				<div className='flex flex-col'>
					<div className='flex items-center gap-3'>
						<Image
							src='/assets/flavorly/logos/flavorly-mark.svg'
							alt='Flavorly'
							width={44}
							height={44}
							className='size-10'
						/>
						<div>
							<Image
								src='/assets/flavorly/logos/flavorly-wordmark.svg'
								alt='Flavorly'
								width={162}
								height={50}
								className='h-8 w-auto'
							/>
						</div>
					</div>
					<p className='mt-0.5 text-xs font-medium text-(--flavorly-text-muted)'>
						Fresh recipes, saved beautifully
					</p>
				</div>
				<div className='flex flex-1 items-center justify-center gap-5'>
					<button
						className={`inline-flex h-10 items-center gap-2 ${
							selectedTab === "home" ? selectedClass : defaultClass
						}`}
					>
						<Image
							src='/assets/flavorly/icons/home.svg'
							alt=''
							width={20}
							height={20}
							className='size-5'
						/>
						<span>Home</span>
					</button>
					<button className='inline-flex h-10 items-center gap-2 px-2 text-sm font-medium text-(--flavorly-text-secondary)'>
						<Image
							src='/assets/flavorly/icons/recipes.svg'
							alt=''
							width={20}
							height={20}
							className='size-5'
						/>
						<span>Recipes</span>
					</button>
					<button className='inline-flex h-10 items-center gap-2 px-2 text-sm font-medium text-(--flavorly-text-secondary)'>
						<Image
							src='/assets/flavorly/icons/favorites.svg'
							alt=''
							width={20}
							height={20}
							className='size-5'
						/>
						<span>Favorites</span>
					</button>
					<button className='inline-flex h-10 items-center gap-2 px-2 text-sm font-medium text-(--flavorly-text-secondary)'>
						<Image
							src='/assets/flavorly/icons/meal-plans.svg'
							alt=''
							width={20}
							height={20}
							className='size-5'
						/>
						<span>Meal Plans</span>
					</button>
					<button className='inline-flex h-10 items-center gap-2 px-2 text-sm font-medium text-(--flavorly-text-secondary)'>
						<Image
							src='/assets/flavorly/icons/shopping-list.svg'
							alt='Shopping List'
							width={20}
							height={20}
							className='size-5'
						/>
						<span>Shopping List</span>
					</button>
				</div>

				<div className='flex items-center justify-between gap-3 md:justify-end'>
					<div className='flex items-center gap-2'>
						<button className='flex size-10 items-center justify-center rounded-(--flavorly-radius-pill) text-sm font-bold text-(--flavorly-tomato)'>
							<Image
								src='/assets/flavorly/icons/notification.svg'
								alt=''
								width={20}
								height={20}
								className='size-5'
							/>
						</button>
						<div className='flex size-10 items-center justify-center rounded-(--flavorly-radius-pill) bg-(--flavorly-surface-peach) text-sm font-bold text-(--flavorly-tomato)'>
							A
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
