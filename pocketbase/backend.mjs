import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

  export async function allIngredients(){
    const listeIngredients = await pb.collection('ingredients').getFullList();
    return listeIngredients
  }

  export async function allRecettes(){
    const listeRecettes = await pb.collection('recettes').getFullList();
    return listeRecettes
  }