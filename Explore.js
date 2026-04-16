const allSections = document.querySelectorAll(".places .details");

allSections.forEach(section => {
    const row = section.nextElementSibling;
    const nextBtn = section.querySelector(".next");
    const prevBtn = section.querySelector(".prev");

    const card = row.querySelector(".place");
    const cardWidth = card.offsetWidth + 40; 

    const scrollAmount = cardWidth * 5; 

    nextBtn.addEventListener("click", () => {
        row.scrollLeft += scrollAmount;
    });

    prevBtn.addEventListener("click", () => {
        row.scrollLeft -= scrollAmount;
    });
});