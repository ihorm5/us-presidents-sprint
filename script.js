const PRESIDENT_ROWS = [
  { number: 1, name: "George Washington" },
  { number: 2, name: "John Adams" },
  { number: 3, name: "Thomas Jefferson" },
  { number: 4, name: "James Madison" },
  { number: 5, name: "James Monroe" },
  { number: 6, name: "John Quincy Adams", aliases: ["jqa", "quincy adams"] },
  { number: 7, name: "Andrew Jackson" },
  { number: 8, name: "Martin Van Buren" },
  { number: 9, name: "William Henry Harrison", aliases: ["wh harrison"] },
  { number: 10, name: "John Tyler" },
  { number: 11, name: "James K. Polk", aliases: ["james polk", "jk polk"] },
  { number: 12, name: "Zachary Taylor" },
  { number: 13, name: "Millard Fillmore" },
  { number: 14, name: "Franklin Pierce" },
  { number: 15, name: "James Buchanan" },
  { number: 16, name: "Abraham Lincoln", aliases: ["abe lincoln"] },
  { number: 17, name: "Andrew Johnson" },
  { number: 18, name: "Ulysses S. Grant", aliases: ["ulysses grant", "us grant"] },
  { number: 19, name: "Rutherford B. Hayes", aliases: ["rutherford hayes"] },
  { number: 20, name: "James A. Garfield", aliases: ["james garfield"] },
  { number: 21, name: "Chester A. Arthur", aliases: ["chester arthur"] },
  { number: 22, name: "Grover Cleveland" },
  { number: 23, name: "Benjamin Harrison" },
  { number: 24, name: "Grover Cleveland" },
  { number: 25, name: "William McKinley" },
  { number: 26, name: "Theodore Roosevelt", aliases: ["theodore roosevelt", "teddy roosevelt", "tr"] },
  { number: 27, name: "William Howard Taft", aliases: ["william taft"] },
  { number: 28, name: "Woodrow Wilson" },
  { number: 29, name: "Warren G. Harding", aliases: ["warren harding"] },
  { number: 30, name: "Calvin Coolidge" },
  { number: 31, name: "Herbert Hoover" },
  { number: 32, name: "Franklin D. Roosevelt", aliases: ["franklin roosevelt", "fdr"] },
  { number: 33, name: "Harry S. Truman", aliases: ["harry truman"] },
  { number: 34, name: "Dwight D. Eisenhower", aliases: ["dwight eisenhower", "ike"] },
  { number: 35, name: "John F. Kennedy", aliases: ["john kennedy", "jfk"] },
  { number: 36, name: "Lyndon B. Johnson", aliases: ["lyndon johnson", "lbj"] },
  { number: 37, name: "Richard Nixon" },
  { number: 38, name: "Gerald Ford", aliases: ["jerry ford"] },
  { number: 39, name: "Jimmy Carter", aliases: ["james earl carter", "james carter"] },
  { number: 40, name: "Ronald Reagan" },
  { number: 41, name: "George H. W. Bush", aliases: ["george hw bush", "h w bush", "ghwb"] },
  { number: 42, name: "Bill Clinton", aliases: ["william clinton"] },
  { number: 43, name: "George W. Bush", aliases: ["george bush", "gwb", "george walker bush"] },
  { number: 44, name: "Barack Obama" },
  { number: 45, name: "Donald Trump", aliases: ["donald j trump"] },
  { number: 46, name: "Joe Biden", aliases: ["joseph biden", "joseph r biden"] },
  { number: 47, name: "Donald Trump", aliases: ["donald j trump"] }
];

