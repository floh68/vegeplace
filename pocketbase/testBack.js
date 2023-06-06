import { allIngredients, allRecettes } from "../backend.mjs";

try {
    //const record = await allIngredients();
    const record = await allRecettes();
    console.log(JSON.stringify(record, null, 2));
  } catch (e) {
    console.error(e);
  };  