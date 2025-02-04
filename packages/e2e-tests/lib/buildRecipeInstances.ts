import * as fs from 'fs';

import type { Recipe, RecipeInput, RecipeInstance } from './types';

export function buildRecipeInstances(recipePaths: string[]): RecipeInstance[] {
  const recipes = buildRecipes(recipePaths);
  const recipeInstances: RecipeInstance[] = [];

  const basePort = 3001;

  recipes.forEach((recipe, i) => {
    recipe.versions.forEach(version => {
      const dependencyOverrides =
        Object.keys(version.dependencyOverrides).length > 0 ? version.dependencyOverrides : undefined;
      const dependencyOverridesInformationString = dependencyOverrides
        ? ` (Dependency overrides: ${JSON.stringify(dependencyOverrides)})`
        : '';

      recipeInstances.push({
        label: `${recipe.testApplicationName}${dependencyOverridesInformationString}`,
        recipe,
        dependencyOverrides,
        port: basePort + i,
      });
    });
  });

  return recipeInstances;
}

function buildRecipes(recipePaths: string[]): Recipe[] {
  return recipePaths.map(recipePath => buildRecipe(recipePath));
}

function buildRecipe(recipePath: string): Recipe {
  const recipe: RecipeInput = JSON.parse(fs.readFileSync(recipePath, 'utf-8'));

  const versions = process.env.CANARY_E2E_TEST
    ? recipe.canaryVersions ?? []
    : recipe.versions ?? [{ dependencyOverrides: {} }];

  return {
    ...recipe,
    path: recipePath,
    versions,
  };
}