const LAUREATE_ROWS = [
  { number: 1, name: "Sully Prudhomme" },
  { number: 2, name: "Theodor Mommsen" },
  { number: 3, name: "Bjørnstjerne Bjørnson" },
  { number: 4, name: "Frédéric Mistral" },
  { number: 5, name: "José Echegaray" },
  { number: 6, name: "Henryk Sienkiewicz" },
  { number: 7, name: "Giosuè Carducci" },
  { number: 8, name: "Rudyard Kipling" },
  { number: 9, name: "Rudolf Eucken" },
  { number: 10, name: "Selma Lagerlöf" },
  { number: 11, name: "Paul Heyse" },
  { number: 12, name: "Maurice Maeterlinck" },
  { number: 13, name: "Gerhart Hauptmann" },
  { number: 14, name: "Rabindranath Tagore" },
  { number: 15, name: "Romain Rolland" },
  { number: 16, name: "Verner von Heidenstam" },
  { number: 17, name: "Karl Gjellerup" },
  { number: 18, name: "Henrik Pontoppidan" },
  { number: 19, name: "Carl Spitteler" },
  { number: 20, name: "Knut Hamsun" },
  { number: 21, name: "Anatole France" },
  { number: 22, name: "Jacinto Benavente" },
  { number: 23, name: "William Butler Yeats" },
  { number: 24, name: "Władysław Reymont" },
  { number: 25, name: "George Bernard Shaw" },
  { number: 26, name: "Grazia Deledda" },
  { number: 27, name: "Henri Bergson" },
  { number: 28, name: "Sigrid Undset" },
  { number: 29, name: "Thomas Mann" },
  { number: 30, name: "Sinclair Lewis" },
  { number: 31, name: "Erik Axel Karlfeldt" },
  { number: 32, name: "John Galsworthy" },
  { number: 33, name: "Ivan Bunin" },
  { number: 34, name: "Luigi Pirandello" },
  { number: 35, name: "Eugene O'Neill" },
  { number: 36, name: "Roger Martin du Gard" },
  { number: 37, name: "Pearl Buck" },
  { number: 38, name: "Frans Eemil Sillanpää" },
  { number: 39, name: "Johannes V. Jensen" },
  { number: 40, name: "Gabriela Mistral" },
  { number: 41, name: "Hermann Hesse" },
  { number: 42, name: "André Gide" },
  { number: 43, name: "T.S. Eliot" },
  { number: 44, name: "William Faulkner" },
  { number: 45, name: "Bertrand Russell" },
  { number: 46, name: "Pär Lagerkvist" },
  { number: 47, name: "François Mauriac" },
  { number: 48, name: "Winston Churchill" },
  { number: 49, name: "Ernest Hemingway" },
  { number: 50, name: "Halldór Laxness" },
  { number: 51, name: "Juan Ramón Jiménez" },
  { number: 52, name: "Albert Camus" },
  { number: 53, name: "Boris Pasternak" },
  { number: 54, name: "Salvatore Quasimodo" },
  { number: 55, name: "Saint-John Perse" },
  { number: 56, name: "Ivo Andrić" },
  { number: 57, name: "John Steinbeck" },
  { number: 58, name: "Giorgos Seferis" },
  { number: 59, name: "Jean-Paul Sartre" },
  { number: 60, name: "Mikhail Sholokhov" },
  { number: 61, name: "Shmuel Agnon" },
  { number: 62, name: "Nelly Sachs" },
  { number: 63, name: "Miguel Angel Asturias" },
  { number: 64, name: "Yasunari Kawabata" },
  { number: 65, name: "Samuel Beckett" },
  { number: 66, name: "Aleksandr Solzhenitsyn" },
  { number: 67, name: "Pablo Neruda" },
  { number: 68, name: "Heinrich Böll" },
  { number: 69, name: "Patrick White" },
  { number: 70, name: "Eyvind Johnson" },
  { number: 71, name: "Harry Martinson" },
  { number: 72, name: "Eugenio Montale" },
  { number: 73, name: "Saul Bellow" },
  { number: 74, name: "Vicente Aleixandre" },
  { number: 75, name: "Isaac Bashevis Singer" },
  { number: 76, name: "Odysseus Elytis" },
  { number: 77, name: "Czesław Miłosz" },
  { number: 78, name: "Elias Canetti" },
  { number: 79, name: "Gabriel García Márquez" },
  { number: 80, name: "William Golding" },
  { number: 81, name: "Jaroslav Seifert" },
  { number: 82, name: "Claude Simon" },
  { number: 83, name: "Wole Soyinka" },
  { number: 84, name: "Joseph Brodsky" },
  { number: 85, name: "Naguib Mahfouz" },
  { number: 86, name: "Camilo José Cela" },
  { number: 87, name: "Octavio Paz" },
  { number: 88, name: "Nadine Gordimer" },
  { number: 89, name: "Derek Walcott" },
  { number: 90, name: "Toni Morrison" },
  { number: 91, name: "Kenzaburo Oe" },
  { number: 92, name: "Seamus Heaney" },
  { number: 93, name: "Wisława Szymborska" },
  { number: 94, name: "Dario Fo" },
  { number: 95, name: "José Saramago" },
  { number: 96, name: "Günter Grass" },
  { number: 97, name: "Gao Xingjian" },
  { number: 98, name: "V. S. Naipaul" },
  { number: 99, name: "Imre Kertész" },
  { number: 100, name: "J. M. Coetzee" },
  { number: 101, name: "Elfriede Jelinek" },
  { number: 102, name: "Harold Pinter" },
  { number: 103, name: "Orhan Pamuk" },
  { number: 104, name: "Doris Lessing" },
  { number: 105, name: "Jean-Marie Gustave Le Clézio" },
  { number: 106, name: "Herta Müller" },
  { number: 107, name: "Mario Vargas Llosa" },
  { number: 108, name: "Tomas Tranströmer" },
  { number: 109, name: "Mo Yan" },
  { number: 110, name: "Alice Munro" },
  { number: 111, name: "Patrick Modiano" },
  { number: 112, name: "Svetlana Alexievich" },
  { number: 113, name: "Bob Dylan" },
  { number: 114, name: "Kazuo Ishiguro" },
  { number: 115, name: "Olga Tokarczuk" },
  { number: 116, name: "Peter Handke" },
  { number: 117, name: "Louise Glück" },
  { number: 118, name: "Abdulrazak Gurnah" },
  { number: 119, name: "Annie Ernaux" },
  { number: 120, name: "Jon Fosse" },
  { number: 121, name: "Han Kang" },
  { number: 122, name: "László Krasznahorkai" }
];

