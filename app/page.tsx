import { HeroSection } from "./src/component/dashboard/HeroSection"
import { Header } from "./src/component/layout/Header"

export default function Home() {
	return (
		<main className='m-1 rounded-(--flavorly-radius-xl) border border-(--flavorly-border) px-4 py-1 text-foreground shadow-(--flavorly-shadow-card)'>
			<Header />
			<HeroSection />
		</main>
	)
}
