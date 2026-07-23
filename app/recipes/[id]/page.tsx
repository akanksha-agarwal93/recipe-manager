import Image from "next/image"
import Link from "next/link"
import { mockRecipes } from "@/src/data/mockRecipes"

type RecipeDetailPageProps = {
	params: Promise<{
		id: string
	}>
}

export default async function RecipeDetailPage({
	params,
}: RecipeDetailPageProps) {
	const { id } = await params

	const recipe = mockRecipes.find((recipe) => recipe.id === id)
	const heroImage =
		recipe?.image?.replace("w=1200", "w=2000").replace("q=80", "q=100") ??
		"/assets/flavorly/recipes/recipe-placeholder.svg"
	const totalTime = (recipe?.prepTime ?? 0) + (recipe?.cookTime ?? 0)

	return (
		<main className='flex w-full flex-col'>
			<section className='px-2 pb-6 pt-2'>
				<div className='relative min-h-110 overflow-hidden rounded-(--flavorly-radius-xl) border border-(--flavorly-border) bg-(--flavorly-surface-warm) shadow-(--flavorly-shadow-card)'>
					<Image
						src={heroImage}
						alt={recipe?.title || "Recipe Not Found"}
						fill
						className='object-cover'
						priority
						sizes='100vw'
					/>

					<div className='recipe-hero-overlay absolute inset-0' />

					<div className='absolute left-7 top-7'>
						<Link
							href='/'
							className='flex size-14 items-center justify-center rounded-(--flavorly-radius-pill) bg-white text-foreground shadow-[0_10px_24px_rgba(0,0,0,0.18)]'
						>
							<Image
								src='/assets/flavorly/icons/arrow-left.svg'
								alt='Back to recipes'
								width={24}
								height={24}
								className='size-6'
							/>
						</Link>
					</div>

					<div className='absolute right-7 top-7 flex items-center gap-4'>
						<button className='flex size-14 items-center justify-center rounded-(--flavorly-radius-pill) bg-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]'>
							<Image
								src='/assets/flavorly/icons/heart.svg'
								alt='Add to favorites'
								width={24}
								height={24}
								className='size-6'
							/>
						</button>
						<button className='flex size-14 items-center justify-center rounded-(--flavorly-radius-pill) bg-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]'>
							<Image
								src='/assets/flavorly/icons/edit.svg'
								alt='Edit recipe'
								width={24}
								height={24}
								className='size-6'
							/>
						</button>
						<button className='flex size-14 items-center justify-center rounded-(--flavorly-radius-pill) bg-white shadow-[0_10px_24px_rgba(0,0,0,0.18)]'>
							<Image
								src='/assets/flavorly/icons/more-vertical.svg'
								alt='More options'
								width={24}
								height={24}
								className='size-6'
							/>
						</button>
					</div>

					<div className='absolute bottom-7 left-7 max-w-155 text-white'>
						<h1 className='max-w-130 text-5xl font-black leading-[0.95] tracking-[-0.02em] drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]'>
							{recipe?.title || "Recipe not found"}
						</h1>
						<p className='mt-4 max-w-140 text-base font-semibold leading-snug text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]'>
							{recipe?.description}
						</p>

						<div className='mt-6 inline-flex items-center overflow-hidden rounded-(--flavorly-radius-lg) bg-black/45 text-white shadow-[0_12px_28px_rgba(0,0,0,0.22)] backdrop-blur-md'>
							<div className='flex items-center gap-3 px-5 py-3'>
								<Image
									src='/assets/flavorly/icons/clock.svg'
									alt=''
									width={28}
									height={28}
									className='size-7'
								/>
								<div>
									<p className='text-base font-bold leading-none'>
										{totalTime} min
									</p>
									<p className='mt-1 text-xs font-medium leading-none text-white/75'>
										Prep {recipe?.prepTime ?? 0} min
									</p>
								</div>
							</div>
							<div className='h-11 w-px bg-white/20' />
							<div className='flex items-center gap-3 px-5 py-3'>
								<Image
									src='/assets/flavorly/icons/clock.svg'
									alt=''
									width={28}
									height={28}
									className='size-7'
								/>
								<div>
									<p className='text-base font-bold leading-none'>
										{recipe?.cookTime ?? 0} min
									</p>
									<p className='mt-1 text-xs font-medium leading-none text-white/75'>
										Cook Time
									</p>
								</div>
							</div>
							<div className='h-11 w-px bg-white/20' />
							<div className='flex items-center gap-3 px-5 py-3'>
								<Image
									src='/assets/flavorly/icons/servings.svg'
									alt=''
									width={28}
									height={28}
									className='size-7'
								/>
								<div>
									<p className='text-base font-bold leading-none'>
										{recipe?.servings ?? 0}
									</p>
									<p className='mt-1 text-xs font-medium leading-none text-white/75'>
										Servings
									</p>
								</div>
							</div>
							<div className='h-11 w-px bg-white/20' />
							<div className='flex items-center gap-3 px-5 py-3'>
								<Image
									src='/assets/flavorly/icons/difficulty.svg'
									alt=''
									width={28}
									height={28}
									className='size-7'
								/>
								<div>
									<p className='text-base font-bold capitalize leading-none'>
										{recipe?.difficulty ?? "easy"}
									</p>
									<p className='mt-1 text-xs font-medium leading-none text-white/75'>
										Difficulty
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
