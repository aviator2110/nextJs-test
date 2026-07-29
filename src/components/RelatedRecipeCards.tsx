import React from 'react'
import { delay } from '../utils/delay'
import { recipes } from '@/data/recipes'
import RecipeCard from './RecipeCard'

const RelatedRecipeCards = async ({id} : {id: string}) => {
    await delay(2500)
    const filteredRecipes = recipes.filter(i => i.id !== id)

  return (
    <div>
        {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <RecipeCard title={recipe.title}>
            <p>Время приготовления: {recipe.cookTimeMin}</p>
            <p>Опубликовано: {recipe.createdAt.toLocaleString()}</p>
          </RecipeCard>
        </div>
      ))}
    </div>
  )
}

export default RelatedRecipeCards