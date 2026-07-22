import Image from "next/image"

interface RecipeCardProps {
	title: string
	imageUrl: string
	preparationTime: string
	difficulty: string
	tags: string[]
}

export const RecipeCard = ({
	title,
	imageUrl,
	preparationTime,
	difficulty,
	tags,
}: RecipeCardProps) => {
	return (
		<div className='w-[220px] overflow-hidden rounded-(--flavorly-radius-lg) border border-(--flavorly-border) bg-white shadow-[0_8px_20px_rgba(78,42,28,0.05)]'>
			<div className='relative aspect-[4/3] w-full overflow-hidden bg-(--flavorly-surface-warm)'>
				<Image
					src={imageUrl}
					alt={title}
					fill
					className='object-cover'
					sizes='220px'
				/>
			</div>

			<div className='flex flex-col gap-2 px-3.5 pb-3.5 pt-3'>
				<h3 className='line-clamp-2 text-[15px] font-bold leading-snug text-(--flavorly-text)'>
					{title}
				</h3>

				<div className='flex items-center gap-2 text-xs font-medium text-(--flavorly-text-muted)'>
					<span>{preparationTime}</span>
					<span className='size-1 rounded-full bg-(--flavorly-border-strong)' />
					<span>{difficulty}</span>
				</div>

				<div className='flex flex-wrap gap-1.5 pt-1'>
					{tags.map((tag) => (
						<span
							key={tag}
							className='rounded-(--flavorly-radius-pill) bg-(--flavorly-surface-peach) px-2.5 py-1 text-[11px] font-semibold leading-none text-(--flavorly-tomato)'
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	)
}
