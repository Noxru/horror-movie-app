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

















































