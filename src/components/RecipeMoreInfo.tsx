import { Recipe } from '@/data/recipes'

const RecipeMoreInfo = ({recipe} : {recipe: Recipe}) => {

  return (
    <div>
        <p>Время приготовления: {recipe.cookTimeMin}</p>
        <p>Опубликовано: {recipe.createdAt.toLocaleString()}</p>
    </div>
  )
}

export default RecipeMoreInfo