const accordionHeaders = document.querySelectorAll(".accordion-header");
accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener("click", () => {
        const currentlyActiveAccordionHeader = document.querySelector(".accordion-header.active");
        if (currentlyActiveAccordionHeader && currentlyActiveAccordionHeader !== accordionHeader) {
            currentlyActiveAccordionHeader.classList.remove("active");
            currentlyActiveAccordionHeader.nextElementSibling.style.maxHeight = 0;
        }
        accordionHeader.classList.toggle("active");
        const accordionBody = accordionHeader.nextElementSibling;
        if (accordionHeader.classList.contains("active")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        } else {
            accordionBody.style.maxHeight = 0;
        }
    });
});