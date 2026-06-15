document.addEventListener("DOMContentLoaded", function () {

    const headers = document.querySelectorAll(".service-header");

    headers.forEach(function(header) {

        header.addEventListener("click", function() {

            const card = this.parentElement;

            card.classList.toggle("active");

        });

    });

});