const GAME_STATUS = Object.freeze({
  running: "running",
  won: "won",
  resigned: "resigned"
});
const GAME_MODES = Object.freeze({
  presidents: "presidents",
  literature: "literature"
});
const DEFAULT_GAME_MODE = GAME_MODES.presidents;
const GAME_CONFIG = Object.freeze({
  [GAME_MODES.presidents]: {
    title: "Name Every U.S. President",
    subtitle: "Type one name at a time. Autocomplete appears for strong surname matches.",
    placeholder: "Try: Lincoln",
    shareLabel: "U.S. Presidents Sprint",
    rows: PRESIDENT_ROWS
  },
  [GAME_MODES.literature]: {
    title: "Name Every Nobel Literature Laureate",
    subtitle: "Type one name at a time. Autocomplete appears for strong surname matches.",
    placeholder: "Try: Hemingway",
    shareLabel: "Nobel Literature Sprint",
    rows: LAUREATE_ROWS
  }
});
const MIN_AUTOCOMPLETE_LASTNAME_LENGTH = 5;

let activeMode = DEFAULT_GAME_MODE;
let totalRows = 0;
let rowsWithKeys = [];
let people = new Map();
let aliasToKeys = new Map();

const state = {
  foundKeys: new Set(),
  status: GAME_STATUS.running,
  startedAtMs: 0,
  elapsedMs: 0,
  timerIntervalId: null
};

