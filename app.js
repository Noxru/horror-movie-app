const horrorCatalog = [
  {
    id: 1,
    title: "The Black Veil",
    year: 2025,
    type: "Movie",
    genre: "Psychological",
    rating: 8.7,
    tagline: "A grieving widow discovers the church has been hiding a ritual in plain sight.",
    background:
      "linear-gradient(135deg, rgba(28,8,12,0.4), rgba(11,11,17,0.65)), url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80') center/cover",
    featured: true,
    section: "new"
  },
  {
    id: 2,
    title: "Night of the Hollow Man",
    year: 2024,
    type: "Movie",
    genre: "Slasher",
    rating: 8.4,
    tagline: "An abandoned carnival returns with a mask that remembers every victim.",
    background:
      "linear-gradient(135deg, rgba(33,15,14,0.44), rgba(11,11,17,0.7)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80') center/cover",
    section: "new"
  },
  {
    id: 3,
    title: "The Hush House",
    year: 2025,
    type: "Movie",
    genre: "Haunted",
    rating: 8.1,
    tagline: "When the power cuts out, the walls begin breathing with a voice from the past.",
    background:
      "linear-gradient(135deg, rgba(18,16,25,0.42), rgba(11,11,17,0.7)), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80') center/cover",
    section: "new"
  },
  {
    id: 4,
    title: "Salt in the Wounds",
    year: 2024,
    type: "TV",
    genre: "Gore",
    rating: 8.8,
    tagline: "A coastal town learns the sea keeps a ledger of every crime committed on its shore.",
    background:
      "linear-gradient(135deg, rgba(34,13,17,0.4), rgba(11,11,17,0.72)), url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80') center/cover",
    section: "new"
  },
  {
    id: 5,
    title: "The Last Rites",
    year: 2023,
    type: "Movie",
    genre: "Monster",
    rating: 9.1,
    tagline: "A priest discovers the church’s most sacred relic is devouring the faithful.",
    background:
      "linear-gradient(135deg, rgba(42,15,10,0.42), rgba(11,11,17,0.72)), url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80') center/cover",
    section: "kills"
  },
  {
    id: 6,
    title: "Scream in the Snow",
    year: 1996,
    type: "Movie",
    genre: "Slasher",
    rating: 8.9,
    tagline: "No one survives the first snowfall when the killer hunts by sound alone.",
    background:
      "linear-gradient(135deg, rgba(18,20,29,0.42), rgba(11,11,17,0.72)), url('https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80') center/cover",
    section: "kills"
  },
  {
    id: 7,
    title: "The Lantern Room",
    year: 2002,
    type: "Movie",
    genre: "Found Footage",
    rating: 8.6,
    tagline: "A paranormal investigator finds the real nightmare was filmed before the camera was on.",
    background:
      "linear-gradient(135deg, rgba(26,10,16,0.42), rgba(11,11,17,0.72)), url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80') center/cover",
    section: "kills"
  },
  {
    id: 8,
    title: "Bloodline Motel",
    year: 2022,
    type: "TV",
    genre: "Thriller",
    rating: 8.7,
    tagline: "A family-run roadside motel hides a murder ritual in every room key.",
    background:
      "linear-gradient(135deg, rgba(34,15,22,0.44), rgba(11,11,17,0.72)), url('https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=900&q=80') center/cover",
    section: "kills"
  },
  {
    id: 9,
    title: "The Quiet Wake",
    year: 2019,
    type: "TV",
    genre: "Supernatural",
    rating: 8.5,
    tagline: "A small town wakes each morning with one fewer memory and one more ghost.",
    background:
      "linear-gradient(135deg, rgba(18,18,29,0.46), rgba(11,11,17,0.72)), url('https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=900&q=80') center/cover",
    section: "tv"
  },
  {
    id: 10,
    title: "Nocturne District",
    year: 2021,
    type: "TV",
    genre: "Dystopian",
    rating: 8.9,
    tagline: "The city’s blackout hours are where the underground feeds on the living.",
    background:
      "linear-gradient(135deg, rgba(15,13,24,0.5), rgba(11,11,17,0.72)), url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80') center/cover",
    section: "tv"
  },
  {
    id: 11,
    title: "Ashes at Dawn",
    year: 2017,
    type: "TV",
    genre: "Occult",
    rating: 8.8,
    tagline: "The dead are returning to the same church every sunrise.",
    background:
      "linear-gradient(135deg, rgba(24,16,20,0.5), rgba(11,11,17,0.72)), url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80') center/cover",
    section: "tv"
  },
  {
    id: 12,
    title: "The Hollow Lake",
    year: 2020,
    type: "TV",
    genre: "Mystery",
    rating: 8.2,
    tagline: "A lake town drowns every rumor until the truth surfaces as a creature in the water.",
    background:
      "linear-gradient(135deg, rgba(16,18,22,0.44), rgba(11,11,17,0.72)), url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80') center/cover",
    section: "tv"
  },
  {
    id: 13,
    title: "The Shining",
    year: 1980,
    type: "Movie",
    genre: "Psychological",
    rating: 8.4,
    tagline: "An isolated hotel turns a desperate father into a man haunted by ghosts and guilt.",
    background:
      "linear-gradient(135deg, rgba(17,16,24,0.44), rgba(11,11,17,0.72)), url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80') center/cover",
    section: "classics"
  },
  {
    id: 14,
    title: "Halloween",
    year: 1978,
    type: "Movie",
    genre: "Slasher",
    rating: 8.1,
    tagline: "A masked killer returns to Haddonfield with one unforgettable night in mind.",
    background:
      "linear-gradient(135deg, rgba(32,11,13,0.46), rgba(11,11,17,0.72)), url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80') center/cover",
    section: "classics"
  },
  {
    id: 15,
    title: "The Exorcist",
    year: 1973,
    type: "Movie",
    genre: "Occult",
    rating: 8.3,
    tagline: "A mother’s faith is tested by a possession so violent it tears the family apart.",
    background:
      "linear-gradient(135deg, rgba(30,12,21,0.46), rgba(11,11,17,0.72)), url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80') center/cover",
    section: "classics"
  },
  {
    id: 16,
    title: "Psycho",
    year: 1960,
    type: "Movie",
    genre: "Thriller",
    rating: 8.5,
    tagline: "A motel, a storm, and a killer with a ruleset no one can outrun.",
    background:
      "linear-gradient(135deg, rgba(20,15,18,0.46), rgba(11,11,17,0.72)), url('https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=900&q=80') center/cover",
    section: "classics"
  }
];

