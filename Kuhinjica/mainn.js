document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const recipeContainer = document.getElementById('recipe-container');
  
    // Funkcija za prikazivanje recepta na stranici
    function displayRecipe(recipe) {
      recipeContainer.innerHTML = `
        <h2>${recipe.strMeal}</h2>
        <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
        <p>${recipe.strInstructions}</p>
      `;
    }
    
  
    // Funkcija za dohvat recepta s API-ja
    function getRecipe(searchTerm) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}&l=Croatian`)
        .then(response => response.json())
        .then(data => {
          if (data.meals) {
            const recipe = data.meals[0];
            displayRecipe(recipe);
          } else {
            recipeContainer.innerHTML = '<p>Recept nije pronađen.</p>';
          }
        })
        .catch(error => {
          recipeContainer.innerHTML = '<p>Greška prilikom dohvata podataka.</p>';
        });
    }
  
    // Postavljanje događaja za pretragu klikom na dugme "Pretraži"
    searchButton.addEventListener('click', function() {
      const searchTerm = searchInput.value.trim();
      if (searchTerm !== '') {
        getRecipe(searchTerm);
      }
    });
  
    // Postavljanje događaja za pretragu pritiskom na tipku "Enter"
    searchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
          getRecipe(searchTerm);
        }
      }
    });
  
  
});