const elements = {
  form: document.getElementById("guess-form"),
  submit: document.querySelector('#guess-form button[type="submit"]'),
  input: document.getElementById("guess-input"),
  suggestions: document.getElementById("suggestions"),
  feedback: document.getElementById("feedback"),
  progress: document.getElementById("progress-text"),
  timer: document.getElementById("timer-text"),
  list: document.getElementById("game-rows"),
  resign: document.getElementById("resign-button"),
  share: document.getElementById("share-button"),
  reset: document.getElementById("reset-button"),
  modeSelect: document.getElementById("mode-select"),
  gameTitle: document.getElementById("game-title"),
  gameSubtitle: document.getElementById("game-subtitle")
};

const rowElementsByNumber = new Map();

bindEvents();
setActiveMode(activeMode);

function setActiveMode(nextMode) {
  const config = GAME_CONFIG[nextMode];
  if (!config) {
    return;
  }

  activeMode = nextMode;
  rowsWithKeys = config.rows.map((row) => ({
    ...row,
    key: normalizeName(row.name)
  }));
  totalRows = rowsWithKeys.length;
  people = buildPeople(rowsWithKeys);
  aliasToKeys = buildAliasIndex(people);

  applyGameMeta(config);
  renderRows();
  startNewGame("Game started.");
}

function getActiveGameConfig() {
  return GAME_CONFIG[activeMode];
}

function applyGameMeta(config) {
  if (elements.modeSelect) {
    elements.modeSelect.value = activeMode;
  }
  if (elements.gameTitle) {
    elements.gameTitle.textContent = config.title;
  }
  if (elements.gameSubtitle) {
    elements.gameSubtitle.textContent = config.subtitle;
  }
  if (elements.input) {
    elements.input.placeholder = config.placeholder;
  }
}

function bindEvents() {
  elements.form.addEventListener("submit", handleSubmit);
  elements.input.addEventListener("input", handleInput);
  elements.resign.addEventListener("click", resignGame);
  elements.share.addEventListener("click", shareResult);
  elements.reset.addEventListener("click", resetGame);
  if (elements.modeSelect) {
    elements.modeSelect.addEventListener("change", () => {
      setActiveMode(elements.modeSelect.value);
    });
  }
  document.addEventListener("click", (event) => {
    if (!elements.suggestions.contains(event.target) && event.target !== elements.input) {
      clearSuggestions();
    }
  });
}

function renderRows() {
  const fragment = document.createDocumentFragment();
  rowElementsByNumber.clear();

  rowsWithKeys.forEach((row) => {
    const li = document.createElement("li");
    li.className = "row";
    li.dataset.key = row.key;
    li.dataset.number = String(row.number);
    li.innerHTML = `<span class="row-number">${row.number}.</span><span class="row-name">empty</span>`;
    rowElementsByNumber.set(row.number, li);
    fragment.appendChild(li);
  });

  elements.list.replaceChildren(fragment);
}

function handleInput() {
  if (!isGameRunning()) {
    clearSuggestions();
    return;
  }

  const normalizedInput = normalizeName(elements.input.value);
  if (!normalizedInput) {
    clearSuggestions();
    setFeedback("");
    return;
  }

  const lastNameQuery = extractLastToken(normalizedInput);
  if (!shouldOfferAutocomplete(lastNameQuery)) {
    clearSuggestions();
    return;
  }

  const candidates = rankAutocompleteCandidates(lastNameQuery).slice(0, 5);
  renderSuggestions(candidates, lastNameQuery);
}

