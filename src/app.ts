/* Rumo ao B2: caderno de estudo. O plano é uma fila de 130 "dias de aula" (2 vídeos cada);
   o ritmo (3, 6 ou 12 meses) só decide quantos dias de aula cabem em cada dia útil. */

type Pace = 3 | 6 | 12;
type Kind = "adv" | "rev";
/* adv: ref = índice do dia de aula adiantado; rev: ref = id do vídeo revisado */
interface Extra { kind: Kind; ref: number | string }
interface State {
  start: string;
  pace: Pace;
  done: Record<string, boolean>;
  when: Record<string, string>;
  sent: Record<string, boolean>;
  note: string;
  extra: Record<string, Extra[]>;
}
interface StudyDay { w: number; items: Lesson[] }
interface Desc { cat: Cat | "x"; text: string; date: string }

const CAT: Record<Cat, string> = { g: "gramática", v: "vocabulário", t: "tópico" };
const VIDEO = (id: string) => "https://www.nacaofluente.com/blog/como-aprender-ingles-no-youtube/?video=" + id;
const PLAYLIST_ID = "PLhNRdHEdUQexUblCTMd1ATwOd5J4SxtNM";
const YT = (id: string) => `https://www.youtube.com/watch?v=${id}&list=${PLAYLIST_ID}`;
const DAYN = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
const CHECKPOINTS: Record<number, string> = { 8: "Faça o EF SET de 90 min para ver seu nível de partida.", 16: "EF SET de novo: a meta é B1 firme.", 20: "EF SET: se der B2 com folga, marque o B2 First.", 26: "Último EF SET antes da prova." };
const TIPS: Record<number, string> = { 5: "Past simple está aqui: é um dos seus pontos fracos, não pule.", 16: "Past simple vs Present perfect: foco total, cai muito na prova.", 17: "Second conditional: é o \"I would…\" que você trocava por \"I will\".", 11: "Past continuous e Present perfect juntos: faça frases sobre o seu último emprego.", 22: "Revise todos os passados: Past simple, continuous e perfect." };
const REVIEW = ["Reler anotações da semana", "Anki com o vocabulário da semana", "Escrever 5 frases com a gramática nova e mandar ao Claude", "Conversa de 10 min com o Claude sobre os temas"];
const PHASES: [number, number, string][] = [[1, 8, "Revisão A1–A2"], [9, 16, "A2–B1"], [17, 20, "B2"], [21, 26, "C1 + prova"]];
const PACE_LABEL: Record<Pace, string> = { 3: "3 meses", 6: "6 meses", 12: "12 meses" };
const LEVEL = (w: number) => w <= 8 ? "Revisão A1–A2" : w <= 16 ? "A2–B1" : w <= 20 ? "B2" : "C1 · reforço para a prova";
const DEFAULT_START = "2026-11-02";
const LSKEY = "rumo-b2-v1";

/* tema da aula -> vídeo de listening do mesmo assunto */
const LISTEN_RULES: [RegExp, string][] = [
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
interface Listen { url: string; title: string; ch: string }
/* cada aula tem o seu vídeo (TOPIC_VIDEOS); sem ele, cai na playlist pelo tema. "seen" evita repetir na mesma semana */
function listenFor(items: Lesson[], seen: Set<string>): Listen[] {
  const out: Listen[] = [];
  items.forEach(it => {
    const tv = TOPIC_VIDEOS[it[2]];
    if (tv && !seen.has(tv[0])) { seen.add(tv[0]); out.push({ url: "https://www.youtube.com/watch?v=" + tv[0], title: tv[1], ch: tv[2] }); return; }
    const r = LISTEN_RULES.find(x => x[0].test(it[0])), pl = r && LISTEN.find(x => x[0] === r[1]);
    if (pl && !seen.has(pl[0])) { seen.add(pl[0]); out.push({ url: YT(pl[0]), title: pl[1], ch: "Listening Time" }); }
  });
  return out.slice(0, 3);
}
const esc = (s: string) => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));
const short = (s: string) => s.length > 70 ? s.slice(0, 67).trimEnd() + "…" : s;

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;

/* ---------- estado ---------- */
function blank(): State { return { start: DEFAULT_START, pace: 6, done: {}, when: {}, sent: {}, note: "", extra: {} }; }
function normalize(d: any): State {
  const b = blank();
  if (!d) return b;
  return { start: d.start || b.start, pace: ([3, 6, 12].includes(d.pace) ? d.pace : 6) as Pace, done: d.done || {}, when: d.when || {}, sent: d.sent || {}, note: d.note || "", extra: d.extra || {} };
}
const sig = (s: State) => JSON.stringify([s.start, s.pace, s.done, s.when, s.sent, s.extra]);

