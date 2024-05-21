document.addEventListener("DOMContentLoaded", function() {
    const showMoreBtn = document.getElementById('show-more-btn');
    const moreContent = document.querySelector('.more-content');

    showMoreBtn.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            showMoreBtn.textContent = 'Show Less';
        } else {
            moreContent.style.display = 'none';
            showMoreBtn.textContent = 'Show More';
        }
    });
});