function handleSubmit(event) {
  event.preventDefault();

  if (!isGameRunning()) {
    setFeedback("Game is not running. Press Reset to start a new run.");
    return;
  }

  const rawGuess = elements.input.value.trim();
  if (!rawGuess) {
    return;
  }

  const outcome = resolveGuess(rawGuess);

  if (outcome.type === "matched") {
    if (fillPresident(outcome.key)) {
      elements.input.value = "";
      clearSuggestions();
      elements.input.focus();
    }
    return;
  }

  if (outcome.type === "already-guessed") {
    setFeedback(`${outcome.name} is already filled.`);
    return;
  }

  if (outcome.type === "ambiguous") {
    setFeedback(`Need a bit more detail: ${outcome.options.join(" or ")}.`);
    return;
  }

  setFeedback("No close match found. Try a fuller name.");
}

function resolveGuess(rawGuess) {
  const normalized = normalizeName(rawGuess);
  if (!normalized) {
    return { type: "none" };
  }

  const exactKeys = aliasToKeys.get(normalized);
  if (exactKeys) {
    const remaining = [...exactKeys].filter((key) => !state.foundKeys.has(key));
    if (remaining.length === 1) {
      return { type: "matched", key: remaining[0] };
    }
    if (remaining.length === 0) {
      const key = [...exactKeys][0];
      return { type: "already-guessed", name: people.get(key).name };
    }
    return {
      type: "ambiguous",
      options: remaining.map((key) => people.get(key).name)
    };
  }

  const ranked = rankCandidates(normalized, {
    maxDistance: fuzzyThreshold(normalized.length),
    allowContains: true
  });
  if (ranked.length === 0) {
    return { type: "none" };
  }

  const best = ranked[0];
  const second = ranked[1];
  const maxDistance = fuzzyThreshold(normalized.length);
  const clearWinner = !second || best.distance + 1 < second.distance || best.normalized + 0.13 < second.normalized;
  const closeEnough = best.distance <= maxDistance && best.normalized <= 0.33;

  if (closeEnough && clearWinner) {
    return { type: "matched", key: best.key };
  }

  if (best.distance <= maxDistance + 1 && best.normalized <= 0.4) {
    setFeedback(`Did you mean ${best.name}? Select it from suggestions or type more.`);
    return { type: "none" };
  }

  return { type: "none" };
}

function rankCandidates(query, options = {}) {
  const {
    maxDistance = fuzzyThreshold(query.length) + 2,
    allowContains = true
  } = options;
  const candidates = [];

  for (const person of people.values()) {
    if (state.foundKeys.has(person.key)) {
      continue;
    }

    let bestScore = null;
    for (const alias of person.aliases) {
      const score = scoreAlias(query, alias, { maxDistance, allowContains });
      if (!score) {
        continue;
      }
      if (!bestScore || compareScores(score, bestScore) < 0) {
        bestScore = score;
      }
    }

    if (!bestScore) {
      continue;
    }

    candidates.push({
      key: person.key,
      name: person.name,
      rows: person.rows,
      distance: bestScore.distance,
      normalized: bestScore.normalized,
      startsWith: bestScore.startsWith
    });
  }

  return candidates.sort((a, b) => {
    if (a.startsWith !== b.startsWith) {
      return a.startsWith ? -1 : 1;
    }
    if (a.distance !== b.distance) {
      return a.distance - b.distance;
    }
    if (a.normalized !== b.normalized) {
      return a.normalized - b.normalized;
    }
    return a.name.localeCompare(b.name);
  });
}

function rankAutocompleteCandidates(lastNameQuery) {
  const maxDistance = autocompleteDistanceLimit(lastNameQuery.length);
  const candidates = [];

  for (const person of people.values()) {
    if (state.foundKeys.has(person.key)) {
      continue;
    }

    let bestScore = null;
    for (const alias of person.aliases) {
      const score = scoreLastNameAutocomplete(lastNameQuery, alias, maxDistance);
      if (!score) {
        continue;
      }
      if (!bestScore || compareScores(score, bestScore) < 0) {
        bestScore = score;
      }
    }

    if (!bestScore) {
      continue;
    }

    candidates.push({
      key: person.key,
      name: person.name,
      rows: person.rows,
      distance: bestScore.distance,
      normalized: bestScore.normalized,
      startsWith: bestScore.startsWith
    });
  }

  return candidates.sort((a, b) => {
    if (a.distance !== b.distance) {
      return a.distance - b.distance;
    }
    if (a.normalized !== b.normalized) {
      return a.normalized - b.normalized;
    }
    return a.name.localeCompare(b.name);
  });
}

