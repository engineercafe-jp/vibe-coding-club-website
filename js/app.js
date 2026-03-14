document.addEventListener("DOMContentLoaded", function () {
  initHero();
  initOnlineViewing();
  initEventDetails();
  renderProducts();
  initModal();
  initScrollEffects();
});

// GitHub icon SVG (reusable)
var GITHUB_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>';

/* ========================================
   Hero
   ======================================== */
function initHero() {
  document.getElementById("heroDescription").textContent = EVENT.description;
  document.getElementById("heroSchedule").textContent = EVENT.schedule;
  document.getElementById("heroLocation").textContent = EVENT.location;
  document.getElementById("heroSignupBtn").href = EVENT.signupUrl;
  document.getElementById("headerSignupLink").href = EVENT.signupUrl;
  document.getElementById("heroMap").src = EVENT.mapEmbedUrl;
}

/* ========================================
   Online Viewing Links
   ======================================== */
function initOnlineViewing() {
  var container = document.getElementById("onlineViewingLinks");
  EVENT.onlineViewing.forEach(function (item) {
    var a = document.createElement("a");
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.className = "online-viewing__link";
    a.textContent = item.name;
    container.appendChild(a);
  });
}

/* ========================================
   Event Details (Collapsible)
   ======================================== */
function initEventDetails() {
  // Timeline
  var tbody = document.querySelector("#timelineTable tbody");
  EVENT.timeline.forEach(function (row) {
    var tr = document.createElement("tr");
    tr.innerHTML = "<td>" + escapeHtml(row.time) + "</td><td>" + escapeHtml(row.content) + "</td>";
    tbody.appendChild(tr);
  });

  // Rules
  populateList("rulesList", EVENT.rules);
  // Merits
  populateList("meritsList", EVENT.merits);
  // Preparation
  populateList("prepRequired", EVENT.preparation.required);
  populateList("prepOptional", EVENT.preparation.optional);

  // Instructor
  document.getElementById("instructorName").textContent = EVENT.instructor.name;
  document.getElementById("instructorBio").textContent = EVENT.instructor.bio;

  // Venue
  document.getElementById("venueEngineerCafe").textContent = EVENT.venue.engineerCafe;
  document.getElementById("venueBuilding").textContent = EVENT.venue.building;

  // Toggle
  var toggle = document.getElementById("eventToggle");
  var content = document.getElementById("eventContent");
  toggle.addEventListener("click", function () {
    var expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    if (expanded) {
      content.hidden = true;
    } else {
      content.hidden = false;
    }
  });
}

function populateList(elementId, items) {
  var ul = document.getElementById(elementId);
  items.forEach(function (text) {
    var li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });
}

/* ========================================
   Product Cards
   ======================================== */
function renderProducts() {
  var grid = document.getElementById("productsGrid");
  PRODUCTS.forEach(function (product) {
    var card = document.createElement("article");
    card.className = "product-card fade-in";
    card.setAttribute("data-product-id", product.id);

    var techTags = product.techStack
      .map(function (t) { return '<span class="tech-tag">' + escapeHtml(t) + "</span>"; })
      .join("");

    card.innerHTML =
      '<div class="product-card__icon">' + generateIcon(product, 56) + "</div>" +
      '<div class="product-card__body">' +
        '<h3 class="product-card__title">' + escapeHtml(product.title) + "</h3>" +
        '<p class="product-card__overview">' + escapeHtml(product.overview) + "</p>" +
        '<div class="product-card__tech">' + techTags + "</div>" +
        '<div class="product-card__meta">' +
          '<span class="product-card__implementer">' + GITHUB_ICON + " " + escapeHtml(product.implementer) + "</span>" +
          '<span class="product-card__date">' + escapeHtml(product.date) + "</span>" +
        "</div>" +
      "</div>";

    card.addEventListener("click", function () {
      openModal(product.id);
    });

    grid.appendChild(card);
  });
}

/* ========================================
   Modal
   ======================================== */
var lastFocusedCard = null;

function initModal() {
  var overlay = document.getElementById("productModal");
  var closeBtn = document.getElementById("modalClose");

  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("modal-overlay--active")) {
      closeModal();
    }
  });
}

function openModal(productId) {
  var product = PRODUCTS.find(function (p) { return p.id === productId; });
  if (!product) return;

  lastFocusedCard = document.querySelector('[data-product-id="' + productId + '"]');

  document.getElementById("modalIcon").innerHTML = generateIcon(product, 64);
  document.getElementById("modalTitle").textContent = product.title;
  document.getElementById("modalOverview").textContent = product.overview;
  document.getElementById("modalDetails").textContent = product.details;

  var techContainer = document.getElementById("modalTech");
  techContainer.innerHTML = product.techStack
    .map(function (t) { return '<span class="tech-tag">' + escapeHtml(t) + "</span>"; })
    .join("");

  document.getElementById("modalMeta").innerHTML =
    '<span class="modal-meta__implementer">' + GITHUB_ICON + " " + escapeHtml(product.implementer) + "</span>" +
    "<span>" + escapeHtml(product.date) + "</span>";

  var linksContainer = document.getElementById("modalLinks");
  linksContainer.innerHTML = "";

  if (product.githubUrl) {
    linksContainer.innerHTML += '<a href="' + escapeAttr(product.githubUrl) + '" target="_blank" rel="noopener" class="modal-link">' + GITHUB_ICON + " GitHub</a>";
  }
  if (product.forkedGithubUrl) {
    linksContainer.innerHTML += '<a href="' + escapeAttr(product.forkedGithubUrl) + '" target="_blank" rel="noopener" class="modal-link">' + GITHUB_ICON + " Fork</a>";
  }

  var overlay = document.getElementById("productModal");
  overlay.classList.add("modal-overlay--active");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  document.getElementById("modalClose").focus();
}

function closeModal() {
  var overlay = document.getElementById("productModal");
  overlay.classList.remove("modal-overlay--active");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedCard) {
    lastFocusedCard.focus();
    lastFocusedCard = null;
  }
}

/* ========================================
   Scroll Effects
   ======================================== */
function initScrollEffects() {
  // Header shadow on scroll
  var header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  }, { passive: true });

  // Fade-in on scroll
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in--visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".fade-in").forEach(function (el) {
    observer.observe(el);
  });
}

/* ========================================
   Utilities
   ======================================== */
function escapeHtml(str) {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function escapeAttr(str) {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
