// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("nav--open");
  });
}

// Filter pets by type
const filterButtons = document.querySelectorAll(".filter-btn");
const petCards = document.querySelectorAll(".pet-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    filterButtons.forEach((b) => b.classList.remove("filter-btn--active"));
    btn.classList.add("filter-btn--active");

    petCards.forEach((card) => {
      const type = card.dataset.type;
      if (filter === "all" || type === filter) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Simple "I'm interested" modal
const modal = document.getElementById("adopt-modal");
const modalPetName = document.getElementById("modal-pet-name");
const openButtons = document.querySelectorAll(".js-open-adopt-modal");
const closeModalElements = document.querySelectorAll(".js-close-modal");

openButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const petName = btn.dataset.pet || "this pal";
    if (modalPetName) {
      modalPetName.textContent = petName;
    }
    if (modal) {
      modal.classList.add("modal--open");
      modal.setAttribute("aria-hidden", "false");
    }
  });
});

closeModalElements.forEach((el) => {
  el.addEventListener("click", () => {
    if (modal) {
      modal.classList.remove("modal--open");
      modal.setAttribute("aria-hidden", "true");
    }
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal && modal.classList.contains("modal--open")) {
    modal.classList.remove("modal--open");
    modal.setAttribute("aria-hidden", "true");
  }
});

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