function scoreAlias(query, alias, options = {}) {
  if (query.length < 2) {
    return null;
  }

  const {
    maxDistance = fuzzyThreshold(query.length) + 2,
    allowContains = true
  } = options;

  const startsWith = alias.startsWith(query);
  const distance = levenshtein(query, alias);
  const normalized = distance / Math.max(query.length, alias.length);
  const contains = allowContains && alias.includes(query);
  const accepted = distance <= maxDistance || contains;

  if (!accepted) {
    return null;
  }

  return { distance, normalized, startsWith };
}

function scoreLastNameAutocomplete(lastNameQuery, alias, maxDistance) {
  const aliasLastName = extractLastToken(alias);
  if (!aliasLastName || aliasLastName.length < lastNameQuery.length) {
    return null;
  }

  const aliasPrefix = aliasLastName.slice(0, lastNameQuery.length);
  const distance = manhattanDistance(lastNameQuery, aliasPrefix);
  if (distance > maxDistance) {
    return null;
  }

  return {
    distance,
    normalized: distance / lastNameQuery.length,
    startsWith: distance === 0
  };
}

function renderSuggestions(candidates, lastNameQuery = "") {
  const currentLastNameQuery = extractLastToken(normalizeName(elements.input.value));
  if (
    !lastNameQuery ||
    !shouldOfferAutocomplete(currentLastNameQuery) ||
    currentLastNameQuery !== lastNameQuery
  ) {
    clearSuggestions();
    return;
  }

  if (candidates.length === 0) {
    clearSuggestions();
    return;
  }

  const fragment = document.createDocumentFragment();
  candidates.forEach((candidate) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const rowLabel = candidate.rows.length > 1 ? `#${candidate.rows.join(" / #")}` : `#${candidate.rows[0]}`;
    button.type = "button";
    button.className = "suggestion-button";
    button.textContent = `${candidate.name} (${rowLabel})`;
    button.addEventListener("click", () => {
      if (fillPresident(candidate.key)) {
        elements.input.value = "";
        clearSuggestions();
        elements.input.focus();
      }
    });
    li.appendChild(button);
    fragment.appendChild(li);
  });

  elements.suggestions.replaceChildren(fragment);
  elements.suggestions.classList.add("is-visible");
}

function clearSuggestions() {
  elements.suggestions.classList.remove("is-visible");
  elements.suggestions.replaceChildren();
}

function fillPresident(key) {
  if (!isGameRunning() || state.foundKeys.has(key)) {
    return false;
  }

  const person = people.get(key);
  if (!person) {
    return false;
  }

  state.foundKeys.add(key);

  person.rows.forEach((rowNumber) => {
    const rowElement = rowElementsByNumber.get(rowNumber);
    if (!rowElement) {
      return;
    }
    rowElement.classList.add("is-found");
    const nameCell = rowElement.querySelector(".row-name");
    if (nameCell) {
      nameCell.textContent = person.name;
    }
  });

  updateProgress();
  const rowText = person.rows.length > 1 ? `rows ${person.rows.join(" and ")}` : `row ${person.rows[0]}`;
  setFeedback(`Filled ${rowText}: ${person.name}.`);

  if (countFilledRows() === totalRows) {
    endGame(GAME_STATUS.won);
    return true;
  }

  return true;
}

function resignGame() {
  if (!isGameRunning()) {
    return;
  }
  endGame(GAME_STATUS.resigned);
}

