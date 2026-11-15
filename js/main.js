const $ = (s) => document.querySelector(s);
const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt) e.textContent = txt; return e; };
const ROT = [-2, 1.5, -1, 2.5, -1.5, 1, -2.5, 2];

/* ---------- Perfil ---------- */
document.title = "Portafolio · " + PERFIL.nombre;
$("#nombre").textContent = PERFIL.nombre; $("#rol").textContent = PERFIL.rol;
$("#bio").textContent = PERFIL.bio; $("#lema").textContent = PERFIL.lema; $("#pie").textContent = PERFIL.pie;
const dl = el("dl"); PERFIL.ficha.forEach(([k, v]) => { dl.append(el("dt", "", k), el("dd", "", v)); }); $("#ficha").append(dl);
const COLS = ["#fff", "#4cc9f0", "#ff6b35", "#ff3d81", "#7bdcb5", "#c77dff"];
PERFIL.stickers.forEach((s, i) => { const e = el("span", "", s); e.style.setProperty("--c", COLS[i % COLS.length]); e.style.setProperty("--r", ROT[i % 8] + "deg"); $("#stickers").append(e); });
PERFIL.links.forEach(([t, u]) => { const a = el("a", "btn", t); a.href = u; a.target = "_blank"; a.rel = "noopener"; $("#links").append(a); });

/* ---------- Explosión de ideas (Matter.js) ---------- */
(function physics() {
  if (!window.Matter) return;
  const { Engine, Bodies, Body, Composite, Mouse, MouseConstraint, Runner, Events } = Matter;
  const box = $("#play"), engine = Engine.create();
  engine.gravity.y = 0.5;
  const els = INTERESES.map((t) => { const e = el("div", "chip3", t.txt); e.style.background = t.c; box.append(e); return e; });
  let bodies = [], statics = [], W, H;
  const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function burst() {
    bodies.forEach((b) => {
      Body.setPosition(b, { x: W / 2, y: H / 2 });
      Body.setVelocity(b, calm ? { x: 0, y: 0 } : { x: (Math.random() - 0.5) * 42, y: -Math.random() * 26 - 4 });
      Body.setAngularVelocity(b, (Math.random() - 0.5) * 0.4);
    });
  }
  function layout() {
    W = box.clientWidth; H = box.clientHeight;
    Composite.remove(engine.world, statics);
    const t = 80;
    statics = [Bodies.rectangle(W / 2, H + t / 2, W + 200, t, { isStatic: true }), Bodies.rectangle(W / 2, -t / 2 - 400, W + 200, t, { isStatic: true }),
      Bodies.rectangle(-t / 2, H / 2, t, H * 3, { isStatic: true }), Bodies.rectangle(W + t / 2, H / 2, t, H * 3, { isStatic: true })];
    Composite.add(engine.world, statics);
    if (!bodies.length) {
      bodies = els.map((e) => Bodies.rectangle(W / 2, H / 2, e.offsetWidth, e.offsetHeight, { restitution: 0.75, friction: 0.1, frictionAir: 0.008, chamfer: { radius: 14 } }));
      Composite.add(engine.world, bodies); burst();
    }
  }
  layout(); addEventListener("resize", layout);

  const mouse = Mouse.create(box);
  ["mousewheel", "DOMMouseScroll"].forEach((n) => box.removeEventListener(n, mouse.mousewheel));
  box.removeEventListener("touchstart", mouse.mousedown); box.removeEventListener("touchmove", mouse.mousemove); box.removeEventListener("touchend", mouse.mouseup);
  Composite.add(engine.world, MouseConstraint.create(engine, { mouse, constraint: { stiffness: 0.2, render: { visible: false } } }));

  Events.on(engine, "afterUpdate", () => bodies.forEach((b, i) => {
    els[i].style.transform = `translate(${b.position.x - els[i].offsetWidth / 2}px,${b.position.y - els[i].offsetHeight / 2}px) rotate(${b.angle}rad)`;
  }));
  let runner = Runner.create();
  new IntersectionObserver(([e]) => { e.isIntersecting ? Runner.run(runner, engine) : Runner.stop(runner); }).observe(box);
  $("#boom").onclick = burst;
})();

