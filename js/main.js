const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");
// const gridBtn = document.getElementById("grid");
// const listBtn = document.getElementById("list");
// const container = document.getElementById("projects-container");
// const projectDesc = document.getElementById("project-desc");
// const codingLang = document.getElementById("codeLanguages");
// const desc = document.getElementById("desc");

// gridBtn.addEventListener("click", () => {
//   container.classList.remove("flex", "flex-col", "gap-6");
//   container.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-12");

//   gridBtn.classList.add("bg-gray-900", "text-white");
//   listBtn.classList.remove("bg-gray-900", "text-white");
//   projectDesc.classList.remove ("flex", "flex-row", "p-8");
//   projectDesc.style.display = "block";
//   codingLang.classList.remove("flex","flex-col","gap-2");
//   desc.classList.remove("p-8");

// });


// listBtn.addEventListener("click", () => {
//   container.classList.remove("grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-12");
//   container.classList.add("flex", "flex-col", "gap-6");

//   listBtn.classList.add("bg-gray-900", "text-white");
//   gridBtn.classList.remove("bg-gray-900", "text-white");
//     projectDesc.classList.add("flex", "flex-row", "p-8");
//     projectDesc.style.display = "flex";
//     codingLang.classList.add("flex","flex-col", "gap-2");
//     desc.classList.add("p-8");

// });

window.addEventListener("DOMContentLoaded", () => {
  const defaultFilterButton = document.querySelector('[data-filter="all"]');
  if (defaultFilterButton) {
    defaultFilterButton.click();
  }

  const defaultSortButton = document.querySelector('[id="grid"]');
  if (defaultSortButton) {
    defaultSortButton.click();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    filterButtons.forEach((btn) => {
      btn.classList.remove("bg-gray-900", "text-white");
    });

    button.classList.add("bg-gray-900", "text-white");

    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      card.style.display = filter === "all" || filter === category ? "block" : "none";
    });
  });
});