function resetGame() {
  rowElementsByNumber.forEach((rowElement) => {
    rowElement.classList.remove("is-found");
    rowElement.classList.remove("is-revealed");
    const nameCell = rowElement.querySelector(".row-name");
    if (nameCell) {
      nameCell.textContent = "empty";
    }
  });

  startNewGame("Game reset.");
}

function startNewGame(message = "Game started.") {
  stopGameClock();
  state.foundKeys.clear();
  state.status = GAME_STATUS.running;
  state.elapsedMs = 0;
  state.startedAtMs = Date.now();
  state.timerIntervalId = window.setInterval(updateTimer, 250);

  setGameInteractable(true);
  elements.input.value = "";
  clearSuggestions();
  updateProgress();
  updateTimer();
  setFeedback(message);
  elements.input.focus();
}

function endGame(nextStatus) {
  if (state.status !== GAME_STATUS.running) {
    return;
  }

  state.status = nextStatus;
  stopGameClock();
  setGameInteractable(false);
  clearSuggestions();

  const filledRows = countFilledRows();
  const timeText = formatDuration(state.elapsedMs);

  if (nextStatus === GAME_STATUS.won) {
    setFeedback(`All ${totalRows} filled in ${timeText}. Complete!`);
    return;
  }

  revealRemainingAnswers();
  setFeedback(`You resigned at ${timeText} with ${filledRows}/${totalRows} rows filled.`);
}

function revealRemainingAnswers() {
  rowsWithKeys.forEach((row) => {
    if (state.foundKeys.has(row.key)) {
      return;
    }

    const rowElement = rowElementsByNumber.get(row.number);
    if (!rowElement) {
      return;
    }

    rowElement.classList.add("is-revealed");
    const nameCell = rowElement.querySelector(".row-name");
    if (nameCell) {
      nameCell.textContent = row.name;
    }
  });
}

function updateProgress() {
  const filledRows = countFilledRows();
  elements.progress.textContent = `${filledRows} / ${totalRows} filled`;
}

function updateTimer() {
  if (state.status === GAME_STATUS.running) {
    state.elapsedMs = Date.now() - state.startedAtMs;
  }
  elements.timer.textContent = formatDuration(state.elapsedMs);
}

function stopGameClock() {
  if (state.timerIntervalId !== null) {
    clearInterval(state.timerIntervalId);
    state.timerIntervalId = null;
  }
  if (state.status === GAME_STATUS.running) {
    state.elapsedMs = Date.now() - state.startedAtMs;
  }
  elements.timer.textContent = formatDuration(state.elapsedMs);
}

function isGameRunning() {
  return state.status === GAME_STATUS.running;
}

function setGameInteractable(enabled) {
  elements.input.disabled = !enabled;
  elements.submit.disabled = !enabled;
  elements.resign.disabled = !enabled;
}

function countFilledRows() {
  let count = 0;
  rowsWithKeys.forEach((row) => {
    if (state.foundKeys.has(row.key)) {
      count += 1;
    }
  });
  return count;
}

function setFeedback(message) {
  elements.feedback.textContent = message;
}

async function shareResult() {
  updateTimer();
  const shareText = buildShareText();

  if (navigator.share) {
    try {
      await navigator.share({ text: shareText });
      setFeedback("Result shared.");
      return;
    } catch (error) {
      if (error && error.name === "AbortError") {
        return;
      }
    }
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(shareText);
      setFeedback("Result copied to clipboard.");
      return;
    } catch (error) {
      // Fallback below.
    }
  }

  setFeedback(shareText);
}

function buildShareText() {
  const filledRows = countFilledRows();
  const timeText = formatDuration(state.elapsedMs);
  let statusLabel = "in progress";

  if (state.status === GAME_STATUS.won) {
    statusLabel = "completed";
  } else if (state.status === GAME_STATUS.resigned) {
    statusLabel = "resigned";
  }

  return `${getActiveGameConfig().shareLabel}: ${filledRows}/${totalRows} in ${timeText} (${statusLabel}).`;
}

