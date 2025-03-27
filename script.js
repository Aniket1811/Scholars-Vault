document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("search-container");
    const searchModal = document.getElementById("search-modal");
    const closeModal = document.getElementById("close-modal");

    searchBar.addEventListener("click", function(event) {
        event.stopPropagation();
        searchModal.classList.remove("hidden");
    });

    closeModal.addEventListener("click", function(event) {
        event.stopPropagation();
        searchModal.classList.add("hidden");
    });

    document.addEventListener("click", function(event) {
        if (!searchModal.contains(event.target) && event.target !== searchBar) {
            searchModal.classList.add("hidden");
        }
    });
});



