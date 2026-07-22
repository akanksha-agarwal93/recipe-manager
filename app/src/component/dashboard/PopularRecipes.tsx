import { RecipeCard } from "../recipes/RecipeCard"

export const PopularRecipes = () => {
	return (
		<section className='flex w-full flex-col gap-3 px-2 pb-4 pt-3'>
			<h2 className='text-base font-bold text-(--flavorly-text)'>Popular Recipes</h2>
			<RecipeCard
				title='Spaghetti Carbonara'
				imageUrl='/assets/flavorly/recipes/recipe-placeholder.svg'
				preparationTime='20 mins'
				difficulty='Medium'
				tags={["Italian", "Pasta", "Quick & Easy"]}
			/>
		</section>
	)
}
