document.addEventListener("DOMContentLoaded", function() {
    let filterButtons = document.querySelectorAll('.filter-btn');
    let projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            let filter = this.getAttribute('data-filter');

            // Reset all buttons
            filterButtons.forEach(innerBtn => {
                innerBtn.classList.remove('active');
            });

            // Set the current button to active
            this.classList.add('active');

            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('project-hidden');
                } else if (!card.classList.contains(filter)) {
                    card.classList.add('project-hidden');
                } else {
                    card.classList.remove('project-hidden');
                }
            });
        });
    });
});
