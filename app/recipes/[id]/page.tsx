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
	console.log("Recipe ID:", id)
	console.log("Recipe Data:", recipe)
	return (
		<section className='flex flex-col gap-4'>
			<h1 className='text-2xl font-bold text-foreground'>
				{recipe?.title || "Recipe not found"}
			</h1>
		</section>
	)
}