function formatDuration(durationMs) {
  const totalSeconds = Math.max(0, Math.floor(durationMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const hours = Math.floor(minutes / 60);
  const shortMinutes = minutes % 60;

  if (hours > 0) {
    return `${pad2(hours)}:${pad2(shortMinutes)}:${pad2(seconds)}`;
  }

  return `${pad2(minutes)}:${pad2(seconds)}`;
}

function pad2(value) {
  return String(value).padStart(2, "0");
}

function buildPeople(rows) {
  const byKey = new Map();

  rows.forEach((row) => {
    if (!byKey.has(row.key)) {
      byKey.set(row.key, {
        key: row.key,
        name: row.name,
        rows: [],
        aliases: new Set()
      });
    }

    const person = byKey.get(row.key);
    person.rows.push(row.number);

    addAlias(person.aliases, row.name);
    addAlias(person.aliases, row.name.split(" ").at(-1));

    (row.aliases || []).forEach((alias) => addAlias(person.aliases, alias));
  });

  return byKey;
}

function buildAliasIndex(peopleByKey) {
  const index = new Map();

  for (const person of peopleByKey.values()) {
    for (const alias of person.aliases) {
      if (!index.has(alias)) {
        index.set(alias, new Set());
      }
      index.get(alias).add(person.key);
    }
  }

  return index;
}

function addAlias(set, alias) {
  const normalized = normalizeName(alias || "");
  if (normalized.length < 2) {
    return;
  }
  set.add(normalized);
}

function fuzzyThreshold(length) {
  if (length <= 4) {
    return 1;
  }
  if (length <= 8) {
    return 2;
  }
  return 3;
}

function compareScores(a, b) {
  if (a.startsWith !== b.startsWith) {
    return a.startsWith ? -1 : 1;
  }
  if (a.distance !== b.distance) {
    return a.distance - b.distance;
  }
  return a.normalized - b.normalized;
}

function normalizeName(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractLastToken(value) {
  const tokens = value.split(" ");
  return tokens.at(-1) || "";
}

function shouldOfferAutocomplete(lastNameQuery) {
  if (lastNameQuery.length >= MIN_AUTOCOMPLETE_LASTNAME_LENGTH) {
    return true;
  }

  return hasExactShortLastNameMatch(lastNameQuery);
}

function hasExactShortLastNameMatch(lastNameQuery) {
  if (lastNameQuery.length < 4) {
    return false;
  }

  for (const person of people.values()) {
    if (state.foundKeys.has(person.key)) {
      continue;
    }

    for (const alias of person.aliases) {
      if (extractLastToken(alias) === lastNameQuery) {
        return true;
      }
    }
  }

  return false;
}

function autocompleteDistanceLimit(length) {
  if (length <= 6) {
    return 1;
  }
  if (length <= 10) {
    return 2;
  }
  return 3;
}

function manhattanDistance(a, b) {
  const maxLength = Math.max(a.length, b.length);
  let distance = 0;
  for (let index = 0; index < maxLength; index += 1) {
    if ((a[index] || "") !== (b[index] || "")) {
      distance += 1;
    }
  }
  return distance;
}

function levenshtein(a, b) {
  if (a === b) {
    return 0;
  }
  if (a.length === 0) {
    return b.length;
  }
  if (b.length === 0) {
    return a.length;
  }

  const previous = new Array(b.length + 1);
  const current = new Array(b.length + 1);

  for (let j = 0; j <= b.length; j += 1) {
    previous[j] = j;
  }

  for (let i = 1; i <= a.length; i += 1) {
    current[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      current[j] = Math.min(
        current[j - 1] + 1,
        previous[j] + 1,
        previous[j - 1] + cost
      );
    }
    for (let j = 0; j <= b.length; j += 1) {
      previous[j] = current[j];
    }
  }

  return previous[b.length];
}