/* ---------- Proyectos ---------- */
$("#chips").append(...Object.entries(CATS).map(([k, v]) => { const b = el("button", "chip", v); b.dataset.k = k; b.setAttribute("aria-pressed", k === "todo"); return b; }));
PROYECTOS.forEach((p, i) => {
  const c = el("button", "card " + p.cat); c.dataset.cat = p.cat; c.dataset.i = i; c.style.setProperty("--r", ROT[(i + 3) % 8] + "deg");
  const art = el("div", "art", { codigo: "</>", escuela: "∑", musica: "♫", edicion: "▶" }[p.cat]);
  c.append(art, el("span", "tag", CATS[p.cat]), el("h3", "", p.t), el("p", "", p.d));
  c.addEventListener("pointermove", (e) => { if (e.pointerType !== "mouse") return; const r = c.getBoundingClientRect();
    c.style.setProperty("--ry", ((e.clientX - r.left) / r.width - 0.5) * 14 + "deg"); c.style.setProperty("--rx", (0.5 - (e.clientY - r.top) / r.height) * 14 + "deg"); });
  c.addEventListener("pointerleave", () => { c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); });
  $("#board").append(c);
});
$("#chips").onclick = (e) => { const b = e.target.closest(".chip"); if (!b) return;
  document.querySelectorAll("#chips .chip").forEach((c) => c.setAttribute("aria-pressed", c === b));
  document.querySelectorAll(".card").forEach((c) => c.classList.toggle("hidden", b.dataset.k !== "todo" && c.dataset.cat !== b.dataset.k)); };
const dlg = $("#dlg");
$("#board").onclick = (e) => { const c = e.target.closest(".card"); if (!c) return; const p = PROYECTOS[c.dataset.i];
  $("#dtag").textContent = CATS[p.cat]; $("#dt").textContent = p.t; $("#dd").textContent = p.d; $("#dh").textContent = p.x;
  $("#dl").classList.toggle("hidden", !p.link); if (p.link) $("#dl").href = p.link; dlg.showModal(); };
$("#close").onclick = () => dlg.close(); dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });

/* ---------- Caja de vinilos ---------- */
const au = new Audio(); let cur = null, vcat = "mias";
$("#vtabs").append(...Object.entries(VCATS).map(([k, v]) => { const b = el("button", "chip", v); b.dataset.k = k; b.setAttribute("aria-pressed", k === vcat); return b; }));
function crate() {
  $("#crate").replaceChildren(...VINILOS.filter((v) => v.cat === vcat).map((v) => {
    const s = el("button", "sleeve" + (v === cur ? " on" : "")); s.style.setProperty("--c", v.color);
    s.append(el("b", "", v.t), el("span", "", v.a)); s.onclick = () => pick(v); return s; }));
}
$("#vtabs").onclick = (e) => { const b = e.target.closest(".chip"); if (!b) return; vcat = b.dataset.k;
  document.querySelectorAll("#vtabs .chip").forEach((c) => c.setAttribute("aria-pressed", c === b)); crate(); };
function setPlaying(on) { $("#rec").classList.toggle("on", on); $("#arm").classList.toggle("on", on); $("#pp").textContent = on ? "❚❚" : "▶"; }
function pick(v) {
  au.pause(); setPlaying(false); cur = v; au.src = v.audio || ""; $("#seek").value = 0;
  $("#vt").textContent = v.t; $("#va").textContent = v.a; $("#lab").style.setProperty("--c", v.color);
  $("#vmsg").textContent = v.audio ? "" : "Aún sin audio: súbelo a /audio y ponlo en data.js.";
  $("#vlink").classList.toggle("hidden", !v.link); if (v.link) $("#vlink").href = v.link; crate();
  if (v.audio) au.play().then(() => setPlaying(true)).catch(() => {});
}
$("#pp").onclick = () => { if (!cur || !cur.audio) { $("#vmsg").textContent = cur ? "Este disco todavía no tiene audio." : "Primero elige un disco."; return; }
  au.paused ? au.play().then(() => setPlaying(true)) : (au.pause(), setPlaying(false)); };
au.ontimeupdate = () => { if (au.duration) $("#seek").value = (au.currentTime / au.duration) * 100; };
au.onended = () => setPlaying(false);
$("#seek").oninput = (e) => { if (au.duration) au.currentTime = (e.target.value / 100) * au.duration; };
crate();
