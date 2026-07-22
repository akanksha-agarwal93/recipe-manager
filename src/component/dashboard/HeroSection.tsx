import Image from "next/image"

export const HeroSection = () => {
	return (
		<section className='flex w-full flex-col gap-4 px-2 pb-4 pt-3 md:flex-row md:items-end md:justify-between'>
			<div className='md:basis-[36%]'>
				<h1 className='text-[46px] font-extrabold leading-[0.95] tracking-[-0.015em] text-foreground'>
					What are we
				</h1>

				<div className='relative -mt-1 inline-flex items-start'>
					<p className='font-flavorly-script text-[50px] font-semibold leading-[0.9] tracking-normal text-(--flavorly-tomato)'>
						cooking today?
					</p>
				</div>
			</div>

			<div className='flex w-full items-center gap-4 md:basis-[58%]'>
				<div className='flex h-12 flex-[0_1_60%] items-center rounded-(--flavorly-radius-pill) border border-(--flavorly-border) bg-white px-6 shadow-[0_8px_20px_rgba(78,42,28,0.05)]'>
					<input
						type='text'
						placeholder='Search recipes'
						className='w-full bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-(--flavorly-text-muted)'
					/>

					<Image
						src='/assets/flavorly/icons/search.svg'
						alt=''
						width={22}
						height={22}
						className='size-5'
					/>
				</div>

				<button className='inline-flex h-12 items-center gap-2 rounded-(--flavorly-radius-pill) bg-(--flavorly-tomato) px-6 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(233,67,50,0.18)]'>
					<span className='text-lg font-light leading-none'>+</span>
					Add Recipe
				</button>
			</div>
		</section>
	)
}
