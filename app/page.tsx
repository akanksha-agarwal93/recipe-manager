import { HeroSection } from "./src/component/dashboard/HeroSection"
import { Header } from "./src/component/layout/Header"

export default function Home() {
	return (
		<main className='rounded-(--flavorly-radius-xl) border border-(--flavorly-border) border-1.5 px-4 py-1 text-foreground shadow-(--flavorly-shadow-card) m-1'>
			<Header />
			<HeroSection />
		</main>
	)
}
