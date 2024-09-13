/* eslint-disable */
document.addEventListener('click', (event) => {
    const { target } = event;
    const openFilter = document.querySelector('.controls__btn-filter');
    const filter = document.querySelector('.job-filter');
    const closeFilter = document.querySelector('.job-filter__btn-close');
    if (openFilter.contains(target)) {
        filter.classList.add('active');
    }
    if (closeFilter.contains(target)) {
        filter.classList.remove('active');
    }
    if (!filter.contains(target) && !openFilter.contains(target)) {
        filter.classList.remove('active');
    }
});
