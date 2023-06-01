function A() {
}
function L(n, e) {
  for (const t in e)
    n[t] = e[t];
  return n;
}
function zt(n) {
  return n();
}
function on() {
  return /* @__PURE__ */ Object.create(null);
}
function Te(n) {
  n.forEach(zt);
}
function dt(n) {
  return typeof n == "function";
}
function ne(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
let rt;
function ft(n, e) {
  return rt || (rt = document.createElement("a")), rt.href = e, n === rt.href;
}
function Ln(n) {
  return Object.keys(n).length === 0;
}
function Z(n) {
  const e = {};
  for (const t in n)
    t[0] !== "$" && (e[t] = n[t]);
  return e;
}
function c(n, e) {
  n.appendChild(e);
}
function H(n, e, t) {
  n.insertBefore(e, t || null);
}
function j(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function N(n) {
  return document.createElement(n);
}
function h(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function qt(n) {
  return document.createTextNode(n);
}
function te() {
  return qt(" ");
}
function Pr() {
  return qt("");
}
function $e(n, e, t, r) {
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
function Un(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function a(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function W(n, e) {
  for (const t in e)
    a(n, t, e[t]);
}
function Nr(n) {
  return Array.from(n.childNodes);
}
function Lr(n, e) {
  e = "" + e, n.wholeText !== e && (n.data = e);
}
function C(n, e, t, r) {
  t === null ? n.style.removeProperty(e) : n.style.setProperty(e, t, r ? "important" : "");
}
function it(n, e, t) {
  n.classList[t ? "add" : "remove"](e);
}
function Kt(n) {
  const e = {};
  for (const t of n)
    e[t.name] = t.value;
  return e;
}
let Ze;
function je(n) {
  Ze = n;
}
function Ur() {
  if (!Ze)
    throw new Error("Function called outside component initialization");
  return Ze;
}
function xr(n) {
  Ur().$$.on_mount.push(n);
}
const Pe = [], an = [], ot = [], cn = [], Br = Promise.resolve();
let Ut = !1;
function $r() {
  Ut || (Ut = !0, Br.then(pt));
}
function xt(n) {
  ot.push(n);
}
const St = /* @__PURE__ */ new Set();
let De = 0;
function pt() {
  if (De !== 0)
    return;
  const n = Ze;
  do {
    try {
      for (; De < Pe.length; ) {
        const e = Pe[De];
        De++, je(e), Vr(e.$$);
      }
    } catch (e) {
      throw Pe.length = 0, De = 0, e;
    }
    for (je(null), Pe.length = 0, De = 0; an.length; )
      an.pop()();
    for (let e = 0; e < ot.length; e += 1) {
      const t = ot[e];
      St.has(t) || (St.add(t), t());
    }
    ot.length = 0;
  } while (Pe.length);
  for (; cn.length; )
    cn.pop()();
  Ut = !1, St.clear(), je(n);
}
function Vr(n) {
  if (n.fragment !== null) {
    n.update(), Te(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(xt);
  }
}
const at = /* @__PURE__ */ new Set();
let Se;
function Bt() {
  Se = {
    r: 0,
    c: [],
    p: Se
    // parent group
  };
}
function $t() {
  Se.r || Te(Se.c), Se = Se.p;
}
function G(n, e) {
  n && n.i && (at.delete(n), n.i(e));
}
function q(n, e, t, r) {
  if (n && n.o) {
    if (at.has(n))
      return;
    at.add(n), Se.c.push(() => {
      at.delete(n), r && (t && n.d(1), r());
    }), n.o(e);
  } else
    r && r();
}
function ge(n, e) {
  const t = {}, r = {}, i = { $$scope: 1 };
  let s = n.length;
  for (; s--; ) {
    const o = n[s], l = e[s];
    if (l) {
      for (const u in o)
        u in l || (r[u] = 1);
      for (const u in l)
        i[u] || (t[u] = l[u], i[u] = 1);
      n[s] = l;
    } else
      for (const u in o)
        i[u] = 1;
  }
  for (const o in r)
    o in t || (t[o] = void 0);
  return t;
}
function ae(n) {
  n && n.c();
}
function oe(n, e, t, r) {
  const { fragment: i, after_update: s } = n.$$;
  i && i.m(e, t), r || xt(() => {
    const o = n.$$.on_mount.map(zt).filter(dt);
    n.$$.on_destroy ? n.$$.on_destroy.push(...o) : Te(o), n.$$.on_mount = [];
  }), s.forEach(xt);
}
function ee(n, e) {
  const t = n.$$;
  t.fragment !== null && (Te(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Fr(n, e) {
  n.$$.dirty[0] === -1 && (Pe.push(n), $r(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function re(n, e, t, r, i, s, o, l = [-1]) {
  const u = Ze;
  je(n);
  const d = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: A,
    not_equal: i,
    bound: on(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: on(),
    dirty: l,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  o && o(d.root);
  let m = !1;
  if (d.ctx = t ? t(n, e.props || {}, (f, g, ...b) => {
    const w = b.length ? b[0] : g;
    return d.ctx && i(d.ctx[f], d.ctx[f] = w) && (!d.skip_bound && d.bound[f] && d.bound[f](w), m && Fr(n, f)), g;
  }) : [], d.update(), m = !0, Te(d.before_update), d.fragment = r ? r(d.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Nr(e.target);
      d.fragment && d.fragment.l(f), f.forEach(j);
    } else
      d.fragment && d.fragment.c();
    e.intro && G(n.$$.fragment), oe(n, e.target, e.anchor, e.customElement), pt();
  }
  je(u);
}
let It;
typeof HTMLElement == "function" && (It = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: n } = this.$$;
    this.$$.on_disconnect = n.map(zt).filter(dt);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(n, e, t) {
    this[n] = t;
  }
  disconnectedCallback() {
    Te(this.$$.on_disconnect);
  }
  $destroy() {
    ee(this, 1), this.$destroy = A;
  }
  $on(n, e) {
    if (!dt(e))
      return A;
    const t = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return t.push(e), () => {
      const r = t.indexOf(e);
      r !== -1 && t.splice(r, 1);
    };
  }
  $set(n) {
    this.$$set && !Ln(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
});
class me {
  $destroy() {
    ee(this, 1), this.$destroy = A;
  }
  $on(e, t) {
    if (!dt(t))
      return A;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const i = r.indexOf(t);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(e) {
    this.$$set && !Ln(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function Hr(n) {
  let e, t, r, i, s, o = [
    { "stroke-miterlimit": "10" },
    {
      style: "fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
    },
    { viewBox: "0 0 267.426 268.163" },
    { "xml:space": "preserve" },
    { xmlns: "http://www.w3.org/2000/svg" },
    /*$$props*/
    n[0]
  ], l = {};
  for (let u = 0; u < o.length; u += 1)
    l = L(l, o[u]);
  return {
    c() {
      e = h("svg"), t = h("clipPath"), r = h("path"), i = h("g"), s = h("path"), a(r, "d", "M0 0h267.426v268.163H0z"), a(t, "id", "a"), a(s, "d", "M10.604 0h41.213C57.673 0 62.42 4.747 62.42 10.604v41.213c0 5.856-4.747 10.603-10.603 10.603H10.604C4.747 62.42 0 57.673 0 51.817V10.604C0 4.747 4.747 0 10.604 0ZM113.604 0h41.213c5.856 0 10.603 4.747 10.603 10.604v41.213c0 5.856-4.747 10.603-10.603 10.603h-41.213c-5.857 0-10.604-4.747-10.604-10.603V10.604C103 4.747 107.747 0 113.604 0ZM215.604 0h41.213c5.856 0 10.603 4.747 10.603 10.604v41.213c0 5.856-4.747 10.603-10.603 10.603h-41.213c-5.857 0-10.604-4.747-10.604-10.603V10.604C205 4.747 209.747 0 215.604 0ZM10.604 102.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604H10.604C4.747 165.154 0 160.406 0 154.55v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM113.604 102.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM215.604 102.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM10.604 205.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604H10.604C4.747 268.154 0 263.406 0 257.55v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM113.604 205.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM215.604 205.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604Z"), a(i, "clip-path", "url(#a)"), a(i, "fill", "#fff"), W(e, l);
    },
    m(u, d) {
      H(u, e, d), c(e, t), c(t, r), c(e, i), c(i, s);
    },
    p(u, [d]) {
      W(e, l = ge(o, [
        { "stroke-miterlimit": "10" },
        {
          style: "fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
        },
        { viewBox: "0 0 267.426 268.163" },
        { "xml:space": "preserve" },
        { xmlns: "http://www.w3.org/2000/svg" },
        d & /*$$props*/
        1 && /*$$props*/
        u[0]
      ]));
    },
    i: A,
    o: A,
    d(u) {
      u && j(e);
    }
  };
}
function jr(n, e, t) {
  return n.$$set = (r) => {
    t(0, e = L(L({}, e), Z(r)));
  }, e = Z(e), [e];
}
class Gr extends me {
  constructor(e) {
    super(), re(this, e, jr, Hr, ne, {});
  }
}
function Zr(n) {
  let e, t, r, i, s, o, l, u, d, m, f, g, b, w, p, v, _, y, k, M, E, U, I, R, O, $, x, F = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 1488.35 398.49" },
    /*$$props*/
    n[0]
  ], B = {};
  for (let S = 0; S < F.length; S += 1)
    B = L(B, F[S]);
  return {
    c() {
      e = h("svg"), t = h("defs"), r = h("filter"), i = h("feOffset"), s = h("feGaussianBlur"), o = h("feFlood"), l = h("feComposite"), u = h("feComposite"), d = h("filter"), m = h("feOffset"), f = h("feGaussianBlur"), g = h("feFlood"), b = h("feComposite"), w = h("feComposite"), p = h("filter"), v = h("feOffset"), _ = h("feGaussianBlur"), y = h("feFlood"), k = h("feComposite"), M = h("feComposite"), E = h("g"), U = h("path"), I = h("g"), R = h("path"), O = h("g"), $ = h("path"), x = h("path"), a(s, "result", "blur"), a(s, "stdDeviation", "19.31"), a(o, "flood-color", "#34c4e7"), a(o, "flood-opacity", ".75"), a(l, "in2", "blur"), a(l, "operator", "in"), a(u, "in", "SourceGraphic"), a(r, "id", "a"), a(r, "filterUnits", "userSpaceOnUse"), a(f, "result", "blur-2"), a(f, "stdDeviation", "19.31"), a(g, "flood-color", "#34c4e7"), a(g, "flood-opacity", ".75"), a(b, "in2", "blur-2"), a(b, "operator", "in"), a(w, "in", "SourceGraphic"), a(d, "id", "b"), a(d, "filterUnits", "userSpaceOnUse"), a(_, "result", "blur-3"), a(_, "stdDeviation", "19.31"), a(y, "flood-color", "#34c4e7"), a(y, "flood-opacity", ".75"), a(k, "in2", "blur-3"), a(k, "operator", "in"), a(M, "in", "SourceGraphic"), a(p, "id", "c"), a(p, "filterUnits", "userSpaceOnUse"), a(U, "d", "M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM633.87 324.48c0 7.29-1.93 13.24-5.77 17.85-3.85 4.61-8.81 6.92-14.89 6.92h-67.77c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85v-88.6h25.88v85.92H608V0h25.88v324.48ZM781.13 349.25h-24.39v-6.03c-9.93 1.64-19.8 3.2-29.6 4.69-11.92 1.79-21.78 2.68-29.6 2.68-13.4 0-20.11-8.03-20.11-24.1V132.11h24.39v190.58l54.92-1.79V132.11h24.39v217.14ZM923.18 349.25h-26.99L846.3 238.56v110.69h-24.76V0h24.76v221.83l46.54-89.71h26.62v.89l-52.69 95.96 56.41 120.29ZM1050.52 324.03c0 16.81-6.95 25.22-20.85 25.22H970.1c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25ZM1195.55 302.61c0 13.39-3.66 24.51-10.98 33.36-7.33 8.85-16.51 13.28-27.55 13.28h-65.53V0h24.76v138.14c9.8-1.49 19.61-2.97 29.41-4.46 12.41-1.93 22.15-2.9 29.23-2.9 13.78 0 20.66 8.11 20.66 24.33v147.51Zm-24.76-4.46V158.67l-54.55 1.79v162.69h34.25c13.53 0 20.29-8.33 20.29-24.99ZM1340.02 324.03c0 16.81-7.01 25.22-21.04 25.22h-62.18c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h62.18c14.02 0 21.04 8.41 21.04 25.22v166.7Zm-24.76-.89V158.22h-54.55v164.92h54.55ZM1478.71 349.25h-25.13l-30.53-85.92-30.9 85.92h-24.39v-.89l42.26-110.69-39.65-105.56h25.13l27.93 79.67 28.67-79.67h24.02v.89l-39.65 103.77 42.26 112.47Z"), C(U, "fill", "#fff"), C(E, "filter", "url(#a)"), a(R, "d", "M1478.7 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65H1478.7c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), C(R, "fill", "#2bc0d3"), C(I, "filter", "url(#b)"), a($, "d", "M1419.87 62.05h-263.59c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h263.59c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65ZM782.86 62.05h-52.78c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h52.78c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), C($, "fill", "#2bc0d3"), a(x, "d", "M700.66 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1449.28 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1049.92 62.05H878.63c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h171.29c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), C(x, "fill", "#2bc0d3"), C(O, "filter", "url(#c)"), W(e, B);
    },
    m(S, V) {
      H(S, e, V), c(e, t), c(t, r), c(r, i), c(r, s), c(r, o), c(r, l), c(r, u), c(t, d), c(d, m), c(d, f), c(d, g), c(d, b), c(d, w), c(t, p), c(p, v), c(p, _), c(p, y), c(p, k), c(p, M), c(e, E), c(E, U), c(e, I), c(I, R), c(e, O), c(O, $), c(O, x);
    },
    p(S, [V]) {
      W(e, B = ge(F, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 1488.35 398.49" },
        V & /*$$props*/
        1 && /*$$props*/
        S[0]
      ]));
    },
    i: A,
    o: A,
    d(S) {
      S && j(e);
    }
  };
}
function Wr(n, e, t) {
  return n.$$set = (r) => {
    t(0, e = L(L({}, e), Z(r)));
  }, e = Z(e), [e];
}
class zr extends me {
  constructor(e) {
    super(), re(this, e, Wr, Zr, ne, {});
  }
}
function qr(n) {
  let e, t, r, i, s, o, l, u, d, m, f, g, b, w, p, v, _, y, k, M, E, U, I, R, O, $, x, F = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 1205.07 398.49" },
    /*$$props*/
    n[0]
  ], B = {};
  for (let S = 0; S < F.length; S += 1)
    B = L(B, F[S]);
  return {
    c() {
      e = h("svg"), t = h("defs"), r = h("filter"), i = h("feOffset"), s = h("feGaussianBlur"), o = h("feFlood"), l = h("feComposite"), u = h("feComposite"), d = h("filter"), m = h("feOffset"), f = h("feGaussianBlur"), g = h("feFlood"), b = h("feComposite"), w = h("feComposite"), p = h("filter"), v = h("feOffset"), _ = h("feGaussianBlur"), y = h("feFlood"), k = h("feComposite"), M = h("feComposite"), E = h("g"), U = h("path"), I = h("g"), R = h("path"), O = h("g"), $ = h("path"), x = h("path"), a(s, "result", "blur"), a(s, "stdDeviation", "19.31"), a(o, "flood-color", "#34c4e7"), a(o, "flood-opacity", ".75"), a(l, "in2", "blur"), a(l, "operator", "in"), a(u, "in", "SourceGraphic"), a(r, "id", "a"), a(r, "filterUnits", "userSpaceOnUse"), a(f, "result", "blur-2"), a(f, "stdDeviation", "19.31"), a(g, "flood-color", "#34c4e7"), a(g, "flood-opacity", ".75"), a(b, "in2", "blur-2"), a(b, "operator", "in"), a(w, "in", "SourceGraphic"), a(d, "id", "b"), a(d, "filterUnits", "userSpaceOnUse"), a(_, "result", "blur-3"), a(_, "stdDeviation", "19.31"), a(y, "flood-color", "#34c4e7"), a(y, "flood-opacity", ".75"), a(k, "in2", "blur-3"), a(k, "operator", "in"), a(M, "in", "SourceGraphic"), a(p, "id", "c"), a(p, "filterUnits", "userSpaceOnUse"), a(U, "d", "M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM631.64 27.45h-45.05v321.8h-25.88V27.45h-45.43V0h116.36v27.45ZM762.7 349.25h-24.39v-6.03c-9.93 1.64-19.8 3.2-29.6 4.69-11.92 1.79-21.78 2.68-29.6 2.68-13.4 0-20.11-8.03-20.11-24.1V132.11h24.39v190.58l54.92-1.79V132.11h24.39v217.14ZM897.86 203.53h-24.39v-44.86l-45.61 1.79v188.8H803.1V132.11h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43ZM994.48 349.25h-35.19c-13.9 0-20.85-8.4-20.85-25.22V158.22h-21.78v-26.11h21.78V64.49h24.39v67.62h31.65v26.11h-31.65v164.92h31.65v26.11ZM1052.01 349.25h-24.39V0h24.39v349.25ZM1195.36 324.03c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25Z"), C(U, "fill", "#fff"), C(E, "filter", "url(#a)"), a(R, "d", "M1195.41 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h1185.76c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), C(R, "fill", "#2bc0d3"), C(I, "filter", "url(#b)"), a($, "d", "M1136.59 62.05h-43.62c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h43.62c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65ZM899.91 62.05H730.08c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h169.83c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), C($, "fill", "#2bc0d3"), a(x, "d", "M700.66 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1166 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z"), C(x, "fill", "#2bc0d3"), C(O, "filter", "url(#c)"), W(e, B);
    },
    m(S, V) {
      H(S, e, V), c(e, t), c(t, r), c(r, i), c(r, s), c(r, o), c(r, l), c(r, u), c(t, d), c(d, m), c(d, f), c(d, g), c(d, b), c(d, w), c(t, p), c(p, v), c(p, _), c(p, y), c(p, k), c(p, M), c(e, E), c(E, U), c(e, I), c(I, R), c(e, O), c(O, $), c(O, x);
    },
    p(S, [V]) {
      W(e, B = ge(F, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 1205.07 398.49" },
        V & /*$$props*/
        1 && /*$$props*/
        S[0]
      ]));
    },
    i: A,
    o: A,
    d(S) {
      S && j(e);
    }
  };
}
function Kr(n, e, t) {
  return n.$$set = (r) => {
    t(0, e = L(L({}, e), Z(r)));
  }, e = Z(e), [e];
}
class Jr extends me {
  constructor(e) {
    super(), re(this, e, Kr, qr, ne, {});
  }
}
function Yr(n) {
  let e, t, r, i, s, o, l, u, d, m, f, g, b, w, p, v, _, y, k, M, E, U, I, R, O, $, x, F, B, S, V, J, z, Y, X, ie = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 1551.75 432.49" },
    /*$$props*/
    n[0]
  ], Q = {};
  for (let D = 0; D < ie.length; D += 1)
    Q = L(Q, ie[D]);
  return {
    c() {
      e = h("svg"), t = h("defs"), r = h("filter"), i = h("feOffset"), s = h("feGaussianBlur"), o = h("feFlood"), l = h("feComposite"), u = h("feComposite"), d = h("filter"), m = h("feOffset"), f = h("feGaussianBlur"), g = h("feFlood"), b = h("feComposite"), w = h("feComposite"), p = h("filter"), v = h("feOffset"), _ = h("feGaussianBlur"), y = h("feFlood"), k = h("feComposite"), M = h("feComposite"), E = h("filter"), U = h("feOffset"), I = h("feGaussianBlur"), R = h("feFlood"), O = h("feComposite"), $ = h("feComposite"), x = h("g"), F = h("path"), B = h("g"), S = h("path"), V = h("g"), J = h("path"), z = h("g"), Y = h("path"), X = h("path"), a(s, "result", "blur"), a(s, "stdDeviation", "19.31"), a(o, "flood-color", "#34c4e7"), a(o, "flood-opacity", ".75"), a(l, "in2", "blur"), a(l, "operator", "in"), a(u, "in", "SourceGraphic"), a(r, "id", "a"), a(r, "filterUnits", "userSpaceOnUse"), a(f, "result", "blur-2"), a(f, "stdDeviation", "19.31"), a(g, "flood-color", "#34c4e7"), a(g, "flood-opacity", ".75"), a(b, "in2", "blur-2"), a(b, "operator", "in"), a(w, "in", "SourceGraphic"), a(d, "id", "b"), a(d, "filterUnits", "userSpaceOnUse"), a(_, "result", "blur-3"), a(_, "stdDeviation", "19.31"), a(y, "flood-color", "#34c4e7"), a(y, "flood-opacity", ".75"), a(k, "in2", "blur-3"), a(k, "operator", "in"), a(M, "in", "SourceGraphic"), a(p, "id", "c"), a(p, "filterUnits", "userSpaceOnUse"), a(I, "result", "blur-4"), a(I, "stdDeviation", "19.31"), a(R, "flood-color", "#34c4e7"), a(R, "flood-opacity", ".75"), a(O, "in2", "blur-4"), a(O, "operator", "in"), a($, "in", "SourceGraphic"), a(E, "id", "d"), a(E, "filterUnits", "userSpaceOnUse"), a(F, "d", "M163.42 350.14h-24.39V128.99c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V.89h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4.89h24.02v349.25ZM326.69 325.37c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V25.66c0-7.29 1.92-13.24 5.77-17.85 3.84-4.61 8.81-6.92 14.89-6.92h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85v81.24h-26.06V28.34h-64.79V322.7h64.79v-85.92h26.06v88.6ZM485.49 325.37c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V25.66c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85v81.24h-25.88V28.34h-62.93v73.65l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM648.77 350.14h-25.69l-10.24-77.66h-57.9l-10.24 77.66h-24.95v-.89L571.69 0h25.51l51.57 350.14Zm-39.28-105.11L583.98 55.79l-25.69 189.24h51.2ZM784.86 350.14H760.1V159.56l-54.55 1.79v188.8h-24.76V133.01h24.76v6.03c9.68-1.49 19.42-3.05 29.23-4.69 11.92-1.79 21.72-2.68 29.42-2.68 13.78 0 20.66 8.11 20.66 24.33v194.15ZM927.28 350.14h-24.39v-6.03c-9.81 1.64-19.61 3.2-29.42 4.69-12.17 1.79-21.91 2.68-29.23 2.68-13.53 0-20.29-8.03-20.29-24.1v-79.22c0-16.66 7.01-24.99 21.04-24.99h58.27v-65.39h-53.24v37.04H826v-36.6c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v191.92Zm-24.02-27v-76.77h-55.29v78.11l55.29-1.34ZM993.74 350.14h-24.39V.89h24.39v349.25ZM1137.83 133.01l-43.56 215.35-18.06 84.13h-24.39l18.24-84.13-44.68-215.35h25.5l30.9 170.94 31.28-170.94h24.76ZM1265.73 324.93c0 16.81-7.01 25.22-21.04 25.22h-56.78c-14.03 0-21.04-8.4-21.04-25.22v-49.32h24.39v48.87h50.08v-43.29l-64.79-63.6c-6.21-5.95-9.31-13.69-9.31-23.21v-36.15c0-16.81 7.01-25.22 21.04-25.22h56.04c14.02 0 21.04 8.41 21.04 25.22v43.29h-24.02v-42.85h-50.08v37.94l65.35 63.6c6.08 5.8 9.12 13.69 9.12 23.66v41.06ZM1406.29 324.93c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22V158.22c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25ZM1542.01 204.42h-24.39v-44.86l-45.61 1.79v188.8h-24.76V133.01h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43Z"), C(F, "fill", "#fff"), C(x, "filter", "url(#a)"), a(S, "d", "M1017.4 399.39H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65H1017.4c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), C(S, "fill", "#2bc0d3"), C(B, "filter", "url(#b)"), a(J, "d", "M1542.1 399.39h-416.69c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h416.69c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), C(J, "fill", "#2bc0d3"), C(V, "filter", "url(#c)"), a(Y, "d", "M1483.27 62.95h-455.28c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h455.28c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65ZM928.46 62.95H730.07c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h198.39c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), C(Y, "fill", "#2bc0d3"), a(X, "d", "M700.66 92.36c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1512.68 92.36c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z"), C(X, "fill", "#2bc0d3"), C(z, "filter", "url(#d)"), W(e, Q);
    },
    m(D, se) {
      H(D, e, se), c(e, t), c(t, r), c(r, i), c(r, s), c(r, o), c(r, l), c(r, u), c(t, d), c(d, m), c(d, f), c(d, g), c(d, b), c(d, w), c(t, p), c(p, v), c(p, _), c(p, y), c(p, k), c(p, M), c(t, E), c(E, U), c(E, I), c(E, R), c(E, O), c(E, $), c(e, x), c(x, F), c(e, B), c(B, S), c(e, V), c(V, J), c(e, z), c(z, Y), c(z, X);
    },
    p(D, [se]) {
      W(e, Q = ge(ie, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 1551.75 432.49" },
        se & /*$$props*/
        1 && /*$$props*/
        D[0]
      ]));
    },
    i: A,
    o: A,
    d(D) {
      D && j(e);
    }
  };
}
function Xr(n, e, t) {
  return n.$$set = (r) => {
    t(0, e = L(L({}, e), Z(r)));
  }, e = Z(e), [e];
}
class Qr extends me {
  constructor(e) {
    super(), re(this, e, Xr, Yr, ne, {});
  }
}
function ei(n) {
  let e, t, r, i, s, o, l, u, d, m, f, g, b, w, p, v, _, y, k, M, E, U, I, R, O, $, x, F, B, S, V, J, z, Y, X, ie = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 1452.86 431.6" },
    /*$$props*/
    n[0]
  ], Q = {};
  for (let D = 0; D < ie.length; D += 1)
    Q = L(Q, ie[D]);
  return {
    c() {
      e = h("svg"), t = h("defs"), r = h("filter"), i = h("feOffset"), s = h("feGaussianBlur"), o = h("feFlood"), l = h("feComposite"), u = h("feComposite"), d = h("filter"), m = h("feOffset"), f = h("feGaussianBlur"), g = h("feFlood"), b = h("feComposite"), w = h("feComposite"), p = h("filter"), v = h("feOffset"), _ = h("feGaussianBlur"), y = h("feFlood"), k = h("feComposite"), M = h("feComposite"), E = h("filter"), U = h("feOffset"), I = h("feGaussianBlur"), R = h("feFlood"), O = h("feComposite"), $ = h("feComposite"), x = h("g"), F = h("path"), B = h("g"), S = h("path"), V = h("g"), J = h("path"), z = h("g"), Y = h("path"), X = h("path"), a(s, "result", "blur"), a(s, "stdDeviation", "19.31"), a(o, "flood-color", "#34c4e7"), a(o, "flood-opacity", ".75"), a(l, "in2", "blur"), a(l, "operator", "in"), a(u, "in", "SourceGraphic"), a(r, "id", "a"), a(r, "filterUnits", "userSpaceOnUse"), a(f, "result", "blur-2"), a(f, "stdDeviation", "19.31"), a(g, "flood-color", "#34c4e7"), a(g, "flood-opacity", ".75"), a(b, "in2", "blur-2"), a(b, "operator", "in"), a(w, "in", "SourceGraphic"), a(d, "id", "b"), a(d, "filterUnits", "userSpaceOnUse"), a(_, "result", "blur-3"), a(_, "stdDeviation", "19.31"), a(y, "flood-color", "#34c4e7"), a(y, "flood-opacity", ".75"), a(k, "in2", "blur-3"), a(k, "operator", "in"), a(M, "in", "SourceGraphic"), a(p, "id", "c"), a(p, "filterUnits", "userSpaceOnUse"), a(I, "result", "blur-4"), a(I, "stdDeviation", "19.31"), a(R, "flood-color", "#34c4e7"), a(R, "flood-opacity", ".75"), a(O, "in2", "blur-4"), a(O, "operator", "in"), a($, "in", "SourceGraphic"), a(E, "id", "d"), a(E, "filterUnits", "userSpaceOnUse"), a(F, "d", "M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM644.86 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM752.83 349.25h-35.19c-13.9 0-20.85-8.4-20.85-25.22V158.22h-21.78v-26.11h21.78V64.49h24.39v67.62h31.65v26.11h-31.65v164.92h31.65v26.11ZM888.55 324.03c0 16.81-7.01 25.22-21.04 25.22h-62.18c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h62.18c14.02 0 21.04 8.41 21.04 25.22v166.7Zm-24.76-.89V158.22h-54.55v164.92h54.55ZM1023.71 203.53h-24.39v-44.86l-45.61 1.79v188.8h-24.76V132.11h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43ZM1157.57 349.25h-24.39v-6.03c-9.81 1.64-19.61 3.2-29.42 4.69-12.17 1.79-21.91 2.68-29.23 2.68-13.53 0-20.29-8.03-20.29-24.1v-79.22c0-16.66 7.01-24.99 21.04-24.99h58.27v-65.39h-53.24v37.04h-24.02v-36.6c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v191.92Zm-24.02-27v-76.77h-55.29v78.11l55.29-1.34ZM1301.11 406.38c0 16.81-7.01 25.22-21.04 25.22h-58.83c-14.27 0-21.41-10.64-21.41-31.91 0-2.53.09-6.29.28-11.27.19-4.99.28-8.59.28-10.82h24.39v28.79h51.75v-57.13h-40.77c-11.05 0-20.23-4.42-27.55-13.28-7.32-8.85-10.98-19.97-10.98-33.36V175.64c0-12.79 3.23-23.47 9.68-32.02 6.45-8.55 14.95-12.83 25.5-12.83 2.85 0 17.56 2.46 44.12 7.36v-6.03h24.58v274.26Zm-24.58-83.24V159.12c-19.61-1.49-31.03-2.23-34.25-2.23-13.65 0-20.48 8.33-20.48 24.99v116.27c0 16.66 6.82 24.99 20.48 24.99h34.25ZM1443.15 324.03c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25Z"), C(F, "fill", "#fff"), C(x, "filter", "url(#a)"), a(S, "d", "M1161.4 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65H1161.4c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), C(S, "fill", "#2bc0d3"), C(B, "filter", "url(#b)"), a(J, "d", "M1443.21 398.49h-103.92c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h103.92c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), C(J, "fill", "#2bc0d3"), C(V, "filter", "url(#c)"), a(Y, "d", "M1384.38 62.05H824.22c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h560.16c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), C(Y, "fill", "#2bc0d3"), a(X, "d", "M794.81 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1413.79 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z"), C(X, "fill", "#2bc0d3"), C(z, "filter", "url(#d)"), W(e, Q);
    },
    m(D, se) {
      H(D, e, se), c(e, t), c(t, r), c(r, i), c(r, s), c(r, o), c(r, l), c(r, u), c(t, d), c(d, m), c(d, f), c(d, g), c(d, b), c(d, w), c(t, p), c(p, v), c(p, _), c(p, y), c(p, k), c(p, M), c(t, E), c(E, U), c(E, I), c(E, R), c(E, O), c(E, $), c(e, x), c(x, F), c(e, B), c(B, S), c(e, V), c(V, J), c(e, z), c(z, Y), c(z, X);
    },
    p(D, [se]) {
      W(e, Q = ge(ie, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 1452.86 431.6" },
        se & /*$$props*/
        1 && /*$$props*/
        D[0]
      ]));
    },
    i: A,
    o: A,
    d(D) {
      D && j(e);
    }
  };
}
function ti(n, e, t) {
  return n.$$set = (r) => {
    t(0, e = L(L({}, e), Z(r)));
  }, e = Z(e), [e];
}
class ni extends me {
  constructor(e) {
    super(), re(this, e, ti, ei, ne, {});
  }
}
function ri(n) {
  let e, t, r, i, s, o, l, u, d, m, f, g, b, w, p, v, _, y, k, M, E, U, I, R, O, $, x, F, B, S, V, J, z, Y, X, ie = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 1324.74 431.6" },
    /*$$props*/
    n[0]
  ], Q = {};
  for (let D = 0; D < ie.length; D += 1)
    Q = L(Q, ie[D]);
  return {
    c() {
      e = h("svg"), t = h("defs"), r = h("filter"), i = h("feOffset"), s = h("feGaussianBlur"), o = h("feFlood"), l = h("feComposite"), u = h("feComposite"), d = h("filter"), m = h("feOffset"), f = h("feGaussianBlur"), g = h("feFlood"), b = h("feComposite"), w = h("feComposite"), p = h("filter"), v = h("feOffset"), _ = h("feGaussianBlur"), y = h("feFlood"), k = h("feComposite"), M = h("feComposite"), E = h("filter"), U = h("feOffset"), I = h("feGaussianBlur"), R = h("feFlood"), O = h("feComposite"), $ = h("feComposite"), x = h("g"), F = h("path"), B = h("g"), S = h("path"), V = h("g"), J = h("path"), z = h("path"), Y = h("g"), X = h("path"), a(s, "result", "blur"), a(s, "stdDeviation", "19.31"), a(o, "flood-color", "#34c4e7"), a(o, "flood-opacity", ".75"), a(l, "in2", "blur"), a(l, "operator", "in"), a(u, "in", "SourceGraphic"), a(r, "id", "a"), a(r, "filterUnits", "userSpaceOnUse"), a(f, "result", "blur-2"), a(f, "stdDeviation", "19.31"), a(g, "flood-color", "#34c4e7"), a(g, "flood-opacity", ".75"), a(b, "in2", "blur-2"), a(b, "operator", "in"), a(w, "in", "SourceGraphic"), a(d, "id", "b"), a(d, "filterUnits", "userSpaceOnUse"), a(_, "result", "blur-3"), a(_, "stdDeviation", "19.31"), a(y, "flood-color", "#34c4e7"), a(y, "flood-opacity", ".75"), a(k, "in2", "blur-3"), a(k, "operator", "in"), a(M, "in", "SourceGraphic"), a(p, "id", "c"), a(p, "filterUnits", "userSpaceOnUse"), a(I, "result", "blur-4"), a(I, "stdDeviation", "19.31"), a(R, "flood-color", "#34c4e7"), a(R, "flood-opacity", ".75"), a(O, "in2", "blur-4"), a(O, "operator", "in"), a($, "in", "SourceGraphic"), a(E, "id", "d"), a(E, "filterUnits", "userSpaceOnUse"), a(F, "d", "M509.35 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h499.7c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), C(F, "fill", "#2bc0d3"), C(x, "filter", "url(#a)"), a(S, "d", "M1029.94 398.49H627.91c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h402.03c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), C(S, "fill", "#2bc0d3"), C(B, "filter", "url(#b)"), a(J, "d", "M1256.26 62.05H606.1c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h650.15c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), C(J, "fill", "#2bc0d3"), a(z, "d", "M576.69 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1285.67 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z"), C(z, "fill", "#2bc0d3"), C(V, "filter", "url(#c)"), a(X, "d", "M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM630.33 132.11l-43.56 215.35-18.06 84.13h-24.39l18.24-84.13-44.68-215.35h25.5l30.9 170.94 31.28-170.94h24.76ZM764.75 349.25h-24.76V158.67l-54.55 1.79v188.8h-24.76V132.11h24.76v6.03c9.68-1.49 19.42-3.05 29.23-4.69 11.92-1.79 21.72-2.68 29.42-2.68 13.78 0 20.66 8.11 20.66 24.33v194.15ZM906.05 324.03c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25ZM1041.77 203.53h-24.39v-44.86l-45.61 1.79v188.8h-24.76V132.11h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43ZM1176.19 406.38c0 16.81-7.01 25.22-21.04 25.22h-58.83c-14.27 0-21.41-10.64-21.41-31.91 0-2.53.09-6.29.28-11.27.19-4.99.28-8.59.28-10.82h24.39v28.79h51.75v-57.13h-40.77c-11.05 0-20.23-4.42-27.55-13.28-7.32-8.85-10.98-19.97-10.98-33.36V175.64c0-12.79 3.23-23.47 9.68-32.02 6.45-8.55 14.95-12.83 25.5-12.83 2.85 0 17.56 2.46 44.12 7.36v-6.03h24.58v274.26Zm-24.58-83.24V159.12c-19.61-1.49-31.03-2.23-34.25-2.23-13.65 0-20.48 8.33-20.48 24.99v116.27c0 16.66 6.82 24.99 20.48 24.99h34.25ZM1318.98 132.11l-43.56 215.35-18.06 84.13h-24.39l18.24-84.13-44.68-215.35h25.5l30.9 170.94 31.28-170.94h24.76Z"), C(X, "fill", "#fff"), C(Y, "filter", "url(#d)"), W(e, Q);
    },
    m(D, se) {
      H(D, e, se), c(e, t), c(t, r), c(r, i), c(r, s), c(r, o), c(r, l), c(r, u), c(t, d), c(d, m), c(d, f), c(d, g), c(d, b), c(d, w), c(t, p), c(p, v), c(p, _), c(p, y), c(p, k), c(p, M), c(t, E), c(E, U), c(E, I), c(E, R), c(E, O), c(E, $), c(e, x), c(x, F), c(e, B), c(B, S), c(e, V), c(V, J), c(V, z), c(e, Y), c(Y, X);
    },
    p(D, [se]) {
      W(e, Q = ge(ie, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 1324.74 431.6" },
        se & /*$$props*/
        1 && /*$$props*/
        D[0]
      ]));
    },
    i: A,
    o: A,
    d(D) {
      D && j(e);
    }
  };
}
function ii(n, e, t) {
  return n.$$set = (r) => {
    t(0, e = L(L({}, e), Z(r)));
  }, e = Z(e), [e];
}
class si extends me {
  constructor(e) {
    super(), re(this, e, ii, ri, ne, {});
  }
}
function oi(n) {
  let e, t, r, i, s, o, l, u, d, m, f, g, b, w, p, v, _, y, k, M, E, U;
  return i = new zr({ props: { style: "height: 2rem" } }), l = new Jr({ props: { style: "height: 2rem" } }), m = new Qr({ props: { style: "height: 2rem" } }), b = new ni({ props: { style: "height: 2rem" } }), v = new si({ props: { style: "height: 2rem" } }), k = new Gr({
    props: {
      style: "width: max-content; height: max-content"
    }
  }), {
    c() {
      e = N("div"), t = N("section"), r = N("a"), ae(i.$$.fragment), s = te(), o = N("a"), ae(l.$$.fragment), u = te(), d = N("a"), ae(m.$$.fragment), f = te(), g = N("a"), ae(b.$$.fragment), w = te(), p = N("a"), ae(v.$$.fragment), _ = te(), y = N("div"), ae(k.$$.fragment), this.c = A, a(r, "href", "/jukebox"), a(r, "class", "page-icon"), a(o, "href", "/turtle"), a(o, "class", "page-icon"), a(d, "href", "/analyser"), a(d, "class", "page-icon"), a(g, "href", "/storage"), a(g, "class", "page-icon"), a(p, "href", "/home"), a(p, "class", "page-icon"), a(t, "class", "popover"), it(
        t,
        "slidein",
        /*isToggled*/
        n[0]
      ), a(y, "class", "portal-button"), it(
        y,
        "rotate-180",
        /*isToggled*/
        n[0]
      );
    },
    m(I, R) {
      H(I, e, R), c(e, t), c(t, r), oe(i, r, null), c(t, s), c(t, o), oe(l, o, null), c(t, u), c(t, d), oe(m, d, null), c(t, f), c(t, g), oe(b, g, null), c(t, w), c(t, p), oe(v, p, null), c(e, _), c(e, y), oe(k, y, null), M = !0, E || (U = [
        $e(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          n[1]
        ),
        $e(
          y,
          "mousedown",
          /*mousedown_handler*/
          n[2]
        )
      ], E = !0);
    },
    p(I, [R]) {
      (!M || R & /*isToggled*/
      1) && it(
        t,
        "slidein",
        /*isToggled*/
        I[0]
      ), (!M || R & /*isToggled*/
      1) && it(
        y,
        "rotate-180",
        /*isToggled*/
        I[0]
      );
    },
    i(I) {
      M || (G(i.$$.fragment, I), G(l.$$.fragment, I), G(m.$$.fragment, I), G(b.$$.fragment, I), G(v.$$.fragment, I), G(k.$$.fragment, I), M = !0);
    },
    o(I) {
      q(i.$$.fragment, I), q(l.$$.fragment, I), q(m.$$.fragment, I), q(b.$$.fragment, I), q(v.$$.fragment, I), q(k.$$.fragment, I), M = !1;
    },
    d(I) {
      I && j(e), ee(i), ee(l), ee(m), ee(b), ee(v), ee(k), E = !1, Te(U);
    }
  };
}
function ai(n, e, t) {
  let r = !1;
  return [r, () => t(0, r = !1), () => t(0, r = !r)];
}
class ci extends It {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = "<style>.portal-button{margin-left:1rem;margin-right:0.5rem;transition:300ms;width:1.75rem;height:1.75rem}.rotate-180{transform:rotate(180deg)}.popover{background-color:rgb(13 29 48 / var(--tw-bg-opacity));position:absolute;height:calc(100vh - 3.5rem);width:13rem;transition-duration:200ms;transition-property:transform;top:3.5rem;left:-15rem;transform-origin:top left;transform:scale(0.9);overflow:hidden}.slidein{left:0;transform:scale(1)}.page-icon{height:2rem;width:auto;margin-top:1rem;margin-left:0.5rem;margin-right:0.5rem;display:flex;justify-content:center}</style>", re(
      this,
      {
        target: this.shadowRoot,
        props: Kt(this.attributes),
        customElement: !0
      },
      ai,
      oi,
      ne,
      {},
      null
    ), e && e.target && H(e.target, this, e.anchor);
  }
}
customElements.define("mcs-portal", ci);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xn = function(n) {
  const e = [];
  let t = 0;
  for (let r = 0; r < n.length; r++) {
    let i = n.charCodeAt(r);
    i < 128 ? e[t++] = i : i < 2048 ? (e[t++] = i >> 6 | 192, e[t++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < n.length && (n.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (n.charCodeAt(++r) & 1023), e[t++] = i >> 18 | 240, e[t++] = i >> 12 & 63 | 128, e[t++] = i >> 6 & 63 | 128, e[t++] = i & 63 | 128) : (e[t++] = i >> 12 | 224, e[t++] = i >> 6 & 63 | 128, e[t++] = i & 63 | 128);
  }
  return e;
}, li = function(n) {
  const e = [];
  let t = 0, r = 0;
  for (; t < n.length; ) {
    const i = n[t++];
    if (i < 128)
      e[r++] = String.fromCharCode(i);
    else if (i > 191 && i < 224) {
      const s = n[t++];
      e[r++] = String.fromCharCode((i & 31) << 6 | s & 63);
    } else if (i > 239 && i < 365) {
      const s = n[t++], o = n[t++], l = n[t++], u = ((i & 7) << 18 | (s & 63) << 12 | (o & 63) << 6 | l & 63) - 65536;
      e[r++] = String.fromCharCode(55296 + (u >> 10)), e[r++] = String.fromCharCode(56320 + (u & 1023));
    } else {
      const s = n[t++], o = n[t++];
      e[r++] = String.fromCharCode((i & 15) << 12 | (s & 63) << 6 | o & 63);
    }
  }
  return e.join("");
}, Bn = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,
  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,
  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,
  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,
  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob == "function",
  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray(n, e) {
    if (!Array.isArray(n))
      throw Error("encodeByteArray takes an array as a parameter");
    this.init_();
    const t = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [];
    for (let i = 0; i < n.length; i += 3) {
      const s = n[i], o = i + 1 < n.length, l = o ? n[i + 1] : 0, u = i + 2 < n.length, d = u ? n[i + 2] : 0, m = s >> 2, f = (s & 3) << 4 | l >> 4;
      let g = (l & 15) << 2 | d >> 6, b = d & 63;
      u || (b = 64, o || (g = 64)), r.push(t[m], t[f], t[g], t[b]);
    }
    return r.join("");
  },
  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString(n, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? btoa(n) : this.encodeByteArray(xn(n), e);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString(n, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? atob(n) : li(this.decodeStringToByteArray(n, e));
  },
  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray(n, e) {
    this.init_();
    const t = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [];
    for (let i = 0; i < n.length; ) {
      const s = t[n.charAt(i++)], l = i < n.length ? t[n.charAt(i)] : 0;
      ++i;
      const d = i < n.length ? t[n.charAt(i)] : 64;
      ++i;
      const f = i < n.length ? t[n.charAt(i)] : 64;
      if (++i, s == null || l == null || d == null || f == null)
        throw new ui();
      const g = s << 2 | l >> 4;
      if (r.push(g), d !== 64) {
        const b = l << 4 & 240 | d >> 2;
        if (r.push(b), f !== 64) {
          const w = d << 6 & 192 | f;
          r.push(w);
        }
      }
    }
    return r;
  },
  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
      for (let n = 0; n < this.ENCODED_VALS.length; n++)
        this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n), this.charToByteMap_[this.byteToCharMap_[n]] = n, this.byteToCharMapWebSafe_[n] = this.ENCODED_VALS_WEBSAFE.charAt(n), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n, n >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n);
    }
  }
};
class ui extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const hi = function(n) {
  const e = xn(n);
  return Bn.encodeByteArray(e, !0);
}, $n = function(n) {
  return hi(n).replace(/\./g, "");
}, Vn = function(n) {
  try {
    return Bn.decodeString(n, !0);
  } catch (e) {
    console.error("base64Decode failed: ", e);
  }
  return null;
};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function di() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fi = () => di().__FIREBASE_DEFAULTS__, pi = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const n = process.env.__FIREBASE_DEFAULTS__;
  if (n)
    return JSON.parse(n);
}, gi = () => {
  if (typeof document > "u")
    return;
  let n;
  try {
    n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const e = n && Vn(n[1]);
  return e && JSON.parse(e);
}, Jt = () => {
  try {
    return fi() || pi() || gi();
  } catch (n) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
    return;
  }
}, mi = (n) => {
  var e, t;
  return (t = (e = Jt()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || t === void 0 ? void 0 : t[n];
}, Fn = () => {
  var n;
  return (n = Jt()) === null || n === void 0 ? void 0 : n.config;
}, Hn = (n) => {
  var e;
  return (e = Jt()) === null || e === void 0 ? void 0 : e[`_${n}`];
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vi {
  constructor() {
    this.reject = () => {
    }, this.resolve = () => {
    }, this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  wrapCallback(e) {
    return (t, r) => {
      t ? this.reject(t) : this.resolve(r), typeof e == "function" && (this.promise.catch(() => {
      }), e.length === 1 ? e(t) : e(t, r));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function _i() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(K());
}
function bi() {
  const n = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof n == "object" && n.id !== void 0;
}
function wi() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function yi() {
  const n = K();
  return n.indexOf("MSIE ") >= 0 || n.indexOf("Trident/") >= 0;
}
function Ii() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function Ei() {
  return new Promise((n, e) => {
    try {
      let t = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module", i = self.indexedDB.open(r);
      i.onsuccess = () => {
        i.result.close(), t || self.indexedDB.deleteDatabase(r), n(!0);
      }, i.onupgradeneeded = () => {
        t = !1;
      }, i.onerror = () => {
        var s;
        e(((s = i.error) === null || s === void 0 ? void 0 : s.message) || "");
      };
    } catch (t) {
      e(t);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ti = "FirebaseError";
class Ce extends Error {
  constructor(e, t, r) {
    super(t), this.code = e, this.customData = r, this.name = Ti, Object.setPrototypeOf(this, Ce.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Je.prototype.create);
  }
}
class Je {
  constructor(e, t, r) {
    this.service = e, this.serviceName = t, this.errors = r;
  }
  create(e, ...t) {
    const r = t[0] || {}, i = `${this.service}/${e}`, s = this.errors[e], o = s ? Ci(s, r) : "Error", l = `${this.serviceName}: ${o} (${i}).`;
    return new Ce(i, l, r);
  }
}
function Ci(n, e) {
  return n.replace(ki, (t, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const ki = /\{\$([^}]+)}/g;
function Si(n) {
  for (const e in n)
    if (Object.prototype.hasOwnProperty.call(n, e))
      return !1;
  return !0;
}
function gt(n, e) {
  if (n === e)
    return !0;
  const t = Object.keys(n), r = Object.keys(e);
  for (const i of t) {
    if (!r.includes(i))
      return !1;
    const s = n[i], o = e[i];
    if (ln(s) && ln(o)) {
      if (!gt(s, o))
        return !1;
    } else if (s !== o)
      return !1;
  }
  for (const i of r)
    if (!t.includes(i))
      return !1;
  return !0;
}
function ln(n) {
  return n !== null && typeof n == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ye(n) {
  const e = [];
  for (const [t, r] of Object.entries(n))
    Array.isArray(r) ? r.forEach((i) => {
      e.push(encodeURIComponent(t) + "=" + encodeURIComponent(i));
    }) : e.push(encodeURIComponent(t) + "=" + encodeURIComponent(r));
  return e.length ? "&" + e.join("&") : "";
}
function Ai(n, e) {
  const t = new Ri(n, e);
  return t.subscribe.bind(t);
}
class Ri {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  constructor(e, t) {
    this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(() => {
      e(this);
    }).catch((r) => {
      this.error(r);
    });
  }
  next(e) {
    this.forEachObserver((t) => {
      t.next(e);
    });
  }
  error(e) {
    this.forEachObserver((t) => {
      t.error(e);
    }), this.close(e);
  }
  complete() {
    this.forEachObserver((e) => {
      e.complete();
    }), this.close();
  }
  /**
   * Subscribe function that can be used to add an Observer to the fan-out list.
   *
   * - We require that no event is sent to a subscriber sychronously to their
   *   call to subscribe().
   */
  subscribe(e, t, r) {
    let i;
    if (e === void 0 && t === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    Oi(e, [
      "next",
      "error",
      "complete"
    ]) ? i = e : i = {
      next: e,
      error: t,
      complete: r
    }, i.next === void 0 && (i.next = At), i.error === void 0 && (i.error = At), i.complete === void 0 && (i.complete = At);
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return this.finalized && this.task.then(() => {
      try {
        this.finalError ? i.error(this.finalError) : i.complete();
      } catch {
      }
    }), this.observers.push(i), s;
  }
  // Unsubscribe is synchronous - we guarantee that no events are sent to
  // any unsubscribed Observer.
  unsubscribeOne(e) {
    this.observers === void 0 || this.observers[e] === void 0 || (delete this.observers[e], this.observerCount -= 1, this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let t = 0; t < this.observers.length; t++)
        this.sendOne(t, e);
  }
  // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.
  sendOne(e, t) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          t(this.observers[e]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(e) {
    this.finalized || (this.finalized = !0, e !== void 0 && (this.finalError = e), this.task.then(() => {
      this.observers = void 0, this.onNoObservers = void 0;
    }));
  }
}
function Oi(n, e) {
  if (typeof n != "object" || n === null)
    return !1;
  for (const t of e)
    if (t in n && typeof n[t] == "function")
      return !0;
  return !1;
}
function At() {
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Me(n) {
  return n && n._delegate ? n._delegate : n;
}
class Ve {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(e, t, r) {
    this.name = e, this.instanceFactory = t, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
  }
  setInstantiationMode(e) {
    return this.instantiationMode = e, this;
  }
  setMultipleInstances(e) {
    return this.multipleInstances = e, this;
  }
  setServiceProps(e) {
    return this.serviceProps = e, this;
  }
  setInstanceCreatedCallback(e) {
    return this.onInstanceCreated = e, this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ke = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mi {
  constructor(e, t) {
    this.name = e, this.container = t, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */
  get(e) {
    const t = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(t)) {
      const r = new vi();
      if (this.instancesDeferred.set(t, r), this.isInitialized(t) || this.shouldAutoInitialize())
        try {
          const i = this.getOrInitializeService({
            instanceIdentifier: t
          });
          i && r.resolve(i);
        } catch {
        }
    }
    return this.instancesDeferred.get(t).promise;
  }
  getImmediate(e) {
    var t;
    const r = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier), i = (t = e == null ? void 0 : e.optional) !== null && t !== void 0 ? t : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({
          instanceIdentifier: r
        });
      } catch (s) {
        if (i)
          return null;
        throw s;
      }
    else {
      if (i)
        return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (this.component = e, !!this.shouldAutoInitialize()) {
      if (Pi(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: ke });
        } catch {
        }
      for (const [t, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(t);
        try {
          const s = this.getOrInitializeService({
            instanceIdentifier: i
          });
          r.resolve(s);
        } catch {
        }
      }
    }
  }
  clearInstance(e = ke) {
    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e);
  }
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((t) => "INTERNAL" in t).map((t) => t.INTERNAL.delete()),
      ...e.filter((t) => "_delete" in t).map((t) => t._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = ke) {
    return this.instances.has(e);
  }
  getOptions(e = ke) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: t = {} } = e, r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: t
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const l = this.normalizeInstanceIdentifier(s);
      r === l && o.resolve(i);
    }
    return i;
  }
  /**
   *
   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
   *
   * @param identifier An optional instance identifier
   * @returns a function to unregister the callback
   */
  onInit(e, t) {
    var r;
    const i = this.normalizeInstanceIdentifier(t), s = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : /* @__PURE__ */ new Set();
    s.add(e), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return o && e(o, i), () => {
      s.delete(e);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  invokeOnInitCallbacks(e, t) {
    const r = this.onInitCallbacks.get(t);
    if (r)
      for (const i of r)
        try {
          i(e, t);
        } catch {
        }
  }
  getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
    let r = this.instances.get(e);
    if (!r && this.component && (r = this.component.instanceFactory(this.container, {
      instanceIdentifier: Di(e),
      options: t
    }), this.instances.set(e, r), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(r, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {
      }
    return r || null;
  }
  normalizeInstanceIdentifier(e = ke) {
    return this.component ? this.component.multipleInstances ? e : ke : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function Di(n) {
  return n === ke ? void 0 : n;
}
function Pi(n) {
  return n.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ni {
  constructor(e) {
    this.name = e, this.providers = /* @__PURE__ */ new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  addComponent(e) {
    const t = this.getProvider(e.name);
    if (t.isComponentSet())
      throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
    t.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e);
  }
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */
  getProvider(e) {
    if (this.providers.has(e))
      return this.providers.get(e);
    const t = new Mi(e, this);
    return this.providers.set(e, t), t;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var P;
(function(n) {
  n[n.DEBUG = 0] = "DEBUG", n[n.VERBOSE = 1] = "VERBOSE", n[n.INFO = 2] = "INFO", n[n.WARN = 3] = "WARN", n[n.ERROR = 4] = "ERROR", n[n.SILENT = 5] = "SILENT";
})(P || (P = {}));
const Li = {
  debug: P.DEBUG,
  verbose: P.VERBOSE,
  info: P.INFO,
  warn: P.WARN,
  error: P.ERROR,
  silent: P.SILENT
}, Ui = P.INFO, xi = {
  [P.DEBUG]: "log",
  [P.VERBOSE]: "log",
  [P.INFO]: "info",
  [P.WARN]: "warn",
  [P.ERROR]: "error"
}, Bi = (n, e, ...t) => {
  if (e < n.logLevel)
    return;
  const r = new Date().toISOString(), i = xi[e];
  if (i)
    console[i](`[${r}]  ${n.name}:`, ...t);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class jn {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = Ui, this._logHandler = Bi, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in P))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? Li[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  /**
   * The functions below are all based on the `console` interface
   */
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, P.DEBUG, ...e), this._logHandler(this, P.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, P.VERBOSE, ...e), this._logHandler(this, P.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, P.INFO, ...e), this._logHandler(this, P.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, P.WARN, ...e), this._logHandler(this, P.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, P.ERROR, ...e), this._logHandler(this, P.ERROR, ...e);
  }
}
const $i = (n, e) => e.some((t) => n instanceof t);
let un, hn;
function Vi() {
  return un || (un = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Fi() {
  return hn || (hn = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const Gn = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ new WeakMap();
function Hi(n) {
  const e = new Promise((t, r) => {
    const i = () => {
      n.removeEventListener("success", s), n.removeEventListener("error", o);
    }, s = () => {
      t(Ie(n.result)), i();
    }, o = () => {
      r(n.error), i();
    };
    n.addEventListener("success", s), n.addEventListener("error", o);
  });
  return e.then((t) => {
    t instanceof IDBCursor && Gn.set(t, n);
  }).catch(() => {
  }), Yt.set(e, n), e;
}
function ji(n) {
  if (Vt.has(n))
    return;
  const e = new Promise((t, r) => {
    const i = () => {
      n.removeEventListener("complete", s), n.removeEventListener("error", o), n.removeEventListener("abort", o);
    }, s = () => {
      t(), i();
    }, o = () => {
      r(n.error || new DOMException("AbortError", "AbortError")), i();
    };
    n.addEventListener("complete", s), n.addEventListener("error", o), n.addEventListener("abort", o);
  });
  Vt.set(n, e);
}
let Ft = {
  get(n, e, t) {
    if (n instanceof IDBTransaction) {
      if (e === "done")
        return Vt.get(n);
      if (e === "objectStoreNames")
        return n.objectStoreNames || Zn.get(n);
      if (e === "store")
        return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0]);
    }
    return Ie(n[e]);
  },
  set(n, e, t) {
    return n[e] = t, !0;
  },
  has(n, e) {
    return n instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in n;
  }
};
function Gi(n) {
  Ft = n(Ft);
}
function Zi(n) {
  return n === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...t) {
    const r = n.call(Ot(this), e, ...t);
    return Zn.set(r, e.sort ? e.sort() : [e]), Ie(r);
  } : Fi().includes(n) ? function(...e) {
    return n.apply(Ot(this), e), Ie(Gn.get(this));
  } : function(...e) {
    return Ie(n.apply(Ot(this), e));
  };
}
function Wi(n) {
  return typeof n == "function" ? Zi(n) : (n instanceof IDBTransaction && ji(n), $i(n, Vi()) ? new Proxy(n, Ft) : n);
}
function Ie(n) {
  if (n instanceof IDBRequest)
    return Hi(n);
  if (Rt.has(n))
    return Rt.get(n);
  const e = Wi(n);
  return e !== n && (Rt.set(n, e), Yt.set(e, n)), e;
}
const Ot = (n) => Yt.get(n);
function zi(n, e, { blocked: t, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(n, e), l = Ie(o);
  return r && o.addEventListener("upgradeneeded", (u) => {
    r(Ie(o.result), u.oldVersion, u.newVersion, Ie(o.transaction), u);
  }), t && o.addEventListener("blocked", (u) => t(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    u.oldVersion,
    u.newVersion,
    u
  )), l.then((u) => {
    s && u.addEventListener("close", () => s()), i && u.addEventListener("versionchange", (d) => i(d.oldVersion, d.newVersion, d));
  }).catch(() => {
  }), l;
}
const qi = ["get", "getKey", "getAll", "getAllKeys", "count"], Ki = ["put", "add", "delete", "clear"], Mt = /* @__PURE__ */ new Map();
function dn(n, e) {
  if (!(n instanceof IDBDatabase && !(e in n) && typeof e == "string"))
    return;
  if (Mt.get(e))
    return Mt.get(e);
  const t = e.replace(/FromIndex$/, ""), r = e !== t, i = Ki.includes(t);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(t in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || qi.includes(t))
  )
    return;
  const s = async function(o, ...l) {
    const u = this.transaction(o, i ? "readwrite" : "readonly");
    let d = u.store;
    return r && (d = d.index(l.shift())), (await Promise.all([
      d[t](...l),
      i && u.done
    ]))[0];
  };
  return Mt.set(e, s), s;
}
Gi((n) => ({
  ...n,
  get: (e, t, r) => dn(e, t) || n.get(e, t, r),
  has: (e, t) => !!dn(e, t) || n.has(e, t)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((t) => {
      if (Yi(t)) {
        const r = t.getImmediate();
        return `${r.library}/${r.version}`;
      } else
        return null;
    }).filter((t) => t).join(" ");
  }
}
function Yi(n) {
  const e = n.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const Ht = "@firebase/app", fn = "0.9.11";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Oe = new jn("@firebase/app"), Xi = "@firebase/app-compat", Qi = "@firebase/analytics-compat", es = "@firebase/analytics", ts = "@firebase/app-check-compat", ns = "@firebase/app-check", rs = "@firebase/auth", is = "@firebase/auth-compat", ss = "@firebase/database", os = "@firebase/database-compat", as = "@firebase/functions", cs = "@firebase/functions-compat", ls = "@firebase/installations", us = "@firebase/installations-compat", hs = "@firebase/messaging", ds = "@firebase/messaging-compat", fs = "@firebase/performance", ps = "@firebase/performance-compat", gs = "@firebase/remote-config", ms = "@firebase/remote-config-compat", vs = "@firebase/storage", _s = "@firebase/storage-compat", bs = "@firebase/firestore", ws = "@firebase/firestore-compat", ys = "firebase", Is = "9.22.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jt = "[DEFAULT]", Es = {
  [Ht]: "fire-core",
  [Xi]: "fire-core-compat",
  [es]: "fire-analytics",
  [Qi]: "fire-analytics-compat",
  [ns]: "fire-app-check",
  [ts]: "fire-app-check-compat",
  [rs]: "fire-auth",
  [is]: "fire-auth-compat",
  [ss]: "fire-rtdb",
  [os]: "fire-rtdb-compat",
  [as]: "fire-fn",
  [cs]: "fire-fn-compat",
  [ls]: "fire-iid",
  [us]: "fire-iid-compat",
  [hs]: "fire-fcm",
  [ds]: "fire-fcm-compat",
  [fs]: "fire-perf",
  [ps]: "fire-perf-compat",
  [gs]: "fire-rc",
  [ms]: "fire-rc-compat",
  [vs]: "fire-gcs",
  [_s]: "fire-gcs-compat",
  [bs]: "fire-fst",
  [ws]: "fire-fst-compat",
  "fire-js": "fire-js",
  [ys]: "fire-js-all"
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mt = /* @__PURE__ */ new Map(), Gt = /* @__PURE__ */ new Map();
function Ts(n, e) {
  try {
    n.container.addComponent(e);
  } catch (t) {
    Oe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`, t);
  }
}
function We(n) {
  const e = n.name;
  if (Gt.has(e))
    return Oe.debug(`There were multiple attempts to register component ${e}.`), !1;
  Gt.set(e, n);
  for (const t of mt.values())
    Ts(t, n);
  return !0;
}
function Wn(n, e) {
  const t = n.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return t && t.triggerHeartbeat(), n.container.getProvider(e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cs = {
  [
    "no-app"
    /* AppError.NO_APP */
  ]: "No Firebase App '{$appName}' has been created - call initializeApp() first",
  [
    "bad-app-name"
    /* AppError.BAD_APP_NAME */
  ]: "Illegal App name: '{$appName}",
  [
    "duplicate-app"
    /* AppError.DUPLICATE_APP */
  ]: "Firebase App named '{$appName}' already exists with different options or config",
  [
    "app-deleted"
    /* AppError.APP_DELETED */
  ]: "Firebase App named '{$appName}' already deleted",
  [
    "no-options"
    /* AppError.NO_OPTIONS */
  ]: "Need to provide options, when not being deployed to hosting via source.",
  [
    "invalid-app-argument"
    /* AppError.INVALID_APP_ARGUMENT */
  ]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  [
    "invalid-log-argument"
    /* AppError.INVALID_LOG_ARGUMENT */
  ]: "First argument to `onLog` must be null or a function.",
  [
    "idb-open"
    /* AppError.IDB_OPEN */
  ]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  [
    "idb-get"
    /* AppError.IDB_GET */
  ]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  [
    "idb-set"
    /* AppError.IDB_WRITE */
  ]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  [
    "idb-delete"
    /* AppError.IDB_DELETE */
  ]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
}, Ee = new Je("app", "Firebase", Cs);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ks {
  constructor(e, t, r) {
    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new Ve(
      "app",
      () => this,
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), this._automaticDataCollectionEnabled = e;
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */
  checkDestroyed() {
    if (this.isDeleted)
      throw Ee.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xe = Is;
function zn(n, e = {}) {
  let t = n;
  typeof e != "object" && (e = { name: e });
  const r = Object.assign({ name: jt, automaticDataCollectionEnabled: !1 }, e), i = r.name;
  if (typeof i != "string" || !i)
    throw Ee.create("bad-app-name", {
      appName: String(i)
    });
  if (t || (t = Fn()), !t)
    throw Ee.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const s = mt.get(i);
  if (s) {
    if (gt(t, s.options) && gt(r, s.config))
      return s;
    throw Ee.create("duplicate-app", { appName: i });
  }
  const o = new Ni(i);
  for (const u of Gt.values())
    o.addComponent(u);
  const l = new ks(t, r, o);
  return mt.set(i, l), l;
}
function Ss(n = jt) {
  const e = mt.get(n);
  if (!e && n === jt && Fn())
    return zn();
  if (!e)
    throw Ee.create("no-app", { appName: n });
  return e;
}
function Ne(n, e, t) {
  var r;
  let i = (r = Es[n]) !== null && r !== void 0 ? r : n;
  t && (i += `-${t}`);
  const s = i.match(/\s|\//), o = e.match(/\s|\//);
  if (s || o) {
    const l = [
      `Unable to register library "${i}" with version "${e}":`
    ];
    s && l.push(`library name "${i}" contains illegal characters (whitespace or "/")`), s && o && l.push("and"), o && l.push(`version name "${e}" contains illegal characters (whitespace or "/")`), Oe.warn(l.join(" "));
    return;
  }
  We(new Ve(
    `${i}-version`,
    () => ({ library: i, version: e }),
    "VERSION"
    /* ComponentType.VERSION */
  ));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const As = "firebase-heartbeat-database", Rs = 1, ze = "firebase-heartbeat-store";
let Dt = null;
function qn() {
  return Dt || (Dt = zi(As, Rs, {
    upgrade: (n, e) => {
      switch (e) {
        case 0:
          n.createObjectStore(ze);
      }
    }
  }).catch((n) => {
    throw Ee.create("idb-open", {
      originalErrorMessage: n.message
    });
  })), Dt;
}
async function Os(n) {
  try {
    return await (await qn()).transaction(ze).objectStore(ze).get(Kn(n));
  } catch (e) {
    if (e instanceof Ce)
      Oe.warn(e.message);
    else {
      const t = Ee.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message
      });
      Oe.warn(t.message);
    }
  }
}
async function pn(n, e) {
  try {
    const r = (await qn()).transaction(ze, "readwrite");
    await r.objectStore(ze).put(e, Kn(n)), await r.done;
  } catch (t) {
    if (t instanceof Ce)
      Oe.warn(t.message);
    else {
      const r = Ee.create("idb-set", {
        originalErrorMessage: t == null ? void 0 : t.message
      });
      Oe.warn(r.message);
    }
  }
}
function Kn(n) {
  return `${n.name}!${n.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ms = 1024, Ds = 30 * 24 * 60 * 60 * 1e3;
class Ps {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const t = this.container.getProvider("app").getImmediate();
    this._storage = new Ls(t), this._heartbeatsCachePromise = this._storage.read().then((r) => (this._heartbeatsCache = r, r));
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    const t = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), r = gn();
    if (this._heartbeatsCache === null && (this._heartbeatsCache = await this._heartbeatsCachePromise), !(this._heartbeatsCache.lastSentHeartbeatDate === r || this._heartbeatsCache.heartbeats.some((i) => i.date === r)))
      return this._heartbeatsCache.heartbeats.push({ date: r, agent: t }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((i) => {
        const s = new Date(i.date).valueOf();
        return Date.now() - s <= Ds;
      }), this._storage.overwrite(this._heartbeatsCache);
  }
  /**
   * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
   * It also clears all heartbeats from memory as well as in IndexedDB.
   *
   * NOTE: Consuming product SDKs should not send the header if this method
   * returns an empty string.
   */
  async getHeartbeatsHeader() {
    if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0)
      return "";
    const e = gn(), { heartbeatsToSend: t, unsentEntries: r } = Ns(this._heartbeatsCache.heartbeats), i = $n(JSON.stringify({ version: 2, heartbeats: t }));
    return this._heartbeatsCache.lastSentHeartbeatDate = e, r.length > 0 ? (this._heartbeatsCache.heartbeats = r, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i;
  }
}
function gn() {
  return new Date().toISOString().substring(0, 10);
}
function Ns(n, e = Ms) {
  const t = [];
  let r = n.slice();
  for (const i of n) {
    const s = t.find((o) => o.agent === i.agent);
    if (s) {
      if (s.dates.push(i.date), mn(t) > e) {
        s.dates.pop();
        break;
      }
    } else if (t.push({
      agent: i.agent,
      dates: [i.date]
    }), mn(t) > e) {
      t.pop();
      break;
    }
    r = r.slice(1);
  }
  return {
    heartbeatsToSend: t,
    unsentEntries: r
  };
}
class Ls {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return Ii() ? Ei().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    return await this._canUseIndexedDBPromise ? await Os(this.app) || { heartbeats: [] } : { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(e) {
    var t;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return pn(this.app, {
        lastSentHeartbeatDate: (t = e.lastSentHeartbeatDate) !== null && t !== void 0 ? t : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats
      });
    } else
      return;
  }
  // add heartbeats
  async add(e) {
    var t;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return pn(this.app, {
        lastSentHeartbeatDate: (t = e.lastSentHeartbeatDate) !== null && t !== void 0 ? t : i.lastSentHeartbeatDate,
        heartbeats: [
          ...i.heartbeats,
          ...e.heartbeats
        ]
      });
    } else
      return;
  }
}
function mn(n) {
  return $n(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: n })
  ).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Us(n) {
  We(new Ve(
    "platform-logger",
    (e) => new Ji(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), We(new Ve(
    "heartbeat",
    (e) => new Ps(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), Ne(Ht, fn, n), Ne(Ht, fn, "esm2017"), Ne("fire-js", "");
}
Us("");
var xs = "firebase", Bs = "9.22.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ne(xs, Bs, "app");
function Xt(n, e) {
  var t = {};
  for (var r in n)
    Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(n); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[i]) && (t[r[i]] = n[r[i]]);
  return t;
}
function Jn() {
  return {
    [
      "dependent-sdk-initialized-before-auth"
      /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
    ]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const $s = Jn, Yn = new Je("auth", "Firebase", Jn());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vt = new jn("@firebase/auth");
function Vs(n, ...e) {
  vt.logLevel <= P.WARN && vt.warn(`Auth (${Xe}): ${n}`, ...e);
}
function ct(n, ...e) {
  vt.logLevel <= P.ERROR && vt.error(`Auth (${Xe}): ${n}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ue(n, ...e) {
  throw Qt(n, ...e);
}
function ce(n, ...e) {
  return Qt(n, ...e);
}
function Xn(n, e, t) {
  const r = Object.assign(Object.assign({}, $s()), { [e]: t });
  return new Je("auth", "Firebase", r).create(e, {
    appName: n.name
  });
}
function Fs(n, e, t) {
  const r = t;
  if (!(e instanceof r))
    throw r.name !== e.constructor.name && ue(
      n,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), Xn(n, "argument-error", `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
}
function Qt(n, ...e) {
  if (typeof n != "string") {
    const t = e[0], r = [...e.slice(1)];
    return r[0] && (r[0].appName = n.name), n._errorFactory.create(t, ...r);
  }
  return Yn.create(n, ...e);
}
function T(n, e, ...t) {
  if (!n)
    throw Qt(e, ...t);
}
function he(n) {
  const e = "INTERNAL ASSERTION FAILED: " + n;
  throw ct(e), new Error(e);
}
function fe(n, e) {
  n || he(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zt() {
  var n;
  return typeof self < "u" && ((n = self.location) === null || n === void 0 ? void 0 : n.href) || "";
}
function Hs() {
  return vn() === "http:" || vn() === "https:";
}
function vn() {
  var n;
  return typeof self < "u" && ((n = self.location) === null || n === void 0 ? void 0 : n.protocol) || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function js() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (Hs() || bi() || "connection" in navigator) ? navigator.onLine : !0;
}
function Gs() {
  if (typeof navigator > "u")
    return null;
  const n = navigator;
  return (
    // Most reliable, but only supported in Chrome/Firefox.
    n.languages && n.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    n.language || // Couldn't determine language.
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe {
  constructor(e, t) {
    this.shortDelay = e, this.longDelay = t, fe(t > e, "Short delay should be less than long delay!"), this.isMobile = _i() || wi();
  }
  get() {
    return js() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function en(n, e) {
  fe(n.emulator, "Emulator should always be set here");
  const { url: t } = n.emulator;
  return e ? `${t}${e.startsWith("/") ? e.slice(1) : e}` : t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qn {
  static initialize(e, t, r) {
    this.fetchImpl = e, t && (this.headersImpl = t), r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl)
      return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self)
      return self.fetch;
    he("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl)
      return this.headersImpl;
    if (typeof self < "u" && "Headers" in self)
      return self.Headers;
    he("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl)
      return this.responseImpl;
    if (typeof self < "u" && "Response" in self)
      return self.Response;
    he("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zs = {
  // Custom token errors.
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  // This can only happen if the SDK sends a bad request.
  MISSING_CUSTOM_TOKEN: "internal-error",
  // Create Auth URI errors.
  INVALID_IDENTIFIER: "invalid-email",
  // This can only happen if the SDK sends a bad request.
  MISSING_CONTINUE_URI: "internal-error",
  // Sign in with email and password errors (some apply to sign up too).
  INVALID_PASSWORD: "wrong-password",
  // This can only happen if the SDK sends a bad request.
  MISSING_PASSWORD: "missing-password",
  // Sign up with email and password errors.
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  // Verify assertion for sign in with credential errors:
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  // This can only happen if the SDK sends a bad request.
  MISSING_REQ_TYPE: "internal-error",
  // Send Password reset email errors:
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  // This can only happen if the SDK sends a bad request.
  MISSING_OOB_CODE: "internal-error",
  // Operations that require ID token in request:
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  // Other errors.
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  // Phone Auth related errors.
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  // Other action code errors when additional settings passed.
  // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
  // This is OK as this error will be caught by client side validation.
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  // getProjectConfig errors when clientId is passed.
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  // User actions (sign-up or deletion) disabled errors.
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  // Multi factor related errors.
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  // Blocking functions related errors.
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  // Recaptcha related errors.
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type"
  /* AuthErrorCode.INVALID_REQ_TYPE */
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ws = new Qe(3e4, 6e4);
function er(n, e) {
  return n.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), { tenantId: n.tenantId }) : e;
}
async function et(n, e, t, r, i = {}) {
  return tr(n, i, async () => {
    let s = {}, o = {};
    r && (e === "GET" ? o = r : s = {
      body: JSON.stringify(r)
    });
    const l = Ye(Object.assign({ key: n.config.apiKey }, o)).slice(1), u = await n._getAdditionalHeaders();
    return u[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/json", n.languageCode && (u[
      "X-Firebase-Locale"
      /* HttpHeader.X_FIREBASE_LOCALE */
    ] = n.languageCode), Qn.fetch()(nr(n, n.config.apiHost, t, l), Object.assign({
      method: e,
      headers: u,
      referrerPolicy: "no-referrer"
    }, s));
  });
}
async function tr(n, e, t) {
  n._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, Zs), e);
  try {
    const i = new qs(n), s = await Promise.race([
      t(),
      i.promise
    ]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ("needConfirmation" in o)
      throw st(n, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o))
      return o;
    {
      const l = s.ok ? o.errorMessage : o.error.message, [u, d] = l.split(" : ");
      if (u === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw st(n, "credential-already-in-use", o);
      if (u === "EMAIL_EXISTS")
        throw st(n, "email-already-in-use", o);
      if (u === "USER_DISABLED")
        throw st(n, "user-disabled", o);
      const m = r[u] || u.toLowerCase().replace(/[_\s]+/g, "-");
      if (d)
        throw Xn(n, m, d);
      ue(n, m);
    }
  } catch (i) {
    if (i instanceof Ce)
      throw i;
    ue(n, "network-request-failed", { message: String(i) });
  }
}
async function zs(n, e, t, r, i = {}) {
  const s = await et(n, e, t, r, i);
  return "mfaPendingCredential" in s && ue(n, "multi-factor-auth-required", {
    _serverResponse: s
  }), s;
}
function nr(n, e, t, r) {
  const i = `${e}${t}?${r}`;
  return n.config.emulator ? en(n.config, i) : `${n.config.apiScheme}://${i}`;
}
class qs {
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((t, r) => {
      this.timer = setTimeout(() => r(ce(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), Ws.get());
    });
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function st(n, e, t) {
  const r = {
    appName: n.name
  };
  t.email && (r.email = t.email), t.phoneNumber && (r.phoneNumber = t.phoneNumber);
  const i = ce(n, e, r);
  return i.customData._tokenResponse = t, i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ks(n, e) {
  return et(n, "POST", "/v1/accounts:delete", e);
}
async function Js(n, e) {
  return et(n, "POST", "/v1/accounts:lookup", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ge(n) {
  if (n)
    try {
      const e = new Date(Number(n));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function Ys(n, e = !1) {
  const t = Me(n), r = await t.getIdToken(e), i = Et(r);
  T(
    i && i.exp && i.auth_time && i.iat,
    t.auth,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const s = typeof i.firebase == "object" ? i.firebase : void 0, o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: Ge(Pt(i.auth_time)),
    issuedAtTime: Ge(Pt(i.iat)),
    expirationTime: Ge(Pt(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null
  };
}
function Pt(n) {
  return Number(n) * 1e3;
}
function Et(n) {
  const [e, t, r] = n.split(".");
  if (e === void 0 || t === void 0 || r === void 0)
    return ct("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = Vn(t);
    return i ? JSON.parse(i) : (ct("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return ct("Caught error parsing JWT payload as JSON", i == null ? void 0 : i.toString()), null;
  }
}
function Xs(n) {
  const e = Et(n);
  return T(
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), T(
    typeof e.exp < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), T(
    typeof e.iat < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Number(e.exp) - Number(e.iat);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qe(n, e, t = !1) {
  if (t)
    return e;
  try {
    return await e;
  } catch (r) {
    throw r instanceof Ce && Qs(r) && n.auth.currentUser === n && await n.auth.signOut(), r;
  }
}
function Qs({ code: n }) {
  return n === "auth/user-disabled" || n === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eo {
  constructor(e) {
    this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4;
  }
  _start() {
    this.isRunning || (this.isRunning = !0, this.schedule());
  }
  _stop() {
    this.isRunning && (this.isRunning = !1, this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    var t;
    if (e) {
      const r = this.errorBackoff;
      return this.errorBackoff = Math.min(
        this.errorBackoff * 2,
        96e4
        /* Duration.RETRY_BACKOFF_MAX */
      ), r;
    } else {
      this.errorBackoff = 3e4;
      const i = ((t = this.user.stsTokenManager.expirationTime) !== null && t !== void 0 ? t : 0) - Date.now() - 3e5;
      return Math.max(0, i);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning)
      return;
    const t = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, t);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (e) {
      (e == null ? void 0 : e.code) === "auth/network-request-failed" && this.schedule(
        /* wasError */
        !0
      );
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rr {
  constructor(e, t) {
    this.createdAt = e, this.lastLoginAt = t, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = Ge(this.lastLoginAt), this.creationTime = Ge(this.createdAt);
  }
  _copy(e) {
    this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _t(n) {
  var e;
  const t = n.auth, r = await n.getIdToken(), i = await qe(n, Js(t, { idToken: r }));
  T(
    i == null ? void 0 : i.users.length,
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const s = i.users[0];
  n._notifyReloadListener(s);
  const o = !((e = s.providerUserInfo) === null || e === void 0) && e.length ? ro(s.providerUserInfo) : [], l = no(n.providerData, o), u = n.isAnonymous, d = !(n.email && s.passwordHash) && !(l != null && l.length), m = u ? d : !1, f = {
    uid: s.localId,
    displayName: s.displayName || null,
    photoURL: s.photoUrl || null,
    email: s.email || null,
    emailVerified: s.emailVerified || !1,
    phoneNumber: s.phoneNumber || null,
    tenantId: s.tenantId || null,
    providerData: l,
    metadata: new rr(s.createdAt, s.lastLoginAt),
    isAnonymous: m
  };
  Object.assign(n, f);
}
async function to(n) {
  const e = Me(n);
  await _t(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function no(n, e) {
  return [...n.filter((r) => !e.some((i) => i.providerId === r.providerId)), ...e];
}
function ro(n) {
  return n.map((e) => {
    var { providerId: t } = e, r = Xt(e, ["providerId"]);
    return {
      providerId: t,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function io(n, e) {
  const t = await tr(n, {}, async () => {
    const r = Ye({
      grant_type: "refresh_token",
      refresh_token: e
    }).slice(1), { tokenApiHost: i, apiKey: s } = n.config, o = nr(n, i, "/v1/token", `key=${s}`), l = await n._getAdditionalHeaders();
    return l[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded", Qn.fetch()(o, {
      method: "POST",
      headers: l,
      body: r
    });
  });
  return {
    accessToken: t.access_token,
    expiresIn: t.expires_in,
    refreshToken: t.refresh_token
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke {
  constructor() {
    this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    T(
      e.idToken,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), T(
      typeof e.idToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), T(
      typeof e.refreshToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const t = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : Xs(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
  }
  async getToken(e, t = !1) {
    return T(
      !this.accessToken || this.refreshToken,
      e,
      "user-token-expired"
      /* AuthErrorCode.TOKEN_EXPIRED */
    ), !t && this.accessToken && !this.isExpired ? this.accessToken : this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null;
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, t) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await io(e, t);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(e, t, r) {
    this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + r * 1e3;
  }
  static fromJSON(e, t) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = t, o = new Ke();
    return r && (T(typeof r == "string", "internal-error", {
      appName: e
    }), o.refreshToken = r), i && (T(typeof i == "string", "internal-error", {
      appName: e
    }), o.accessToken = i), s && (T(typeof s == "number", "internal-error", {
      appName: e
    }), o.expirationTime = s), o;
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(e) {
    this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime;
  }
  _clone() {
    return Object.assign(new Ke(), this.toJSON());
  }
  _performRefresh() {
    return he("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ve(n, e) {
  T(typeof n == "string" || typeof n > "u", "internal-error", { appName: e });
}
class Re {
  constructor(e) {
    var { uid: t, auth: r, stsTokenManager: i } = e, s = Xt(e, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase", this.proactiveRefresh = new eo(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = t, this.auth = r, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = s.displayName || null, this.email = s.email || null, this.emailVerified = s.emailVerified || !1, this.phoneNumber = s.phoneNumber || null, this.photoURL = s.photoURL || null, this.isAnonymous = s.isAnonymous || !1, this.tenantId = s.tenantId || null, this.providerData = s.providerData ? [...s.providerData] : [], this.metadata = new rr(s.createdAt || void 0, s.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const t = await qe(this, this.stsTokenManager.getToken(this.auth, e));
    return T(
      t,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t;
  }
  getIdTokenResult(e) {
    return Ys(this, e);
  }
  reload() {
    return to(this);
  }
  _assign(e) {
    this !== e && (T(
      this.uid === e.uid,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((t) => Object.assign({}, t)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const t = new Re(Object.assign(Object.assign({}, this), { auth: e, stsTokenManager: this.stsTokenManager._clone() }));
    return t.metadata._copy(this.metadata), t;
  }
  _onReload(e) {
    T(
      !this.reloadListener,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null);
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e;
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, t = !1) {
    let r = !1;
    e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), r = !0), t && await _t(this), await this.auth._persistUserIfCurrent(this), r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const e = await this.getIdToken();
    return await qe(this, Ks(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
  }
  toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map((e) => Object.assign({}, e)),
      stsTokenManager: this.stsTokenManager.toJSON(),
      // Redirect event ID must be maintained in case there is a pending
      // redirect event.
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(e, t) {
    var r, i, s, o, l, u, d, m;
    const f = (r = t.displayName) !== null && r !== void 0 ? r : void 0, g = (i = t.email) !== null && i !== void 0 ? i : void 0, b = (s = t.phoneNumber) !== null && s !== void 0 ? s : void 0, w = (o = t.photoURL) !== null && o !== void 0 ? o : void 0, p = (l = t.tenantId) !== null && l !== void 0 ? l : void 0, v = (u = t._redirectEventId) !== null && u !== void 0 ? u : void 0, _ = (d = t.createdAt) !== null && d !== void 0 ? d : void 0, y = (m = t.lastLoginAt) !== null && m !== void 0 ? m : void 0, { uid: k, emailVerified: M, isAnonymous: E, providerData: U, stsTokenManager: I } = t;
    T(
      k && I,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const R = Ke.fromJSON(this.name, I);
    T(
      typeof k == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), ve(f, e.name), ve(g, e.name), T(
      typeof M == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), T(
      typeof E == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), ve(b, e.name), ve(w, e.name), ve(p, e.name), ve(v, e.name), ve(_, e.name), ve(y, e.name);
    const O = new Re({
      uid: k,
      auth: e,
      email: g,
      emailVerified: M,
      displayName: f,
      isAnonymous: E,
      photoURL: w,
      phoneNumber: b,
      tenantId: p,
      stsTokenManager: R,
      createdAt: _,
      lastLoginAt: y
    });
    return U && Array.isArray(U) && (O.providerData = U.map(($) => Object.assign({}, $))), v && (O._redirectEventId = v), O;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(e, t, r = !1) {
    const i = new Ke();
    i.updateFromServerResponse(t);
    const s = new Re({
      uid: t.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: r
    });
    return await _t(s), s;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _n = /* @__PURE__ */ new Map();
function de(n) {
  fe(n instanceof Function, "Expected a class definition");
  let e = _n.get(n);
  return e ? (fe(e instanceof n, "Instance stored in cache mismatched with class"), e) : (e = new n(), _n.set(n, e), e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ir {
  constructor() {
    this.type = "NONE", this.storage = {};
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, t) {
    this.storage[e] = t;
  }
  async _get(e) {
    const t = this.storage[e];
    return t === void 0 ? null : t;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, t) {
  }
  _removeListener(e, t) {
  }
}
ir.type = "NONE";
const bn = ir;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lt(n, e, t) {
  return `firebase:${n}:${e}:${t}`;
}
class Le {
  constructor(e, t, r) {
    this.persistence = e, this.auth = t, this.userKey = r;
    const { config: i, name: s } = this.auth;
    this.fullUserKey = lt(this.userKey, i.apiKey, s), this.fullPersistenceKey = lt("persistence", i.apiKey, s), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? Re._fromJSON(this.auth, e) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(e) {
    if (this.persistence === e)
      return;
    const t = await this.getCurrentUser();
    if (await this.removeCurrentUser(), this.persistence = e, t)
      return this.setCurrentUser(t);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, t, r = "authUser") {
    if (!t.length)
      return new Le(de(bn), e, r);
    const i = (await Promise.all(t.map(async (d) => {
      if (await d._isAvailable())
        return d;
    }))).filter((d) => d);
    let s = i[0] || de(bn);
    const o = lt(r, e.config.apiKey, e.name);
    let l = null;
    for (const d of t)
      try {
        const m = await d._get(o);
        if (m) {
          const f = Re._fromJSON(e, m);
          d !== s && (l = f), s = d;
          break;
        }
      } catch {
      }
    const u = i.filter((d) => d._shouldAllowMigration);
    return !s._shouldAllowMigration || !u.length ? new Le(s, e, r) : (s = u[0], l && await s._set(o, l.toJSON()), await Promise.all(t.map(async (d) => {
      if (d !== s)
        try {
          await d._remove(o);
        } catch {
        }
    })), new Le(s, e, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wn(n) {
  const e = n.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (ar(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (sr(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (lr(e))
    return "Blackberry";
  if (ur(e))
    return "Webos";
  if (tn(e))
    return "Safari";
  if ((e.includes("chrome/") || or(e)) && !e.includes("edge/"))
    return "Chrome";
  if (cr(e))
    return "Android";
  {
    const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, r = n.match(t);
    if ((r == null ? void 0 : r.length) === 2)
      return r[1];
  }
  return "Other";
}
function sr(n = K()) {
  return /firefox\//i.test(n);
}
function tn(n = K()) {
  const e = n.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function or(n = K()) {
  return /crios\//i.test(n);
}
function ar(n = K()) {
  return /iemobile/i.test(n);
}
function cr(n = K()) {
  return /android/i.test(n);
}
function lr(n = K()) {
  return /blackberry/i.test(n);
}
function ur(n = K()) {
  return /webos/i.test(n);
}
function Tt(n = K()) {
  return /iphone|ipad|ipod/i.test(n) || /macintosh/i.test(n) && /mobile/i.test(n);
}
function so(n = K()) {
  var e;
  return Tt(n) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone);
}
function oo() {
  return yi() && document.documentMode === 10;
}
function hr(n = K()) {
  return Tt(n) || cr(n) || ur(n) || lr(n) || /windows phone/i.test(n) || ar(n);
}
function ao() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dr(n, e = []) {
  let t;
  switch (n) {
    case "Browser":
      t = wn(K());
      break;
    case "Worker":
      t = `${wn(K())}-${n}`;
      break;
    default:
      t = n;
  }
  const r = e.length ? e.join(",") : "FirebaseCore-web";
  return `${t}/JsCore/${Xe}/${r}`;
}
async function fr(n, e) {
  return et(n, "GET", "/v2/recaptchaConfig", er(n, e));
}
function yn(n) {
  return n !== void 0 && n.enterprise !== void 0;
}
class pr {
  constructor(e) {
    if (this.siteKey = "", this.emailPasswordEnabled = !1, e.recaptchaKey === void 0)
      throw new Error("recaptchaKey undefined");
    this.siteKey = e.recaptchaKey.split("/")[3], this.emailPasswordEnabled = e.recaptchaEnforcementState.some((t) => t.provider === "EMAIL_PASSWORD_PROVIDER" && t.enforcementState !== "OFF");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function co() {
  var n, e;
  return (e = (n = document.getElementsByTagName("head")) === null || n === void 0 ? void 0 : n[0]) !== null && e !== void 0 ? e : document;
}
function gr(n) {
  return new Promise((e, t) => {
    const r = document.createElement("script");
    r.setAttribute("src", n), r.onload = e, r.onerror = (i) => {
      const s = ce(
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      s.customData = i, t(s);
    }, r.type = "text/javascript", r.charset = "UTF-8", co().appendChild(r);
  });
}
function lo(n) {
  return `__${n}${Math.floor(Math.random() * 1e6)}`;
}
const uo = "https://www.google.com/recaptcha/enterprise.js?render=", ho = "recaptcha-enterprise", fo = "NO_RECAPTCHA";
class po {
  /**
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   */
  constructor(e) {
    this.type = ho, this.auth = tt(e);
  }
  /**
   * Executes the verification process.
   *
   * @returns A Promise for a token that can be used to assert the validity of a request.
   */
  async verify(e = "verify", t = !1) {
    async function r(s) {
      if (!t) {
        if (s.tenantId == null && s._agentRecaptchaConfig != null)
          return s._agentRecaptchaConfig.siteKey;
        if (s.tenantId != null && s._tenantRecaptchaConfigs[s.tenantId] !== void 0)
          return s._tenantRecaptchaConfigs[s.tenantId].siteKey;
      }
      return new Promise(async (o, l) => {
        fr(s, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }).then((u) => {
          if (u.recaptchaKey === void 0)
            l(new Error("recaptcha Enterprise site key undefined"));
          else {
            const d = new pr(u);
            return s.tenantId == null ? s._agentRecaptchaConfig = d : s._tenantRecaptchaConfigs[s.tenantId] = d, o(d.siteKey);
          }
        }).catch((u) => {
          l(u);
        });
      });
    }
    function i(s, o, l) {
      const u = window.grecaptcha;
      yn(u) ? u.enterprise.ready(() => {
        u.enterprise.execute(s, { action: e }).then((d) => {
          o(d);
        }).catch(() => {
          o(fo);
        });
      }) : l(Error("No reCAPTCHA enterprise script loaded."));
    }
    return new Promise((s, o) => {
      r(this.auth).then((l) => {
        if (!t && yn(window.grecaptcha))
          i(l, s, o);
        else {
          if (typeof window > "u") {
            o(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          gr(uo + l).then(() => {
            i(l, s, o);
          }).catch((u) => {
            o(u);
          });
        }
      }).catch((l) => {
        o(l);
      });
    });
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class go {
  constructor(e) {
    this.auth = e, this.queue = [];
  }
  pushCallback(e, t) {
    const r = (s) => new Promise((o, l) => {
      try {
        const u = e(s);
        o(u);
      } catch (u) {
        l(u);
      }
    });
    r.onAbort = t, this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e)
      return;
    const t = [];
    try {
      for (const r of this.queue)
        await r(e), r.onAbort && t.push(r.onAbort);
    } catch (r) {
      t.reverse();
      for (const i of t)
        try {
          i();
        } catch {
        }
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r == null ? void 0 : r.message
      });
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mo {
  constructor(e, t, r, i) {
    this.app = e, this.heartbeatServiceProvider = t, this.appCheckServiceProvider = r, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new In(this), this.idTokenSubscription = new In(this), this.beforeStateQueue = new go(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Yn, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion;
  }
  _initializeWithPersistence(e, t) {
    return t && (this._popupRedirectResolver = de(t)), this._initializationPromise = this.queue(async () => {
      var r, i;
      if (!this._deleted && (this.persistenceManager = await Le.create(this, e), !this._deleted)) {
        if (!((r = this._popupRedirectResolver) === null || r === void 0) && r._shouldInitProactively)
          try {
            await this._popupRedirectResolver._initialize(this);
          } catch {
          }
        await this.initializeCurrentUser(t), this.lastNotifiedUid = ((i = this.currentUser) === null || i === void 0 ? void 0 : i.uid) || null, !this._deleted && (this._isInitialized = !0);
      }
    }), this._initializationPromise;
  }
  /**
   * If the persistence is changed in another window, the user manager will let us know
   */
  async _onStorageEvent() {
    if (this._deleted)
      return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        this._currentUser._assign(e), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(
        e,
        /* skipBeforeStateCallbacks */
        !0
      );
    }
  }
  async initializeCurrentUser(e) {
    var t;
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r, s = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const o = (t = this.redirectUser) === null || t === void 0 ? void 0 : t._redirectEventId, l = i == null ? void 0 : i._redirectEventId, u = await this.tryRedirectSignIn(e);
      (!o || o === l) && (u != null && u.user) && (i = u.user, s = !0);
    }
    if (!i)
      return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (o) {
          i = r, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(o));
        }
      return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null);
    }
    return T(
      this._popupRedirectResolver,
      this,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i);
  }
  async tryRedirectSignIn(e) {
    let t = null;
    try {
      t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return t;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await _t(e);
    } catch (t) {
      if ((t == null ? void 0 : t.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = Gs();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    const t = e ? Me(e) : null;
    return t && T(
      t.auth.config.apiKey === this.config.apiKey,
      this,
      "invalid-user-token"
      /* AuthErrorCode.INVALID_AUTH */
    ), this._updateCurrentUser(t && t._clone(this));
  }
  async _updateCurrentUser(e, t = !1) {
    if (!this._deleted)
      return e && T(
        this.tenantId === e.tenantId,
        this,
        "tenant-id-mismatch"
        /* AuthErrorCode.TENANT_ID_MISMATCH */
      ), t || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
        await this.directlySetCurrentUser(e), this.notifyAuthListeners();
      });
  }
  async signOut() {
    return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(
      null,
      /* skipBeforeStateCallbacks */
      !0
    );
  }
  setPersistence(e) {
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(de(e));
    });
  }
  async initializeRecaptchaConfig() {
    const e = await fr(this, {
      clientType: "CLIENT_TYPE_WEB",
      version: "RECAPTCHA_ENTERPRISE"
      /* RecaptchaVersion.ENTERPRISE */
    }), t = new pr(e);
    this.tenantId == null ? this._agentRecaptchaConfig = t : this._tenantRecaptchaConfigs[this.tenantId] = t, t.emailPasswordEnabled && new po(this).verify();
  }
  _getRecaptchaConfig() {
    return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new Je("auth", "Firebase", e());
  }
  onAuthStateChanged(e, t, r) {
    return this.registerStateListener(this.authStateSubscription, e, t, r);
  }
  beforeAuthStateChanged(e, t) {
    return this.beforeStateQueue.pushCallback(e, t);
  }
  onIdTokenChanged(e, t, r) {
    return this.registerStateListener(this.idTokenSubscription, e, t, r);
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON()
    };
  }
  async _setRedirectUser(e, t) {
    const r = await this.getOrInitRedirectPersistenceManager(t);
    return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const t = e && de(e) || this._popupRedirectResolver;
      T(
        t,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await Le.create(
        this,
        [de(t._redirectPersistence)],
        "redirectUser"
        /* KeyName.REDIRECT_USER */
      ), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var t, r;
    return this._isInitialized && await this.queue(async () => {
    }), ((t = this._currentUser) === null || t === void 0 ? void 0 : t._redirectEventId) === e ? this._currentUser : ((r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId) === e ? this.redirectUser : null;
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e));
  }
  /** Notifies listeners only if the user is current */
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  /** Returns the current user cast as the internal type */
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var e, t;
    if (!this._isInitialized)
      return;
    this.idTokenSubscription.next(this.currentUser);
    const r = (t = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !== null && t !== void 0 ? t : null;
    this.lastNotifiedUid !== r && (this.lastNotifiedUid = r, this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, t, r, i) {
    if (this._deleted)
      return () => {
      };
    const s = typeof t == "function" ? t : t.next.bind(t), o = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    return T(
      o,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), o.then(() => s(this.currentUser)), typeof t == "function" ? e.addObserver(t, r, i) : e.addObserver(t);
  }
  /**
   * Unprotected (from race conditions) method to set the current user. This
   * should only be called from within a queued callback. This is necessary
   * because the queue shouldn't rely on another queued callback.
   */
  async directlySetCurrentUser(e) {
    this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser();
  }
  queue(e) {
    return this.operations = this.operations.then(e, e), this.operations;
  }
  get assertedPersistence() {
    return T(
      this.persistenceManager,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.persistenceManager;
  }
  _logFramework(e) {
    !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = dr(this.config.clientPlatform, this._getFrameworks()));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var e;
    const t = {
      [
        "X-Client-Version"
        /* HttpHeader.X_CLIENT_VERSION */
      ]: this.clientVersion
    };
    this.app.options.appId && (t[
      "X-Firebase-gmpid"
      /* HttpHeader.X_FIREBASE_GMPID */
    ] = this.app.options.appId);
    const r = await ((e = this.heartbeatServiceProvider.getImmediate({
      optional: !0
    })) === null || e === void 0 ? void 0 : e.getHeartbeatsHeader());
    r && (t[
      "X-Firebase-Client"
      /* HttpHeader.X_FIREBASE_CLIENT */
    ] = r);
    const i = await this._getAppCheckToken();
    return i && (t[
      "X-Firebase-AppCheck"
      /* HttpHeader.X_FIREBASE_APP_CHECK */
    ] = i), t;
  }
  async _getAppCheckToken() {
    var e;
    const t = await ((e = this.appCheckServiceProvider.getImmediate({ optional: !0 })) === null || e === void 0 ? void 0 : e.getToken());
    return t != null && t.error && Vs(`Error while retrieving App Check token: ${t.error}`), t == null ? void 0 : t.token;
  }
}
function tt(n) {
  return Me(n);
}
class In {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = Ai((t) => this.observer = t);
  }
  get next() {
    return T(
      this.observer,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.observer.next.bind(this.observer);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vo(n, e) {
  const t = Wn(n, "auth");
  if (t.isInitialized()) {
    const i = t.getImmediate(), s = t.getOptions();
    if (gt(s, e ?? {}))
      return i;
    ue(
      i,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return t.initialize({ options: e });
}
function _o(n, e) {
  const t = (e == null ? void 0 : e.persistence) || [], r = (Array.isArray(t) ? t : [t]).map(de);
  e != null && e.errorMap && n._updateErrorMap(e.errorMap), n._initializeWithPersistence(r, e == null ? void 0 : e.popupRedirectResolver);
}
function bo(n, e, t) {
  const r = tt(n);
  T(
    r._canInitEmulator,
    r,
    "emulator-config-failed"
    /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
  ), T(
    /^https?:\/\//.test(e),
    r,
    "invalid-emulator-scheme"
    /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
  );
  const i = !!(t != null && t.disableWarnings), s = mr(e), { host: o, port: l } = wo(e), u = l === null ? "" : `:${l}`;
  r.config.emulator = { url: `${s}//${o}${u}/` }, r.settings.appVerificationDisabledForTesting = !0, r.emulatorConfig = Object.freeze({
    host: o,
    port: l,
    protocol: s.replace(":", ""),
    options: Object.freeze({ disableWarnings: i })
  }), i || yo();
}
function mr(n) {
  const e = n.indexOf(":");
  return e < 0 ? "" : n.substr(0, e + 1);
}
function wo(n) {
  const e = mr(n), t = /(\/\/)?([^?#/]+)/.exec(n.substr(e.length));
  if (!t)
    return { host: "", port: null };
  const r = t[2].split("@").pop() || "", i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: En(r.substr(s.length + 1)) };
  } else {
    const [s, o] = r.split(":");
    return { host: s, port: En(o) };
  }
}
function En(n) {
  if (!n)
    return null;
  const e = Number(n);
  return isNaN(e) ? null : e;
}
function yo() {
  function n() {
    const e = document.createElement("p"), t = e.style;
    e.innerText = "Running in emulator mode. Do not use with production credentials.", t.position = "fixed", t.width = "100%", t.backgroundColor = "#ffffff", t.border = ".1em solid #000000", t.color = "#b50000", t.bottom = "0px", t.left = "0px", t.margin = "0px", t.zIndex = "10000", t.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e);
  }
  typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", n) : n());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr {
  /** @internal */
  constructor(e, t) {
    this.providerId = e, this.signInMethod = t;
  }
  /**
   * Returns a JSON-serializable representation of this object.
   *
   * @returns a JSON-serializable representation of this object.
   */
  toJSON() {
    return he("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return he("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, t) {
    return he("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return he("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ue(n, e) {
  return zs(n, "POST", "/v1/accounts:signInWithIdp", er(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Io = "http://localhost";
class pe extends vr {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const t = new pe(e.providerId, e.signInMethod);
    return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : ue(
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), t;
  }
  /** {@inheritdoc AuthCredential.toJSON}  */
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */
  static fromJSON(e) {
    const t = typeof e == "string" ? JSON.parse(e) : e, { providerId: r, signInMethod: i } = t, s = Xt(t, ["providerId", "signInMethod"]);
    if (!r || !i)
      return null;
    const o = new pe(r, i);
    return o.idToken = s.idToken || void 0, o.accessToken = s.accessToken || void 0, o.secret = s.secret, o.nonce = s.nonce, o.pendingToken = s.pendingToken || null, o;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    const t = this.buildRequest();
    return Ue(e, t);
  }
  /** @internal */
  _linkToIdToken(e, t) {
    const r = this.buildRequest();
    return r.idToken = t, Ue(e, r);
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    const t = this.buildRequest();
    return t.autoCreate = !1, Ue(e, t);
  }
  buildRequest() {
    const e = {
      requestUri: Io,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const t = {};
      this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = Ye(t);
    }
    return e;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nn {
  /**
   * Constructor for generic OAuth providers.
   *
   * @param providerId - Provider for which credentials should be generated.
   */
  constructor(e) {
    this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {};
  }
  /**
   * Set the language gode.
   *
   * @param languageCode - language code
   */
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  /**
   * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
   * operations.
   *
   * @remarks
   * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
   * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
   *
   * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
   */
  setCustomParameters(e) {
    return this.customParameters = e, this;
  }
  /**
   * Retrieve the current list of {@link CustomParameters}.
   */
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He extends nn {
  constructor() {
    super(...arguments), this.scopes = [];
  }
  /**
   * Add an OAuth scope to the credential.
   *
   * @param scope - Provider OAuth scope to add.
   */
  addScope(e) {
    return this.scopes.includes(e) || this.scopes.push(e), this;
  }
  /**
   * Retrieve the current list of OAuth scopes.
   */
  getScopes() {
    return [...this.scopes];
  }
}
class xe extends He {
  /**
   * Creates an {@link OAuthCredential} from a JSON string or a plain object.
   * @param json - A plain object or a JSON string
   */
  static credentialFromJSON(e) {
    const t = typeof e == "string" ? JSON.parse(e) : e;
    return T(
      "providerId" in t && "signInMethod" in t,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), pe._fromParams(t);
  }
  /**
   * Creates a {@link OAuthCredential} from a generic OAuth provider's access token or ID token.
   *
   * @remarks
   * The raw nonce is required when an ID token with a nonce field is provided. The SHA-256 hash of
   * the raw nonce must match the nonce field in the ID token.
   *
   * @example
   * ```javascript
   * // `googleUser` from the onsuccess Google Sign In callback.
   * // Initialize a generate OAuth provider with a `google.com` providerId.
   * const provider = new OAuthProvider('google.com');
   * const credential = provider.credential({
   *   idToken: googleUser.getAuthResponse().id_token,
   * });
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param params - Either the options object containing the ID token, access token and raw nonce
   * or the ID token string.
   */
  credential(e) {
    return this._credential(Object.assign(Object.assign({}, e), { nonce: e.rawNonce }));
  }
  /** An internal credential method that accepts more permissive options */
  _credential(e) {
    return T(
      e.idToken || e.accessToken,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), pe._fromParams(Object.assign(Object.assign({}, e), { providerId: this.providerId, signInMethod: this.providerId }));
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return xe.oauthCredentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return xe.oauthCredentialFromTaggedObject(e.customData || {});
  }
  static oauthCredentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: t, oauthAccessToken: r, oauthTokenSecret: i, pendingToken: s, nonce: o, providerId: l } = e;
    if (!r && !i && !t && !s || !l)
      return null;
    try {
      return new xe(l)._credential({
        idToken: t,
        accessToken: r,
        nonce: o,
        pendingToken: s
      });
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e extends He {
  constructor() {
    super(
      "facebook.com"
      /* ProviderId.FACEBOOK */
    );
  }
  /**
   * Creates a credential for Facebook.
   *
   * @example
   * ```javascript
   * // `event` from the Facebook auth.authResponseChange callback.
   * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param accessToken - Facebook access token.
   */
  static credential(e) {
    return pe._fromParams({
      providerId: _e.PROVIDER_ID,
      signInMethod: _e.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return _e.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return _e.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return _e.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
_e.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
_e.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be extends He {
  constructor() {
    super(
      "google.com"
      /* ProviderId.GOOGLE */
    ), this.addScope("profile");
  }
  /**
   * Creates a credential for Google. At least one of ID token and access token is required.
   *
   * @example
   * ```javascript
   * // \`googleUser\` from the onsuccess Google Sign In callback.
   * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param idToken - Google ID token.
   * @param accessToken - Google access token.
   */
  static credential(e, t) {
    return pe._fromParams({
      providerId: be.PROVIDER_ID,
      signInMethod: be.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: t
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return be.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return be.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: t, oauthAccessToken: r } = e;
    if (!t && !r)
      return null;
    try {
      return be.credential(t, r);
    } catch {
      return null;
    }
  }
}
be.GOOGLE_SIGN_IN_METHOD = "google.com";
be.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we extends He {
  constructor() {
    super(
      "github.com"
      /* ProviderId.GITHUB */
    );
  }
  /**
   * Creates a credential for Github.
   *
   * @param accessToken - Github access token.
   */
  static credential(e) {
    return pe._fromParams({
      providerId: we.PROVIDER_ID,
      signInMethod: we.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return we.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return we.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return we.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
we.GITHUB_SIGN_IN_METHOD = "github.com";
we.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye extends He {
  constructor() {
    super(
      "twitter.com"
      /* ProviderId.TWITTER */
    );
  }
  /**
   * Creates a credential for Twitter.
   *
   * @param token - Twitter access token.
   * @param secret - Twitter secret.
   */
  static credential(e, t) {
    return pe._fromParams({
      providerId: ye.PROVIDER_ID,
      signInMethod: ye.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: t
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return ye.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return ye.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: t, oauthTokenSecret: r } = e;
    if (!t || !r)
      return null;
    try {
      return ye.credential(t, r);
    } catch {
      return null;
    }
  }
}
ye.TWITTER_SIGN_IN_METHOD = "twitter.com";
ye.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe {
  constructor(e) {
    this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
  }
  static async _fromIdTokenResponse(e, t, r, i = !1) {
    const s = await Re._fromIdTokenResponse(e, r, i), o = Tn(r);
    return new Fe({
      user: s,
      providerId: o,
      _tokenResponse: r,
      operationType: t
    });
  }
  static async _forOperation(e, t, r) {
    await e._updateTokensIfNecessary(
      r,
      /* reload */
      !0
    );
    const i = Tn(r);
    return new Fe({
      user: e,
      providerId: i,
      _tokenResponse: r,
      operationType: t
    });
  }
}
function Tn(n) {
  return n.providerId ? n.providerId : "phoneNumber" in n ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt extends Ce {
  constructor(e, t, r, i) {
    var s;
    super(t.code, t.message), this.operationType = r, this.user = i, Object.setPrototypeOf(this, bt.prototype), this.customData = {
      appName: e.name,
      tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
      _serverResponse: t.customData._serverResponse,
      operationType: r
    };
  }
  static _fromErrorAndOperation(e, t, r, i) {
    return new bt(e, t, r, i);
  }
}
function _r(n, e, t, r) {
  return (e === "reauthenticate" ? t._getReauthenticationResolver(n) : t._getIdTokenResponse(n)).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required" ? bt._fromErrorAndOperation(n, s, e, r) : s;
  });
}
async function Eo(n, e, t = !1) {
  const r = await qe(n, e._linkToIdToken(n.auth, await n.getIdToken()), t);
  return Fe._forOperation(n, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function To(n, e, t = !1) {
  const { auth: r } = n, i = "reauthenticate";
  try {
    const s = await qe(n, _r(r, i, e, n), t);
    T(
      s.idToken,
      r,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const o = Et(s.idToken);
    T(
      o,
      r,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const { sub: l } = o;
    return T(
      n.uid === l,
      r,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), Fe._forOperation(n, i, s);
  } catch (s) {
    throw (s == null ? void 0 : s.code) === "auth/user-not-found" && ue(
      r,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), s;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Co(n, e, t = !1) {
  const r = "signIn", i = await _r(n, r, e), s = await Fe._fromIdTokenResponse(n, r, i);
  return t || await n._updateCurrentUser(s.user), s;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ko(n) {
  var e, t;
  if (!n)
    return null;
  const { providerId: r } = n, i = n.rawUserInfo ? JSON.parse(n.rawUserInfo) : {}, s = n.isNewUser || n.kind === "identitytoolkit#SignupNewUserResponse";
  if (!r && (n != null && n.idToken)) {
    const o = (t = (e = Et(n.idToken)) === null || e === void 0 ? void 0 : e.firebase) === null || t === void 0 ? void 0 : t.sign_in_provider;
    if (o) {
      const l = o !== "anonymous" && o !== "custom" ? o : null;
      return new Be(s, l);
    }
  }
  if (!r)
    return null;
  switch (r) {
    case "facebook.com":
      return new So(s, i);
    case "github.com":
      return new Ao(s, i);
    case "google.com":
      return new Ro(s, i);
    case "twitter.com":
      return new Oo(s, i, n.screenName || null);
    case "custom":
    case "anonymous":
      return new Be(s, null);
    default:
      return new Be(s, r, i);
  }
}
class Be {
  constructor(e, t, r = {}) {
    this.isNewUser = e, this.providerId = t, this.profile = r;
  }
}
class br extends Be {
  constructor(e, t, r, i) {
    super(e, t, r), this.username = i;
  }
}
class So extends Be {
  constructor(e, t) {
    super(e, "facebook.com", t);
  }
}
class Ao extends br {
  constructor(e, t) {
    super(e, "github.com", t, typeof (t == null ? void 0 : t.login) == "string" ? t == null ? void 0 : t.login : null);
  }
}
class Ro extends Be {
  constructor(e, t) {
    super(e, "google.com", t);
  }
}
class Oo extends br {
  constructor(e, t, r) {
    super(e, "twitter.com", t, r);
  }
}
function Mo(n) {
  const { user: e, _tokenResponse: t } = n;
  return e.isAnonymous && !t ? {
    providerId: null,
    isNewUser: !1,
    profile: null
  } : ko(t);
}
function Do(n, e, t, r) {
  return Me(n).onIdTokenChanged(e, t, r);
}
function Po(n, e, t) {
  return Me(n).beforeAuthStateChanged(e, t);
}
function No(n) {
  return Me(n).signOut();
}
const wt = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wr {
  constructor(e, t) {
    this.storageRetriever = e, this.type = t;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(wt, "1"), this.storage.removeItem(wt), Promise.resolve(!0)) : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, t) {
    return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
  }
  _get(e) {
    const t = this.storage.getItem(e);
    return Promise.resolve(t ? JSON.parse(t) : null);
  }
  _remove(e) {
    return this.storage.removeItem(e), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lo() {
  const n = K();
  return tn(n) || Tt(n);
}
const Uo = 1e3, xo = 10;
class yr extends wr {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, t) => this.onStorageEvent(e, t), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = Lo() && ao(), this.fallbackToPolling = hr(), this._shouldAllowMigration = !0;
  }
  forAllChangedKeys(e) {
    for (const t of Object.keys(this.listeners)) {
      const r = this.storage.getItem(t), i = this.localCache[t];
      r !== i && e(t, i, r);
    }
  }
  onStorageEvent(e, t = !1) {
    if (!e.key) {
      this.forAllChangedKeys((o, l, u) => {
        this.notifyListeners(o, u);
      });
      return;
    }
    const r = e.key;
    if (t ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
      const o = this.storage.getItem(r);
      if (e.newValue !== o)
        e.newValue !== null ? this.storage.setItem(r, e.newValue) : this.storage.removeItem(r);
      else if (this.localCache[r] === e.newValue && !t)
        return;
    }
    const i = () => {
      const o = this.storage.getItem(r);
      !t && this.localCache[r] === o || this.notifyListeners(r, o);
    }, s = this.storage.getItem(r);
    oo() && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, xo) : i();
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const r = this.listeners[e];
    if (r)
      for (const i of Array.from(r))
        i(t && JSON.parse(t));
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((e, t, r) => {
        this.onStorageEvent(
          new StorageEvent("storage", {
            key: e,
            oldValue: t,
            newValue: r
          }),
          /* poll */
          !0
        );
      });
    }, Uo);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(e, t) {
    Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(t);
  }
  _removeListener(e, t) {
    this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling());
  }
  // Update local cache on base operations:
  async _set(e, t) {
    await super._set(e, t), this.localCache[e] = JSON.stringify(t);
  }
  async _get(e) {
    const t = await super._get(e);
    return this.localCache[e] = JSON.stringify(t), t;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
yr.type = "LOCAL";
const Ir = yr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Er extends wr {
  constructor() {
    super(
      () => window.sessionStorage,
      "SESSION"
      /* PersistenceType.SESSION */
    );
  }
  _addListener(e, t) {
  }
  _removeListener(e, t) {
  }
}
Er.type = "SESSION";
const Tr = Er;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bo(n) {
  return Promise.all(n.map(async (e) => {
    try {
      return {
        fulfilled: !0,
        value: await e
      };
    } catch (t) {
      return {
        fulfilled: !1,
        reason: t
      };
    }
  }));
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct {
  constructor(e) {
    this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this);
  }
  /**
   * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
   *
   * @param eventTarget - An event target (such as window or self) through which the underlying
   * messages will be received.
   */
  static _getInstance(e) {
    const t = this.receivers.find((i) => i.isListeningto(e));
    if (t)
      return t;
    const r = new Ct(e);
    return this.receivers.push(r), r;
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  /**
   * Fans out a MessageEvent to the appropriate listeners.
   *
   * @remarks
   * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
   * finished processing.
   *
   * @param event - The MessageEvent.
   *
   */
  async handleEvent(e) {
    const t = e, { eventId: r, eventType: i, data: s } = t.data, o = this.handlersMap[i];
    if (!(o != null && o.size))
      return;
    t.ports[0].postMessage({
      status: "ack",
      eventId: r,
      eventType: i
    });
    const l = Array.from(o).map(async (d) => d(t.origin, s)), u = await Bo(l);
    t.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: i,
      response: u
    });
  }
  /**
   * Subscribe an event handler for a particular event.
   *
   * @param eventType - Event name to subscribe to.
   * @param eventHandler - The event handler which should receive the events.
   *
   */
  _subscribe(e, t) {
    Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = /* @__PURE__ */ new Set()), this.handlersMap[e].add(t);
  }
  /**
   * Unsubscribe an event handler from a particular event.
   *
   * @param eventType - Event name to unsubscribe from.
   * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
   *
   */
  _unsubscribe(e, t) {
    this.handlersMap[e] && t && this.handlersMap[e].delete(t), (!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e], Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
Ct.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rn(n = "", e = 10) {
  let t = "";
  for (let r = 0; r < e; r++)
    t += Math.floor(Math.random() * 10);
  return n + t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $o {
  constructor(e) {
    this.target = e, this.handlers = /* @__PURE__ */ new Set();
  }
  /**
   * Unsubscribe the handler and remove it from our tracking Set.
   *
   * @param handler - The handler to unsubscribe.
   */
  removeMessageHandler(e) {
    e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e);
  }
  /**
   * Send a message to the Receiver located at {@link target}.
   *
   * @remarks
   * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
   * receiver has had a chance to fully process the event.
   *
   * @param eventType - Type of event to send.
   * @param data - The payload of the event.
   * @param timeout - Timeout for waiting on an ACK from the receiver.
   *
   * @returns An array of settled promises from all the handlers that were listening on the receiver.
   */
  async _send(e, t, r = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i)
      throw new Error(
        "connection_unavailable"
        /* _MessageError.CONNECTION_UNAVAILABLE */
      );
    let s, o;
    return new Promise((l, u) => {
      const d = rn("", 20);
      i.port1.start();
      const m = setTimeout(() => {
        u(new Error(
          "unsupported_event"
          /* _MessageError.UNSUPPORTED_EVENT */
        ));
      }, r);
      o = {
        messageChannel: i,
        onMessage(f) {
          const g = f;
          if (g.data.eventId === d)
            switch (g.data.status) {
              case "ack":
                clearTimeout(m), s = setTimeout(
                  () => {
                    u(new Error(
                      "timeout"
                      /* _MessageError.TIMEOUT */
                    ));
                  },
                  3e3
                  /* _TimeoutDuration.COMPLETION */
                );
                break;
              case "done":
                clearTimeout(s), l(g.data.response);
                break;
              default:
                clearTimeout(m), clearTimeout(s), u(new Error(
                  "invalid_response"
                  /* _MessageError.INVALID_RESPONSE */
                ));
                break;
            }
        }
      }, this.handlers.add(o), i.port1.addEventListener("message", o.onMessage), this.target.postMessage({
        eventType: e,
        eventId: d,
        data: t
      }, [i.port2]);
    }).finally(() => {
      o && this.removeMessageHandler(o);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le() {
  return window;
}
function Vo(n) {
  le().location.href = n;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cr() {
  return typeof le().WorkerGlobalScope < "u" && typeof le().importScripts == "function";
}
async function Fo() {
  if (!(navigator != null && navigator.serviceWorker))
    return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function Ho() {
  var n;
  return ((n = navigator == null ? void 0 : navigator.serviceWorker) === null || n === void 0 ? void 0 : n.controller) || null;
}
function jo() {
  return Cr() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kr = "firebaseLocalStorageDb", Go = 1, yt = "firebaseLocalStorage", Sr = "fbase_key";
class nt {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, t) => {
      this.request.addEventListener("success", () => {
        e(this.request.result);
      }), this.request.addEventListener("error", () => {
        t(this.request.error);
      });
    });
  }
}
function kt(n, e) {
  return n.transaction([yt], e ? "readwrite" : "readonly").objectStore(yt);
}
function Zo() {
  const n = indexedDB.deleteDatabase(kr);
  return new nt(n).toPromise();
}
function Wt() {
  const n = indexedDB.open(kr, Go);
  return new Promise((e, t) => {
    n.addEventListener("error", () => {
      t(n.error);
    }), n.addEventListener("upgradeneeded", () => {
      const r = n.result;
      try {
        r.createObjectStore(yt, { keyPath: Sr });
      } catch (i) {
        t(i);
      }
    }), n.addEventListener("success", async () => {
      const r = n.result;
      r.objectStoreNames.contains(yt) ? e(r) : (r.close(), await Zo(), e(await Wt()));
    });
  });
}
async function Cn(n, e, t) {
  const r = kt(n, !0).put({
    [Sr]: e,
    value: t
  });
  return new nt(r).toPromise();
}
async function Wo(n, e) {
  const t = kt(n, !1).get(e), r = await new nt(t).toPromise();
  return r === void 0 ? null : r.value;
}
function kn(n, e) {
  const t = kt(n, !0).delete(e);
  return new nt(t).toPromise();
}
const zo = 800, qo = 3;
class Ar {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    return this.db ? this.db : (this.db = await Wt(), this.db);
  }
  async _withRetries(e) {
    let t = 0;
    for (; ; )
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (t++ > qo)
          throw r;
        this.db && (this.db.close(), this.db = void 0);
      }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return Cr() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = Ct._getInstance(jo()), this.receiver._subscribe("keyChanged", async (e, t) => ({
      keyProcessed: (await this._poll()).includes(t.key)
    })), this.receiver._subscribe("ping", async (e, t) => [
      "keyChanged"
      /* _EventType.KEY_CHANGED */
    ]);
  }
  /**
   * As the main window, we should let the worker know when keys change (set and remove).
   *
   * @remarks
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
   * may not resolve.
   */
  async initializeSender() {
    var e, t;
    if (this.activeServiceWorker = await Fo(), !this.activeServiceWorker)
      return;
    this.sender = new $o(this.activeServiceWorker);
    const r = await this.sender._send(
      "ping",
      {},
      800
      /* _TimeoutDuration.LONG_ACK */
    );
    r && !((e = r[0]) === null || e === void 0) && e.fulfilled && !((t = r[0]) === null || t === void 0) && t.value.includes(
      "keyChanged"
      /* _EventType.KEY_CHANGED */
    ) && (this.serviceWorkerReceiverAvailable = !0);
  }
  /**
   * Let the worker know about a changed key, the exact key doesn't technically matter since the
   * worker will just trigger a full sync anyway.
   *
   * @remarks
   * For now, we only support one service worker per page.
   *
   * @param key - Storage key which changed.
   */
  async notifyServiceWorker(e) {
    if (!(!this.sender || !this.activeServiceWorker || Ho() !== this.activeServiceWorker))
      try {
        await this.sender._send(
          "keyChanged",
          { key: e },
          // Use long timeout if receiver has previously responded to a ping from us.
          this.serviceWorkerReceiverAvailable ? 800 : 50
          /* _TimeoutDuration.ACK */
        );
      } catch {
      }
  }
  async _isAvailable() {
    try {
      if (!indexedDB)
        return !1;
      const e = await Wt();
      return await Cn(e, wt, "1"), await kn(e, wt), !0;
    } catch {
    }
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, t) {
    return this._withPendingWrite(async () => (await this._withRetries((r) => Cn(r, e, t)), this.localCache[e] = t, this.notifyServiceWorker(e)));
  }
  async _get(e) {
    const t = await this._withRetries((r) => Wo(r, e));
    return this.localCache[e] = t, t;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((t) => kn(t, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const s = kt(i, !1).getAll();
      return new nt(s).toPromise();
    });
    if (!e)
      return [];
    if (this.pendingWrites !== 0)
      return [];
    const t = [], r = /* @__PURE__ */ new Set();
    for (const { fbase_key: i, value: s } of e)
      r.add(i), JSON.stringify(this.localCache[i]) !== JSON.stringify(s) && (this.notifyListeners(i, s), t.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] && !r.has(i) && (this.notifyListeners(i, null), t.push(i));
    return t;
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const r = this.listeners[e];
    if (r)
      for (const i of Array.from(r))
        i(t);
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), zo);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  _addListener(e, t) {
    Object.keys(this.listeners).length === 0 && this.startPolling(), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this._get(e)), this.listeners[e].add(t);
  }
  _removeListener(e, t) {
    this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Ar.type = "LOCAL";
const Ko = Ar;
new Qe(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rr(n, e) {
  return e ? de(e) : (T(
    n._popupRedirectResolver,
    n,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  ), n._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sn extends vr {
  constructor(e) {
    super(
      "custom",
      "custom"
      /* ProviderId.CUSTOM */
    ), this.params = e;
  }
  _getIdTokenResponse(e) {
    return Ue(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, t) {
    return Ue(e, this._buildIdpRequest(t));
  }
  _getReauthenticationResolver(e) {
    return Ue(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const t = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0
    };
    return e && (t.idToken = e), t;
  }
}
function Jo(n) {
  return Co(n.auth, new sn(n), n.bypassAuthState);
}
function Yo(n) {
  const { auth: e, user: t } = n;
  return T(
    t,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), To(t, new sn(n), n.bypassAuthState);
}
async function Xo(n) {
  const { auth: e, user: t } = n;
  return T(
    t,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Eo(t, new sn(n), n.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Or {
  constructor(e, t, r, i, s = !1) {
    this.auth = e, this.resolver = r, this.user = i, this.bypassAuthState = s, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(t) ? t : [t];
  }
  execute() {
    return new Promise(async (e, t) => {
      this.pendingPromise = { resolve: e, reject: t };
      try {
        this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(e) {
    const { urlResponse: t, sessionId: r, postBody: i, tenantId: s, error: o, type: l } = e;
    if (o) {
      this.reject(o);
      return;
    }
    const u = {
      auth: this.auth,
      requestUri: t,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(l)(u));
    } catch (d) {
      this.reject(d);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return Jo;
      case "linkViaPopup":
      case "linkViaRedirect":
        return Xo;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return Yo;
      default:
        ue(
          this.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  resolve(e) {
    fe(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
  }
  reject(e) {
    fe(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qo = new Qe(2e3, 1e4);
async function ea(n, e, t) {
  const r = tt(n);
  Fs(n, e, nn);
  const i = Rr(r, t);
  return new Ae(r, "signInViaPopup", e, i).executeNotNull();
}
class Ae extends Or {
  constructor(e, t, r, i, s) {
    super(e, t, i, s), this.provider = r, this.authWindow = null, this.pollId = null, Ae.currentPopupAction && Ae.currentPopupAction.cancel(), Ae.currentPopupAction = this;
  }
  async executeNotNull() {
    const e = await this.execute();
    return T(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), e;
  }
  async onExecution() {
    fe(this.filter.length === 1, "Popup operations only handle one event");
    const e = rn();
    this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      // There's always one, see constructor
      e
    ), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((t) => {
      this.reject(t);
    }), this.resolver._isIframeWebStorageSupported(this.auth, (t) => {
      t || this.reject(ce(
        this.auth,
        "web-storage-unsupported"
        /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
      ));
    }), this.pollUserCancellation();
  }
  get eventId() {
    var e;
    return ((e = this.authWindow) === null || e === void 0 ? void 0 : e.associatedEvent) || null;
  }
  cancel() {
    this.reject(ce(
      this.auth,
      "cancelled-popup-request"
      /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Ae.currentPopupAction = null;
  }
  pollUserCancellation() {
    const e = () => {
      var t, r;
      if (!((r = (t = this.authWindow) === null || t === void 0 ? void 0 : t.window) === null || r === void 0) && r.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null, this.reject(ce(
              this.auth,
              "popup-closed-by-user"
              /* AuthErrorCode.POPUP_CLOSED_BY_USER */
            ));
          },
          8e3
          /* _Timeout.AUTH_EVENT */
        );
        return;
      }
      this.pollId = window.setTimeout(e, Qo.get());
    };
    e();
  }
}
Ae.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ta = "pendingRedirect", ut = /* @__PURE__ */ new Map();
class na extends Or {
  constructor(e, t, r = !1) {
    super(e, [
      "signInViaRedirect",
      "linkViaRedirect",
      "reauthViaRedirect",
      "unknown"
      /* AuthEventType.UNKNOWN */
    ], t, void 0, r), this.eventId = null;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */
  async execute() {
    let e = ut.get(this.auth._key());
    if (!e) {
      try {
        const r = await ra(this.resolver, this.auth) ? await super.execute() : null;
        e = () => Promise.resolve(r);
      } catch (t) {
        e = () => Promise.reject(t);
      }
      ut.set(this.auth._key(), e);
    }
    return this.bypassAuthState || ut.set(this.auth._key(), () => Promise.resolve(null)), e();
  }
  async onAuthEvent(e) {
    if (e.type === "signInViaRedirect")
      return super.onAuthEvent(e);
    if (e.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const t = await this.auth._redirectUserForId(e.eventId);
      if (t)
        return this.user = t, super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {
  }
  cleanUp() {
  }
}
async function ra(n, e) {
  const t = oa(e), r = sa(n);
  if (!await r._isAvailable())
    return !1;
  const i = await r._get(t) === "true";
  return await r._remove(t), i;
}
function ia(n, e) {
  ut.set(n._key(), e);
}
function sa(n) {
  return de(n._redirectPersistence);
}
function oa(n) {
  return lt(ta, n.config.apiKey, n.name);
}
async function aa(n, e, t = !1) {
  const r = tt(n), i = Rr(r, e), o = await new na(r, i, t).execute();
  return o && !t && (delete o.user._redirectEventId, await r._persistUserIfCurrent(o.user), await r._setRedirectUser(null, e)), o;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ca = 10 * 60 * 1e3;
class la {
  constructor(e) {
    this.auth = e, this.cachedEventUids = /* @__PURE__ */ new Set(), this.consumers = /* @__PURE__ */ new Set(), this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now();
  }
  registerConsumer(e) {
    this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null);
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e))
      return !1;
    let t = !1;
    return this.consumers.forEach((r) => {
      this.isEventForConsumer(e, r) && (t = !0, this.sendToConsumer(e, r), this.saveEventToCache(e));
    }), this.hasHandledPotentialRedirect || !ua(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)), t;
  }
  sendToConsumer(e, t) {
    var r;
    if (e.error && !Mr(e)) {
      const i = ((r = e.error.code) === null || r === void 0 ? void 0 : r.split("auth/")[1]) || "internal-error";
      t.onError(ce(this.auth, i));
    } else
      t.onAuthEvent(e);
  }
  isEventForConsumer(e, t) {
    const r = t.eventId === null || !!e.eventId && e.eventId === t.eventId;
    return t.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= ca && this.cachedEventUids.clear(), this.cachedEventUids.has(Sn(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(Sn(e)), this.lastProcessedEventTime = Date.now();
  }
}
function Sn(n) {
  return [n.type, n.eventId, n.sessionId, n.tenantId].filter((e) => e).join("-");
}
function Mr({ type: n, error: e }) {
  return n === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event";
}
function ua(n) {
  switch (n.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Mr(n);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ha(n, e = {}) {
  return et(n, "GET", "/v1/projects", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const da = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, fa = /^https?/;
async function pa(n) {
  if (n.config.emulator)
    return;
  const { authorizedDomains: e } = await ha(n);
  for (const t of e)
    try {
      if (ga(t))
        return;
    } catch {
    }
  ue(
    n,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function ga(n) {
  const e = Zt(), { protocol: t, hostname: r } = new URL(e);
  if (n.startsWith("chrome-extension://")) {
    const o = new URL(n);
    return o.hostname === "" && r === "" ? t === "chrome-extension:" && n.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : t === "chrome-extension:" && o.hostname === r;
  }
  if (!fa.test(t))
    return !1;
  if (da.test(n))
    return r === n;
  const i = n.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ma = new Qe(3e4, 6e4);
function An() {
  const n = le().___jsl;
  if (n != null && n.H) {
    for (const e of Object.keys(n.H))
      if (n.H[e].r = n.H[e].r || [], n.H[e].L = n.H[e].L || [], n.H[e].r = [...n.H[e].L], n.CP)
        for (let t = 0; t < n.CP.length; t++)
          n.CP[t] = null;
  }
}
function va(n) {
  return new Promise((e, t) => {
    var r, i, s;
    function o() {
      An(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          An(), t(ce(
            n,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: ma.get()
      });
    }
    if (!((i = (r = le().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || i === void 0) && i.Iframe)
      e(gapi.iframes.getContext());
    else if (!((s = le().gapi) === null || s === void 0) && s.load)
      o();
    else {
      const l = lo("iframefcb");
      return le()[l] = () => {
        gapi.load ? o() : t(ce(
          n,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, gr(`https://apis.google.com/js/api.js?onload=${l}`).catch((u) => t(u));
    }
  }).catch((e) => {
    throw ht = null, e;
  });
}
let ht = null;
function _a(n) {
  return ht = ht || va(n), ht;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ba = new Qe(5e3, 15e3), wa = "__/auth/iframe", ya = "emulator/auth/iframe", Ia = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, Ea = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function Ta(n) {
  const e = n.config;
  T(
    e.authDomain,
    n,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const t = e.emulator ? en(e, ya) : `https://${n.config.authDomain}/${wa}`, r = {
    apiKey: e.apiKey,
    appName: n.name,
    v: Xe
  }, i = Ea.get(n.config.apiHost);
  i && (r.eid = i);
  const s = n._getFrameworks();
  return s.length && (r.fw = s.join(",")), `${t}?${Ye(r).slice(1)}`;
}
async function Ca(n) {
  const e = await _a(n), t = le().gapi;
  return T(
    t,
    n,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), e.open({
    where: document.body,
    url: Ta(n),
    messageHandlersFilter: t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: Ia,
    dontclear: !0
  }, (r) => new Promise(async (i, s) => {
    await r.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const o = ce(
      n,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), l = le().setTimeout(() => {
      s(o);
    }, ba.get());
    function u() {
      le().clearTimeout(l), i(r);
    }
    r.ping(u).then(u, () => {
      s(o);
    });
  }));
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ka = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, Sa = 500, Aa = 600, Ra = "_blank", Oa = "http://localhost";
class Rn {
  constructor(e) {
    this.window = e, this.associatedEvent = null;
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {
      }
  }
}
function Ma(n, e, t, r = Sa, i = Aa) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(), o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let l = "";
  const u = Object.assign(Object.assign({}, ka), {
    width: r.toString(),
    height: i.toString(),
    top: s,
    left: o
  }), d = K().toLowerCase();
  t && (l = or(d) ? Ra : t), sr(d) && (e = e || Oa, u.scrollbars = "yes");
  const m = Object.entries(u).reduce((g, [b, w]) => `${g}${b}=${w},`, "");
  if (so(d) && l !== "_self")
    return Da(e || "", l), new Rn(null);
  const f = window.open(e || "", l, m);
  T(
    f,
    n,
    "popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */
  );
  try {
    f.focus();
  } catch {
  }
  return new Rn(f);
}
function Da(n, e) {
  const t = document.createElement("a");
  t.href = n, t.target = e;
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), t.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pa = "__/auth/handler", Na = "emulator/auth/handler", La = encodeURIComponent("fac");
async function On(n, e, t, r, i, s) {
  T(
    n.config.authDomain,
    n,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  ), T(
    n.config.apiKey,
    n,
    "invalid-api-key"
    /* AuthErrorCode.INVALID_API_KEY */
  );
  const o = {
    apiKey: n.config.apiKey,
    appName: n.name,
    authType: t,
    redirectUrl: r,
    v: Xe,
    eventId: i
  };
  if (e instanceof nn) {
    e.setDefaultLanguage(n.languageCode), o.providerId = e.providerId || "", Si(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [m, f] of Object.entries(s || {}))
      o[m] = f;
  }
  if (e instanceof He) {
    const m = e.getScopes().filter((f) => f !== "");
    m.length > 0 && (o.scopes = m.join(","));
  }
  n.tenantId && (o.tid = n.tenantId);
  const l = o;
  for (const m of Object.keys(l))
    l[m] === void 0 && delete l[m];
  const u = await n._getAppCheckToken(), d = u ? `#${La}=${encodeURIComponent(u)}` : "";
  return `${Ua(n)}?${Ye(l).slice(1)}${d}`;
}
function Ua({ config: n }) {
  return n.emulator ? en(n, Na) : `https://${n.authDomain}/${Pa}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nt = "webStorageSupport";
class xa {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = Tr, this._completeRedirectFn = aa, this._overrideRedirectResult = ia;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, t, r, i) {
    var s;
    fe((s = this.eventManagers[e._key()]) === null || s === void 0 ? void 0 : s.manager, "_initialize() not called before _openPopup()");
    const o = await On(e, t, r, Zt(), i);
    return Ma(e, o, rn());
  }
  async _openRedirect(e, t, r, i) {
    await this._originValidation(e);
    const s = await On(e, t, r, Zt(), i);
    return Vo(s), new Promise(() => {
    });
  }
  _initialize(e) {
    const t = e._key();
    if (this.eventManagers[t]) {
      const { manager: i, promise: s } = this.eventManagers[t];
      return i ? Promise.resolve(i) : (fe(s, "If manager is not set, promise should be"), s);
    }
    const r = this.initAndGetManager(e);
    return this.eventManagers[t] = { promise: r }, r.catch(() => {
      delete this.eventManagers[t];
    }), r;
  }
  async initAndGetManager(e) {
    const t = await Ca(e), r = new la(e);
    return t.register("authEvent", (i) => (T(
      i == null ? void 0 : i.authEvent,
      e,
      "invalid-auth-event"
      /* AuthErrorCode.INVALID_AUTH_EVENT */
    ), {
      status: r.onEvent(i.authEvent) ? "ACK" : "ERROR"
      /* GapiOutcome.ERROR */
    }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = { manager: r }, this.iframes[e._key()] = t, r;
  }
  _isIframeWebStorageSupported(e, t) {
    this.iframes[e._key()].send(Nt, { type: Nt }, (i) => {
      var s;
      const o = (s = i == null ? void 0 : i[0]) === null || s === void 0 ? void 0 : s[Nt];
      o !== void 0 && t(!!o), ue(
        e,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const t = e._key();
    return this.originValidationPromises[t] || (this.originValidationPromises[t] = pa(e)), this.originValidationPromises[t];
  }
  get _shouldInitProactively() {
    return hr() || tn() || Tt();
  }
}
const Ba = xa;
var Mn = "@firebase/auth", Dn = "0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $a {
  constructor(e) {
    this.auth = e, this.internalListeners = /* @__PURE__ */ new Map();
  }
  getUid() {
    var e;
    return this.assertAuthConfigured(), ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) || null;
  }
  async getToken(e) {
    return this.assertAuthConfigured(), await this.auth._initializationPromise, this.auth.currentUser ? { accessToken: await this.auth.currentUser.getIdToken(e) } : null;
  }
  addAuthTokenListener(e) {
    if (this.assertAuthConfigured(), this.internalListeners.has(e))
      return;
    const t = this.auth.onIdTokenChanged((r) => {
      e((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(e, t), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const t = this.internalListeners.get(e);
    t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    T(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
      /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Va(n) {
  switch (n) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    default:
      return;
  }
}
function Fa(n) {
  We(new Ve(
    "auth",
    (e, { options: t }) => {
      const r = e.getProvider("app").getImmediate(), i = e.getProvider("heartbeat"), s = e.getProvider("app-check-internal"), { apiKey: o, authDomain: l } = r.options;
      T(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
      const u = {
        apiKey: o,
        authDomain: l,
        clientPlatform: n,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: dr(n)
      }, d = new mo(r, i, s, u);
      return _o(d, t), d;
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  ).setInstanceCreatedCallback((e, t, r) => {
    e.getProvider(
      "auth-internal"
      /* _ComponentName.AUTH_INTERNAL */
    ).initialize();
  })), We(new Ve(
    "auth-internal",
    (e) => {
      const t = tt(e.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((r) => new $a(r))(t);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  )), Ne(Mn, Dn, Va(n)), Ne(Mn, Dn, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ha = 5 * 60, ja = Hn("authIdTokenMaxAge") || Ha;
let Pn = null;
const Ga = (n) => async (e) => {
  const t = e && await e.getIdTokenResult(), r = t && (new Date().getTime() - Date.parse(t.issuedAtTime)) / 1e3;
  if (r && r > ja)
    return;
  const i = t == null ? void 0 : t.token;
  Pn !== i && (Pn = i, await fetch(n, {
    method: i ? "POST" : "DELETE",
    headers: i ? {
      Authorization: `Bearer ${i}`
    } : {}
  }));
};
function Lt(n = Ss()) {
  const e = Wn(n, "auth");
  if (e.isInitialized())
    return e.getImmediate();
  const t = vo(n, {
    popupRedirectResolver: Ba,
    persistence: [
      Ko,
      Ir,
      Tr
    ]
  }), r = Hn("authTokenSyncURL");
  if (r) {
    const s = Ga(r);
    Po(t, s, () => s(t.currentUser)), Do(t, (o) => s(o));
  }
  const i = mi("auth");
  return i && bo(t, `http://${i}`), t;
}
Fa(
  "Browser"
  /* ClientPlatform.BROWSER */
);
function Za(n) {
  let e, t, r = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { height: "48" },
    { viewBox: "0 96 960 960" },
    { width: "48" },
    /*$$props*/
    n[0]
  ], i = {};
  for (let s = 0; s < r.length; s += 1)
    i = L(i, r[s]);
  return {
    c() {
      e = h("svg"), t = h("path"), a(t, "d", "M222 801q63-44 125-67.5T480 710q71 0 133.5 23.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm.654 370Q398 976 325 944.5q-73-31.5-127.5-86t-86-127.266Q80 658.468 80 575.734T111.5 420.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5 207.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5 731q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480 916q55 0 107.5-16T691 844q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480 916Zm0-370q34 0 55.5-21.5T557 469q0-34-21.5-55.5T480 392q-34 0-55.5 21.5T403 469q0 34 21.5 55.5T480 546Zm0-77Zm0 374Z"), W(e, i);
    },
    m(s, o) {
      H(s, e, o), c(e, t);
    },
    p(s, [o]) {
      W(e, i = ge(r, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { height: "48" },
        { viewBox: "0 96 960 960" },
        { width: "48" },
        o & /*$$props*/
        1 && /*$$props*/
        s[0]
      ]));
    },
    i: A,
    o: A,
    d(s) {
      s && j(e);
    }
  };
}
function Wa(n, e, t) {
  return n.$$set = (r) => {
    t(0, e = L(L({}, e), Z(r)));
  }, e = Z(e), [e];
}
class Dr extends me {
  constructor(e) {
    super(), re(this, e, Wa, Za, ne, {});
  }
}
function za(n) {
  let e, t, r, i = [
    { width: "800" },
    { height: "800" },
    { viewBox: "0 0 24 24" },
    { fill: "none" },
    { xmlns: "http://www.w3.org/2000/svg" },
    /*$$props*/
    n[0]
  ], s = {};
  for (let o = 0; o < i.length; o += 1)
    s = L(s, i[o]);
  return {
    c() {
      e = h("svg"), t = h("path"), r = h("path"), a(t, "d", "M11 3h2a1 1 0 0 1 1 1v.569c0 .428.287.8.682.963.396.164.856.102 1.158-.2l.403-.403a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1 0 1.414l-.402.403c-.303.302-.365.762-.201 1.158.164.395.535.682.963.682H20a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.569c-.428 0-.8.287-.963.682-.164.396-.102.856.2 1.158l.403.403a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 0 1-1.414 0l-.403-.402c-.302-.303-.762-.365-1.158-.201-.395.164-.682.535-.682.963V20a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-.569c0-.428-.287-.8-.682-.963-.396-.164-.856-.102-1.158.2l-.403.403a1 1 0 0 1-1.414 0L4.93 17.657a1 1 0 0 1 0-1.414l.402-.403c.303-.302.365-.762.201-1.158-.164-.395-.535-.682-.963-.682H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.569c.428 0 .8-.287.963-.682.164-.396.102-.856-.2-1.158l-.403-.403a1 1 0 0 1 0-1.414L6.343 4.93a1 1 0 0 1 1.414 0l.403.402c.302.303.762.365 1.158.201.395-.164.682-.535.682-.963V4a1 1 0 0 1 1-1Z"), a(t, "stroke", "#000"), a(t, "stroke-width", "1.5"), a(r, "d", "M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"), a(r, "stroke", "#000"), a(r, "stroke-width", "1.5"), W(e, s);
    },
    m(o, l) {
      H(o, e, l), c(e, t), c(e, r);
    },
    p(o, [l]) {
      W(e, s = ge(i, [
        { width: "800" },
        { height: "800" },
        { viewBox: "0 0 24 24" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        l & /*$$props*/
        1 && /*$$props*/
        o[0]
      ]));
    },
    i: A,
    o: A,
    d(o) {
      o && j(e);
    }
  };
}
function qa(n, e, t) {
  return n.$$set = (r) => {
    t(0, e = L(L({}, e), Z(r)));
  }, e = Z(e), [e];
}
class Ka extends me {
  constructor(e) {
    super(), re(this, e, qa, za, ne, {});
  }
}
function Ja(n) {
  let e, t, r = [
    { width: "800" },
    { height: "800" },
    { viewBox: "0 0 24 24" },
    { fill: "none" },
    { xmlns: "http://www.w3.org/2000/svg" },
    /*$$props*/
    n[0]
  ], i = {};
  for (let s = 0; s < r.length; s += 1)
    i = L(i, r[s]);
  return {
    c() {
      e = h("svg"), t = h("path"), a(t, "d", "m12 15 3-3m0 0-3-3m3 3H4m5-4.751V7.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C10.52 4 11.08 4 12.2 4h4.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105v9.607c0 1.118 0 1.677-.218 2.104a2.002 2.002 0 0 1-.875.874c-.427.218-.986.218-2.104.218h-4.606c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C9 18.48 9 17.92 9 16.8v-.05"), a(t, "stroke", "#000"), a(t, "stroke-width", "2"), a(t, "stroke-linecap", "round"), a(t, "stroke-linejoin", "round"), W(e, i);
    },
    m(s, o) {
      H(s, e, o), c(e, t);
    },
    p(s, [o]) {
      W(e, i = ge(r, [
        { width: "800" },
        { height: "800" },
        { viewBox: "0 0 24 24" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        o & /*$$props*/
        1 && /*$$props*/
        s[0]
      ]));
    },
    i: A,
    o: A,
    d(s) {
      s && j(e);
    }
  };
}
function Ya(n, e, t) {
  return n.$$set = (r) => {
    t(0, e = L(L({}, e), Z(r)));
  }, e = Z(e), [e];
}
class Xa extends me {
  constructor(e) {
    super(), re(this, e, Ya, Ja, ne, {});
  }
}
function Qa(n) {
  let e, t, r, i;
  return {
    c() {
      e = N("a"), t = N("button"), t.textContent = "Log in", a(e, "href", "/login");
    },
    m(s, o) {
      H(s, e, o), c(e, t), r || (i = $e(
        t,
        "click",
        /*login*/
        n[5]
      ), r = !0);
    },
    p: A,
    d(s) {
      s && j(e), r = !1, i();
    }
  };
}
function ec(n) {
  let e, t;
  return {
    c() {
      e = N("p"), t = qt(
        /*username*/
        n[1]
      );
    },
    m(r, i) {
      H(r, e, i), c(e, t);
    },
    p(r, i) {
      i & /*username*/
      2 && Lr(
        t,
        /*username*/
        r[1]
      );
    },
    d(r) {
      r && j(e);
    }
  };
}
function tc(n) {
  let e, t, r;
  return t = new Dr({ props: { fill: "#2bc0d3" } }), {
    c() {
      e = N("a"), ae(t.$$.fragment), a(e, "href", "/login");
    },
    m(i, s) {
      H(i, e, s), oe(t, e, null), r = !0;
    },
    p: A,
    i(i) {
      r || (G(t.$$.fragment, i), r = !0);
    },
    o(i) {
      q(t.$$.fragment, i), r = !1;
    },
    d(i) {
      i && j(e), ee(t);
    }
  };
}
function nc(n) {
  let e, t, r, i;
  const s = [ic, rc], o = [];
  function l(u, d) {
    return (
      /*profilesrc*/
      u[0] != null ? 0 : 1
    );
  }
  return e = l(n), t = o[e] = s[e](n), {
    c() {
      t.c(), r = Pr();
    },
    m(u, d) {
      o[e].m(u, d), H(u, r, d), i = !0;
    },
    p(u, d) {
      let m = e;
      e = l(u), e === m ? o[e].p(u, d) : (Bt(), q(o[m], 1, 1, () => {
        o[m] = null;
      }), $t(), t = o[e], t ? t.p(u, d) : (t = o[e] = s[e](u), t.c()), G(t, 1), t.m(r.parentNode, r));
    },
    i(u) {
      i || (G(t), i = !0);
    },
    o(u) {
      q(t), i = !1;
    },
    d(u) {
      o[e].d(u), u && j(r);
    }
  };
}
function rc(n) {
  let e, t;
  return e = new Dr({ props: { fill: "#2bc0d3" } }), {
    c() {
      ae(e.$$.fragment);
    },
    m(r, i) {
      oe(e, r, i), t = !0;
    },
    p: A,
    i(r) {
      t || (G(e.$$.fragment, r), t = !0);
    },
    o(r) {
      q(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function ic(n) {
  let e, t;
  return {
    c() {
      e = N("img"), ft(e.src, t = /*profilesrc*/
      n[0]) || a(e, "src", t), C(e, "border-radius", "50%"), C(e, "width", "3rem"), a(e, "alt", "profile-picture");
    },
    m(r, i) {
      H(r, e, i);
    },
    p(r, i) {
      i & /*profilesrc*/
      1 && !ft(e.src, t = /*profilesrc*/
      r[0]) && a(e, "src", t);
    },
    i: A,
    o: A,
    d(r) {
      r && j(e);
    }
  };
}
function Nn(n) {
  let e, t, r, i, s, o, l, u, d, m, f, g, b, w;
  return r = new Ka({
    props: {
      height: "40",
      width: "40",
      viewBox: "-2.5 0 25 24"
    }
  }), u = new Xa({ props: { height: "40", width: "40" } }), {
    c() {
      e = N("div"), t = N("a"), ae(r.$$.fragment), i = te(), s = N("span"), s.textContent = "Settings", o = te(), l = N("div"), ae(u.$$.fragment), d = te(), m = N("span"), m.textContent = "Log out", a(s, "class", "dropdown-button-text"), a(t, "class", "dropdown-button"), a(t, "href", "/settings"), a(m, "class", "dropdown-button-text"), a(l, "class", "dropdown-button"), a(e, "style", f = `opacity: ${/*openedDropdown*/
      n[3] ? 1 : 0};`), a(e, "class", "dropdown");
    },
    m(p, v) {
      H(p, e, v), c(e, t), oe(r, t, null), c(t, i), c(t, s), c(e, o), c(e, l), oe(u, l, null), c(l, d), c(l, m), g = !0, b || (w = [
        $e(
          l,
          "click",
          /*click_handler*/
          n[6]
        ),
        $e(e, "click", Un(oc))
      ], b = !0);
    },
    p(p, v) {
      (!g || v & /*openedDropdown*/
      8 && f !== (f = `opacity: ${/*openedDropdown*/
      p[3] ? 1 : 0};`)) && a(e, "style", f);
    },
    i(p) {
      g || (G(r.$$.fragment, p), G(u.$$.fragment, p), g = !0);
    },
    o(p) {
      q(r.$$.fragment, p), q(u.$$.fragment, p), g = !1;
    },
    d(p) {
      p && j(e), ee(r), ee(u), b = !1, Te(w);
    }
  };
}
function sc(n) {
  let e, t, r, i, s, o, l, u, d;
  function m(_, y) {
    return (
      /*username*/
      _[1] != "" ? ec : Qa
    );
  }
  let f = m(n), g = f(n);
  const b = [nc, tc], w = [];
  function p(_, y) {
    return (
      /*isLoggedin*/
      _[2] ? 0 : 1
    );
  }
  i = p(n), s = w[i] = b[i](n);
  let v = (
    /*isLoggedin*/
    n[2] && Nn(n)
  );
  return {
    c() {
      e = N("div"), g.c(), t = te(), r = N("div"), s.c(), o = te(), v && v.c(), this.c = A, a(r, "class", "profile-picture"), a(e, "class", "user-info");
    },
    m(_, y) {
      H(_, e, y), g.m(e, null), c(e, t), c(e, r), w[i].m(r, null), c(e, o), v && v.m(e, null), l = !0, u || (d = $e(r, "click", Un(
        /*handleMenuOpen*/
        n[4]
      )), u = !0);
    },
    p(_, [y]) {
      f === (f = m(_)) && g ? g.p(_, y) : (g.d(1), g = f(_), g && (g.c(), g.m(e, t)));
      let k = i;
      i = p(_), i === k ? w[i].p(_, y) : (Bt(), q(w[k], 1, 1, () => {
        w[k] = null;
      }), $t(), s = w[i], s ? s.p(_, y) : (s = w[i] = b[i](_), s.c()), G(s, 1), s.m(r, null)), /*isLoggedin*/
      _[2] ? v ? (v.p(_, y), y & /*isLoggedin*/
      4 && G(v, 1)) : (v = Nn(_), v.c(), G(v, 1), v.m(e, null)) : v && (Bt(), q(v, 1, 1, () => {
        v = null;
      }), $t());
    },
    i(_) {
      l || (G(s), G(v), l = !0);
    },
    o(_) {
      q(s), q(v), l = !1;
    },
    d(_) {
      _ && j(e), g.d(), w[i].d(), v && v.d(), u = !1, d();
    }
  };
}
const oc = () => {
};
function ac(n, e, t) {
  let r, i = "", s = !1, o = !1;
  function l() {
    t(3, o = !0), document.addEventListener("click", u);
  }
  function u() {
    t(3, o = !1), document.removeEventListener("click", u);
  }
  xr(() => {
    const g = zn({
      apiKey: "AIzaSyBlfZjJyhjcgyPfxaqkZHSR5SciFBWC5IY",
      authDomain: "mcsynergy-55878.firebaseapp.com",
      projectId: "mcsynergy-55878",
      storageBucket: "mcsynergy-55878.appspot.com",
      messagingSenderId: "822930182678",
      appId: "1:822930182678:web:23e8f0b3e044ae06cb9b37",
      measurementId: "G-3BK4KLMGTJ"
    });
    Lt(g).onAuthStateChanged(async (w) => {
      if (w) {
        t(2, s = !0), t(1, i = w.displayName);
        const p = localStorage.getItem("accessToken");
        try {
          const _ = await (await fetch("https://graph.microsoft.com/v1.0/me/photo/$value", {
            headers: { Authorization: `Bearer ${p}` }
          })).blob(), y = new FileReader();
          y.readAsDataURL(_), y.onload = (k) => t(0, r = k.target.result);
        } catch (v) {
          console.log(v);
        }
      } else
        t(2, s = !1), t(0, r = void 0), t(1, i = "");
    });
  });
  async function d() {
    var w, p;
    const f = Lt(), g = async (v) => {
      var _;
      await fetch("http://localhost:8000/api/auth/check-user-roles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idtoken: v })
      }), await ((_ = f.currentUser) == null ? void 0 : _.getIdToken(!0));
    }, b = new xe("microsoft.com");
    b.setCustomParameters({ prompt: "select_account" }), await f.setPersistence(Ir);
    try {
      const v = await ea(f, b), _ = (w = xe.credentialFromResult(v)) == null ? void 0 : w.accessToken;
      if (_ && localStorage.setItem("accessToken", _), (p = Mo(v)) != null && p.isNewUser) {
        const y = await v.user.getIdToken();
        await g(y);
      }
    } catch (v) {
      alert("Something went wrong. Please try again. (Error: " + v.code + ")");
    }
  }
  return [
    r,
    i,
    s,
    o,
    l,
    d,
    () => No(Lt())
  ];
}
class cc extends It {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = "<style>.user-info{display:flex;align-items:center}.profile-picture{margin-left:1rem;margin-right:0.5rem}button{background-color:transparent;color:white;border-radius:12px;height:2rem;width:6rem;font-size:1rem;border:2px solid #206191;text-align:center;text-decoration:none;display:inline-block;cursor:pointer}button:hover{background-color:#206191}p{color:white;font-size:1.5rem;font-family:Calibri}.dropdown{position:absolute;top:3.5rem;right:4px;width:15rem;height:6.5rem;background-color:#206191;border-radius:16px;transition:200ms}.dropdown-button{width:max-content;height:3rem;display:flex;align-items:center;margin-left:0.25rem;text-decoration:none;font-size:1.5rem;font-family:Calibri;transition:100ms;cursor:pointer;color:white}.dropdown-button:hover{transform:scale(1.05)}.dropdown-button-text{margin-left:12px}</style>", re(
      this,
      {
        target: this.shadowRoot,
        props: Kt(this.attributes),
        customElement: !0
      },
      ac,
      sc,
      ne,
      {},
      null
    ), e && e.target && H(e.target, this, e.anchor);
  }
}
customElements.define("mcs-userinfo", cc);
function lc(n) {
  let e, t, r, i, s, o, l, u, d, m;
  return {
    c() {
      e = N("header"), t = N("div"), r = N("div"), i = N("mcs-portal"), s = te(), o = N("a"), l = N("img"), d = te(), m = N("div"), m.innerHTML = "<mcs-userinfo></mcs-userinfo>", this.c = A, ft(l.src, u = /*logosrc*/
      n[0]) || a(l, "src", u), a(l, "alt", "Logo"), a(l, "class", "logo"), a(o, "href", "/"), a(o, "class", "h-max ml-1"), a(r, "class", "flex items-center w-80 h-full"), a(m, "class", "flex items-center w-80 justify-end h-full"), a(t, "class", "bg-MCS-DarkerBlue h-14 flex items-center justify-between");
    },
    m(f, g) {
      H(f, e, g), c(e, t), c(t, r), c(r, i), c(r, s), c(r, o), c(o, l), c(t, d), c(t, m);
    },
    p(f, [g]) {
      g & /*logosrc*/
      1 && !ft(l.src, u = /*logosrc*/
      f[0]) && a(l, "src", u);
    },
    i: A,
    o: A,
    d(f) {
      f && j(e);
    }
  };
}
function uc(n, e, t) {
  let { logosrc: r } = e;
  return n.$$set = (i) => {
    "logosrc" in i && t(0, r = i.logosrc);
  }, [r];
}
class hc extends It {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = "<style>.bg-MCS-DarkerBlue{--tw-bg-opacity:1;background-color:rgb(13 29 48 / var(--tw-bg-opacity))}.h-14{height:3.5rem}.flex{display:flex}.items-center{align-items:center}.justify-between{justify-content:space-between}.w-80{width:20rem}.h-full{height:100%}.h-max{height:-moz-max-content;height:max-content}.ml-1{margin-left:0.25rem}.logo{height:2rem;margin-top:0.25rem;z-index:1001}.justify-end{justify-content:flex-end}</style>", re(
      this,
      {
        target: this.shadowRoot,
        props: Kt(this.attributes),
        customElement: !0
      },
      uc,
      lc,
      ne,
      { logosrc: 0 },
      null
    ), e && (e.target && H(e.target, this, e.anchor), e.props && (this.$set(e.props), pt()));
  }
  static get observedAttributes() {
    return ["logosrc"];
  }
  get logosrc() {
    return this.$$.ctx[0];
  }
  set logosrc(e) {
    this.$$set({ logosrc: e }), pt();
  }
}
customElements.define("mcs-navbar", hc);
export {
  hc as Navbar
};
