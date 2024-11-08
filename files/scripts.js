// JavaScript to filter foods or restaurants based on search input
document.getElementById('food-search').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const foodCards = document.querySelectorAll('.food-card');

    foodCards.forEach(card => {
        const foodName = card.querySelector('h3').textContent.toLowerCase();
        const restaurantName = card.querySelector('p').textContent.toLowerCase();

        if (foodName.includes(searchQuery) || restaurantName.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

document.getElementById('restaurant-search').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const restaurantCards = document.querySelectorAll('.restaurant-card');

    restaurantCards.forEach(card => {
        const restaurantName = card.querySelector('h3').textContent.toLowerCase();
        const restaurantDescription = card.querySelector('p').textContent.toLowerCase();

        if (restaurantName.includes(searchQuery) || restaurantDescription.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

       