let state: State = blank();
try { state = normalize(JSON.parse(localStorage.getItem(LSKEY) || "null")); } catch (e) { /* sem armazenamento */ }

/* ---------- a fila de aulas ---------- */
const DAYS: StudyDay[] = [];
const LESSON = new Map<string, { title: string; cat: Cat; idx: number }>();
WEEKS.forEach((_, i) => plan(i + 1).forEach(items => {
  const idx = DAYS.length; DAYS.push({ w: i + 1, items });
  items.forEach(it => LESSON.set(it[2], { title: it[0], cat: it[1], idx }));
}));
const TOTAL = DAYS.length;

/* distribui as 10 aulas em 5 dias, intercalando gramática, vocabulário e tópicos */
function plan(w: number): Lesson[][] {
  const items = WEEKS[w - 1], by: Record<Cat, Lesson[]> = { g: [], v: [], t: [] };
  items.forEach(it => by[it[1]].push(it));
  const order: Lesson[] = []; let i = 0;
  while (order.length < items.length) { for (const c of ["g", "v", "t"] as Cat[]) if (by[c][i]) order.push(by[c][i]); i++; }
  return [0, 1, 2, 3, 4].map(d => order.slice(d * 2, d * 2 + 2));
}

/* ritmo: quantos dias de aula por dia útil (3 meses = 2, 6 meses = 1, 12 meses = 1 a cada 2 dias úteis) */
function scheduled(n: number): number[] {
  const r = state.pace === 3 ? [2 * n, 2 * n + 1] : state.pace === 6 ? [n] : n % 2 === 0 ? [n / 2] : [];
  return r.filter(i => i >= 0 && i < TOTAL);
}
function weekdayOf(idx: number): number { return state.pace === 3 ? Math.floor(idx / 2) : state.pace === 6 ? idx : idx * 2; }
const calWeekOf = (idx: number) => Math.floor(weekdayOf(idx) / 5) + 1;
const numWeeks = () => calWeekOf(TOTAL - 1);
function weekIdx(wk: number): number[] { return [0, 1, 2, 3, 4].flatMap(d => scheduled((wk - 1) * 5 + d)); }
function weekDone(wk: number): [number, number] {
  const vids = weekIdx(wk).flatMap(i => DAYS[i].items);
  return [vids.filter(it => state.done["v" + it[2]]).length, vids.length];
}
/* semana de estudo (1–26) dos vídeos desta semana do calendário */
function levelOfWeek(wk: number): string { const i = weekIdx(wk)[0]; return LEVEL(i === undefined ? 26 : DAYS[i].w); }