const genres = [
  "All",
  "Slasher",
  "Psychological",
  "Haunted",
  "Monster",
  "Supernatural",
  "Occult",
  "Thriller",
  "Mystery",
  "Dystopian",
  "Gore",
  "Found Footage"
];

const state = {
  activeGenre: "All",
  searchTerm: "",
  watchlist: new Set()
};

const sections = {
  new: document.getElementById("newGrid"),
  kills: document.getElementById("killsGrid"),
  tv: document.getElementById("tvGrid"),
  classics: document.getElementById("classicGrid")
};

const filterList = document.getElementById("filters");
const searchInput = document.getElementById("searchInput");
const watchlistCount = document.getElementById("watchlist-count");
const template = document.getElementById("cardTemplate");

function getVisibleItems() {
  return horrorCatalog.filter((item) => {
    const matchesGenre =
      state.activeGenre === "All" || item.genre === state.activeGenre;
    const matchesSearch =
      item.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      item.tagline.toLowerCase().includes(state.searchTerm.toLowerCase());
    return matchesGenre && matchesSearch;
  });
}

function renderFilters() {
  filterList.innerHTML = "";

  genres.forEach((genre) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-pill ${genre === state.activeGenre ? "active" : ""}`;
    button.textContent = genre;
    button.addEventListener("click", () => {
      state.activeGenre = genre;
      render();
    });
    filterList.appendChild(button);
  });
}

function renderCards() {
  Object.entries(sections).forEach(([sectionKey, container]) => {
    const items = getVisibleItems().filter((item) => item.section === sectionKey);
    container.innerHTML = "";

    if (!items.length) {
      container.innerHTML = "<p class='empty-state'>No matches in this section.</p>";
      return;
    }

    items.forEach((item) => {
      const clone = template.content.cloneNode(true);
      const card = clone.querySelector(".media-card");
      const posterBox = clone.querySelector(".poster-box");
      const badge = clone.querySelector(".type-badge");
      const title = clone.querySelector("h4");
      const year = clone.querySelector(".year");
      const rating = clone.querySelector(".rating");
      const tagline = clone.querySelector(".tagline");
      const genre = clone.querySelector(".genre");
      const favBtn = clone.querySelector(".fav-btn");

      posterBox.style.background = item.background;
      badge.textContent = item.type;
      title.textContent = item.title;
      year.textContent = item.year;
      rating.textContent = `★ ${item.rating}`;
      tagline.textContent = item.tagline;
      genre.textContent = item.genre;

      const isSaved = state.watchlist.has(item.id);
      favBtn.classList.toggle("active", isSaved);
      favBtn.textContent = isSaved ? "♥" : "♡";
      favBtn.setAttribute("aria-label", isSaved ? "Remove from watchlist" : "Add to watchlist");
      favBtn.addEventListener("click", () => {
        if (state.watchlist.has(item.id)) {
          state.watchlist.delete(item.id);
        } else {
          state.watchlist.add(item.id);
        }
        render();
      });

      card.addEventListener("dblclick", () => {
        if (state.watchlist.has(item.id)) {
          state.watchlist.delete(item.id);
        } else {
          state.watchlist.add(item.id);
        }
        render();
      });

      container.appendChild(clone);
    });
  });

  watchlistCount.textContent = state.watchlist.size;
}

function render() {
  renderFilters();
  renderCards();
}

searchInput.addEventListener("input", (event) => {
  state.searchTerm = event.target.value.trim();
  render();
});

render();


/* =====================================================
   NIGHTFALL HORROR — DETAILS, VIEW ALL & BEST KILLS
   ===================================================== */

/* IMPROVE BEST KILLS WITH REAL HORROR TITLES */

const bestKillsUpdates = [
  {
    id: 5,
    title: "Terrifier 2",
    year: 2022,
    type: "Movie",
    genre: "Slasher",
    tagline: "Art the Clown turns Halloween into a night of absolute terror.",
    detail: "A brutal slasher featuring outrageous practical effects, disturbing scenes and one of modern horror's most recognizable villains."
  },
  {
    id: 6,
    title: "Final Destination 2",
    year: 2003,
    type: "Movie",
    genre: "Supernatural",
    tagline: "You can escape the disaster. But can you escape Death?",
    detail: "A terrifying chain of seemingly ordinary accidents makes everyday situations feel dangerous. Its opening highway sequence is unforgettable."
  },
  {
    id: 7,
    title: "Ash vs Evil Dead",
    year: 2015,
    type: "TV",
    genre: "Gore",
    tagline: "Chainsaws, demons and gloriously chaotic horror.",
    detail: "Ash returns to battle the forces of evil in a bloody horror-comedy packed with outrageous creature effects and dark humor."
  },
  {
    id: 8,
    title: "The Walking Dead",
    year: 2010,
    type: "TV",
    genre: "Gore",
    tagline: "The dead are walking. The living might be worse.",
    detail: "A group of survivors struggles to stay alive in a world overrun by walkers. Expect brutal encounters, shocking losses and unforgettable moments."
  }
];

bestKillsUpdates.forEach(update => {
  const item = horrorCatalog.find(movie => movie.id === update.id);
  if (item) Object.assign(item, update);
});

/* CREATE DETAILS AND VIEW ALL WINDOW */

const nightfallModal = document.createElement("div");
nightfallModal.id = "nightfallModal";
nightfallModal.className = "nightfall-modal";
nightfallModal.hidden = true;

nightfallModal.innerHTML = `
  <div class="nightfall-backdrop" data-nightfall-close></div>

  <div class="nightfall-window" role="dialog" aria-modal="true">
    <button class="nightfall-close" data-nightfall-close>×</button>
    <p class="eyebrow">NIGHTFALL HORROR ARCHIVE</p>
    <h2 id="nightfall-modal-title"></h2>
    <div id="nightfall-modal-content"></div>
  </div>
`;

document.body.appendChild(nightfallModal);

const modalTitle = document.getElementById("nightfall-modal-title");
const modalContent = document.getElementById("nightfall-modal-content");

function closeNightfallModal() {
  nightfallModal.hidden = true;
  document.body.classList.remove("nightfall-modal-open");
}

function openNightfallDetails(item) {
  if (!item) return;

  modalTitle.textContent = item.title;

  modalContent.innerHTML = `
    <p class="nightfall-meta">
      ${item.year} · ${item.type} · ${item.genre}
    </p>

    <p class="nightfall-description">
      ${item.detail || item.tagline}
    </p>

    <p class="nightfall-hook">${item.tagline}</p>

    <button class="primary-btn" data-nightfall-watch="${item.id}">
      ${state.watchlist.has(item.id)
        ? "Remove from watchlist"
        : "Add to watchlist"}
    </button>
  `;

  nightfallModal.hidden = false;
  document.body.classList.add("nightfall-modal-open");
}

function openNightfallCategory(sectionKey) {
  const names = {
    new: "New Releases",
    kills: "Best Kills",
    tv: "Horror TV Shows",
    classics: "Horror Classics"
  };

  const items = getVisibleItems().filter(
    item => item.section === sectionKey
  );

  modalTitle.textContent = names[sectionKey] || "Horror Archive";

  modalContent.innerHTML = items.length
    ? items.map(item => `
        <article class="nightfall-list-item">
          <div>
            <h3>${item.title}</h3>
            <p class="nightfall-meta">
              ${item.year} · ${item.type} · ${item.genre}
            </p>
            <p>${item.tagline}</p>
          </div>

          <button class="ghost-btn"
            data-nightfall-detail="${item.id}">
            Details
          </button>
        </article>
      `).join("")
    : "<p>No titles found. Try changing your search or genre filter.</p>";

  nightfallModal.hidden = false;
  document.body.classList.add("nightfall-modal-open");
}

/* BUTTON ACTIONS */

document.addEventListener("click", event => {

  if (event.target.closest("[data-nightfall-close]")) {
    closeNightfallModal();
    return;
  }

  const detailButton = event.target.closest("[data-nightfall-detail]");

  if (detailButton) {
    const item = horrorCatalog.find(
      movie => movie.id === Number(detailButton.dataset.nightfallDetail)
    );

    openNightfallDetails(item);
    return;
  }

  const watchButton = event.target.closest("[data-nightfall-watch]");

  if (watchButton) {
    const id = Number(watchButton.dataset.nightfallWatch);

    if (state.watchlist.has(id)) {
      state.watchlist.delete(id);
    } else {
      state.watchlist.add(id);
    }

    render();

    const item = horrorCatalog.find(movie => movie.id === id);
    openNightfallDetails(item);
    return;
  }

  const detailsButton = event.target.closest(".ghost-btn");

  if (detailsButton) {
    const card = detailsButton.closest(".media-card");

    if (card) {
      const title = card.querySelector("h4")?.textContent;
      const item = horrorCatalog.find(movie => movie.title === title);

      if (item) openNightfallDetails(item);
    }

    return;
  }

  const viewAllButton = event.target.closest(".chip-btn");

  if (viewAllButton) {
    const section = viewAllButton.closest(".content-section");

    if (section) openNightfallCategory(section.id);
  }
});

/* CLOSE WITH ESCAPE */

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !nightfallModal.hidden) {
    closeNightfallModal();
  }
});

/* MODAL STYLING */

const nightfallStyles = document.createElement("style");

nightfallStyles.textContent = `
  body.nightfall-modal-open {
    overflow: hidden;
  }

  .nightfall-modal[hidden] {
    display: none;
  }

  .nightfall-modal {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: grid;
    place-items: center;
    padding: 18px;
  }

  .nightfall-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,.86);
    backdrop-filter: blur(7px);
  }

  .nightfall-window {
    position: relative;
    width: min(700px, 100%);
    max-height: 85vh;
    overflow-y: auto;
    padding: 28px;
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 20px;
    background: #14121b;
    box-shadow: 0 25px 80px rgba(0,0,0,.7);
  }

  .nightfall-window h2 {
    font-family: "Creepster", cursive;
    font-size: 2.5rem;
    font-weight: 400;
  }

  .nightfall-close {
    position: absolute;
    right: 15px;
    top: 12px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,.15);
    background: #29232d;
    color: white;
    font-size: 1.6rem;
  }

  .nightfall-meta {
    color: #ff7b54;
    font-weight: 700;
    font-size: .85rem;
  }

  .nightfall-description {
    color: #f5f0ec;
    line-height: 1.8;
    font-size: 1.05rem;
  }

  .nightfall-hook {
    color: #b7a9a4;
    line-height: 1.7;
  }

  .nightfall-list-item {
    padding: 16px 0;
    border-top: 1px solid rgba(255,255,255,.1);
  }

  .nightfall-list-item h3 {
    margin-bottom: 5px;
  }

  .nightfall-list-item p {
    color: #b7a9a4;
    line-height: 1.6;
  }

  .nightfall-list-item .ghost-btn {
    margin-bottom: 8px;
  }
