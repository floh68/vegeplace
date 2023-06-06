import PocketBase from 'pocketbase';
import type { IngredientsResponse, RecettesResponse } from './pocketbase-types';
export const pb = new PocketBase('http://127.0.0.1:8090');

  export async function allIngredients(){
    const listeIngredients = await pb.collection('ingredients').getFullList<IngredientsResponse>();
    return listeIngredients
  }

  export async function allRecettes(){
    const listeRecettes = await pb.collection('recettes').getFullList<RecettesResponse>();
    return listeRecettes
  }