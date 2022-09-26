const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const recipeId = params.get("id");
const paramsCat = new URLSearchParams()