/* ---------- datas ---------- */
function parseDate(s: string): Date { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); }
function iso(dt: Date): string { return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`; }
function dayDate(wk: number, d: number): Date { const x = parseDate(state.start); x.setDate(x.getDate() + (wk - 1) * 7 + d); return x; }
function plannedDate(idx: number): Date { const n = weekdayOf(idx); return dayDate(Math.floor(n / 5) + 1, n % 5); }
const fmt = new Intl.DateTimeFormat("pt-PT", { day: "numeric", month: "short" });
function currentWeek(): number {
  const diff = Math.round((new Date().setHours(0, 0, 0, 0) - parseDate(state.start).getTime()) / 86400000);
  return Math.min(numWeeks(), Math.max(1, Math.floor(diff / 7) + 1));
}

let sel = currentWeek();
let uid = 0;

/* ---------- topo: estatísticas e trilha de semanas ---------- */
function stats() {
  let v = 0, prak = 0, pod = 0;
  LESSON.forEach((_, id) => { if (state.done["v" + id]) v++; });
  for (const k in state.done) { if (!state.done[k]) continue; if (k.startsWith("p-")) prak++; if (k.startsWith("c-")) pod++; }
  const cw = currentWeek();
  $("stats").innerHTML =
    `<div class="stat"><b>${v}/${LESSON.size}</b><span>vídeos assistidos</span></div>
     <div class="stat"><b>${prak}</b><span>dias de Praktika</span></div>
     <div class="stat"><b>${pod}</b><span>podcasts</span></div>
     <div class="stat"><b>Sem. ${cw}/${numWeeks()}</b><span>${levelOfWeek(cw)}</span></div>`;
}

function checkpointWeeks(): Record<number, number[]> {
  const m: Record<number, number[]> = {};
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

/* ---------- a semana aberta ---------- */
function task(key: string, labelHtml: string, tagCls: string, tagTxt: string, extra?: string): string {
  const on = !!state.done[key], id = "t" + (uid++);
  return `<li class="task${on ? " on" : ""}"><input type="checkbox" id="${id}" data-k="${key}" ${on ? "checked" : ""}><label for="${id}">${labelHtml}${extra || ""}</label>${tagTxt ? `<span class="tag ${tagCls}">${tagTxt}</span>` : ""}</li>`;
}
const vlink = (id: string) => ` <a class="vlink" href="${VIDEO(id)}" target="_blank" rel="noopener">assistir ↗</a>`;
const lessonTask = (it: Lesson) => task("v" + it[2], it[0], it[1], CAT[it[1]], vlink(it[2]));

/* próximo dia de aula ainda não agendado até esta data */
function nextAdvance(dateIso: string): number {
  const diff = Math.round((parseDate(dateIso).getTime() - parseDate(state.start).getTime()) / 86400000);
  let last = -1;
  if (diff >= 0) {
    const n = Math.floor(diff / 7) * 5 + Math.min(diff % 7, 4);
    last = state.pace === 3 ? 2 * n + 1 : state.pace === 6 ? n : Math.floor(n / 2);
  }
  Object.values(state.extra).forEach(l => l.forEach(e => { if (e.kind === "adv") last = Math.max(last, e.ref as number); }));
  return last + 1;
}

function extrasHtml(dateIso: string, keys: string[]): string {
  const list = state.extra[dateIso] || [];
  let html = "";
  list.forEach((e, i) => {
    const rm = `<button class="rm" type="button" data-rm="${dateIso}:${i}" aria-label="Remover">×</button>`;
    if (e.kind === "adv") {
      const sd = DAYS[e.ref as number]; if (!sd) return;
      sd.items.forEach(it => keys.push("v" + it[2]));
      html += `<div class="extra"><div class="exhead"><span class="tag t">adiantado</span>${rm}</div><ul class="tasks">${sd.items.map(lessonTask).join("")}</ul></div>`;
    } else {
      const id = String(e.ref), l = LESSON.get(id); if (!l) return;
      const k = `rv-${dateIso}-${id}`; keys.push(k);
      html += `<div class="extra"><div class="exhead"><span class="tag v">revisão</span>${rm}</div><ul class="tasks">${task(k, l.title, l.cat, CAT[l.cat], vlink(id))}</ul></div>`;
    }
  });
  const nxt = nextAdvance(dateIso);
  const doneLessons: string[] = [];
  DAYS.forEach(sd => sd.items.forEach(it => { if (state.done["v" + it[2]]) doneLessons.push(`<option value="${it[2]}">${it[0]}</option>`); }));
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
  const seenListen = new Set<string>();
  for (let d = 0; d < 7; d++) {
    const dt = dayDate(wk, d), di = iso(dt), isToday = iso(today) === di, keys: string[] = [];
    let body = "";
    if (d < 5) {
      const sd = scheduled((wk - 1) * 5 + d), lessons = sd.flatMap(i => DAYS[i].items);
      lessons.forEach(it => { keys.push("v" + it[2]); body += lessonTask(it); });
      if (lessons.length) body += `<hr class="sep">`;
      const kp = `p-${di}`, kc = `c-${di}`; keys.push(kp);
      body += task(kp, "Praktika (20–30 min)", "h", "app") + task(kc, "Podcast (opcional)", "h", "ouvir");
      const ls = listenFor(lessons, seenListen);
      if (ls.length) body += `<li class="listen"><span class="note">Listening do tema:</span>` + ls.map(v => `<div class="lrow"><a href="${v.url}" target="_blank" rel="noopener" title="${esc(v.title)}">${esc(short(v.title))} ↗</a> <span class="ch">${esc(v.ch)}</span> <button class="copy" type="button" data-copy="${v.url}">copiar link</button></div>`).join("") + `</li>`;
      body = `<ul class="tasks">${body}</ul>` + (lessons.length ? "" : `<p class="note">Dia sem aula nova neste ritmo. Use Praktika, revisão ou adiante uma aula.</p>`);
    } else if (d === 5) {
      const chips = items.map(it => `<span class="tag ${it[1]}">${it[0]}</span>`).join("");
      let list = "";
      REVIEW.forEach((t, i) => { const k = `r-${di}-${i}`; keys.push(k); list += task(k, t, "", ""); });
      body = `<div class="review chips">${chips}</div><ul class="tasks">${list}</ul>`;
    } else {
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

/* ---------- resumo para o tutor ---------- */
function describe(k: string): Desc | null {
  const fallback = (m: RegExpMatchArray | null) => state.when[k] || (m ? m[1] : iso(new Date()));
  if (/^v\d+$/.test(k)) {
    const l = LESSON.get(k.slice(1)); if (!l) return null;
    return { cat: l.cat, text: l.title, date: state.when[k] || iso(plannedDate(l.idx)) };
  }
  let m = k.match(/^p-(\d{4}-\d\d-\d\d)$/); if (m) return { cat: "x", text: "Praktika", date: fallback(m) };
  m = k.match(/^c-(\d{4}-\d\d-\d\d)$/); if (m) return { cat: "x", text: "podcast", date: fallback(m) };
  m = k.match(/^r-(\d{4}-\d\d-\d\d)-(\d)$/); if (m) return { cat: "x", text: REVIEW[+m[2]] || "revisão", date: fallback(m) };
  m = k.match(/^rv-(\d{4}-\d\d-\d\d)-(\d+)$/);
  if (m) { const l = LESSON.get(m[2]); return { cat: "x", text: "revisão de " + (l ? l.title : "um tema"), date: fallback(m) }; }
  if (/^e-\d+$/.test(k)) return { cat: "x", text: "EF SET", date: fallback(null) };
  return null;
}

let smode: "pending" | "week" = "pending";
let summaryText = "";

function summaryKeys(): string[] {
  const lo = iso(dayDate(sel, 0)), hi = iso(dayDate(sel, 6));
  return Object.keys(state.done).filter(k => {
    if (!state.done[k]) return false;
    const d = describe(k); if (!d) return false;
    return smode === "week" ? d.date >= lo && d.date <= hi : !state.sent[k];
  });
}

function summary() {
  const keys = summaryKeys(), groups: Record<string, Desc[]> = {};
  keys.forEach(k => { const x = describe(k)!; (groups[x.date] = groups[x.date] || []).push(x); });
  const dates = Object.keys(groups).sort();
  const has = dates.length > 0, pre = $("spreview");
  $("sempty").hidden = has;
  pre.hidden = $("sactions").hidden = !has;
  $("ssent").hidden = smode === "week";
  if (!has) { summaryText = ""; return; }
  const CATN: Record<Cat, string> = { g: "gramática", v: "vocabulário", t: "tópico de conversa" };
  const lines = dates.map(ds => {
    const dt = parseDate(ds), xs = groups[ds];
    const parts = (["g", "v", "t"] as Cat[]).map(c => { const t = xs.filter(x => x.cat === c).map(x => x.text); return t.length ? `${CATN[c]}: ${t.join(", ")}` : ""; }).filter(Boolean);
    xs.filter(x => x.cat === "x").forEach(x => parts.push(x.text));
    return `- ${DAYN[(dt.getDay() + 6) % 7]} (${fmt.format(dt)}): ${parts.join("; ")}`;
  });
  const maxW = Math.max(0, ...keys.filter(k => /^v\d+$/.test(k)).map(k => DAYS[LESSON.get(k.slice(1))!.idx].w));
  summaryText = `Olá! Estou estudando para o B2 (nível atual do plano: ${maxW ? LEVEL(maxW) : levelOfWeek(sel)}). Este é o resumo do que estudei:\n\n${lines.join("\n")}\n` +
    (state.note.trim() ? `\nMinhas anotações: ${state.note.trim()}\n` : "") +
    `\nQuero praticar com você: faça uma conversa curta em inglês sobre esses temas (uma pergunta por vez), corrija meus erros no final e me peça 5 frases com a gramática nova.`;
  pre.textContent = summaryText;
}

function render() {
  if (sel > numWeeks()) sel = numWeeks();
  stats(); track(); week(); summary();
  $<HTMLInputElement>("start").value = state.start;
  $<HTMLSelectElement>("pace").value = String(state.pace);
  $<HTMLTextAreaElement>("snote").value = state.note;
}

/* ---------- guardar: no navegador e, quando disponível, na conta ---------- */
let docRef: any = null, saveTimer: number | undefined;
const syncEl = $("sync");
function save() {
  try { localStorage.setItem(LSKEY, JSON.stringify(state)); } catch (e) { /* sem armazenamento */ }
  if (!docRef) return;
  clearTimeout(saveTimer);
  saveTimer = window.setTimeout(async () => {
    try { await docRef.set(state); syncEl.textContent = "Progresso salvo na sua conta"; }
    catch (e) { syncEl.textContent = "Salvo só neste navegador"; }
  }, 600);
}

/* ---------- eventos ---------- */
const daysEl = $("days");
daysEl.addEventListener("change", e => {
  const t = e.target as HTMLInputElement | HTMLSelectElement;
  if (t instanceof HTMLSelectElement) {
    if (t.dataset.add === "rev" && t.value) { (state.extra[t.dataset.date!] = state.extra[t.dataset.date!] || []).push({ kind: "rev", ref: t.value }); save(); render(); }
    return;
  }
  const k = t.dataset.k; if (!k) return;
  if (t.checked) { state.done[k] = true; state.when[k] = iso(new Date()); } else { delete state.done[k]; delete state.when[k]; }
  save(); render();
});
daysEl.addEventListener("click", e => {
  const b = (e.target as HTMLElement).closest("button") as HTMLButtonElement | null; if (!b) return;
  if (b.dataset.add === "adv") {
    const di = b.dataset.date!, nxt = nextAdvance(di);
    if (nxt < TOTAL) { (state.extra[di] = state.extra[di] || []).push({ kind: "adv", ref: nxt }); save(); render(); }
  } else if (b.dataset.rm) {
    const [di, i] = b.dataset.rm.split(":"), list = state.extra[di] || [], e0 = list[+i];
    if (!e0) return;
    if (e0.kind === "rev") { const k = `rv-${di}-${e0.ref}`; delete state.done[k]; delete state.when[k]; }
    list.splice(+i, 1); if (!list.length) delete state.extra[di];
    save(); render();
  }
});
$("start").addEventListener("change", e => { const v = (e.target as HTMLInputElement).value; if (v) { state.start = v; sel = currentWeek(); save(); render(); } });
$("pace").addEventListener("change", e => { state.pace = Number((e.target as HTMLSelectElement).value) as Pace; sel = currentWeek(); save(); render(); });
$("prev").onclick = () => { if (sel > 1) { sel--; render(); } };
$("next").onclick = () => { if (sel < numWeeks()) { sel++; render(); } };
$("todayBtn").onclick = () => { sel = currentWeek(); render(); };

document.querySelectorAll<HTMLInputElement>('input[name="smode"]').forEach(r => r.addEventListener("change", () => { smode = r.value as "pending" | "week"; summary(); }));
$("snote").addEventListener("input", e => { state.note = (e.target as HTMLTextAreaElement).value; save(); summary(); });
$("scopy").onclick = async () => {
  const st = $("sstatus");
  try { await navigator.clipboard.writeText(summaryText); st.textContent = "Copiado! Cole no Claude."; }
  catch (e) { const r = document.createRange(); r.selectNodeContents($("spreview")); const s = getSelection(); if (s) { s.removeAllRanges(); s.addRange(r); } st.textContent = "Selecionado: use Ctrl+C."; }
};
$("ssent").onclick = () => {
  summaryKeys().forEach(k => { state.sent[k] = true; });
  state.note = ""; $("sstatus").textContent = "";
  save(); render();
};

$("lcount").textContent = `Todos os vídeos (${LISTEN.length})`;
$("vlist").innerHTML = LISTEN.map(v => `<li><a href="${YT(v[0])}" target="_blank" rel="noopener">${v[1]} ↗</a> <button class="copy" type="button" data-copy="${YT(v[0])}">copiar link</button></li>`).join("");
document.addEventListener("click", async e => {
  const b = (e.target as HTMLElement).closest("[data-copy]") as HTMLElement | null; if (!b) return;
  const old = b.textContent;
  try { await navigator.clipboard.writeText(b.dataset.copy!); b.textContent = "copiado!"; }
  catch (err) { window.prompt("Copie o link:", b.dataset.copy); }
  setTimeout(() => { b.textContent = old; }, 1500);
});

render();

(async () => {
  syncEl.textContent = "Salvo neste navegador";
  try {
    const cl = (window as any).claude;
    if (!cl || !cl.use) return;
    const [db, user] = await Promise.all([cl.use("db"), cl.use("user")]);
    if (!db || !user) return;
    const id = await user.id(); if (!id) return;
    docRef = db.collection("data/users/" + id).doc("progresso");
    const snap = await docRef.get();
    if (snap.exists) {
      const r = normalize(snap.data());
      state = { start: r.start, pace: r.pace, done: Object.assign({}, state.done, r.done), when: Object.assign({}, state.when, r.when), sent: Object.assign({}, state.sent, r.sent), note: r.note || state.note, extra: Object.assign({}, state.extra, r.extra) };
    }
    syncEl.textContent = "Progresso salvo na sua conta";
    save(); render();
    docRef.onSnapshot((s: any) => {
      if (!s.exists) return;
      const r = normalize(s.data());
      if (sig(r) !== sig(state)) { state = r; try { localStorage.setItem(LSKEY, JSON.stringify(state)); } catch (e) { /* ok */ } render(); }
    });
  } catch (e) { syncEl.textContent = "Salvo só neste navegador"; }
})();
