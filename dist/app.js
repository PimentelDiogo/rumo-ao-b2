"use strict";
const WEEKS = [[["Present simple", "g", "1"], ["Pronouns", "g", "2"], ["Articles", "g", "3"], ["Numbers (cardinal, ordinal)", "v", "22"], ["Money", "v", "23"], ["Countries and nationalities", "v", "24"], ["Greeting and introducing", "t", "42"], ["Buying and asking prices", "t", "43"], ["Asking about personal information", "t", "44"], ["Describing people and objects", "t", "45"]], [["Prepositions of place", "g", "4"], ["Prepositions of time", "g", "5"], ["Conjunctions, linkers", "g", "6"], ["Languages", "v", "25"], ["How to say the time", "v", "26"], ["Days, dates, months, years and seasons", "v", "27"], ["Talking about routines", "t", "46"], ["Talking about frequency and time duration", "t", "47"], ["Talking about likes and dislikes", "t", "48"], ["Giving opinions", "t", "49"]], [["Irregular plurals", "g", "7"], ["Possessive", "g", "8"], ["Adjectives", "g", "9"], ["Shops and places", "v", "28"], ["Interests, sports and activities", "v", "29"], ["Jobs", "v", "30"], ["Rooms and furniture", "v", "31"], ["Talking about past experiences", "t", "50"], ["Inviting, refusing, accepting, thanking", "t", "51"], ["Requesting, offering", "t", "52"]], [["Too, very", "g", "10"], ["Can (ability, possibility)", "g", "11"], ["Short form answers", "g", "12"], ["Going to (future plans)", "g", "13"], ["Colours", "v", "32"], ["Size and weight", "v", "33"], ["Body parts and appearance", "v", "34"], ["Food, meals, cooking", "v", "35"], ["Asking permission", "t", "53"], ["Expressing opinions", "t", "86"]], [["Will (offers)", "g", "14"], ["Adverbs of frequency", "g", "15"], ["Imperatives", "g", "16"], ["Past simple", "g", "17"], ["Weather", "v", "36"], ["Transport", "v", "37"], ["Health", "v", "38"], ["Feelings and emotions", "v", "39"], ["Justifying opinions", "t", "87"], ["Talking about routines and habits", "t", "88"]], [["Present continuous", "g", "18"], ["Comparatives", "g", "19"], ["Superlatives", "g", "20"], ["Street directions", "v", "40"], ["Clothes", "v", "41"], ["Families", "v", "70"], ["Food and meals", "v", "71"], ["Clothing and shopping", "v", "72"], ["Talking about intentions (part 1)", "t", "89"], ["Talking about intentions (part 2)", "t", "90"]], [["Irregular adverbs", "g", "21"], ["Countable, uncountable nouns", "g", "55"], ["Adverbs of frequency and manner", "g", "56"], ["Too, not enough", "g", "57"], ["Prices", "v", "73"], ["Daily routines", "v", "74"], ["Personality", "v", "75"], ["How to talk about life experiences", "t", "91"], ["Talking about experience", "t", "92"], ["Talking about feelings", "t", "93"]], [["Can, could for requests", "g", "58"], ["Adjectives", "g", "59"], ["Adverbs and adjectives as modifiers", "g", "60"], ["Present continuous for temporary situations", "g", "61"], ["Appearance", "v", "76"], ["Present and childhood abilities", "v", "77"], ["Basic suffixes", "v", "78"], ["Making comparisons", "t", "94"], ["Inviting", "t", "95"], ["Making decisions", "t", "96"]], [["Present continuous for the future", "g", "62"], ["Comparative and superlative", "g", "63"], ["Present perfect", "g", "64"], ["Work and jobs", "v", "79"], ["Transport", "v", "80"], ["Travel", "v", "81"], ["Describing things", "t", "97"], ["Buying things", "t", "98"], ["Talking about possibility", "t", "99"], ["Expressing hopes", "t", "100"]], [["Should for advice", "g", "65"], ["Have to, need to, must", "g", "66"], ["Be like for descriptions", "g", "67"], ["Present simple for future facts", "g", "68"], ["Machines and inventions", "v", "82"], ["Festivals and celebrations", "v", "83"], ["Hotel situations", "v", "84"], ["Talking about rules and obligations", "t", "101"], ["Giving instructions", "t", "102"], ["Making offers", "t", "103"]], [["Future simple for future facts", "g", "69"], ["Past continuous", "g", "109"], ["Present perfect", "g", "110"], ["Weather and climate", "v", "85"], ["Describing people", "v", "124"], ["Speak about health and illness", "v", "125"], ["Types of music and concerts", "v", "126"], ["Advising", "t", "104"], ["Suggesting", "t", "105"], ["Apologizing", "t", "106"]], [["Going to and will for predictions", "g", "111"], ["Reflexive pronouns", "g", "112"], ["So, such", "g", "113"], ["Household equipment", "v", "127"], ["Biographical information", "v", "128"], ["Buildings and monuments", "v", "129"], ["Congratulating", "t", "107"], ["Talking about future arrangements", "t", "108"], ["Asking personal questions", "t", "140"], ["Talking about personal experiences", "t", "141"]], [["Passive", "g", "114"], ["When, while", "g", "115"], ["Must, might for deductions", "g", "116"], ["Clothes and accessories", "v", "130"], ["Large numbers", "v", "131"], ["Travel and tourism", "v", "132"], ["Work and careers", "v", "133"], ["Asking directions", "t", "142"], ["Describing personality", "t", "143"], ["Making travel arrangements", "t", "144"]], [["As soon as", "g", "117"], ["Be able to", "g", "118"], ["Be good at", "g", "119"], ["Hobbies, sports and interests", "v", "134"], ["Education", "v", "135"], ["Life changes and events", "v", "136"], ["Political systems and change", "v", "137"], ["Ordering in a restaurant", "t", "145"], ["Talking about preferences", "t", "146"], ["Expressing preferences", "t", "147"]], [["First conditional", "g", "120"], ["Used to + verb", "g", "121"], ["Relative clauses", "g", "122"], ["Animals", "v", "138"], ["Restaurants and leisure venues", "v", "139"], ["Appearances", "v", "171"], ["Making deductions", "t", "148"], ["Making predictions", "t", "149"], ["Making suggestions", "t", "150"], ["Making offers", "t", "151"]], [["Although, however", "g", "123"], ["Used to + infinitive", "g", "154"], ["Past simple and present perfect", "g", "155"], ["Neither, so do I", "g", "156"], ["Character", "v", "172"], ["Make and do", "v", "173"], ["Housework", "v", "174"], ["Holidays and travel brochures", "v", "175"], ["Talking about obligation", "t", "152"], ["Requesting", "t", "153"]], [["Modal verbs", "g", "157"], ["Reported speech", "g", "158"], ["First, second conditional", "g", "159"], ["Illness", "v", "176"], ["Cooking", "v", "177"], ["Furniture and appliances", "v", "178"], ["Describing location, people and things", "t", "187"], ["Stating preferences and opinions", "t", "188"], ["Reporting requests and orders", "t", "189"], ["Guessing", "t", "190"]], [["Adverbs of manner and modifiers", "g", "160"], ["Adjectives and their connotations", "g", "161"], ["Present perfect continuous", "g", "162"], ["Types of books, films, and TV programs", "v", "179"], ["Crime and punishment", "v", "180"], ["Political systems", "v", "181"], ["Possibility, probability and certainty", "t", "191"], ["Describing faulty goods", "t", "192"], ["Refusing", "t", "193"], ["Summarizing", "t", "225"]], [["Look + adjective, look like + noun", "g", "163"], ["Be able to, can, manage to", "g", "164"], ["Past perfect simple", "g", "165"], ["Have and have got", "g", "166"], ["Family relationships", "v", "182"], ["Pets and animals", "v", "183"], ["Consumer services", "v", "184"], ["Expressing regret", "t", "226"], ["Drawing conclusions", "t", "227"], ["Describing cause and effect", "t", "228"]], [["Be allowed to and be supposed to", "g", "167"], ["A few, a little, few, little", "g", "168"], ["Although, in spite of, despite", "g", "169"], ["Hotel facilities", "v", "185"], ["Affixes", "v", "186"], ["Collocations", "v", "211"], ["Work, working conditions", "v", "212"], ["Stating purpose", "t", "229"], ["Emphasizing", "t", "230"], ["Stating contrast", "t", "231"]], [["Question tags", "g", "170"], ["Future perfect continuous", "g", "277"], ["Past perfect continuous", "g", "278"], ["Approximations with -ish", "v", "213"], ["Transportation", "v", "214"], ["Relationships", "v", "215"], ["Connotation", "v", "216"], ["Contradicting", "t", "264"], ["Instructing", "t", "265"], ["Expressing opinions formally and informally", "t", "266"]], [["Habit in the present and in the past", "g", "194"], ["Present perfect simple and continuous", "g", "195"], ["Past simple, past continuous, past perfect", "g", "196"], ["Will, going to", "g", "197"], ["Future perfect", "g", "198"], ["Homonyms", "v", "217"], ["Idiomatic expressions", "v", "218"], ["Sport and leisure", "v", "219"], ["Checking and clarifying information", "t", "267"], ["Paraphrasing", "t", "268"]], [["Phrasal verbs", "g", "199"], ["Zero, first, second and third conditionals", "g", "200"], ["Wish and If only", "g", "201"], ["Compounds of some, any, no, every", "g", "202"], ["Euphemisms", "v", "220"], ["Geography and climate", "v", "221"], ["At the bank", "v", "222"], ["Colloquial expressions and slang", "v", "223"], ["Expanding and exemplifying", "t", "269"], ["Persuading and convincing", "t", "270"]], [["Though, although, despite, in spite of", "g", "203"], ["Unless", "g", "204"], ["Otherwise", "g", "205"], ["Modals: present and perfect", "g", "206"], ["Participle adjectives", "v", "224"], ["Astrology and religions", "v", "246"], ["Nostalgia", "v", "247"], ["Coincidences and experiences", "v", "248"], ["Speculating", "t", "271"], ["Expressing annoyance", "t", "272"]], [["Always for frequency + present continuous", "g", "207"], ["Habit in the present and the past participle", "g", "208"], ["Present perfect simple and continuous", "g", "209"], ["Participles", "g", "210"], ["Uses of continuous tenses", "g", "237"], ["Learning and educational systems", "v", "249"], ["Eccentricity and individuality", "v", "250"], ["Creativity", "v", "251"], ["Comparing and contrasting", "t", "273"], ["Describing people", "t", "274"]], [["Uses of would", "g", "238"], ["Past perfect", "g", "239"], ["Order of adverbs", "g", "240"], ["Order of adjectives", "g", "241"], ["Ellipsis and elision", "g", "242"], ["Age and cultural differences", "v", "252"], ["Gender", "v", "253"], ["Politics", "v", "254"], ["Describing things", "t", "275"], ["Describing situations", "t", "276"]]];
const LISTEN = [["gOMypAhVaXE", "Travel"], ["xL3jQzi7q_M", "Sports"], ["DTvgAxi5mVA", "Reading and Books"], ["GH7x5w7mtjE", "Seasons"], ["audbOVSuCds", "Clothes and Fashion"], ["2Yk1M6URsCU", "Zoo Animals"], ["MX5DVYoggxY", "Nature"], ["M25ieTfZ1eI", "Fears"], ["uvkY-UGeCmk", "Cars and Driving"], ["r1ZZn-vgwVc", "Elementary School"], ["wUKvSlx95xc", "Road Trips"], ["vkOhudt_Ye8", "Museums"], ["LJRJ7IoAvls", "4th of July"], ["irGnL5nzR0Y", "Dentist"], ["AR1fMdWGUPk", "Weddings"], ["F1S8TBRNIU0", "Childhood"], ["zQNWyXKkdv0", "High School"], ["BiZ72VMogIk", "Stress"], ["xoqX3VYD8No", "Manners"], ["BXCQpEqu7L0", "'Listening Time' Podcast - Practice Your English Listening"], ["qu66xCXhxy4", "Job Interviews"], ["LZUM9y0qF3I", "Neighborhoods"], ["8ns2nEZA0YQ", "Middle School"], ["lVhk7UP3taY", "Motivation"], ["AlJ5w1oP1Gc", "Complaining"], ["6kDaIzmEMpE", "Communication"], ["hILfe20PsXk", "Happiness"], ["H8DyKBj5v3M", "Advanced English Listening Podcast"], ["Z-GfkjPXCwc", "Learning"], ["NzQlkiP0AAM", "Quiz - Test Your Skills"], ["QQlen7x2aFs", "Emotions"], ["XUQ9o86ETdg", "Quiz - But, Bought, Boat?"], ["M-kgH22l7lM", "Quiz - Chip, Cheap, Ship, Sheep"], ["0RMHvgtXIBc", "My Listening Tips (Speaking 4 Languages)"], ["Hi8Z1aQT3Lw", "Coffee"], ["_Y4NVXuPAfc", "Names"], ["FD-rEVsPfjg", "Practice - Patience"], ["Ap0sBWo4vw8", "Podcast - Thanksgiving"], ["3DkLcOwpqgg", "Practice - Childhood Activities"], ["d0nA3n5BLBk", "Practice - Inflation"], ["G015RgppUPI", "Practice - Old Age"], ["qWm1SinE5ok", "English Podcast - Pronunciation"], ["eFkAqeY0zaM", "Practice - Introverts and Extroverts"], ["W8oi7HRI6u0", "Podcast - Christmas"], ["AHgDVFP6r28", "Podcast - New Year, New Mindset"], ["C-PdyajGy3s", "Learning to Drive"], ["ROAXxUCnX8o", "Podcast - Why is it Hard to Become Advanced?"], ["56wTC4fQj5k", "Morning and Night People"], ["Y9wGDo_TfTE", "Using Subtitles"], ["FtqbKDuS_ew", "Good English Learners"], ["jqj5FdNIwsQ", "Soft Skills"], ["duqhbEmSmFg", "Relearning a Language"], ["ucngq2IBUew", "Flashcards for Learning English"], ["5uaqP-aSMTo", "Speaking Style"], ["QGZPUt7MP1k", "Learn English With Music"], ["VS2yAvQCaVg", "Unique Things in the US"]];
const CAT = { g: "gramática", v: "vocabulário", t: "tópico" };
const VIDEO = (id) => "https://www.nacaofluente.com/blog/como-aprender-ingles-no-youtube/?video=" + id;
const PLAYLIST_ID = "PLhNRdHEdUQexUblCTMd1ATwOd5J4SxtNM";
const YT = (id) => `https://www.youtube.com/watch?v=${id}&list=${PLAYLIST_ID}`;
const DAYN = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
const CHECKPOINTS = { 8: "Faça o EF SET de 90 min para ver seu nível de partida.", 16: "EF SET de novo: a meta é B1 firme.", 20: "EF SET: se der B2 com folga, marque o B2 First.", 26: "Último EF SET antes da prova." };
const TIPS = { 5: "Past simple está aqui: é um dos seus pontos fracos, não pule.", 16: "Past simple vs Present perfect: foco total, cai muito na prova.", 17: "Second conditional: é o \"I would…\" que você trocava por \"I will\".", 11: "Past continuous e Present perfect juntos: faça frases sobre o seu último emprego.", 22: "Revise todos os passados: Past simple, continuous e perfect." };
const REVIEW = ["Reler anotações da semana", "Anki com o vocabulário da semana", "Escrever 5 frases com a gramática nova e mandar ao Claude", "Conversa de 10 min com o Claude sobre os temas"];
const PHASES = [[1, 8, "Revisão A1–A2"], [9, 16, "A2–B1"], [17, 20, "B2"], [21, 26, "C1 + prova"]];
const PACE_LABEL = { 3: "3 meses", 6: "6 meses", 12: "12 meses" };
const LEVEL = (w) => w <= 8 ? "Revisão A1–A2" : w <= 16 ? "A2–B1" : w <= 20 ? "B2" : "C1 · reforço para a prova";
const DEFAULT_START = "2026-11-02";
const LSKEY = "rumo-b2-v1";
const LISTEN_RULES = [
    [/travel|tourism|holiday|hotel/i, "gOMypAhVaXE"], [/sport|hobbies|leisure|interests/i, "xL3jQzi7q_M"],
    [/book|reading/i, "DTvgAxi5mVA"], [/season|weather|climate/i, "GH7x5w7mtjE"],
    [/cloth|fashion|appearance|accessor/i, "audbOVSuCds"], [/animal|pets/i, "2Yk1M6URsCU"],
    [/geography/i, "MX5DVYoggxY"], [/feel|emotion|hopes/i, "QQlen7x2aFs"],
    [/\bcars?\b|transport|driv/i, "uvkY-UGeCmk"], [/education|school/i, "r1ZZn-vgwVc"],
    [/learning/i, "Z-GfkjPXCwc"], [/festival|celebration/i, "LJRJ7IoAvls"],
    [/wedding|relationship/i, "AR1fMdWGUPk"], [/health|illness/i, "irGnL5nzR0Y"],
    [/\bjobs?\b|work|career|interview/i, "qu66xCXhxy4"], [/food|meal|cooking|restaurant/i, "Hi8Z1aQT3Lw"],
    [/buildings|shops|places|directions/i, "LZUM9y0qF3I"], [/personality|character/i, "eFkAqeY0zaM"],
    [/experience|life changes|biographical/i, "F1S8TBRNIU0"], [/routine|daily/i, "56wTC4fQj5k"],
    [/complain|faulty/i, "AlJ5w1oP1Gc"], [/apolog|manners|refus|thank/i, "xoqX3VYD8No"],
    [/greeting|introducing|countries|personal information/i, "_Y4NVXuPAfc"]
];
function listenFor(items) {
    const ids = [];
    items.forEach(it => { const r = LISTEN_RULES.find(x => x[0].test(it[0])); if (r && !ids.includes(r[1]))
        ids.push(r[1]); });
    return ids.slice(0, 2).map(id => LISTEN.find(x => x[0] === id)).filter((x) => !!x);
}
const $ = (id) => document.getElementById(id);
function blank() { return { start: DEFAULT_START, pace: 6, done: {}, when: {}, sent: {}, note: "", extra: {} }; }
function normalize(d) {
    const b = blank();
    if (!d)
        return b;
    return { start: d.start || b.start, pace: ([3, 6, 12].includes(d.pace) ? d.pace : 6), done: d.done || {}, when: d.when || {}, sent: d.sent || {}, note: d.note || "", extra: d.extra || {} };
}
const sig = (s) => JSON.stringify([s.start, s.pace, s.done, s.when, s.sent, s.extra]);
let state = blank();
try {
    state = normalize(JSON.parse(localStorage.getItem(LSKEY) || "null"));
}
catch (e) { }
const DAYS = [];
const LESSON = new Map();
WEEKS.forEach((_, i) => plan(i + 1).forEach(items => {
    const idx = DAYS.length;
    DAYS.push({ w: i + 1, items });
    items.forEach(it => LESSON.set(it[2], { title: it[0], cat: it[1], idx }));
}));
const TOTAL = DAYS.length;
function plan(w) {
    const items = WEEKS[w - 1], by = { g: [], v: [], t: [] };
    items.forEach(it => by[it[1]].push(it));
    const order = [];
    let i = 0;
    while (order.length < items.length) {
        for (const c of ["g", "v", "t"])
            if (by[c][i])
                order.push(by[c][i]);
        i++;
    }
    return [0, 1, 2, 3, 4].map(d => order.slice(d * 2, d * 2 + 2));
}
function scheduled(n) {
    const r = state.pace === 3 ? [2 * n, 2 * n + 1] : state.pace === 6 ? [n] : n % 2 === 0 ? [n / 2] : [];
    return r.filter(i => i >= 0 && i < TOTAL);
}
function weekdayOf(idx) { return state.pace === 3 ? Math.floor(idx / 2) : state.pace === 6 ? idx : idx * 2; }
const calWeekOf = (idx) => Math.floor(weekdayOf(idx) / 5) + 1;
const numWeeks = () => calWeekOf(TOTAL - 1);
function weekIdx(wk) { return [0, 1, 2, 3, 4].flatMap(d => scheduled((wk - 1) * 5 + d)); }
function weekDone(wk) {
    const vids = weekIdx(wk).flatMap(i => DAYS[i].items);
    return [vids.filter(it => state.done["v" + it[2]]).length, vids.length];
}
function levelOfWeek(wk) { const i = weekIdx(wk)[0]; return LEVEL(i === undefined ? 26 : DAYS[i].w); }
function parseDate(s) { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); }
function iso(dt) { return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`; }
function dayDate(wk, d) { const x = parseDate(state.start); x.setDate(x.getDate() + (wk - 1) * 7 + d); return x; }
function plannedDate(idx) { const n = weekdayOf(idx); return dayDate(Math.floor(n / 5) + 1, n % 5); }
const fmt = new Intl.DateTimeFormat("pt-PT", { day: "numeric", month: "short" });
function currentWeek() {
    const diff = Math.round((new Date().setHours(0, 0, 0, 0) - parseDate(state.start).getTime()) / 86400000);
    return Math.min(numWeeks(), Math.max(1, Math.floor(diff / 7) + 1));
}
let sel = currentWeek();
let uid = 0;
function stats() {
    let v = 0, prak = 0, pod = 0;
    LESSON.forEach((_, id) => { if (state.done["v" + id])
        v++; });
    for (const k in state.done) {
        if (!state.done[k])
            continue;
        if (k.startsWith("p-"))
            prak++;
        if (k.startsWith("c-"))
            pod++;
    }
    const cw = currentWeek();
    $("stats").innerHTML =
        `<div class="stat"><b>${v}/${LESSON.size}</b><span>vídeos assistidos</span></div>
     <div class="stat"><b>${prak}</b><span>dias de Praktika</span></div>
     <div class="stat"><b>${pod}</b><span>podcasts</span></div>
     <div class="stat"><b>Sem. ${cw}/${numWeeks()}</b><span>${levelOfWeek(cw)}</span></div>`;
}
function checkpointWeeks() {
    const m = {};
    Object.keys(CHECKPOINTS).map(Number).forEach(w => { const wk = calWeekOf(w * 5 - 1); (m[wk] = m[wk] || []).push(w); });
    return m;
}
function track() {
    const cw = currentWeek(), n = numWeeks(), el = $("weeks"), cps = checkpointWeeks();
    el.style.setProperty("--n", String(n));
    el.innerHTML = "";
    for (let wk = 1; wk <= n; wk++) {
        const [d, t] = weekDone(wk), b = document.createElement("button");
        b.className = "wk" + (wk === cw ? " cur" : "") + (wk === sel ? " sel" : "");
        b.innerHTML = `<div class="fill" style="height:${t ? Math.round(d / t * 100) : 0}%"></div><span>${wk}</span>` + (cps[wk] ? `<i class="flag"></i>` : "");
        b.title = `Semana ${wk}: ${d}/${t} vídeos`;
        b.setAttribute("aria-label", b.title);
        b.onclick = () => { sel = wk; render(); };
        el.appendChild(b);
    }
    const ph = $("phases");
    const spans = PHASES.map(([a, z]) => [calWeekOf((a - 1) * 5), calWeekOf(z * 5 - 1)]);
    ph.style.gridTemplateColumns = spans.map(([a, z]) => `${z - a + 1}fr`).join(" ");
    ph.innerHTML = PHASES.map(([, , name], i) => `<div${i === 2 ? ' class="p3"' : ""}>Sem. ${spans[i][0]}–${spans[i][1]} · ${name}</div>`).join("");
}
function task(key, labelHtml, tagCls, tagTxt, extra) {
    const on = !!state.done[key], id = "t" + (uid++);
    return `<li class="task${on ? " on" : ""}"><input type="checkbox" id="${id}" data-k="${key}" ${on ? "checked" : ""}><label for="${id}">${labelHtml}${extra || ""}</label>${tagTxt ? `<span class="tag ${tagCls}">${tagTxt}</span>` : ""}</li>`;
}
const vlink = (id) => ` <a class="vlink" href="${VIDEO(id)}" target="_blank" rel="noopener">assistir ↗</a>`;
const lessonTask = (it) => task("v" + it[2], it[0], it[1], CAT[it[1]], vlink(it[2]));
function nextAdvance(dateIso) {
    const diff = Math.round((parseDate(dateIso).getTime() - parseDate(state.start).getTime()) / 86400000);
    let last = -1;
    if (diff >= 0) {
        const n = Math.floor(diff / 7) * 5 + Math.min(diff % 7, 4);
        last = state.pace === 3 ? 2 * n + 1 : state.pace === 6 ? n : Math.floor(n / 2);
    }
    Object.values(state.extra).forEach(l => l.forEach(e => { if (e.kind === "adv")
        last = Math.max(last, e.ref); }));
    return last + 1;
}
function extrasHtml(dateIso, keys) {
    const list = state.extra[dateIso] || [];
    let html = "";
    list.forEach((e, i) => {
        const rm = `<button class="rm" type="button" data-rm="${dateIso}:${i}" aria-label="Remover">×</button>`;
        if (e.kind === "adv") {
            const sd = DAYS[e.ref];
            if (!sd)
                return;
            sd.items.forEach(it => keys.push("v" + it[2]));
            html += `<div class="extra"><div class="exhead"><span class="tag t">adiantado</span>${rm}</div><ul class="tasks">${sd.items.map(lessonTask).join("")}</ul></div>`;
        }
        else {
            const id = String(e.ref), l = LESSON.get(id);
            if (!l)
                return;
            const k = `rv-${dateIso}-${id}`;
            keys.push(k);
            html += `<div class="extra"><div class="exhead"><span class="tag v">revisão</span>${rm}</div><ul class="tasks">${task(k, l.title, l.cat, CAT[l.cat], vlink(id))}</ul></div>`;
        }
    });
    const nxt = nextAdvance(dateIso);
    const doneLessons = [];
    DAYS.forEach(sd => sd.items.forEach(it => { if (state.done["v" + it[2]])
        doneLessons.push(`<option value="${it[2]}">${it[0]}</option>`); }));
    html += `<div class="addrow">` +
        (nxt < TOTAL ? `<button class="btn sm" type="button" data-add="adv" data-date="${dateIso}">+ Adiantar próxima aula</button>` : "") +
        (doneLessons.length ? `<select class="sm" data-add="rev" data-date="${dateIso}" aria-label="Revisar um tema já assistido"><option value="">+ Revisar tema já visto…</option>${doneLessons.join("")}</select>` : "") +
        `</div>`;
    return html;
}
function week() {
    const wk = sel, today = new Date(), idxs = weekIdx(wk), items = idxs.flatMap(i => DAYS[i].items), cps = checkpointWeeks()[wk] || [];
    uid = 0;
    const [done, total] = weekDone(wk);
    $("wkEyebrow").textContent = `Semana ${wk} de ${numWeeks()} · ${levelOfWeek(wk)}`;
    const grams = [...new Set(items.filter(i => i[1] === "g").map(i => i[0]))];
    $("wkTitle").textContent = grams.slice(0, 4).join(" · ") + (grams.length > 4 ? " …" : "") || "Semana de revisão";
    $("wkDates").textContent = `${fmt.format(dayDate(wk, 0))} a ${fmt.format(dayDate(wk, 6))} · ${done}/${total} vídeos`;
    const tip = [...new Set(idxs.map(i => DAYS[i].w))].map(w => TIPS[w]).filter(Boolean)[0];
    $("focus").innerHTML = tip ? `<b>Foco:</b> ${tip}` : `<b>Foco:</b> assista, repita em voz alta e anote 5 frases úteis por dia.`;
    let html = "";
    for (let d = 0; d < 7; d++) {
        const dt = dayDate(wk, d), di = iso(dt), isToday = iso(today) === di, keys = [];
        let body = "";
        if (d < 5) {
            const sd = scheduled((wk - 1) * 5 + d), lessons = sd.flatMap(i => DAYS[i].items);
            lessons.forEach(it => { keys.push("v" + it[2]); body += lessonTask(it); });
            if (lessons.length)
                body += `<hr class="sep">`;
            const kp = `p-${di}`, kc = `c-${di}`;
            keys.push(kp);
            body += task(kp, "Praktika (20–30 min)", "h", "app") + task(kc, "Podcast (opcional)", "h", "ouvir");
            const ls = listenFor(lessons);
            if (ls.length)
                body += `<li class="listen"><span class="note">Listening do tema:</span>` + ls.map(v => `<div class="lrow"><a href="${YT(v[0])}" target="_blank" rel="noopener">${v[1]} ↗</a> <button class="copy" type="button" data-copy="${YT(v[0])}">copiar link</button></div>`).join("") + `</li>`;
            body = `<ul class="tasks">${body}</ul>` + (lessons.length ? "" : `<p class="note">Dia sem aula nova neste ritmo. Use Praktika, revisão ou adiante uma aula.</p>`);
        }
        else if (d === 5) {
            const chips = items.map(it => `<span class="tag ${it[1]}">${it[0]}</span>`).join("");
            let list = "";
            REVIEW.forEach((t, i) => { const k = `r-${di}-${i}`; keys.push(k); list += task(k, t, "", ""); });
            body = `<div class="review chips">${chips}</div><ul class="tasks">${list}</ul>`;
        }
        else {
            let list = task(`c-${di}`, "Podcast ou série em inglês com legenda em inglês", "h", "livre");
            cps.forEach(w => { const k = `e-${w}`; keys.push(k); list += task(k, "EF SET de 90 min", "v", "teste"); });
            body = `<ul class="tasks">${list}</ul>` + (cps.length ? cps.map(w => `<div class="checkpoint"><b>Checkpoint:</b> ${CHECKPOINTS[w]} <a href="https://www.efset.org/" target="_blank" rel="noopener">efset.org ↗</a></div>`).join("") : `<p class="note">Dia de descanso. Se quiser, adiante aulas ou revise um tema.</p>`);
        }
        body += extrasHtml(di, keys);
        const complete = keys.length > 0 && keys.every(k => state.done[k]);
        const title = d === 5 ? "Sábado · revisão" : d === 6 ? "Domingo" : DAYN[d];
        html += `<article class="day${isToday ? " today" : ""}${complete ? " complete" : ""}"><div class="dhead"><span class="dname">${title}${isToday ? '<span class="todaytag">HOJE</span>' : ""}</span><span class="ddate">${fmt.format(dt)}</span></div>${body}</article>`;
    }
    $("days").innerHTML = html;
}
function describe(k) {
    const fallback = (m) => state.when[k] || (m ? m[1] : iso(new Date()));
    if (/^v\d+$/.test(k)) {
        const l = LESSON.get(k.slice(1));
        if (!l)
            return null;
        return { cat: l.cat, text: l.title, date: state.when[k] || iso(plannedDate(l.idx)) };
    }
    let m = k.match(/^p-(\d{4}-\d\d-\d\d)$/);
    if (m)
        return { cat: "x", text: "Praktika", date: fallback(m) };
    m = k.match(/^c-(\d{4}-\d\d-\d\d)$/);
    if (m)
        return { cat: "x", text: "podcast", date: fallback(m) };
    m = k.match(/^r-(\d{4}-\d\d-\d\d)-(\d)$/);
    if (m)
        return { cat: "x", text: REVIEW[+m[2]] || "revisão", date: fallback(m) };
    m = k.match(/^rv-(\d{4}-\d\d-\d\d)-(\d+)$/);
    if (m) {
        const l = LESSON.get(m[2]);
        return { cat: "x", text: "revisão de " + (l ? l.title : "um tema"), date: fallback(m) };
    }
    if (/^e-\d+$/.test(k))
        return { cat: "x", text: "EF SET", date: fallback(null) };
    return null;
}
let smode = "pending";
let summaryText = "";
function summaryKeys() {
    const lo = iso(dayDate(sel, 0)), hi = iso(dayDate(sel, 6));
    return Object.keys(state.done).filter(k => {
        if (!state.done[k])
            return false;
        const d = describe(k);
        if (!d)
            return false;
        return smode === "week" ? d.date >= lo && d.date <= hi : !state.sent[k];
    });
}
function summary() {
    const keys = summaryKeys(), groups = {};
    keys.forEach(k => { const x = describe(k); (groups[x.date] = groups[x.date] || []).push(x); });
    const dates = Object.keys(groups).sort();
    const has = dates.length > 0, pre = $("spreview");
    $("sempty").hidden = has;
    pre.hidden = $("sactions").hidden = !has;
    $("ssent").hidden = smode === "week";
    if (!has) {
        summaryText = "";
        return;
    }
    const CATN = { g: "gramática", v: "vocabulário", t: "tópico de conversa" };
    const lines = dates.map(ds => {
        const dt = parseDate(ds), xs = groups[ds];
        const parts = ["g", "v", "t"].map(c => { const t = xs.filter(x => x.cat === c).map(x => x.text); return t.length ? `${CATN[c]}: ${t.join(", ")}` : ""; }).filter(Boolean);
        xs.filter(x => x.cat === "x").forEach(x => parts.push(x.text));
        return `- ${DAYN[(dt.getDay() + 6) % 7]} (${fmt.format(dt)}): ${parts.join("; ")}`;
    });
    const maxW = Math.max(0, ...keys.filter(k => /^v\d+$/.test(k)).map(k => DAYS[LESSON.get(k.slice(1)).idx].w));
    summaryText = `Olá! Estou estudando para o B2 (nível atual do plano: ${maxW ? LEVEL(maxW) : levelOfWeek(sel)}). Este é o resumo do que estudei:\n\n${lines.join("\n")}\n` +
        (state.note.trim() ? `\nMinhas anotações: ${state.note.trim()}\n` : "") +
        `\nQuero praticar com você: faça uma conversa curta em inglês sobre esses temas (uma pergunta por vez), corrija meus erros no final e me peça 5 frases com a gramática nova.`;
    pre.textContent = summaryText;
}
function render() {
    if (sel > numWeeks())
        sel = numWeeks();
    stats();
    track();
    week();
    summary();
    $("start").value = state.start;
    $("pace").value = String(state.pace);
    $("snote").value = state.note;
}
let docRef = null, saveTimer;
const syncEl = $("sync");
function save() {
    try {
        localStorage.setItem(LSKEY, JSON.stringify(state));
    }
    catch (e) { }
    if (!docRef)
        return;
    clearTimeout(saveTimer);
    saveTimer = window.setTimeout(async () => {
        try {
            await docRef.set(state);
            syncEl.textContent = "Progresso salvo na sua conta";
        }
        catch (e) {
            syncEl.textContent = "Salvo só neste navegador";
        }
    }, 600);
}
const daysEl = $("days");
daysEl.addEventListener("change", e => {
    const t = e.target;
    if (t instanceof HTMLSelectElement) {
        if (t.dataset.add === "rev" && t.value) {
            (state.extra[t.dataset.date] = state.extra[t.dataset.date] || []).push({ kind: "rev", ref: t.value });
            save();
            render();
        }
        return;
    }
    const k = t.dataset.k;
    if (!k)
        return;
    if (t.checked) {
        state.done[k] = true;
        state.when[k] = iso(new Date());
    }
    else {
        delete state.done[k];
        delete state.when[k];
    }
    save();
    render();
});
daysEl.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b)
        return;
    if (b.dataset.add === "adv") {
        const di = b.dataset.date, nxt = nextAdvance(di);
        if (nxt < TOTAL) {
            (state.extra[di] = state.extra[di] || []).push({ kind: "adv", ref: nxt });
            save();
            render();
        }
    }
    else if (b.dataset.rm) {
        const [di, i] = b.dataset.rm.split(":"), list = state.extra[di] || [], e0 = list[+i];
        if (!e0)
            return;
        if (e0.kind === "rev") {
            const k = `rv-${di}-${e0.ref}`;
            delete state.done[k];
            delete state.when[k];
        }
        list.splice(+i, 1);
        if (!list.length)
            delete state.extra[di];
        save();
        render();
    }
});
$("start").addEventListener("change", e => { const v = e.target.value; if (v) {
    state.start = v;
    sel = currentWeek();
    save();
    render();
} });
$("pace").addEventListener("change", e => { state.pace = Number(e.target.value); sel = currentWeek(); save(); render(); });
$("prev").onclick = () => { if (sel > 1) {
    sel--;
    render();
} };
$("next").onclick = () => { if (sel < numWeeks()) {
    sel++;
    render();
} };
$("todayBtn").onclick = () => { sel = currentWeek(); render(); };
document.querySelectorAll('input[name="smode"]').forEach(r => r.addEventListener("change", () => { smode = r.value; summary(); }));
$("snote").addEventListener("input", e => { state.note = e.target.value; save(); summary(); });
$("scopy").onclick = async () => {
    const st = $("sstatus");
    try {
        await navigator.clipboard.writeText(summaryText);
        st.textContent = "Copiado! Cole no Claude.";
    }
    catch (e) {
        const r = document.createRange();
        r.selectNodeContents($("spreview"));
        const s = getSelection();
        if (s) {
            s.removeAllRanges();
            s.addRange(r);
        }
        st.textContent = "Selecionado: use Ctrl+C.";
    }
};
$("ssent").onclick = () => {
    summaryKeys().forEach(k => { state.sent[k] = true; });
    state.note = "";
    $("sstatus").textContent = "";
    save();
    render();
};
$("lcount").textContent = `Todos os vídeos (${LISTEN.length})`;
$("vlist").innerHTML = LISTEN.map(v => `<li><a href="${YT(v[0])}" target="_blank" rel="noopener">${v[1]} ↗</a> <button class="copy" type="button" data-copy="${YT(v[0])}">copiar link</button></li>`).join("");
document.addEventListener("click", async (e) => {
    const b = e.target.closest("[data-copy]");
    if (!b)
        return;
    const old = b.textContent;
    try {
        await navigator.clipboard.writeText(b.dataset.copy);
        b.textContent = "copiado!";
    }
    catch (err) {
        window.prompt("Copie o link:", b.dataset.copy);
    }
    setTimeout(() => { b.textContent = old; }, 1500);
});
render();
(async () => {
    syncEl.textContent = "Salvo neste navegador";
    try {
        const cl = window.claude;
        if (!cl || !cl.use)
            return;
        const [db, user] = await Promise.all([cl.use("db"), cl.use("user")]);
        if (!db || !user)
            return;
        const id = await user.id();
        if (!id)
            return;
        docRef = db.collection("data/users/" + id).doc("progresso");
        const snap = await docRef.get();
        if (snap.exists) {
            const r = normalize(snap.data());
            state = { start: r.start, pace: r.pace, done: Object.assign({}, state.done, r.done), when: Object.assign({}, state.when, r.when), sent: Object.assign({}, state.sent, r.sent), note: r.note || state.note, extra: Object.assign({}, state.extra, r.extra) };
        }
        syncEl.textContent = "Progresso salvo na sua conta";
        save();
        render();
        docRef.onSnapshot((s) => {
            if (!s.exists)
                return;
            const r = normalize(s.data());
            if (sig(r) !== sig(state)) {
                state = r;
                try {
                    localStorage.setItem(LSKEY, JSON.stringify(state));
                }
                catch (e) { }
                render();
            }
        });
    }
    catch (e) {
        syncEl.textContent = "Salvo só neste navegador";
    }
})();
