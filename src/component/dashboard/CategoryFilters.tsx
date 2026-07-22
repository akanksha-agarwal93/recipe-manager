import Image from "next/image"

const categories = [
	{
		label: "Breakfast",
		icon: "/assets/flavorly/icons/category-breakfast.svg",
		background: "var(--filter-breakfast-bg)",
		color: "var(--filter-breakfast-text)",
	},
	{
		label: "Lunch",
		icon: "/assets/flavorly/icons/category-lunch.svg",
		background: "var(--filter-lunch-bg)",
		color: "var(--filter-lunch-text)",
	},
	{
		label: "Dinner",
		icon: "/assets/flavorly/icons/category-dinner.svg",
		background: "var(--filter-dinner-bg)",
		color: "var(--filter-dinner-text)",
	},
	{
		label: "Dessert",
		icon: "/assets/flavorly/icons/category-dessert.svg",
		background: "var(--filter-dessert-bg)",
		color: "var(--filter-dessert-text)",
	},
	{
		label: "Vegetarian",
		icon: "/assets/flavorly/icons/category-vegetarian.svg",
		background: "var(--filter-vegetarian-bg)",
		color: "var(--filter-vegetarian-text)",
	},
	{
		label: "Vegan",
		icon: "/assets/flavorly/icons/category-vegan.svg",
		background: "var(--filter-vegan-bg)",
		color: "var(--filter-vegan-text)",
	},
	{
		label: "Quick & Easy",
		icon: "/assets/flavorly/icons/category-quick-easy.svg",
		background: "var(--filter-quick-easy-bg)",
		color: "var(--filter-quick-easy-text)",
	},
	{
		label: "More",
		icon: "/assets/flavorly/icons/category-more.svg",
		background: "var(--filter-more-bg)",
		color: "var(--filter-more-text)",
	},
]

export const CategoryFilters = () => {
	return (
		<div className='flex w-full items-center justify-center gap-3 overflow-x-auto py-2'>
			{categories.map((category) => (
				<button
					key={category.label}
					className='flex h-8 shrink-0 items-center gap-2 rounded-(--flavorly-radius-pill) border border-white/70 px-4 text-sm font-semibold shadow-[0_8px_18px_rgba(78,42,28,0.07)]'
					style={{
						backgroundColor: category.background,
						color: category.color,
					}}
				>
					<Image
						src={category.icon}
						alt=''
						width={24}
						height={24}
						className='size-6'
					/>
					{category.label}
				</button>
			))}
		</div>
	)
}
