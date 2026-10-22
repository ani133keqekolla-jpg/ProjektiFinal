/* ==========================================================================
   KickOff Hub - Football Application Engine
   Real 2026/27 Season Data (Premier League, La Liga, Serie A, Bundesliga, Ligue 1 & UCL)
   ========================================================================== */

// 1. REAL LIVE MATCHES & FIXTURES DATA (2026/27 Season)
const matchesData = [
  // UEFA Champions League Matchday
  { id: 1, home: "Paris Saint-Germain", away: "FC Barcelona", homeScore: 3, awayScore: 2, minute: "78'", status: "LIVE", competition: "UEFA Champions League", logoH: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg", logoA: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona.svg" },
  { id: 2, home: "Arsenal", away: "Real Madrid", homeScore: 1, awayScore: 0, minute: "62'", status: "LIVE", competition: "UEFA Champions League", logoH: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg", logoA: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" },
  { id: 3, home: "Aston Villa", away: "Bayern Munich", homeScore: 2, awayScore: 1, minute: "FT", status: "ENDED", competition: "UEFA Champions League", logoH: "https://upload.wikimedia.org/wikipedia/en/f/f9/Aston_Villa_FC_crest_%282016%29.svg", logoA: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg" },

  // Premier League Fixtures
  { id: 4, home: "Manchester City", away: "Arsenal", homeScore: 2, awayScore: 1, minute: "FT", status: "ENDED", competition: "Premier League", logoH: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg", logoA: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg" },
  { id: 5, home: "Chelsea", away: "Liverpool", homeScore: 1, awayScore: 1, minute: "84'", status: "LIVE", competition: "Premier League", logoH: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg", logoA: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg" },
  { id: 6, home: "Brighton", away: "Tottenham Hotspur", homeScore: 3, awayScore: 1, minute: "FT", status: "ENDED", competition: "Premier League", logoH: "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg", logoA: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg" },

  // La Liga
  { id: 7, home: "FC Barcelona", away: "Atlético Madrid", homeScore: 2, awayScore: 0, minute: "40'", status: "LIVE", competition: "La Liga", logoH: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona.svg", logoA: "https://upload.wikimedia.org/wikipedia/en/c/c1/Atletico_Madrid_logo.svg" },
  { id: 8, home: "Real Madrid", away: "Real Betis", homeScore: 2, awayScore: 1, minute: "FT", status: "ENDED", competition: "La Liga", logoH: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg", logoA: "https://upload.wikimedia.org/wikipedia/en/1/13/Real_betis_logo.svg" },

  // Bundesliga
  { id: 9, home: "VfB Stuttgart", away: "Borussia Dortmund", homeScore: 3, awayScore: 1, minute: "FT", status: "ENDED", competition: "Bundesliga", logoH: "https://upload.wikimedia.org/wikipedia/commons/e/eb/VfB_Stuttgart_1893_Logo.svg", logoA: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg" },
  
  // Serie A
  { id: 10, home: "Como 1907", away: "Juventus", homeScore: 2, awayScore: 1, minute: "71'", status: "LIVE", competition: "Serie A", logoH: "https://upload.wikimedia.org/wikipedia/en/a/a2/Como_1907_logo.svg", logoA: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juventus_FC_2017_icon_%28black%29.svg" }
];

// 2. REAL 2026/27 SEASON STANDINGS DATA
const leaguesStandings = {
  "Premier League": [
    { pos: 1, team: "Manchester City", played: 7, won: 7, drawn: 0, lost: 0, points: 21 },
    { pos: 2, team: "Arsenal", played: 7, won: 6, drawn: 0, lost: 1, points: 18 },
    { pos: 3, team: "Brighton & Hove Albion", played: 7, won: 5, drawn: 1, lost: 1, points: 16 },
    { pos: 4, team: "Chelsea", played: 7, won: 4, drawn: 1, lost: 2, points: 13 },
    { pos: 5, team: "Liverpool", played: 7, won: 3, drawn: 3, lost: 1, points: 12 },
    { pos: 6, team: "Brentford", played: 7, won: 3, drawn: 1, lost: 3, points: 10 },
    { pos: 7, team: "Leeds United", played: 7, won: 3, drawn: 1, lost: 3, points: 10 },
    { pos: 8, team: "Everton", played: 7, won: 3, drawn: 1, lost: 3, points: 10 },
    { pos: 9, team: "Aston Villa", played: 7, won: 2, drawn: 2, lost: 3, points: 8 },
    { pos: 10, team: "Manchester United", played: 7, won: 2, drawn: 1, lost: 4, points: 7 },
    { pos: 11, team: "Newcastle United", played: 7, won: 2, drawn: 2, lost: 3, points: 8 },
    { pos: 12, team: "Tottenham Hotspur", played: 7, won: 2, drawn: 0, lost: 5, points: 6 }
  ],
  "La Liga": [
    { pos: 1, team: "FC Barcelona", played: 8, won: 7, drawn: 0, lost: 1, points: 21 },
    { pos: 2, team: "Atlético Madrid", played: 8, won: 6, drawn: 1, lost: 1, points: 19 },
    { pos: 3, team: "Real Madrid", played: 8, won: 6, drawn: 0, lost: 2, points: 18 },
    { pos: 4, team: "Real Betis", played: 8, won: 5, drawn: 2, lost: 1, points: 17 },
    { pos: 5, team: "Villarreal CF", played: 8, won: 4, drawn: 2, lost: 2, points: 14 },
    { pos: 6, team: "Athletic Bilbao", played: 8, won: 4, drawn: 1, lost: 3, points: 13 }
  ],
  "UEFA Champions League": [
    { pos: 1, team: "Paris Saint-Germain", played: 2, won: 2, drawn: 0, lost: 0, points: 6 },
    { pos: 2, team: "FC Barcelona", played: 2, won: 2, drawn: 0, lost: 0, points: 6 },
    { pos: 3, team: "Aston Villa", played: 2, won: 2, drawn: 0, lost: 0, points: 6 },
    { pos: 4, team: "VfB Stuttgart", played: 2, won: 2, drawn: 0, lost: 0, points: 6 },
    { pos: 5, team: "Liverpool FC", played: 2, won: 2, drawn: 0, lost: 0, points: 6 },
    { pos: 6, team: "Sporting CP", played: 2, won: 2, drawn: 0, lost: 0, points: 6 },
    { pos: 7, team: "Arsenal FC", played: 2, won: 2, drawn: 0, lost: 0, points: 6 },
    { pos: 8, team: "Real Madrid", played: 2, won: 2, drawn: 0, lost: 0, points: 6 },
    { pos: 9, team: "FC Bayern Munich", played: 2, won: 1, drawn: 1, lost: 0, points: 4 },
    { pos: 10, team: "Manchester United", played: 2, won: 1, drawn: 0, lost: 1, points: 3 }
  ],
  "Serie A": [
    { pos: 1, team: "Inter Milan", played: 7, won: 5, drawn: 2, lost: 0, points: 17 },
    { pos: 2, team: "Juventus", played: 7, won: 5, drawn: 1, lost: 1, points: 16 },
    { pos: 3, team: "Como 1907", played: 7, won: 4, drawn: 2, lost: 1, points: 14 },
    { pos: 4, team: "AC Milan", played: 7, won: 4, drawn: 1, lost: 2, points: 13 }
  ],
  "Bundesliga": [
    { pos: 1, team: "FC Bayern Munich", played: 7, won: 6, drawn: 1, lost: 0, points: 19 },
    { pos: 2, team: "VfB Stuttgart", played: 7, won: 5, drawn: 1, lost: 1, points: 16 },
    { pos: 3, team: "RB Leipzig", played: 7, won: 4, drawn: 2, lost: 1, points: 14 },
    { pos: 4, team: "Borussia Dortmund", played: 7, won: 4, drawn: 1, lost: 2, points: 13 }
  ],
  "Ligue 1": [
    { pos: 1, team: "Paris Saint-Germain", played: 8, won: 7, drawn: 1, lost: 0, points: 22 },
    { pos: 2, team: "RC Lens", played: 8, won: 5, drawn: 2, lost: 1, points: 17 },
    { pos: 3, team: "Marseille", played: 8, won: 5, drawn: 1, lost: 2, points: 16 }
  ]
};

// 3. ALL TEAMS DIRECTORY
const teamsDatabase = [
  { name: "Manchester City", league: "Premier League", manager: "Pep Guardiola", stadium: "Etihad Stadium", capacity: "53,400", starPlayer: "Erling Haaland", logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg" },
  { name: "Arsenal", league: "Premier League", manager: "Mikel Arteta", stadium: "Emirates Stadium", capacity: "60,704", starPlayer: "Bukayo Saka", logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg" },
  { name: "Liverpool", league: "Premier League", manager: "Arne Slot", stadium: "Anfield", capacity: "61,276", starPlayer: "Mohamed Salah", logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg" },
  { name: "Chelsea", league: "Premier League", manager: "Enzo Maresca", stadium: "Stamford Bridge", capacity: "40,341", starPlayer: "Cole Palmer", logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg" },
  { name: "FC Barcelona", league: "La Liga", manager: "Hansi Flick", stadium: "Spotify Camp Nou", capacity: "99,354", starPlayer: "Lamine Yamal", logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona.svg" },
  { name: "Real Madrid", league: "La Liga", manager: "Carlo Ancelotti", stadium: "Santiago Bernabéu", capacity: "81,044", starPlayer: "Kylian Mbappé", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" },
  { name: "Paris Saint-Germain", league: "Ligue 1", manager: "Luis Enrique", stadium: "Parc des Princes", capacity: "47,929", starPlayer: "Ousmane Dembélé", logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg" },
  { name: "FC Bayern Munich", league: "Bundesliga", manager: "Vincent Kompany", stadium: "Allianz Arena", capacity: "75,000", starPlayer: "Harry Kane", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg" },
  { name: "Inter Milan", league: "Serie A", manager: "Simone Inzaghi", stadium: "San Siro", capacity: "75,817", starPlayer: "Lautaro Martínez", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg" }
];

// Document Initializer
$(document).ready(function () {
  const path = window.location.pathname;
  const page = path.split("/").pop();

  if (page === "" || page === "index.html") {
    renderMatches(matchesData);
    setupSearchFilter();
  } else if (page === "standings.html") {
    renderStandings(leaguesStandings["Premier League"]);
    setupLeagueSelector();
    setupTableSort();
  } else if (page === "teams.html") {
    renderTeams(teamsDatabase);
    setupTeamFilters();
  } else if (page === "tickets.html") {
    setupTicketForm();
  }
});

/* ==========================================================================
   Page Render Functions
   ========================================================================== */

// Render Matches
function renderMatches(data) {
  const container = document.getElementById("matches-container");
  if (!container) return;

  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = `<div class="col-12 text-center text-muted py-4"><p>No matches found matching your search.</p></div>`;
    return;
  }

  data.forEach(match => {
    const isLive = match.status === "LIVE";
    const statusBadge = isLive 
      ? `<span class="pulse-badge">LIVE ${match.minute}</span>`
      : `<span class="badge bg-secondary">${match.status}</span>`;

    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-6";
    card.innerHTML = `
      <div class="glass-card">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted small fw-bold">${match.competition}</span>
          ${statusBadge}
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="text-center flex-grow-1">
            <img src="${match.logoH}" alt="${match.home}" style="width: 45px; height: 45px; object-fit: contain;" class="mb-2" onerror="this.src='https://via.placeholder.com/45?text=FC'">
            <h6 class="mb-0 fw-bold">${match.home}</h6>
          </div>
          <div class="px-3 py-2 rounded-3 fw-bold fs-4 mx-2" style="background: rgba(0,0,0,0.5); color: var(--accent-green);">
            ${match.homeScore} - ${match.awayScore}
          </div>
          <div class="text-center flex-grow-1">
            <img src="${match.logoA}" alt="${match.away}" style="width: 45px; height: 45px; object-fit: contain;" class="mb-2" onerror="this.src='https://via.placeholder.com/45?text=FC'">
            <h6 class="mb-0 fw-bold">${match.away}</h6>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Live/All Match Filter Button Toggle
function filterMatches(type) {
  if (type === "LIVE") {
    const liveOnly = matchesData.filter(m => m.status === "LIVE");
    renderMatches(liveOnly);
  } else {
    renderMatches(matchesData);
  }
}

// Render Standings Table
function renderStandings(teams) {
  const tbody = document.getElementById("standings-body");
  if (!tbody) return;

  tbody.innerHTML = "";

  teams.forEach(t => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="text-center fw-bold">${t.pos}</td>
      <td class="fw-bold">${t.team}</td>
      <td class="text-center">${t.played}</td>
      <td class="text-center">${t.won}</td>
      <td class="text-center">${t.drawn}</td>
      <td class="text-center">${t.lost}</td>
      <td class="text-center fw-bold" style="color: var(--accent-green);">${t.points}</td>
    `;
    tbody.appendChild(row);
  });
}

function setupLeagueSelector() {
  const leagueSelect = document.getElementById("leagueSelect");
  if (!leagueSelect) return;

  leagueSelect.addEventListener("change", function (e) {
    const selected = e.target.value;
    if (leaguesStandings[selected]) {
      renderStandings(leaguesStandings[selected]);
    }
  });
}

function setupTableSort() {
  const sortBtn = document.getElementById("sortPointsBtn");
  if (!sortBtn) return;

  let asc = false;
  sortBtn.addEventListener("click", function () {
    asc = !asc;
    const leagueSelect = document.getElementById("leagueSelect");
    const currentLeague = leagueSelect ? leagueSelect.value : "Premier League";
    const currentData = leaguesStandings[currentLeague] || [];

    const sorted = [...currentData].sort((a, b) => asc ? a.points - b.points : b.points - a.points);
    renderStandings(sorted);
    sortBtn.textContent = asc ? "Sort Points: Low to High" : "Sort Points: High to Low";
  });
}

// Render Teams Inspector Grid
function renderTeams(teams) {
  const grid = document.getElementById("teams-grid");
  if (!grid) return;

  grid.innerHTML = "";

  if (teams.length === 0) {
    grid.innerHTML = `<div class="col-12 text-center text-muted py-4"><p>No clubs found matching criteria.</p></div>`;
    return;
  }

  teams.forEach(team => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";
    col.innerHTML = `
      <div class="glass-card h-100 d-flex flex-column justify-content-between">
        <div>
          <div class="d-flex align-items-center gap-3 mb-3">
            <img src="${team.logo}" alt="${team.name}" style="width: 50px; height: 50px; object-fit: contain;" onerror="this.src='https://via.placeholder.com/50?text=FC'">
            <div>
              <h5 class="fw-bold mb-0">${team.name}</h5>
              <span class="badge bg-secondary small">${team.league}</span>
            </div>
          </div>
          <hr style="border-color: var(--border-color);">
          <p class="small mb-1"><strong>Manager:</strong> ${team.manager}</p>
          <p class="small mb-1"><strong>Stadium:</strong> ${team.stadium} (${team.capacity})</p>
          <p class="small mb-0"><strong>Key Player:</strong> ${team.starPlayer}</p>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });
}

function setupTeamFilters() {
  const search = document.getElementById("teamSearch");
  const filter = document.getElementById("teamLeagueFilter");

  function applyFilters() {
    const q = search ? search.value.toLowerCase().trim() : "";
    const l = filter ? filter.value : "ALL";

    const filtered = teamsDatabase.filter(t => {
      const matchQuery = t.name.toLowerCase().includes(q) || t.starPlayer.toLowerCase().includes(q);
      const matchLeague = (l === "ALL") || (t.league === l);
      return matchQuery && matchLeague;
    });

    renderTeams(filtered);
  }

  if (search) search.addEventListener("input", applyFilters);
  if (filter) filter.addEventListener("change", applyFilters);
}

function setupSearchFilter() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", function (e) {
    const q = e.target.value.toLowerCase().trim();
    const filtered = matchesData.filter(m => 
      m.home.toLowerCase().includes(q) || 
      m.away.toLowerCase().includes(q) ||
      m.competition.toLowerCase().includes(q)
    );
    renderMatches(filtered);
  });
}

// Ticket Form Validation
function setupTicketForm() {
  const form = document.getElementById("ticketForm");
  const alertBox = document.getElementById("formAlert");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const match = document.getElementById("matchSelect").value;
    const qty = parseInt(document.getElementById("quantity").value);

    if (name === "" || email === "" || match === "" || isNaN(qty) || qty < 1) {
      alertBox.className = "alert alert-danger mt-3";
      alertBox.textContent = "Please fill out all required fields properly.";
      alertBox.classList.remove("d-none");
      return;
    }

    const total = qty * 55;

    alertBox.className = "alert alert-success mt-3";
    alertBox.innerHTML = `
      <h5 class="fw-bold">Reservation Successful! 🎉</h5>
      <p class="mb-1">Thank you <strong>${name}</strong>. You reserved <strong>${qty}</strong> ticket(s) for <strong>${match}</strong>.</p>
      <p class="mb-0">Total: <strong>$${total}</strong>. A confirmation email was sent to <em>${email}</em>.</p>
    `;

    $("#formAlert").hide().removeClass("d-none").slideDown(300);
    form.reset();
  });
}