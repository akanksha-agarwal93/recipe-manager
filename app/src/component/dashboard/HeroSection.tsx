import Image from "next/image"

export const HeroSection = () => {
	return (
		<section className='w-full px-5 pb-5 pt-2 flex flex-row flex-wrap items-center justify-between gap-5'>
			<div className='flex-1'>
				<h1 className='text-[50px] font-extrabold leading-[0.95] tracking-[-0.015em] text-foreground'>
					What are we
				</h1>

				<div className='relative -mt-1 inline-flex items-start'>
					<p className='font-flavorly-script text-[54px] font-semibold leading-[0.9] tracking-normal text-(--flavorly-tomato)'>
						cooking today?
					</p>
				</div>
			</div>

			<div className='flex items-center gap-5 w-auto flex-2'>
				<div className='flex h-12.5 flex-1 items-center rounded-(--flavorly-radius-pill) border border-(--flavorly-border) bg-white px-6 shadow-[0_8px_24px_rgba(78,42,28,0.06)]'>
					<input
						type='text'
						placeholder='Search recipes'
						className='w-full bg-transparent text-sm font-medium text-(--flavorly-text) outline-none placeholder:text-(--flavorly-text-muted)'
					/>

					<Image
						src='/assets/flavorly/icons/search.svg'
						alt=''
						width={22}
						height={22}
						className='size-5'
					/>
				</div>

				<button className='inline-flex h-[50px] items-center gap-2 rounded-(--flavorly-radius-pill) bg-(--flavorly-tomato) px-7 text-sm font-bold text-white shadow-[0_12px_24px_rgba(233,67,50,0.24)]'>
					<span className='text-xl font-light leading-none'>+</span>
					Add Recipe
				</button>
			</div>
		</section>
	)
}