`;

document.head.appendChild(nightfallStyles);

/* REFRESH CARDS WITH UPDATED BEST KILLS */

render();

/* END NIGHTFALL UPGRADE */


/* =====================================
   NIGHTFALL HORROR - AUTOMATIC SPOTLIGHT
   ===================================== */

async function updateHorrorSpotlight() {
  const hero = document.querySelector(".hero-poster");
  const card = document.querySelector(".poster-card");

  if (!hero || !card) return;

  try {
    const response = await fetch("./spotlight.json?t=" + Date.now());

    if (!response.ok) {
      throw new Error("Spotlight data unavailable");
    }

    const movie = await response.json();

    const title = movie.title || movie.name || "Unknown";
    const date = movie.release_date || movie.first_air_date || "";
    const year = date ? date.substring(0, 4) : "Coming soon";
    const type = movie.media_type === "tv" ? "Horror TV Show" : "Horror Movie";

    // Update title
    const heading = card.querySelector("h3");
    if (heading) heading.textContent = title;

    // Update year and category
    const meta = card.querySelector(".poster-meta");

    if (meta) {
      meta.replaceChildren();

      const yearText = document.createElement("span");
      yearText.textContent = year;

      const typeText = document.createElement("span");
      typeText.textContent = type;

      meta.append(yearText, typeText);
    }

    // Update rating
    const rating = card.querySelector(".poster-rating");

    if (rating) {
      const score = Number(movie.vote_average);
      rating.textContent = score > 0
        ? "★ " + score.toFixed(1) + " TMDB"
        : "Horror Spotlight";
    }

    // Update poster image
    const image = movie.backdrop_path || movie.poster_path;

    if (image) {
      hero.style.backgroundImage =
        "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.65)), url(https://image.tmdb.org/t/p/w780" +
        image + ")";

      hero.style.backgroundSize = "cover";
      hero.style.backgroundPosition = "center";
    }

    // Update spotlight label
    const tag = card.querySelector(".poster-tag");

    if (tag) {
      tag.textContent = "DAILY HORROR SPOTLIGHT";
    }

    // Add synopsis as a hover tooltip
    card.title = movie.overview || "Discover today's horror spotlight.";

    console.log("Nightfall Spotlight updated:", title);

  } catch (error) {
    console.error("Spotlight update failed:", error);
  }
}

// Load the spotlight when the page opens
updateHorrorSpotlight();

/* =========================================================
   MARVEL COMPANION — POSTER BROWSING UPGRADE
   Add this block to the bottom of app.js
   ========================================================= */

(function () {
  "use strict";

  const posterCache = new Map();

  const style = document.createElement("style");
  style.textContent = `
    .marvel-poster-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
      gap: 18px;
      margin: 20px 0;
    }

    .marvel-poster-card {
      background: #171717;
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      transition: transform .2s ease, box-shadow .2s ease;
      border: 1px solid #333;
    }

    .marvel-poster-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px #0008;
    }

    .marvel-poster-image {
      width: 100%;
      aspect-ratio: 2 / 3;
      object-fit: cover;
      display: block;
      background: #252525;
    }

    .marvel-poster-title {
      padding: 10px;
      font-weight: 700;
      font-size: 14px;
      color: white;
    }

    .marvel-poster-year {
      padding: 0 10px 10px;
      color: #aaa;
      font-size: 12px;
    }

    .marvel-poster-placeholder {
      aspect-ratio: 2 / 3;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(145deg, #181818, #650000);
      color: white;
      font-size: 24px;
      font-weight: 900;
      text-align: center;
    }

    .marvel-poster-modal {
      position: fixed;
      inset: 0;
      z-index: 99999;
      background: rgba(0,0,0,.88);
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .marvel-poster-modal.active {
      display: flex;
    }

    .marvel-poster-modal-content {
      background: #191919;
      border: 1px solid #444;
      border-radius: 16px;
      width: min(600px, 100%);
      max-height: 90vh;
      overflow-y: auto;
      padding: 22px;
      color: white;
    }

    .marvel-poster-modal-content img {
      width: 170px;
      max-width: 45%;
      border-radius: 10px;
      float: left;
      margin: 0 18px 15px 0;
    }

    .marvel-poster-close {
      float: right;
      background: #a60000;
      border: none;
      color: white;
      padding: 8px 13px;
      border-radius: 7px;
      cursor: pointer;
    }

    .marvel-poster-action {
      background: #b00000;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 8px;
      cursor: pointer;
      margin: 5px 5px 5px 0;
    }

    @media (max-width: 480px) {
      .marvel-poster-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
      }
    }
  `;
  document.head.appendChild(style);

  const modal = document.createElement("div");
  modal.className = "marvel-poster-modal";
  modal.innerHTML = `
    <div class="marvel-poster-modal-content">
      <button class="marvel-poster-close">Close ✕</button>
      <div id="marvel-poster-modal-details"></div>
    </div>
  `;
  document.body.appendChild(modal);

  modal.addEventListener("click", event => {
    if (
      event.target === modal ||
      event.target.classList.contains("marvel-poster-close")
    ) {
      modal.classList.remove("active");
    }
  });

  async function getPoster(title) {
    if (posterCache.has(title)) return posterCache.get(title);

    const fallback = null;

    try {
      const url =
        "https://en.wikipedia.org/w/api.php?" +
        new URLSearchParams({
          action: "query",
          generator: "search",
          gsrsearch: title + " Marvel",
          gsrnamespace: "0",
          gsrlimit: "1",
          prop: "pageimages|extracts",
          piprop: "thumbnail",
          pithumbsize: "500",
          exintro: "1",
          explaintext: "1",
          exchars: "700",
          format: "json",
          origin: "*"
        });

      const response = await fetch(url);
      if (!response.ok) throw new Error("Poster request failed");

      const data = await response.json();
      const page = Object.values(data.query?.pages || {})[0];

      const result = page ? {
        image: page.thumbnail?.source || fallback,
        description: page.extract || "Marvel universe title.",
        article: page.title || title
      } : {
        image: fallback,
        description: "Marvel universe title.",
        article: title
      };

      posterCache.set(title, result);
      return result;
    } catch (error) {
      const result = {
        image: fallback,
        description: "Marvel universe title.",
        article: title
      };
      posterCache.set(title, result);
      return result;
    }
  }

  function getTitle(item) {
    if (typeof item === "string") return item;

    return (
      item.title ||
      item.name ||
      item.show ||
      item.movie ||
      item.label ||
      "Marvel Title"
    );
  }

  function getYear(item) {
    if (!item || typeof item !== "object") return "";

    return (
      item.year ||
      item.releaseYear ||
      item.release_date ||
      item.date ||
      ""
    );
  }

  function showDetails(item, poster) {
    const title = getTitle(item);
    const year = getYear(item);
    const description =
      poster.description || "Explore this Marvel universe title.";

    const details = document.getElementById(
      "marvel-poster-modal-details"
    );

    details.innerHTML = `
      ${poster.image
        ? `<img src="${poster.image}" alt="${title}">`
        : `<div class="marvel-poster-placeholder"
             style="float:left;width:170px;margin:0 18px 15px 0">
             MARVEL
           </div>`}
      <h2>${escapeHTML(title)}</h2>
      <p>${escapeHTML(String(year))}</p>
      <p>${escapeHTML(description)}</p>
      <div style="clear:both"></div>
      <p>Explore this title in your Marvel Companion collection.</p>
    `;

    modal.classList.add("active");
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  async function buildPosterGrid(container, items) {
    if (!container || !Array.isArray(items)) return;

    container.classList.add("marvel-poster-grid");
    container.innerHTML = "";

    items.forEach(item => {
      const title = getTitle(item);
      const card = document.createElement("div");
      card.className = "marvel-poster-card";

      card.innerHTML = `
        <div class="marvel-poster-placeholder">MARVEL</div>
        <div class="marvel-poster-title">${escapeHTML(title)}</div>
        <div class="marvel-poster-year">${escapeHTML(String(getYear(item)))}</div>
      `;

      container.appendChild(card);

      const loadPoster = async () => {
        const poster = await getPoster(title);
        const placeholder = card.querySelector(
          ".marvel-poster-placeholder"
        );

        if (poster.image && placeholder) {
          const img = document.createElement("img");
          img.className = "marvel-poster-image";
          img.src = poster.image;
          img.alt = title;
          img.loading = "lazy";
          placeholder.replaceWith(img);
        }

        card.onclick = () => showDetails(item, poster);
      };

      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
            observer.disconnect();
            loadPoster();
          }
        });

        observer.observe(card);
      } else {
        loadPoster();
      }
    });
  }

  // Upgrade existing title containers without changing their data.
  function upgradeExistingLists() {
    const selectors = [
      "#items",
      "#all-marvel-items",
      "#mcu-only-items",
      "#timelineItems",
      "#doomsday-items"
    ];

    selectors.forEach(selector => {
      const container = document.querySelector(selector);
      if (!container || container.dataset.posterUpgrade === "true") return;

      const existingCards = Array.from(container.children);
      if (!existingCards.length) return;

      container.dataset.posterUpgrade = "true";
      container.classList.add("marvel-poster-grid");

      existingCards.forEach(card => {
        const title = card.textContent.trim();
        if (!title) return;

        const posterCard = document.createElement("div");
        posterCard.className = "marvel-poster-card";
        posterCard.innerHTML = `
          <div class="marvel-poster-placeholder">MARVEL</div>
          <div class="marvel-poster-title">${escapeHTML(title)}</div>
        `;

        container.replaceChild(posterCard, card);

        getPoster(title).then(poster => {
          const placeholder = posterCard.querySelector(
            ".marvel-poster-placeholder"
          );

          if (poster.image && placeholder) {
            const img = document.createElement("img");
            img.className = "marvel-poster-image";
            img.src = poster.image;
            img.alt = title;
            img.loading = "lazy";
            placeholder.replaceWith(img);
          }

          posterCard.onclick = () => showDetails(title, poster);
        });
      });
    });
  }

  window.MarvelPosterUpgrade = {
    getPoster,
    buildPosterGrid,
    showDetails,
    refresh: upgradeExistingLists
  };

  // Wait for the original app to render its content.
  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      upgradeExistingLists
    );
  } else {
    upgradeExistingLists();
  }

  // Recheck when existing app sections are dynamically updated.
  const observer = new MutationObserver(() => {
    upgradeExistingLists();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  console.log("Marvel Poster Browsing Upgrade loaded.");
})();
















































