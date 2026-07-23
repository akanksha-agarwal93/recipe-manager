import { RecipeCard } from "../recipes/RecipeCard"
import { mockRecipes } from "../../data/mockRecipes"
import Link from "next/link"

export const PopularRecipes = () => {
	return (
		<section className='flex w-full flex-col gap-3 px-2 pb-4 pt-3'>
			<div className='flex flex-row items-end justify-between'>
				<h2 className='text-base font-bold text-foreground'>Popular Recipes</h2>
				<a href='#' className='text-sm font-semibold text-(--flavorly-tomato)'>
					View All
				</a>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3'>
				{mockRecipes.slice(0, 5).map((recipe) => (
					<Link href={`/recipes/${recipe.id}`} key={recipe.id}>
						<RecipeCard
							title={recipe.title}
							imageUrl={recipe.image ?? "/assets/flavorly/recipes/recipe-placeholder.svg"}
							preparationTime={`${recipe.prepTime + recipe.cookTime} mins`}
							difficulty={recipe.difficulty}
							tags={recipe.tags}
						/>
					</Link>
				))}
			</div>
		</section>
	)
}
