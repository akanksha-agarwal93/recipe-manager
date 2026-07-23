import { CategoryFilters } from "../src/component/dashboard/CategoryFilters"
import { HeroSection } from "../src/component/dashboard/HeroSection"
import { PopularRecipes } from "../src/component/dashboard/PopularRecipes"
import { Header } from "../src/component/layout/Header"

export default function Home() {
	return (
		<main className='flex w-full flex-col px-4 py-3'>
			<Header />
			<HeroSection />
			<CategoryFilters />
			<PopularRecipes />
		</main>
	)
}
