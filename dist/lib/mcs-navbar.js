function S() {
}
function L(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function pn(t) {
  return t();
}
function Pn() {
  return /* @__PURE__ */ Object.create(null);
}
function Ee(t) {
  t.forEach(pn);
}
function Rt(t) {
  return typeof t == "function";
}
function ie(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let gt;
function St(t, e) {
  return gt || (gt = document.createElement("a")), gt.href = e, t === gt.href;
}
function fr(t) {
  return Object.keys(t).length === 0;
}
function z(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function u(t, e) {
  t.appendChild(e);
}
function x(t, e, n) {
  t.insertBefore(e, n || null);
}
function G(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function N(t) {
  return document.createElement(t);
}
function d(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function gn(t) {
  return document.createTextNode(t);
}
function ae() {
  return gn(" ");
}
function pr() {
  return gn("");
}
function ve(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function At(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function a(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function q(t, e) {
  for (const n in e)
    a(t, n, e[n]);
}
function Ot(t, e, n) {
  e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : a(t, e, n);
}
function Ri(t) {
  return Array.from(t.childNodes);
}
function Si(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function R(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function mt(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function $t(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let it;
function tt(t) {
  it = t;
}
function Ai() {
  if (!it)
    throw new Error("Function called outside component initialization");
  return it;
}
function Oi(t) {
  Ai().$$.on_mount.push(t);
}
const We = [], Nn = [], wt = [], Dn = [], Pi = Promise.resolve();
let tn = !1;
function Ni() {
  tn || (tn = !0, Pi.then(fe));
}
function nn(t) {
  wt.push(t);
}
const Wt = /* @__PURE__ */ new Set();
let Ge = 0;
function fe() {
  if (Ge !== 0)
    return;
  const t = it;
  do {
    try {
      for (; Ge < We.length; ) {
        const e = We[Ge];
        Ge++, tt(e), Di(e.$$);
      }
    } catch (e) {
      throw We.length = 0, Ge = 0, e;
    }
    for (tt(null), We.length = 0, Ge = 0; Nn.length; )
      Nn.pop()();
    for (let e = 0; e < wt.length; e += 1) {
      const n = wt[e];
      Wt.has(n) || (Wt.add(n), n());
    }
    wt.length = 0;
  } while (We.length);
  for (; Dn.length; )
    Dn.pop()();
  tn = !1, Wt.clear(), tt(t);
}
function Di(t) {
  if (t.fragment !== null) {
    t.update(), Ee(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(nn);
  }
}
const yt = /* @__PURE__ */ new Set();
let xe;
function rn() {
  xe = {
    r: 0,
    c: [],
    p: xe
    // parent group
  };
}
function sn() {
  xe.r || Ee(xe.c), xe = xe.p;
}
function Z(t, e) {
  t && t.i && (yt.delete(t), t.i(e));
}
function J(t, e, n, r) {
  if (t && t.o) {
    if (yt.has(t))
      return;
    yt.add(t), xe.c.push(() => {
      yt.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function Te(t, e) {
  const n = {}, r = {}, i = { $$scope: 1 };
  let s = t.length;
  for (; s--; ) {
    const o = t[s], c = e[s];
    if (c) {
      for (const l in o)
        l in c || (r[l] = 1);
      for (const l in c)
        i[l] || (n[l] = c[l], i[l] = 1);
      t[s] = c;
    } else
      for (const l in o)
        i[l] = 1;
  }
  for (const o in r)
    o in n || (n[o] = void 0);
  return n;
}
function de(t) {
  t && t.c();
}
function ue(t, e, n, r) {
  const { fragment: i, after_update: s } = t.$$;
  i && i.m(e, n), r || nn(() => {
    const o = t.$$.on_mount.map(pn).filter(Rt);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : Ee(o), t.$$.on_mount = [];
  }), s.forEach(nn);
}
function oe(t, e) {
  const n = t.$$;
  n.fragment !== null && (Ee(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Mi(t, e) {
  t.$$.dirty[0] === -1 && (We.push(t), Ni(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function se(t, e, n, r, i, s, o, c = [-1]) {
  const l = it;
  tt(t);
  const h = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: S,
    not_equal: i,
    bound: Pn(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: Pn(),
    dirty: c,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  o && o(h.root);
  let f = !1;
  if (h.ctx = n ? n(t, e.props || {}, (g, p, ..._) => {
    const y = _.length ? _[0] : p;
    return h.ctx && i(h.ctx[g], h.ctx[g] = y) && (!h.skip_bound && h.bound[g] && h.bound[g](y), f && Mi(t, g)), p;
  }) : [], h.update(), f = !0, Ee(h.before_update), h.fragment = r ? r(h.ctx) : !1, e.target) {
    if (e.hydrate) {
      const g = Ri(e.target);
      h.fragment && h.fragment.l(g), g.forEach(G);
    } else
      h.fragment && h.fragment.c();
    e.intro && Z(t.$$.fragment), ue(t, e.target, e.anchor, e.customElement), fe();
  }
  tt(l);
}
let ct;
typeof HTMLElement == "function" && (ct = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(pn).filter(Rt);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    Ee(this.$$.on_disconnect);
  }
  $destroy() {
    oe(this, 1), this.$destroy = S;
  }
  $on(t, e) {
    if (!Rt(e))
      return S;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const r = n.indexOf(e);
      r !== -1 && n.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !fr(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
class ke {
  $destroy() {
    oe(this, 1), this.$destroy = S;
  }
  $on(e, n) {
    if (!Rt(n))
      return S;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(e) {
    this.$$set && !fr(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function Ui(t) {
  let e, n, r, i, s, o = [
    { "stroke-miterlimit": "10" },
    {
      style: "fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
    },
    { viewBox: "0 0 267.426 268.163" },
    { "xml:space": "preserve" },
    { xmlns: "http://www.w3.org/2000/svg" },
    /*$$props*/
    t[0]
  ], c = {};
  for (let l = 0; l < o.length; l += 1)
    c = L(c, o[l]);
  return {
    c() {
      e = d("svg"), n = d("clipPath"), r = d("path"), i = d("g"), s = d("path"), a(r, "d", "M0 0h267.426v268.163H0z"), a(n, "id", "a"), a(s, "d", "M10.604 0h41.213C57.673 0 62.42 4.747 62.42 10.604v41.213c0 5.856-4.747 10.603-10.603 10.603H10.604C4.747 62.42 0 57.673 0 51.817V10.604C0 4.747 4.747 0 10.604 0ZM113.604 0h41.213c5.856 0 10.603 4.747 10.603 10.604v41.213c0 5.856-4.747 10.603-10.603 10.603h-41.213c-5.857 0-10.604-4.747-10.604-10.603V10.604C103 4.747 107.747 0 113.604 0ZM215.604 0h41.213c5.856 0 10.603 4.747 10.603 10.604v41.213c0 5.856-4.747 10.603-10.603 10.603h-41.213c-5.857 0-10.604-4.747-10.604-10.603V10.604C205 4.747 209.747 0 215.604 0ZM10.604 102.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604H10.604C4.747 165.154 0 160.406 0 154.55v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM113.604 102.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM215.604 102.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM10.604 205.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604H10.604C4.747 268.154 0 263.406 0 257.55v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM113.604 205.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM215.604 205.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604Z"), a(i, "clip-path", "url(#a)"), a(i, "fill", "#fff"), q(e, c);
    },
    m(l, h) {
      x(l, e, h), u(e, n), u(n, r), u(e, i), u(i, s);
    },
    p(l, [h]) {
      q(e, c = Te(o, [
        { "stroke-miterlimit": "10" },
        {
          style: "fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"
        },
        { viewBox: "0 0 267.426 268.163" },
        { "xml:space": "preserve" },
        { xmlns: "http://www.w3.org/2000/svg" },
        h & /*$$props*/
        1 && /*$$props*/
        l[0]
      ]));
    },
    i: S,
    o: S,
    d(l) {
      l && G(e);
    }
  };
}
function Li(t, e, n) {
  return t.$$set = (r) => {
    n(0, e = L(L({}, e), z(r)));
  }, e = z(e), [e];
}
class xi extends ke {
  constructor(e) {
    super(), se(this, e, Li, Ui, ie, {});
  }
}
function Bi(t) {
  let e, n, r, i, s, o, c, l, h, f, g, p, _, y, m, v, w, b, I, C, E, D, T, A, P, F, B, H = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 1488.35 398.49" },
    /*$$props*/
    t[0]
  ], $ = {};
  for (let O = 0; O < H.length; O += 1)
    $ = L($, H[O]);
  return {
    c() {
      e = d("svg"), n = d("defs"), r = d("filter"), i = d("feOffset"), s = d("feGaussianBlur"), o = d("feFlood"), c = d("feComposite"), l = d("feComposite"), h = d("filter"), f = d("feOffset"), g = d("feGaussianBlur"), p = d("feFlood"), _ = d("feComposite"), y = d("feComposite"), m = d("filter"), v = d("feOffset"), w = d("feGaussianBlur"), b = d("feFlood"), I = d("feComposite"), C = d("feComposite"), E = d("g"), D = d("path"), T = d("g"), A = d("path"), P = d("g"), F = d("path"), B = d("path"), a(s, "result", "blur"), a(s, "stdDeviation", "19.31"), a(o, "flood-color", "#34c4e7"), a(o, "flood-opacity", ".75"), a(c, "in2", "blur"), a(c, "operator", "in"), a(l, "in", "SourceGraphic"), a(r, "id", "a"), a(r, "filterUnits", "userSpaceOnUse"), a(g, "result", "blur-2"), a(g, "stdDeviation", "19.31"), a(p, "flood-color", "#34c4e7"), a(p, "flood-opacity", ".75"), a(_, "in2", "blur-2"), a(_, "operator", "in"), a(y, "in", "SourceGraphic"), a(h, "id", "b"), a(h, "filterUnits", "userSpaceOnUse"), a(w, "result", "blur-3"), a(w, "stdDeviation", "19.31"), a(b, "flood-color", "#34c4e7"), a(b, "flood-opacity", ".75"), a(I, "in2", "blur-3"), a(I, "operator", "in"), a(C, "in", "SourceGraphic"), a(m, "id", "c"), a(m, "filterUnits", "userSpaceOnUse"), a(D, "d", "M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM633.87 324.48c0 7.29-1.93 13.24-5.77 17.85-3.85 4.61-8.81 6.92-14.89 6.92h-67.77c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85v-88.6h25.88v85.92H608V0h25.88v324.48ZM781.13 349.25h-24.39v-6.03c-9.93 1.64-19.8 3.2-29.6 4.69-11.92 1.79-21.78 2.68-29.6 2.68-13.4 0-20.11-8.03-20.11-24.1V132.11h24.39v190.58l54.92-1.79V132.11h24.39v217.14ZM923.18 349.25h-26.99L846.3 238.56v110.69h-24.76V0h24.76v221.83l46.54-89.71h26.62v.89l-52.69 95.96 56.41 120.29ZM1050.52 324.03c0 16.81-6.95 25.22-20.85 25.22H970.1c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25ZM1195.55 302.61c0 13.39-3.66 24.51-10.98 33.36-7.33 8.85-16.51 13.28-27.55 13.28h-65.53V0h24.76v138.14c9.8-1.49 19.61-2.97 29.41-4.46 12.41-1.93 22.15-2.9 29.23-2.9 13.78 0 20.66 8.11 20.66 24.33v147.51Zm-24.76-4.46V158.67l-54.55 1.79v162.69h34.25c13.53 0 20.29-8.33 20.29-24.99ZM1340.02 324.03c0 16.81-7.01 25.22-21.04 25.22h-62.18c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h62.18c14.02 0 21.04 8.41 21.04 25.22v166.7Zm-24.76-.89V158.22h-54.55v164.92h54.55ZM1478.71 349.25h-25.13l-30.53-85.92-30.9 85.92h-24.39v-.89l42.26-110.69-39.65-105.56h25.13l27.93 79.67 28.67-79.67h24.02v.89l-39.65 103.77 42.26 112.47Z"), R(D, "fill", "#fff"), R(E, "filter", "url(#a)"), a(A, "d", "M1478.7 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65H1478.7c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), R(A, "fill", "#2bc0d3"), R(T, "filter", "url(#b)"), a(F, "d", "M1419.87 62.05h-263.59c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h263.59c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65ZM782.86 62.05h-52.78c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h52.78c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), R(F, "fill", "#2bc0d3"), a(B, "d", "M700.66 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1449.28 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1049.92 62.05H878.63c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h171.29c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), R(B, "fill", "#2bc0d3"), R(P, "filter", "url(#c)"), q(e, $);
    },
    m(O, V) {
      x(O, e, V), u(e, n), u(n, r), u(r, i), u(r, s), u(r, o), u(r, c), u(r, l), u(n, h), u(h, f), u(h, g), u(h, p), u(h, _), u(h, y), u(n, m), u(m, v), u(m, w), u(m, b), u(m, I), u(m, C), u(e, E), u(E, D), u(e, T), u(T, A), u(e, P), u(P, F), u(P, B);
    },
    p(O, [V]) {
      q(e, $ = Te(H, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 1488.35 398.49" },
        V & /*$$props*/
        1 && /*$$props*/
        O[0]
      ]));
    },
    i: S,
    o: S,
    d(O) {
      O && G(e);
    }
  };
}
function $i(t, e, n) {
  return t.$$set = (r) => {
    n(0, e = L(L({}, e), z(r)));
  }, e = z(e), [e];
}
class Fi extends ke {
  constructor(e) {
    super(), se(this, e, $i, Bi, ie, {});
  }
}
function Vi(t) {
  let e, n, r, i, s, o, c, l, h, f, g, p, _, y, m, v, w, b, I, C, E, D, T, A, P, F, B, H = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 1205.07 398.49" },
    /*$$props*/
    t[0]
  ], $ = {};
  for (let O = 0; O < H.length; O += 1)
    $ = L($, H[O]);
  return {
    c() {
      e = d("svg"), n = d("defs"), r = d("filter"), i = d("feOffset"), s = d("feGaussianBlur"), o = d("feFlood"), c = d("feComposite"), l = d("feComposite"), h = d("filter"), f = d("feOffset"), g = d("feGaussianBlur"), p = d("feFlood"), _ = d("feComposite"), y = d("feComposite"), m = d("filter"), v = d("feOffset"), w = d("feGaussianBlur"), b = d("feFlood"), I = d("feComposite"), C = d("feComposite"), E = d("g"), D = d("path"), T = d("g"), A = d("path"), P = d("g"), F = d("path"), B = d("path"), a(s, "result", "blur"), a(s, "stdDeviation", "19.31"), a(o, "flood-color", "#34c4e7"), a(o, "flood-opacity", ".75"), a(c, "in2", "blur"), a(c, "operator", "in"), a(l, "in", "SourceGraphic"), a(r, "id", "a"), a(r, "filterUnits", "userSpaceOnUse"), a(g, "result", "blur-2"), a(g, "stdDeviation", "19.31"), a(p, "flood-color", "#34c4e7"), a(p, "flood-opacity", ".75"), a(_, "in2", "blur-2"), a(_, "operator", "in"), a(y, "in", "SourceGraphic"), a(h, "id", "b"), a(h, "filterUnits", "userSpaceOnUse"), a(w, "result", "blur-3"), a(w, "stdDeviation", "19.31"), a(b, "flood-color", "#34c4e7"), a(b, "flood-opacity", ".75"), a(I, "in2", "blur-3"), a(I, "operator", "in"), a(C, "in", "SourceGraphic"), a(m, "id", "c"), a(m, "filterUnits", "userSpaceOnUse"), a(D, "d", "M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM631.64 27.45h-45.05v321.8h-25.88V27.45h-45.43V0h116.36v27.45ZM762.7 349.25h-24.39v-6.03c-9.93 1.64-19.8 3.2-29.6 4.69-11.92 1.79-21.78 2.68-29.6 2.68-13.4 0-20.11-8.03-20.11-24.1V132.11h24.39v190.58l54.92-1.79V132.11h24.39v217.14ZM897.86 203.53h-24.39v-44.86l-45.61 1.79v188.8H803.1V132.11h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43ZM994.48 349.25h-35.19c-13.9 0-20.85-8.4-20.85-25.22V158.22h-21.78v-26.11h21.78V64.49h24.39v67.62h31.65v26.11h-31.65v164.92h31.65v26.11ZM1052.01 349.25h-24.39V0h24.39v349.25ZM1195.36 324.03c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25Z"), R(D, "fill", "#fff"), R(E, "filter", "url(#a)"), a(A, "d", "M1195.41 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h1185.76c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), R(A, "fill", "#2bc0d3"), R(T, "filter", "url(#b)"), a(F, "d", "M1136.59 62.05h-43.62c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h43.62c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65ZM899.91 62.05H730.08c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h169.83c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), R(F, "fill", "#2bc0d3"), a(B, "d", "M700.66 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1166 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z"), R(B, "fill", "#2bc0d3"), R(P, "filter", "url(#c)"), q(e, $);
    },
    m(O, V) {
      x(O, e, V), u(e, n), u(n, r), u(r, i), u(r, s), u(r, o), u(r, c), u(r, l), u(n, h), u(h, f), u(h, g), u(h, p), u(h, _), u(h, y), u(n, m), u(m, v), u(m, w), u(m, b), u(m, I), u(m, C), u(e, E), u(E, D), u(e, T), u(T, A), u(e, P), u(P, F), u(P, B);
    },
    p(O, [V]) {
      q(e, $ = Te(H, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 1205.07 398.49" },
        V & /*$$props*/
        1 && /*$$props*/
        O[0]
      ]));
    },
    i: S,
    o: S,
    d(O) {
      O && G(e);
    }
  };
}
function Hi(t, e, n) {
  return t.$$set = (r) => {
    n(0, e = L(L({}, e), z(r)));
  }, e = z(e), [e];
}
class ji extends ke {
  constructor(e) {
    super(), se(this, e, Hi, Vi, ie, {});
  }
}
function Gi(t) {
  let e, n, r, i, s, o, c, l, h, f, g, p, _, y, m, v, w, b, I, C, E, D, T, A, P, F, B, H, $, O, V, Q, K, ee, te, ce = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 1551.75 432.49" },
    /*$$props*/
    t[0]
  ], ne = {};
  for (let M = 0; M < ce.length; M += 1)
    ne = L(ne, ce[M]);
  return {
    c() {
      e = d("svg"), n = d("defs"), r = d("filter"), i = d("feOffset"), s = d("feGaussianBlur"), o = d("feFlood"), c = d("feComposite"), l = d("feComposite"), h = d("filter"), f = d("feOffset"), g = d("feGaussianBlur"), p = d("feFlood"), _ = d("feComposite"), y = d("feComposite"), m = d("filter"), v = d("feOffset"), w = d("feGaussianBlur"), b = d("feFlood"), I = d("feComposite"), C = d("feComposite"), E = d("filter"), D = d("feOffset"), T = d("feGaussianBlur"), A = d("feFlood"), P = d("feComposite"), F = d("feComposite"), B = d("g"), H = d("path"), $ = d("g"), O = d("path"), V = d("g"), Q = d("path"), K = d("g"), ee = d("path"), te = d("path"), a(s, "result", "blur"), a(s, "stdDeviation", "19.31"), a(o, "flood-color", "#34c4e7"), a(o, "flood-opacity", ".75"), a(c, "in2", "blur"), a(c, "operator", "in"), a(l, "in", "SourceGraphic"), a(r, "id", "a"), a(r, "filterUnits", "userSpaceOnUse"), a(g, "result", "blur-2"), a(g, "stdDeviation", "19.31"), a(p, "flood-color", "#34c4e7"), a(p, "flood-opacity", ".75"), a(_, "in2", "blur-2"), a(_, "operator", "in"), a(y, "in", "SourceGraphic"), a(h, "id", "b"), a(h, "filterUnits", "userSpaceOnUse"), a(w, "result", "blur-3"), a(w, "stdDeviation", "19.31"), a(b, "flood-color", "#34c4e7"), a(b, "flood-opacity", ".75"), a(I, "in2", "blur-3"), a(I, "operator", "in"), a(C, "in", "SourceGraphic"), a(m, "id", "c"), a(m, "filterUnits", "userSpaceOnUse"), a(T, "result", "blur-4"), a(T, "stdDeviation", "19.31"), a(A, "flood-color", "#34c4e7"), a(A, "flood-opacity", ".75"), a(P, "in2", "blur-4"), a(P, "operator", "in"), a(F, "in", "SourceGraphic"), a(E, "id", "d"), a(E, "filterUnits", "userSpaceOnUse"), a(H, "d", "M163.42 350.14h-24.39V128.99c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V.89h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4.89h24.02v349.25ZM326.69 325.37c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V25.66c0-7.29 1.92-13.24 5.77-17.85 3.84-4.61 8.81-6.92 14.89-6.92h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85v81.24h-26.06V28.34h-64.79V322.7h64.79v-85.92h26.06v88.6ZM485.49 325.37c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V25.66c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85v81.24h-25.88V28.34h-62.93v73.65l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM648.77 350.14h-25.69l-10.24-77.66h-57.9l-10.24 77.66h-24.95v-.89L571.69 0h25.51l51.57 350.14Zm-39.28-105.11L583.98 55.79l-25.69 189.24h51.2ZM784.86 350.14H760.1V159.56l-54.55 1.79v188.8h-24.76V133.01h24.76v6.03c9.68-1.49 19.42-3.05 29.23-4.69 11.92-1.79 21.72-2.68 29.42-2.68 13.78 0 20.66 8.11 20.66 24.33v194.15ZM927.28 350.14h-24.39v-6.03c-9.81 1.64-19.61 3.2-29.42 4.69-12.17 1.79-21.91 2.68-29.23 2.68-13.53 0-20.29-8.03-20.29-24.1v-79.22c0-16.66 7.01-24.99 21.04-24.99h58.27v-65.39h-53.24v37.04H826v-36.6c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v191.92Zm-24.02-27v-76.77h-55.29v78.11l55.29-1.34ZM993.74 350.14h-24.39V.89h24.39v349.25ZM1137.83 133.01l-43.56 215.35-18.06 84.13h-24.39l18.24-84.13-44.68-215.35h25.5l30.9 170.94 31.28-170.94h24.76ZM1265.73 324.93c0 16.81-7.01 25.22-21.04 25.22h-56.78c-14.03 0-21.04-8.4-21.04-25.22v-49.32h24.39v48.87h50.08v-43.29l-64.79-63.6c-6.21-5.95-9.31-13.69-9.31-23.21v-36.15c0-16.81 7.01-25.22 21.04-25.22h56.04c14.02 0 21.04 8.41 21.04 25.22v43.29h-24.02v-42.85h-50.08v37.94l65.35 63.6c6.08 5.8 9.12 13.69 9.12 23.66v41.06ZM1406.29 324.93c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22V158.22c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25ZM1542.01 204.42h-24.39v-44.86l-45.61 1.79v188.8h-24.76V133.01h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43Z"), R(H, "fill", "#fff"), R(B, "filter", "url(#a)"), a(O, "d", "M1017.4 399.39H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65H1017.4c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), R(O, "fill", "#2bc0d3"), R($, "filter", "url(#b)"), a(Q, "d", "M1542.1 399.39h-416.69c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h416.69c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), R(Q, "fill", "#2bc0d3"), R(V, "filter", "url(#c)"), a(ee, "d", "M1483.27 62.95h-455.28c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h455.28c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65ZM928.46 62.95H730.07c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h198.39c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), R(ee, "fill", "#2bc0d3"), a(te, "d", "M700.66 92.36c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1512.68 92.36c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z"), R(te, "fill", "#2bc0d3"), R(K, "filter", "url(#d)"), q(e, ne);
    },
    m(M, le) {
      x(M, e, le), u(e, n), u(n, r), u(r, i), u(r, s), u(r, o), u(r, c), u(r, l), u(n, h), u(h, f), u(h, g), u(h, p), u(h, _), u(h, y), u(n, m), u(m, v), u(m, w), u(m, b), u(m, I), u(m, C), u(n, E), u(E, D), u(E, T), u(E, A), u(E, P), u(E, F), u(e, B), u(B, H), u(e, $), u($, O), u(e, V), u(V, Q), u(e, K), u(K, ee), u(K, te);
    },
    p(M, [le]) {
      q(e, ne = Te(ce, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 1551.75 432.49" },
        le & /*$$props*/
        1 && /*$$props*/
        M[0]
      ]));
    },
    i: S,
    o: S,
    d(M) {
      M && G(e);
    }
  };
}
function Wi(t, e, n) {
  return t.$$set = (r) => {
    n(0, e = L(L({}, e), z(r)));
  }, e = z(e), [e];
}
class Zi extends ke {
  constructor(e) {
    super(), se(this, e, Wi, Gi, ie, {});
  }
}
function zi(t) {
  let e, n, r, i, s, o, c, l, h, f, g, p, _, y, m, v, w, b, I, C, E, D, T, A, P, F, B, H, $, O, V, Q, K, ee, te, ce = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 1452.86 431.6" },
    /*$$props*/
    t[0]
  ], ne = {};
  for (let M = 0; M < ce.length; M += 1)
    ne = L(ne, ce[M]);
  return {
    c() {
      e = d("svg"), n = d("defs"), r = d("filter"), i = d("feOffset"), s = d("feGaussianBlur"), o = d("feFlood"), c = d("feComposite"), l = d("feComposite"), h = d("filter"), f = d("feOffset"), g = d("feGaussianBlur"), p = d("feFlood"), _ = d("feComposite"), y = d("feComposite"), m = d("filter"), v = d("feOffset"), w = d("feGaussianBlur"), b = d("feFlood"), I = d("feComposite"), C = d("feComposite"), E = d("filter"), D = d("feOffset"), T = d("feGaussianBlur"), A = d("feFlood"), P = d("feComposite"), F = d("feComposite"), B = d("g"), H = d("path"), $ = d("g"), O = d("path"), V = d("g"), Q = d("path"), K = d("g"), ee = d("path"), te = d("path"), a(s, "result", "blur"), a(s, "stdDeviation", "19.31"), a(o, "flood-color", "#34c4e7"), a(o, "flood-opacity", ".75"), a(c, "in2", "blur"), a(c, "operator", "in"), a(l, "in", "SourceGraphic"), a(r, "id", "a"), a(r, "filterUnits", "userSpaceOnUse"), a(g, "result", "blur-2"), a(g, "stdDeviation", "19.31"), a(p, "flood-color", "#34c4e7"), a(p, "flood-opacity", ".75"), a(_, "in2", "blur-2"), a(_, "operator", "in"), a(y, "in", "SourceGraphic"), a(h, "id", "b"), a(h, "filterUnits", "userSpaceOnUse"), a(w, "result", "blur-3"), a(w, "stdDeviation", "19.31"), a(b, "flood-color", "#34c4e7"), a(b, "flood-opacity", ".75"), a(I, "in2", "blur-3"), a(I, "operator", "in"), a(C, "in", "SourceGraphic"), a(m, "id", "c"), a(m, "filterUnits", "userSpaceOnUse"), a(T, "result", "blur-4"), a(T, "stdDeviation", "19.31"), a(A, "flood-color", "#34c4e7"), a(A, "flood-opacity", ".75"), a(P, "in2", "blur-4"), a(P, "operator", "in"), a(F, "in", "SourceGraphic"), a(E, "id", "d"), a(E, "filterUnits", "userSpaceOnUse"), a(H, "d", "M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM644.86 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM752.83 349.25h-35.19c-13.9 0-20.85-8.4-20.85-25.22V158.22h-21.78v-26.11h21.78V64.49h24.39v67.62h31.65v26.11h-31.65v164.92h31.65v26.11ZM888.55 324.03c0 16.81-7.01 25.22-21.04 25.22h-62.18c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h62.18c14.02 0 21.04 8.41 21.04 25.22v166.7Zm-24.76-.89V158.22h-54.55v164.92h54.55ZM1023.71 203.53h-24.39v-44.86l-45.61 1.79v188.8h-24.76V132.11h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43ZM1157.57 349.25h-24.39v-6.03c-9.81 1.64-19.61 3.2-29.42 4.69-12.17 1.79-21.91 2.68-29.23 2.68-13.53 0-20.29-8.03-20.29-24.1v-79.22c0-16.66 7.01-24.99 21.04-24.99h58.27v-65.39h-53.24v37.04h-24.02v-36.6c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v191.92Zm-24.02-27v-76.77h-55.29v78.11l55.29-1.34ZM1301.11 406.38c0 16.81-7.01 25.22-21.04 25.22h-58.83c-14.27 0-21.41-10.64-21.41-31.91 0-2.53.09-6.29.28-11.27.19-4.99.28-8.59.28-10.82h24.39v28.79h51.75v-57.13h-40.77c-11.05 0-20.23-4.42-27.55-13.28-7.32-8.85-10.98-19.97-10.98-33.36V175.64c0-12.79 3.23-23.47 9.68-32.02 6.45-8.55 14.95-12.83 25.5-12.83 2.85 0 17.56 2.46 44.12 7.36v-6.03h24.58v274.26Zm-24.58-83.24V159.12c-19.61-1.49-31.03-2.23-34.25-2.23-13.65 0-20.48 8.33-20.48 24.99v116.27c0 16.66 6.82 24.99 20.48 24.99h34.25ZM1443.15 324.03c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25Z"), R(H, "fill", "#fff"), R(B, "filter", "url(#a)"), a(O, "d", "M1161.4 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65H1161.4c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), R(O, "fill", "#2bc0d3"), R($, "filter", "url(#b)"), a(Q, "d", "M1443.21 398.49h-103.92c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h103.92c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), R(Q, "fill", "#2bc0d3"), R(V, "filter", "url(#c)"), a(ee, "d", "M1384.38 62.05H824.22c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h560.16c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), R(ee, "fill", "#2bc0d3"), a(te, "d", "M794.81 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1413.79 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z"), R(te, "fill", "#2bc0d3"), R(K, "filter", "url(#d)"), q(e, ne);
    },
    m(M, le) {
      x(M, e, le), u(e, n), u(n, r), u(r, i), u(r, s), u(r, o), u(r, c), u(r, l), u(n, h), u(h, f), u(h, g), u(h, p), u(h, _), u(h, y), u(n, m), u(m, v), u(m, w), u(m, b), u(m, I), u(m, C), u(n, E), u(E, D), u(E, T), u(E, A), u(E, P), u(E, F), u(e, B), u(B, H), u(e, $), u($, O), u(e, V), u(V, Q), u(e, K), u(K, ee), u(K, te);
    },
    p(M, [le]) {
      q(e, ne = Te(ce, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 1452.86 431.6" },
        le & /*$$props*/
        1 && /*$$props*/
        M[0]
      ]));
    },
    i: S,
    o: S,
    d(M) {
      M && G(e);
    }
  };
}
function qi(t, e, n) {
  return t.$$set = (r) => {
    n(0, e = L(L({}, e), z(r)));
  }, e = z(e), [e];
}
class Ki extends ke {
  constructor(e) {
    super(), se(this, e, qi, zi, ie, {});
  }
}
function Ji(t) {
  let e, n, r, i, s, o, c, l, h, f, g, p, _, y, m, v, w, b, I, C, E, D, T, A, P, F, B, H, $, O, V, Q, K, ee, te, ce = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 1324.74 431.6" },
    /*$$props*/
    t[0]
  ], ne = {};
  for (let M = 0; M < ce.length; M += 1)
    ne = L(ne, ce[M]);
  return {
    c() {
      e = d("svg"), n = d("defs"), r = d("filter"), i = d("feOffset"), s = d("feGaussianBlur"), o = d("feFlood"), c = d("feComposite"), l = d("feComposite"), h = d("filter"), f = d("feOffset"), g = d("feGaussianBlur"), p = d("feFlood"), _ = d("feComposite"), y = d("feComposite"), m = d("filter"), v = d("feOffset"), w = d("feGaussianBlur"), b = d("feFlood"), I = d("feComposite"), C = d("feComposite"), E = d("filter"), D = d("feOffset"), T = d("feGaussianBlur"), A = d("feFlood"), P = d("feComposite"), F = d("feComposite"), B = d("g"), H = d("path"), $ = d("g"), O = d("path"), V = d("g"), Q = d("path"), K = d("path"), ee = d("g"), te = d("path"), a(s, "result", "blur"), a(s, "stdDeviation", "19.31"), a(o, "flood-color", "#34c4e7"), a(o, "flood-opacity", ".75"), a(c, "in2", "blur"), a(c, "operator", "in"), a(l, "in", "SourceGraphic"), a(r, "id", "a"), a(r, "filterUnits", "userSpaceOnUse"), a(g, "result", "blur-2"), a(g, "stdDeviation", "19.31"), a(p, "flood-color", "#34c4e7"), a(p, "flood-opacity", ".75"), a(_, "in2", "blur-2"), a(_, "operator", "in"), a(y, "in", "SourceGraphic"), a(h, "id", "b"), a(h, "filterUnits", "userSpaceOnUse"), a(w, "result", "blur-3"), a(w, "stdDeviation", "19.31"), a(b, "flood-color", "#34c4e7"), a(b, "flood-opacity", ".75"), a(I, "in2", "blur-3"), a(I, "operator", "in"), a(C, "in", "SourceGraphic"), a(m, "id", "c"), a(m, "filterUnits", "userSpaceOnUse"), a(T, "result", "blur-4"), a(T, "stdDeviation", "19.31"), a(A, "flood-color", "#34c4e7"), a(A, "flood-opacity", ".75"), a(P, "in2", "blur-4"), a(P, "operator", "in"), a(F, "in", "SourceGraphic"), a(E, "id", "d"), a(E, "filterUnits", "userSpaceOnUse"), a(H, "d", "M509.35 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h499.7c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), R(H, "fill", "#2bc0d3"), R(B, "filter", "url(#a)"), a(O, "d", "M1029.94 398.49H627.91c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h402.03c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), R(O, "fill", "#2bc0d3"), R($, "filter", "url(#b)"), a(Q, "d", "M1256.26 62.05H606.1c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h650.15c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"), R(Q, "fill", "#2bc0d3"), a(K, "d", "M576.69 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1285.67 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z"), R(K, "fill", "#2bc0d3"), R(V, "filter", "url(#c)"), a(te, "d", "M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM630.33 132.11l-43.56 215.35-18.06 84.13h-24.39l18.24-84.13-44.68-215.35h25.5l30.9 170.94 31.28-170.94h24.76ZM764.75 349.25h-24.76V158.67l-54.55 1.79v188.8h-24.76V132.11h24.76v6.03c9.68-1.49 19.42-3.05 29.23-4.69 11.92-1.79 21.72-2.68 29.42-2.68 13.78 0 20.66 8.11 20.66 24.33v194.15ZM906.05 324.03c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25ZM1041.77 203.53h-24.39v-44.86l-45.61 1.79v188.8h-24.76V132.11h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43ZM1176.19 406.38c0 16.81-7.01 25.22-21.04 25.22h-58.83c-14.27 0-21.41-10.64-21.41-31.91 0-2.53.09-6.29.28-11.27.19-4.99.28-8.59.28-10.82h24.39v28.79h51.75v-57.13h-40.77c-11.05 0-20.23-4.42-27.55-13.28-7.32-8.85-10.98-19.97-10.98-33.36V175.64c0-12.79 3.23-23.47 9.68-32.02 6.45-8.55 14.95-12.83 25.5-12.83 2.85 0 17.56 2.46 44.12 7.36v-6.03h24.58v274.26Zm-24.58-83.24V159.12c-19.61-1.49-31.03-2.23-34.25-2.23-13.65 0-20.48 8.33-20.48 24.99v116.27c0 16.66 6.82 24.99 20.48 24.99h34.25ZM1318.98 132.11l-43.56 215.35-18.06 84.13h-24.39l18.24-84.13-44.68-215.35h25.5l30.9 170.94 31.28-170.94h24.76Z"), R(te, "fill", "#fff"), R(ee, "filter", "url(#d)"), q(e, ne);
    },
    m(M, le) {
      x(M, e, le), u(e, n), u(n, r), u(r, i), u(r, s), u(r, o), u(r, c), u(r, l), u(n, h), u(h, f), u(h, g), u(h, p), u(h, _), u(h, y), u(n, m), u(m, v), u(m, w), u(m, b), u(m, I), u(m, C), u(n, E), u(E, D), u(E, T), u(E, A), u(E, P), u(E, F), u(e, B), u(B, H), u(e, $), u($, O), u(e, V), u(V, Q), u(V, K), u(e, ee), u(ee, te);
    },
    p(M, [le]) {
      q(e, ne = Te(ce, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 1324.74 431.6" },
        le & /*$$props*/
        1 && /*$$props*/
        M[0]
      ]));
    },
    i: S,
    o: S,
    d(M) {
      M && G(e);
    }
  };
}
function Xi(t, e, n) {
  return t.$$set = (r) => {
    n(0, e = L(L({}, e), z(r)));
  }, e = z(e), [e];
}
class Yi extends ke {
  constructor(e) {
    super(), se(this, e, Xi, Ji, ie, {});
  }
}
function Qi(t) {
  let e, n, r, i, s, o, c, l, h, f, g, p, _, y, m, v, w, b, I, C, E, D;
  return i = new Fi({ props: { style: "height: 2rem" } }), c = new ji({ props: { style: "height: 2rem" } }), f = new Zi({ props: { style: "height: 2rem" } }), _ = new Ki({ props: { style: "height: 2rem" } }), v = new Yi({ props: { style: "height: 2rem" } }), I = new xi({
    props: {
      style: "width: max-content; height: max-content"
    }
  }), {
    c() {
      e = N("div"), n = N("section"), r = N("a"), de(i.$$.fragment), s = ae(), o = N("a"), de(c.$$.fragment), l = ae(), h = N("a"), de(f.$$.fragment), g = ae(), p = N("a"), de(_.$$.fragment), y = ae(), m = N("a"), de(v.$$.fragment), w = ae(), b = N("div"), de(I.$$.fragment), this.c = S, a(r, "href", "/jukebox"), a(r, "class", "page-icon"), a(o, "href", "/turtle"), a(o, "class", "page-icon"), a(h, "href", "/analyser"), a(h, "class", "page-icon"), a(p, "href", "/storage"), a(p, "class", "page-icon"), a(m, "href", "/home"), a(m, "class", "page-icon"), a(n, "class", "popover"), mt(
        n,
        "slidein",
        /*isToggled*/
        t[0]
      ), a(b, "class", "portal-button"), mt(
        b,
        "rotate-180",
        /*isToggled*/
        t[0]
      );
    },
    m(T, A) {
      x(T, e, A), u(e, n), u(n, r), ue(i, r, null), u(n, s), u(n, o), ue(c, o, null), u(n, l), u(n, h), ue(f, h, null), u(n, g), u(n, p), ue(_, p, null), u(n, y), u(n, m), ue(v, m, null), u(e, w), u(e, b), ue(I, b, null), C = !0, E || (D = [
        ve(
          n,
          "mouseleave",
          /*mouseleave_handler*/
          t[1]
        ),
        ve(
          b,
          "mousedown",
          /*mousedown_handler*/
          t[2]
        )
      ], E = !0);
    },
    p(T, [A]) {
      (!C || A & /*isToggled*/
      1) && mt(
        n,
        "slidein",
        /*isToggled*/
        T[0]
      ), (!C || A & /*isToggled*/
      1) && mt(
        b,
        "rotate-180",
        /*isToggled*/
        T[0]
      );
    },
    i(T) {
      C || (Z(i.$$.fragment, T), Z(c.$$.fragment, T), Z(f.$$.fragment, T), Z(_.$$.fragment, T), Z(v.$$.fragment, T), Z(I.$$.fragment, T), C = !0);
    },
    o(T) {
      J(i.$$.fragment, T), J(c.$$.fragment, T), J(f.$$.fragment, T), J(_.$$.fragment, T), J(v.$$.fragment, T), J(I.$$.fragment, T), C = !1;
    },
    d(T) {
      T && G(e), oe(i), oe(c), oe(f), oe(_), oe(v), oe(I), E = !1, Ee(D);
    }
  };
}
function es(t, e, n) {
  let r = !1;
  return [r, () => n(0, r = !1), () => n(0, r = !r)];
}
class ts extends ct {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = "<style>.portal-button{margin-left:1rem;margin-right:0.5rem;transition:300ms;width:1.75rem;height:1.75rem}.rotate-180{transform:rotate(180deg)}.popover{background-color:rgb(13 29 48 / var(--tw-bg-opacity));position:absolute;height:calc(100vh - 3.5rem);width:13rem;transition-duration:200ms;transition-property:transform;top:3.5rem;left:-15rem;transform-origin:top left;transform:scale(0.9);overflow:hidden}.slidein{left:0;transform:scale(1)}.page-icon{height:2rem;width:auto;margin-top:1rem;margin-left:0.5rem;margin-right:0.5rem;display:flex;justify-content:center}</style>", se(
      this,
      {
        target: this.shadowRoot,
        props: $t(this.attributes),
        customElement: !0
      },
      es,
      Qi,
      ie,
      {},
      null
    ), e && e.target && x(e.target, this, e.anchor);
  }
}
customElements.define("mcs-portal", ts);
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
const gr = function(t) {
  const e = [];
  let n = 0;
  for (let r = 0; r < t.length; r++) {
    let i = t.charCodeAt(r);
    i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192, e[n++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < t.length && (t.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023), e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128) : (e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128);
  }
  return e;
}, ns = function(t) {
  const e = [];
  let n = 0, r = 0;
  for (; n < t.length; ) {
    const i = t[n++];
    if (i < 128)
      e[r++] = String.fromCharCode(i);
    else if (i > 191 && i < 224) {
      const s = t[n++];
      e[r++] = String.fromCharCode((i & 31) << 6 | s & 63);
    } else if (i > 239 && i < 365) {
      const s = t[n++], o = t[n++], c = t[n++], l = ((i & 7) << 18 | (s & 63) << 12 | (o & 63) << 6 | c & 63) - 65536;
      e[r++] = String.fromCharCode(55296 + (l >> 10)), e[r++] = String.fromCharCode(56320 + (l & 1023));
    } else {
      const s = t[n++], o = t[n++];
      e[r++] = String.fromCharCode((i & 15) << 12 | (s & 63) << 6 | o & 63);
    }
  }
  return e.join("");
}, mr = {
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
  encodeByteArray(t, e) {
    if (!Array.isArray(t))
      throw Error("encodeByteArray takes an array as a parameter");
    this.init_();
    const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [];
    for (let i = 0; i < t.length; i += 3) {
      const s = t[i], o = i + 1 < t.length, c = o ? t[i + 1] : 0, l = i + 2 < t.length, h = l ? t[i + 2] : 0, f = s >> 2, g = (s & 3) << 4 | c >> 4;
      let p = (c & 15) << 2 | h >> 6, _ = h & 63;
      l || (_ = 64, o || (p = 64)), r.push(n[f], n[g], n[p], n[_]);
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
  encodeString(t, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(gr(t), e);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString(t, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : ns(this.decodeStringToByteArray(t, e));
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
  decodeStringToByteArray(t, e) {
    this.init_();
    const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [];
    for (let i = 0; i < t.length; ) {
      const s = n[t.charAt(i++)], c = i < t.length ? n[t.charAt(i)] : 0;
      ++i;
      const h = i < t.length ? n[t.charAt(i)] : 64;
      ++i;
      const g = i < t.length ? n[t.charAt(i)] : 64;
      if (++i, s == null || c == null || h == null || g == null)
        throw new rs();
      const p = s << 2 | c >> 4;
      if (r.push(p), h !== 64) {
        const _ = c << 4 & 240 | h >> 2;
        if (r.push(_), g !== 64) {
          const y = h << 6 & 192 | g;
          r.push(y);
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
      for (let t = 0; t < this.ENCODED_VALS.length; t++)
        this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t, t >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t);
    }
  }
};
class rs extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const is = function(t) {
  const e = gr(t);
  return mr.encodeByteArray(e, !0);
}, Pt = function(t) {
  return is(t).replace(/\./g, "");
}, _r = function(t) {
  try {
    return mr.decodeString(t, !0);
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
function ss() {
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
const os = () => ss().__FIREBASE_DEFAULTS__, as = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const t = process.env.__FIREBASE_DEFAULTS__;
  if (t)
    return JSON.parse(t);
}, cs = () => {
  if (typeof document > "u")
    return;
  let t;
  try {
    t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const e = t && _r(t[1]);
  return e && JSON.parse(e);
}, Ft = () => {
  try {
    return os() || as() || cs();
  } catch (t) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
    return;
  }
}, vr = (t) => {
  var e, n;
  return (n = (e = Ft()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || n === void 0 ? void 0 : n[t];
}, ls = (t) => {
  const e = vr(t);
  if (!e)
    return;
  const n = e.lastIndexOf(":");
  if (n <= 0 || n + 1 === e.length)
    throw new Error(`Invalid host ${e} with no separate hostname and port!`);
  const r = parseInt(e.substring(n + 1), 10);
  return e[0] === "[" ? [e.substring(1, n - 1), r] : [e.substring(0, n), r];
}, br = () => {
  var t;
  return (t = Ft()) === null || t === void 0 ? void 0 : t.config;
}, wr = (t) => {
  var e;
  return (e = Ft()) === null || e === void 0 ? void 0 : e[`_${t}`];
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
class us {
  constructor() {
    this.reject = () => {
    }, this.resolve = () => {
    }, this.promise = new Promise((e, n) => {
      this.resolve = e, this.reject = n;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  wrapCallback(e) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r), typeof e == "function" && (this.promise.catch(() => {
      }), e.length === 1 ? e(n) : e(n, r));
    };
  }
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
function hs(t, e) {
  if (t.uid)
    throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
  const n = {
    alg: "none",
    type: "JWT"
  }, r = e || "demo-project", i = t.iat || 0, s = t.sub || t.user_id;
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = Object.assign({
    // Set all required fields to decent defaults
    iss: `https://securetoken.google.com/${r}`,
    aud: r,
    iat: i,
    exp: i + 3600,
    auth_time: i,
    sub: s,
    user_id: s,
    firebase: {
      sign_in_provider: "custom",
      identities: {}
    }
  }, t), c = "";
  return [
    Pt(JSON.stringify(n)),
    Pt(JSON.stringify(o)),
    c
  ].join(".");
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
function X() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function ds() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X());
}
function fs() {
  var t;
  const e = (t = Ft()) === null || t === void 0 ? void 0 : t.forceEnvironment;
  if (e === "node")
    return !0;
  if (e === "browser")
    return !1;
  try {
    return Object.prototype.toString.call(global.process) === "[object process]";
  } catch {
    return !1;
  }
}
function ps() {
  const t = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function gs() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function ms() {
  const t = X();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function _s() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function vs() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module", i = self.indexedDB.open(r);
      i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0);
      }, i.onupgradeneeded = () => {
        n = !1;
      }, i.onerror = () => {
        var s;
        e(((s = i.error) === null || s === void 0 ? void 0 : s.message) || "");
      };
    } catch (n) {
      e(n);
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
const bs = "FirebaseError";
class Ce extends Error {
  constructor(e, n, r) {
    super(n), this.code = e, this.customData = r, this.name = bs, Object.setPrototypeOf(this, Ce.prototype), Error.captureStackTrace && Error.captureStackTrace(this, lt.prototype.create);
  }
}
class lt {
  constructor(e, n, r) {
    this.service = e, this.serviceName = n, this.errors = r;
  }
  create(e, ...n) {
    const r = n[0] || {}, i = `${this.service}/${e}`, s = this.errors[e], o = s ? ws(s, r) : "Error", c = `${this.serviceName}: ${o} (${i}).`;
    return new Ce(i, c, r);
  }
}
function ws(t, e) {
  return t.replace(ys, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const ys = /\{\$([^}]+)}/g;
function Is(t) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e))
      return !1;
  return !0;
}
function Nt(t, e) {
  if (t === e)
    return !0;
  const n = Object.keys(t), r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i))
      return !1;
    const s = t[i], o = e[i];
    if (Mn(s) && Mn(o)) {
      if (!Nt(s, o))
        return !1;
    } else if (s !== o)
      return !1;
  }
  for (const i of r)
    if (!n.includes(i))
      return !1;
  return !0;
}
function Mn(t) {
  return t !== null && typeof t == "object";
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
function ut(t) {
  const e = [];
  for (const [n, r] of Object.entries(t))
    Array.isArray(r) ? r.forEach((i) => {
      e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
    }) : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return e.length ? "&" + e.join("&") : "";
}
function Es(t, e) {
  const n = new Ts(t, e);
  return n.subscribe.bind(n);
}
class Ts {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  constructor(e, n) {
    this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = n, this.task.then(() => {
      e(this);
    }).catch((r) => {
      this.error(r);
    });
  }
  next(e) {
    this.forEachObserver((n) => {
      n.next(e);
    });
  }
  error(e) {
    this.forEachObserver((n) => {
      n.error(e);
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
  subscribe(e, n, r) {
    let i;
    if (e === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    ks(e, [
      "next",
      "error",
      "complete"
    ]) ? i = e : i = {
      next: e,
      error: n,
      complete: r
    }, i.next === void 0 && (i.next = Zt), i.error === void 0 && (i.error = Zt), i.complete === void 0 && (i.complete = Zt);
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
      for (let n = 0; n < this.observers.length; n++)
        this.sendOne(n, e);
  }
  // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.
  sendOne(e, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          n(this.observers[e]);
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
function ks(t, e) {
  if (typeof t != "object" || t === null)
    return !1;
  for (const n of e)
    if (n in t && typeof t[n] == "function")
      return !0;
  return !1;
}
function Zt() {
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
function he(t) {
  return t && t._delegate ? t._delegate : t;
}
class Ve {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(e, n, r) {
    this.name = e, this.instanceFactory = n, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
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
const Le = "[DEFAULT]";
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
class Cs {
  constructor(e, n) {
    this.name = e, this.container = n, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const r = new us();
      if (this.instancesDeferred.set(n, r), this.isInitialized(n) || this.shouldAutoInitialize())
        try {
          const i = this.getOrInitializeService({
            instanceIdentifier: n
          });
          i && r.resolve(i);
        } catch {
        }
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    var n;
    const r = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier), i = (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
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
      if (Ss(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Le });
        } catch {
        }
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
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
  clearInstance(e = Le) {
    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e);
  }
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => "_delete" in n).map((n) => n._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = Le) {
    return this.instances.has(e);
  }
  getOptions(e = Le) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e, r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const c = this.normalizeInstanceIdentifier(s);
      r === c && o.resolve(i);
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
  onInit(e, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n), s = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : /* @__PURE__ */ new Set();
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
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(e, n);
        } catch {
        }
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e);
    if (!r && this.component && (r = this.component.instanceFactory(this.container, {
      instanceIdentifier: Rs(e),
      options: n
    }), this.instances.set(e, r), this.instancesOptions.set(e, n), this.invokeOnInitCallbacks(r, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {
      }
    return r || null;
  }
  normalizeInstanceIdentifier(e = Le) {
    return this.component ? this.component.multipleInstances ? e : Le : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function Rs(t) {
  return t === Le ? void 0 : t;
}
function Ss(t) {
  return t.instantiationMode === "EAGER";
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
class As {
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
    const n = this.getProvider(e.name);
    if (n.isComponentSet())
      throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
    n.setComponent(e);
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
    const n = new Cs(e, this);
    return this.providers.set(e, n), n;
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
var U;
(function(t) {
  t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT";
})(U || (U = {}));
const Os = {
  debug: U.DEBUG,
  verbose: U.VERBOSE,
  info: U.INFO,
  warn: U.WARN,
  error: U.ERROR,
  silent: U.SILENT
}, Ps = U.INFO, Ns = {
  [U.DEBUG]: "log",
  [U.VERBOSE]: "log",
  [U.INFO]: "info",
  [U.WARN]: "warn",
  [U.ERROR]: "error"
}, Ds = (t, e, ...n) => {
  if (e < t.logLevel)
    return;
  const r = new Date().toISOString(), i = Ns[e];
  if (i)
    console[i](`[${r}]  ${t.name}:`, ...n);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class yr {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = Ps, this._logHandler = Ds, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in U))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? Os[e] : e;
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
    this._userLogHandler && this._userLogHandler(this, U.DEBUG, ...e), this._logHandler(this, U.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, U.VERBOSE, ...e), this._logHandler(this, U.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, U.INFO, ...e), this._logHandler(this, U.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, U.WARN, ...e), this._logHandler(this, U.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, U.ERROR, ...e), this._logHandler(this, U.ERROR, ...e);
  }
}
const Ms = (t, e) => e.some((n) => t instanceof n);
let Un, Ln;
function Us() {
  return Un || (Un = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Ls() {
  return Ln || (Ln = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const Ir = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap();
function xs(t) {
  const e = new Promise((n, r) => {
    const i = () => {
      t.removeEventListener("success", s), t.removeEventListener("error", o);
    }, s = () => {
      n(De(t.result)), i();
    }, o = () => {
      r(t.error), i();
    };
    t.addEventListener("success", s), t.addEventListener("error", o);
  });
  return e.then((n) => {
    n instanceof IDBCursor && Ir.set(n, t);
  }).catch(() => {
  }), mn.set(e, t), e;
}
function Bs(t) {
  if (on.has(t))
    return;
  const e = new Promise((n, r) => {
    const i = () => {
      t.removeEventListener("complete", s), t.removeEventListener("error", o), t.removeEventListener("abort", o);
    }, s = () => {
      n(), i();
    }, o = () => {
      r(t.error || new DOMException("AbortError", "AbortError")), i();
    };
    t.addEventListener("complete", s), t.addEventListener("error", o), t.addEventListener("abort", o);
  });
  on.set(t, e);
}
let an = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return on.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || Er.get(t);
      if (e === "store")
        return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return De(t[e]);
  },
  set(t, e, n) {
    return t[e] = n, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function $s(t) {
  an = t(an);
}
function Fs(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...n) {
    const r = t.call(qt(this), e, ...n);
    return Er.set(r, e.sort ? e.sort() : [e]), De(r);
  } : Ls().includes(t) ? function(...e) {
    return t.apply(qt(this), e), De(Ir.get(this));
  } : function(...e) {
    return De(t.apply(qt(this), e));
  };
}
function Vs(t) {
  return typeof t == "function" ? Fs(t) : (t instanceof IDBTransaction && Bs(t), Ms(t, Us()) ? new Proxy(t, an) : t);
}
function De(t) {
  if (t instanceof IDBRequest)
    return xs(t);
  if (zt.has(t))
    return zt.get(t);
  const e = Vs(t);
  return e !== t && (zt.set(t, e), mn.set(e, t)), e;
}
const qt = (t) => mn.get(t);
function Hs(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e), c = De(o);
  return r && o.addEventListener("upgradeneeded", (l) => {
    r(De(o.result), l.oldVersion, l.newVersion, De(o.transaction), l);
  }), n && o.addEventListener("blocked", (l) => n(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    l.oldVersion,
    l.newVersion,
    l
  )), c.then((l) => {
    s && l.addEventListener("close", () => s()), i && l.addEventListener("versionchange", (h) => i(h.oldVersion, h.newVersion, h));
  }).catch(() => {
  }), c;
}
const js = ["get", "getKey", "getAll", "getAllKeys", "count"], Gs = ["put", "add", "delete", "clear"], Kt = /* @__PURE__ */ new Map();
function xn(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (Kt.get(e))
    return Kt.get(e);
  const n = e.replace(/FromIndex$/, ""), r = e !== n, i = Gs.includes(n);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || js.includes(n))
  )
    return;
  const s = async function(o, ...c) {
    const l = this.transaction(o, i ? "readwrite" : "readonly");
    let h = l.store;
    return r && (h = h.index(c.shift())), (await Promise.all([
      h[n](...c),
      i && l.done
    ]))[0];
  };
  return Kt.set(e, s), s;
}
$s((t) => ({
  ...t,
  get: (e, n, r) => xn(e, n) || t.get(e, n, r),
  has: (e, n) => !!xn(e, n) || t.has(e, n)
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
class Ws {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((n) => {
      if (Zs(n)) {
        const r = n.getImmediate();
        return `${r.library}/${r.version}`;
      } else
        return null;
    }).filter((n) => n).join(" ");
  }
}
function Zs(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const cn = "@firebase/app", Bn = "0.9.11";
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
const He = new yr("@firebase/app"), zs = "@firebase/app-compat", qs = "@firebase/analytics-compat", Ks = "@firebase/analytics", Js = "@firebase/app-check-compat", Xs = "@firebase/app-check", Ys = "@firebase/auth", Qs = "@firebase/auth-compat", eo = "@firebase/database", to = "@firebase/database-compat", no = "@firebase/functions", ro = "@firebase/functions-compat", io = "@firebase/installations", so = "@firebase/installations-compat", oo = "@firebase/messaging", ao = "@firebase/messaging-compat", co = "@firebase/performance", lo = "@firebase/performance-compat", uo = "@firebase/remote-config", ho = "@firebase/remote-config-compat", fo = "@firebase/storage", po = "@firebase/storage-compat", go = "@firebase/firestore", mo = "@firebase/firestore-compat", _o = "firebase", vo = "9.22.1";
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
const ln = "[DEFAULT]", bo = {
  [cn]: "fire-core",
  [zs]: "fire-core-compat",
  [Ks]: "fire-analytics",
  [qs]: "fire-analytics-compat",
  [Xs]: "fire-app-check",
  [Js]: "fire-app-check-compat",
  [Ys]: "fire-auth",
  [Qs]: "fire-auth-compat",
  [eo]: "fire-rtdb",
  [to]: "fire-rtdb-compat",
  [no]: "fire-fn",
  [ro]: "fire-fn-compat",
  [io]: "fire-iid",
  [so]: "fire-iid-compat",
  [oo]: "fire-fcm",
  [ao]: "fire-fcm-compat",
  [co]: "fire-perf",
  [lo]: "fire-perf-compat",
  [uo]: "fire-rc",
  [ho]: "fire-rc-compat",
  [fo]: "fire-gcs",
  [po]: "fire-gcs-compat",
  [go]: "fire-fst",
  [mo]: "fire-fst-compat",
  "fire-js": "fire-js",
  [_o]: "fire-js-all"
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
const Dt = /* @__PURE__ */ new Map(), un = /* @__PURE__ */ new Map();
function wo(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    He.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, n);
  }
}
function Je(t) {
  const e = t.name;
  if (un.has(e))
    return He.debug(`There were multiple attempts to register component ${e}.`), !1;
  un.set(e, t);
  for (const n of Dt.values())
    wo(n, t);
  return !0;
}
function _n(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), t.container.getProvider(e);
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
const yo = {
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
}, Me = new lt("app", "Firebase", yo);
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
class Io {
  constructor(e, n, r) {
    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, n), this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new Ve(
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
      throw Me.create("app-deleted", { appName: this._name });
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
const Ye = vo;
function Tr(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const r = Object.assign({ name: ln, automaticDataCollectionEnabled: !1 }, e), i = r.name;
  if (typeof i != "string" || !i)
    throw Me.create("bad-app-name", {
      appName: String(i)
    });
  if (n || (n = br()), !n)
    throw Me.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const s = Dt.get(i);
  if (s) {
    if (Nt(n, s.options) && Nt(r, s.config))
      return s;
    throw Me.create("duplicate-app", { appName: i });
  }
  const o = new As(i);
  for (const l of un.values())
    o.addComponent(l);
  const c = new Io(n, r, o);
  return Dt.set(i, c), c;
}
function vn(t = ln) {
  const e = Dt.get(t);
  if (!e && t === ln && br())
    return Tr();
  if (!e)
    throw Me.create("no-app", { appName: t });
  return e;
}
function Ue(t, e, n) {
  var r;
  let i = (r = bo[t]) !== null && r !== void 0 ? r : t;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//), o = e.match(/\s|\//);
  if (s || o) {
    const c = [
      `Unable to register library "${i}" with version "${e}":`
    ];
    s && c.push(`library name "${i}" contains illegal characters (whitespace or "/")`), s && o && c.push("and"), o && c.push(`version name "${e}" contains illegal characters (whitespace or "/")`), He.warn(c.join(" "));
    return;
  }
  Je(new Ve(
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
const Eo = "firebase-heartbeat-database", To = 1, st = "firebase-heartbeat-store";
let Jt = null;
function kr() {
  return Jt || (Jt = Hs(Eo, To, {
    upgrade: (t, e) => {
      switch (e) {
        case 0:
          t.createObjectStore(st);
      }
    }
  }).catch((t) => {
    throw Me.create("idb-open", {
      originalErrorMessage: t.message
    });
  })), Jt;
}
async function ko(t) {
  try {
    return await (await kr()).transaction(st).objectStore(st).get(Cr(t));
  } catch (e) {
    if (e instanceof Ce)
      He.warn(e.message);
    else {
      const n = Me.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message
      });
      He.warn(n.message);
    }
  }
}
async function $n(t, e) {
  try {
    const r = (await kr()).transaction(st, "readwrite");
    await r.objectStore(st).put(e, Cr(t)), await r.done;
  } catch (n) {
    if (n instanceof Ce)
      He.warn(n.message);
    else {
      const r = Me.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message
      });
      He.warn(r.message);
    }
  }
}
function Cr(t) {
  return `${t.name}!${t.options.appId}`;
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
const Co = 1024, Ro = 30 * 24 * 60 * 60 * 1e3;
class So {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const n = this.container.getProvider("app").getImmediate();
    this._storage = new Oo(n), this._heartbeatsCachePromise = this._storage.read().then((r) => (this._heartbeatsCache = r, r));
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), r = Fn();
    if (this._heartbeatsCache === null && (this._heartbeatsCache = await this._heartbeatsCachePromise), !(this._heartbeatsCache.lastSentHeartbeatDate === r || this._heartbeatsCache.heartbeats.some((i) => i.date === r)))
      return this._heartbeatsCache.heartbeats.push({ date: r, agent: n }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((i) => {
        const s = new Date(i.date).valueOf();
        return Date.now() - s <= Ro;
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
    const e = Fn(), { heartbeatsToSend: n, unsentEntries: r } = Ao(this._heartbeatsCache.heartbeats), i = Pt(JSON.stringify({ version: 2, heartbeats: n }));
    return this._heartbeatsCache.lastSentHeartbeatDate = e, r.length > 0 ? (this._heartbeatsCache.heartbeats = r, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i;
  }
}
function Fn() {
  return new Date().toISOString().substring(0, 10);
}
function Ao(t, e = Co) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if (s.dates.push(i.date), Vn(n) > e) {
        s.dates.pop();
        break;
      }
    } else if (n.push({
      agent: i.agent,
      dates: [i.date]
    }), Vn(n) > e) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return {
    heartbeatsToSend: n,
    unsentEntries: r
  };
}
class Oo {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return _s() ? vs().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    return await this._canUseIndexedDBPromise ? await ko(this.app) || { heartbeats: [] } : { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return $n(this.app, {
        lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats
      });
    } else
      return;
  }
  // add heartbeats
  async add(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return $n(this.app, {
        lastSentHeartbeatDate: (n = e.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
        heartbeats: [
          ...i.heartbeats,
          ...e.heartbeats
        ]
      });
    } else
      return;
  }
}
function Vn(t) {
  return Pt(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: t })
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
function Po(t) {
  Je(new Ve(
    "platform-logger",
    (e) => new Ws(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), Je(new Ve(
    "heartbeat",
    (e) => new So(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), Ue(cn, Bn, t), Ue(cn, Bn, "esm2017"), Ue("fire-js", "");
}
Po("");
var No = "firebase", Do = "9.22.1";
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
Ue(No, Do, "app");
function bn(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function Rr() {
  return {
    [
      "dependent-sdk-initialized-before-auth"
      /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
    ]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const Mo = Rr, Sr = new lt("auth", "Firebase", Rr());
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
const Mt = new yr("@firebase/auth");
function Uo(t, ...e) {
  Mt.logLevel <= U.WARN && Mt.warn(`Auth (${Ye}): ${t}`, ...e);
}
function It(t, ...e) {
  Mt.logLevel <= U.ERROR && Mt.error(`Auth (${Ye}): ${t}`, ...e);
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
function _e(t, ...e) {
  throw wn(t, ...e);
}
function ge(t, ...e) {
  return wn(t, ...e);
}
function Ar(t, e, n) {
  const r = Object.assign(Object.assign({}, Mo()), { [e]: n });
  return new lt("auth", "Firebase", r).create(e, {
    appName: t.name
  });
}
function Lo(t, e, n) {
  const r = n;
  if (!(e instanceof r))
    throw r.name !== e.constructor.name && _e(
      t,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), Ar(t, "argument-error", `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
}
function wn(t, ...e) {
  if (typeof t != "string") {
    const n = e[0], r = [...e.slice(1)];
    return r[0] && (r[0].appName = t.name), t._errorFactory.create(n, ...r);
  }
  return Sr.create(t, ...e);
}
function k(t, e, ...n) {
  if (!t)
    throw wn(e, ...n);
}
function be(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw It(e), new Error(e);
}
function ye(t, e) {
  t || be(e);
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
function hn() {
  var t;
  return typeof self < "u" && ((t = self.location) === null || t === void 0 ? void 0 : t.href) || "";
}
function xo() {
  return Hn() === "http:" || Hn() === "https:";
}
function Hn() {
  var t;
  return typeof self < "u" && ((t = self.location) === null || t === void 0 ? void 0 : t.protocol) || null;
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
function Bo() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (xo() || ps() || "connection" in navigator) ? navigator.onLine : !0;
}
function $o() {
  if (typeof navigator > "u")
    return null;
  const t = navigator;
  return (
    // Most reliable, but only supported in Chrome/Firefox.
    t.languages && t.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    t.language || // Couldn't determine language.
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
class ht {
  constructor(e, n) {
    this.shortDelay = e, this.longDelay = n, ye(n > e, "Short delay should be less than long delay!"), this.isMobile = ds() || gs();
  }
  get() {
    return Bo() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
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
function yn(t, e) {
  ye(t.emulator, "Emulator should always be set here");
  const { url: n } = t.emulator;
  return e ? `${n}${e.startsWith("/") ? e.slice(1) : e}` : n;
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
  static initialize(e, n, r) {
    this.fetchImpl = e, n && (this.headersImpl = n), r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl)
      return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self)
      return self.fetch;
    be("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl)
      return this.headersImpl;
    if (typeof self < "u" && "Headers" in self)
      return self.Headers;
    be("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl)
      return this.responseImpl;
    if (typeof self < "u" && "Response" in self)
      return self.Response;
    be("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
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
const Fo = {
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
const Vo = new ht(3e4, 6e4);
function Pr(t, e) {
  return t.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId }) : e;
}
async function dt(t, e, n, r, i = {}) {
  return Nr(t, i, async () => {
    let s = {}, o = {};
    r && (e === "GET" ? o = r : s = {
      body: JSON.stringify(r)
    });
    const c = ut(Object.assign({ key: t.config.apiKey }, o)).slice(1), l = await t._getAdditionalHeaders();
    return l[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/json", t.languageCode && (l[
      "X-Firebase-Locale"
      /* HttpHeader.X_FIREBASE_LOCALE */
    ] = t.languageCode), Or.fetch()(Dr(t, t.config.apiHost, n, c), Object.assign({
      method: e,
      headers: l,
      referrerPolicy: "no-referrer"
    }, s));
  });
}
async function Nr(t, e, n) {
  t._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, Fo), e);
  try {
    const i = new jo(t), s = await Promise.race([
      n(),
      i.promise
    ]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ("needConfirmation" in o)
      throw _t(t, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o))
      return o;
    {
      const c = s.ok ? o.errorMessage : o.error.message, [l, h] = c.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw _t(t, "credential-already-in-use", o);
      if (l === "EMAIL_EXISTS")
        throw _t(t, "email-already-in-use", o);
      if (l === "USER_DISABLED")
        throw _t(t, "user-disabled", o);
      const f = r[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (h)
        throw Ar(t, f, h);
      _e(t, f);
    }
  } catch (i) {
    if (i instanceof Ce)
      throw i;
    _e(t, "network-request-failed", { message: String(i) });
  }
}
async function Ho(t, e, n, r, i = {}) {
  const s = await dt(t, e, n, r, i);
  return "mfaPendingCredential" in s && _e(t, "multi-factor-auth-required", {
    _serverResponse: s
  }), s;
}
function Dr(t, e, n, r) {
  const i = `${e}${n}?${r}`;
  return t.config.emulator ? yn(t.config, i) : `${t.config.apiScheme}://${i}`;
}
class jo {
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((n, r) => {
      this.timer = setTimeout(() => r(ge(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), Vo.get());
    });
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function _t(t, e, n) {
  const r = {
    appName: t.name
  };
  n.email && (r.email = n.email), n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = ge(t, e, r);
  return i.customData._tokenResponse = n, i;
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
async function Go(t, e) {
  return dt(t, "POST", "/v1/accounts:delete", e);
}
async function Wo(t, e) {
  return dt(t, "POST", "/v1/accounts:lookup", e);
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
function nt(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function Zo(t, e = !1) {
  const n = he(t), r = await n.getIdToken(e), i = Vt(r);
  k(
    i && i.exp && i.auth_time && i.iat,
    n.auth,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const s = typeof i.firebase == "object" ? i.firebase : void 0, o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: nt(Xt(i.auth_time)),
    issuedAtTime: nt(Xt(i.iat)),
    expirationTime: nt(Xt(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null
  };
}
function Xt(t) {
  return Number(t) * 1e3;
}
function Vt(t) {
  const [e, n, r] = t.split(".");
  if (e === void 0 || n === void 0 || r === void 0)
    return It("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = _r(n);
    return i ? JSON.parse(i) : (It("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return It("Caught error parsing JWT payload as JSON", i == null ? void 0 : i.toString()), null;
  }
}
function zo(t) {
  const e = Vt(t);
  return k(
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), k(
    typeof e.exp < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), k(
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
async function ot(t, e, n = !1) {
  if (n)
    return e;
  try {
    return await e;
  } catch (r) {
    throw r instanceof Ce && qo(r) && t.auth.currentUser === t && await t.auth.signOut(), r;
  }
}
function qo({ code: t }) {
  return t === "auth/user-disabled" || t === "auth/user-token-expired";
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
class Ko {
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
    var n;
    if (e) {
      const r = this.errorBackoff;
      return this.errorBackoff = Math.min(
        this.errorBackoff * 2,
        96e4
        /* Duration.RETRY_BACKOFF_MAX */
      ), r;
    } else {
      this.errorBackoff = 3e4;
      const i = ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0 ? n : 0) - Date.now() - 3e5;
      return Math.max(0, i);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning)
      return;
    const n = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
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
class Mr {
  constructor(e, n) {
    this.createdAt = e, this.lastLoginAt = n, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = nt(this.lastLoginAt), this.creationTime = nt(this.createdAt);
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
async function Ut(t) {
  var e;
  const n = t.auth, r = await t.getIdToken(), i = await ot(t, Wo(n, { idToken: r }));
  k(
    i == null ? void 0 : i.users.length,
    n,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const s = i.users[0];
  t._notifyReloadListener(s);
  const o = !((e = s.providerUserInfo) === null || e === void 0) && e.length ? Yo(s.providerUserInfo) : [], c = Xo(t.providerData, o), l = t.isAnonymous, h = !(t.email && s.passwordHash) && !(c != null && c.length), f = l ? h : !1, g = {
    uid: s.localId,
    displayName: s.displayName || null,
    photoURL: s.photoUrl || null,
    email: s.email || null,
    emailVerified: s.emailVerified || !1,
    phoneNumber: s.phoneNumber || null,
    tenantId: s.tenantId || null,
    providerData: c,
    metadata: new Mr(s.createdAt, s.lastLoginAt),
    isAnonymous: f
  };
  Object.assign(t, g);
}
async function Jo(t) {
  const e = he(t);
  await Ut(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function Xo(t, e) {
  return [...t.filter((r) => !e.some((i) => i.providerId === r.providerId)), ...e];
}
function Yo(t) {
  return t.map((e) => {
    var { providerId: n } = e, r = bn(e, ["providerId"]);
    return {
      providerId: n,
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
async function Qo(t, e) {
  const n = await Nr(t, {}, async () => {
    const r = ut({
      grant_type: "refresh_token",
      refresh_token: e
    }).slice(1), { tokenApiHost: i, apiKey: s } = t.config, o = Dr(t, i, "/v1/token", `key=${s}`), c = await t._getAdditionalHeaders();
    return c[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded", Or.fetch()(o, {
      method: "POST",
      headers: c,
      body: r
    });
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token
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
class at {
  constructor() {
    this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    k(
      e.idToken,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), k(
      typeof e.idToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), k(
      typeof e.refreshToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const n = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : zo(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
  }
  async getToken(e, n = !1) {
    return k(
      !this.accessToken || this.refreshToken,
      e,
      "user-token-expired"
      /* AuthErrorCode.TOKEN_EXPIRED */
    ), !n && this.accessToken && !this.isExpired ? this.accessToken : this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null;
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, n) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await Qo(e, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(e, n, r) {
    this.refreshToken = n || null, this.accessToken = e || null, this.expirationTime = Date.now() + r * 1e3;
  }
  static fromJSON(e, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n, o = new at();
    return r && (k(typeof r == "string", "internal-error", {
      appName: e
    }), o.refreshToken = r), i && (k(typeof i == "string", "internal-error", {
      appName: e
    }), o.accessToken = i), s && (k(typeof s == "number", "internal-error", {
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
    return Object.assign(new at(), this.toJSON());
  }
  _performRefresh() {
    return be("not implemented");
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
function Re(t, e) {
  k(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class $e {
  constructor(e) {
    var { uid: n, auth: r, stsTokenManager: i } = e, s = bn(e, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase", this.proactiveRefresh = new Ko(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = n, this.auth = r, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = s.displayName || null, this.email = s.email || null, this.emailVerified = s.emailVerified || !1, this.phoneNumber = s.phoneNumber || null, this.photoURL = s.photoURL || null, this.isAnonymous = s.isAnonymous || !1, this.tenantId = s.tenantId || null, this.providerData = s.providerData ? [...s.providerData] : [], this.metadata = new Mr(s.createdAt || void 0, s.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const n = await ot(this, this.stsTokenManager.getToken(this.auth, e));
    return k(
      n,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.accessToken !== n && (this.accessToken = n, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), n;
  }
  getIdTokenResult(e) {
    return Zo(this, e);
  }
  reload() {
    return Jo(this);
  }
  _assign(e) {
    this !== e && (k(
      this.uid === e.uid,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((n) => Object.assign({}, n)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const n = new $e(Object.assign(Object.assign({}, this), { auth: e, stsTokenManager: this.stsTokenManager._clone() }));
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(e) {
    k(
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
  async _updateTokensIfNecessary(e, n = !1) {
    let r = !1;
    e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), r = !0), n && await Ut(this), await this.auth._persistUserIfCurrent(this), r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const e = await this.getIdToken();
    return await ot(this, Go(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
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
  static _fromJSON(e, n) {
    var r, i, s, o, c, l, h, f;
    const g = (r = n.displayName) !== null && r !== void 0 ? r : void 0, p = (i = n.email) !== null && i !== void 0 ? i : void 0, _ = (s = n.phoneNumber) !== null && s !== void 0 ? s : void 0, y = (o = n.photoURL) !== null && o !== void 0 ? o : void 0, m = (c = n.tenantId) !== null && c !== void 0 ? c : void 0, v = (l = n._redirectEventId) !== null && l !== void 0 ? l : void 0, w = (h = n.createdAt) !== null && h !== void 0 ? h : void 0, b = (f = n.lastLoginAt) !== null && f !== void 0 ? f : void 0, { uid: I, emailVerified: C, isAnonymous: E, providerData: D, stsTokenManager: T } = n;
    k(
      I && T,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const A = at.fromJSON(this.name, T);
    k(
      typeof I == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), Re(g, e.name), Re(p, e.name), k(
      typeof C == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), k(
      typeof E == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), Re(_, e.name), Re(y, e.name), Re(m, e.name), Re(v, e.name), Re(w, e.name), Re(b, e.name);
    const P = new $e({
      uid: I,
      auth: e,
      email: p,
      emailVerified: C,
      displayName: g,
      isAnonymous: E,
      photoURL: y,
      phoneNumber: _,
      tenantId: m,
      stsTokenManager: A,
      createdAt: w,
      lastLoginAt: b
    });
    return D && Array.isArray(D) && (P.providerData = D.map((F) => Object.assign({}, F))), v && (P._redirectEventId = v), P;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(e, n, r = !1) {
    const i = new at();
    i.updateFromServerResponse(n);
    const s = new $e({
      uid: n.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: r
    });
    return await Ut(s), s;
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
const jn = /* @__PURE__ */ new Map();
function we(t) {
  ye(t instanceof Function, "Expected a class definition");
  let e = jn.get(t);
  return e ? (ye(e instanceof t, "Instance stored in cache mismatched with class"), e) : (e = new t(), jn.set(t, e), e);
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
class Ur {
  constructor() {
    this.type = "NONE", this.storage = {};
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, n) {
    this.storage[e] = n;
  }
  async _get(e) {
    const n = this.storage[e];
    return n === void 0 ? null : n;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, n) {
  }
  _removeListener(e, n) {
  }
}
Ur.type = "NONE";
const Gn = Ur;
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
function Et(t, e, n) {
  return `firebase:${t}:${e}:${n}`;
}
class Ze {
  constructor(e, n, r) {
    this.persistence = e, this.auth = n, this.userKey = r;
    const { config: i, name: s } = this.auth;
    this.fullUserKey = Et(this.userKey, i.apiKey, s), this.fullPersistenceKey = Et("persistence", i.apiKey, s), this.boundEventHandler = n._onStorageEvent.bind(n), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? $e._fromJSON(this.auth, e) : null;
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
    const n = await this.getCurrentUser();
    if (await this.removeCurrentUser(), this.persistence = e, n)
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, n, r = "authUser") {
    if (!n.length)
      return new Ze(we(Gn), e, r);
    const i = (await Promise.all(n.map(async (h) => {
      if (await h._isAvailable())
        return h;
    }))).filter((h) => h);
    let s = i[0] || we(Gn);
    const o = Et(r, e.config.apiKey, e.name);
    let c = null;
    for (const h of n)
      try {
        const f = await h._get(o);
        if (f) {
          const g = $e._fromJSON(e, f);
          h !== s && (c = g), s = h;
          break;
        }
      } catch {
      }
    const l = i.filter((h) => h._shouldAllowMigration);
    return !s._shouldAllowMigration || !l.length ? new Ze(s, e, r) : (s = l[0], c && await s._set(o, c.toJSON()), await Promise.all(n.map(async (h) => {
      if (h !== s)
        try {
          await h._remove(o);
        } catch {
        }
    })), new Ze(s, e, r));
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
function Wn(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (Br(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (Lr(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (Fr(e))
    return "Blackberry";
  if (Vr(e))
    return "Webos";
  if (In(e))
    return "Safari";
  if ((e.includes("chrome/") || xr(e)) && !e.includes("edge/"))
    return "Chrome";
  if ($r(e))
    return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, r = t.match(n);
    if ((r == null ? void 0 : r.length) === 2)
      return r[1];
  }
  return "Other";
}
function Lr(t = X()) {
  return /firefox\//i.test(t);
}
function In(t = X()) {
  const e = t.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function xr(t = X()) {
  return /crios\//i.test(t);
}
function Br(t = X()) {
  return /iemobile/i.test(t);
}
function $r(t = X()) {
  return /android/i.test(t);
}
function Fr(t = X()) {
  return /blackberry/i.test(t);
}
function Vr(t = X()) {
  return /webos/i.test(t);
}
function Ht(t = X()) {
  return /iphone|ipad|ipod/i.test(t) || /macintosh/i.test(t) && /mobile/i.test(t);
}
function ea(t = X()) {
  var e;
  return Ht(t) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone);
}
function ta() {
  return ms() && document.documentMode === 10;
}
function Hr(t = X()) {
  return Ht(t) || $r(t) || Vr(t) || Fr(t) || /windows phone/i.test(t) || Br(t);
}
function na() {
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
function jr(t, e = []) {
  let n;
  switch (t) {
    case "Browser":
      n = Wn(X());
      break;
    case "Worker":
      n = `${Wn(X())}-${t}`;
      break;
    default:
      n = t;
  }
  const r = e.length ? e.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${Ye}/${r}`;
}
async function Gr(t, e) {
  return dt(t, "GET", "/v2/recaptchaConfig", Pr(t, e));
}
function Zn(t) {
  return t !== void 0 && t.enterprise !== void 0;
}
class Wr {
  constructor(e) {
    if (this.siteKey = "", this.emailPasswordEnabled = !1, e.recaptchaKey === void 0)
      throw new Error("recaptchaKey undefined");
    this.siteKey = e.recaptchaKey.split("/")[3], this.emailPasswordEnabled = e.recaptchaEnforcementState.some((n) => n.provider === "EMAIL_PASSWORD_PROVIDER" && n.enforcementState !== "OFF");
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
function ra() {
  var t, e;
  return (e = (t = document.getElementsByTagName("head")) === null || t === void 0 ? void 0 : t[0]) !== null && e !== void 0 ? e : document;
}
function Zr(t) {
  return new Promise((e, n) => {
    const r = document.createElement("script");
    r.setAttribute("src", t), r.onload = e, r.onerror = (i) => {
      const s = ge(
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
      s.customData = i, n(s);
    }, r.type = "text/javascript", r.charset = "UTF-8", ra().appendChild(r);
  });
}
function ia(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
const sa = "https://www.google.com/recaptcha/enterprise.js?render=", oa = "recaptcha-enterprise", aa = "NO_RECAPTCHA";
class ca {
  /**
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   */
  constructor(e) {
    this.type = oa, this.auth = ft(e);
  }
  /**
   * Executes the verification process.
   *
   * @returns A Promise for a token that can be used to assert the validity of a request.
   */
  async verify(e = "verify", n = !1) {
    async function r(s) {
      if (!n) {
        if (s.tenantId == null && s._agentRecaptchaConfig != null)
          return s._agentRecaptchaConfig.siteKey;
        if (s.tenantId != null && s._tenantRecaptchaConfigs[s.tenantId] !== void 0)
          return s._tenantRecaptchaConfigs[s.tenantId].siteKey;
      }
      return new Promise(async (o, c) => {
        Gr(s, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }).then((l) => {
          if (l.recaptchaKey === void 0)
            c(new Error("recaptcha Enterprise site key undefined"));
          else {
            const h = new Wr(l);
            return s.tenantId == null ? s._agentRecaptchaConfig = h : s._tenantRecaptchaConfigs[s.tenantId] = h, o(h.siteKey);
          }
        }).catch((l) => {
          c(l);
        });
      });
    }
    function i(s, o, c) {
      const l = window.grecaptcha;
      Zn(l) ? l.enterprise.ready(() => {
        l.enterprise.execute(s, { action: e }).then((h) => {
          o(h);
        }).catch(() => {
          o(aa);
        });
      }) : c(Error("No reCAPTCHA enterprise script loaded."));
    }
    return new Promise((s, o) => {
      r(this.auth).then((c) => {
        if (!n && Zn(window.grecaptcha))
          i(c, s, o);
        else {
          if (typeof window > "u") {
            o(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          Zr(sa + c).then(() => {
            i(c, s, o);
          }).catch((l) => {
            o(l);
          });
        }
      }).catch((c) => {
        o(c);
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
class la {
  constructor(e) {
    this.auth = e, this.queue = [];
  }
  pushCallback(e, n) {
    const r = (s) => new Promise((o, c) => {
      try {
        const l = e(s);
        o(l);
      } catch (l) {
        c(l);
      }
    });
    r.onAbort = n, this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e)
      return;
    const n = [];
    try {
      for (const r of this.queue)
        await r(e), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const i of n)
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
class ua {
  constructor(e, n, r, i) {
    this.app = e, this.heartbeatServiceProvider = n, this.appCheckServiceProvider = r, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new zn(this), this.idTokenSubscription = new zn(this), this.beforeStateQueue = new la(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Sr, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion;
  }
  _initializeWithPersistence(e, n) {
    return n && (this._popupRedirectResolver = we(n)), this._initializationPromise = this.queue(async () => {
      var r, i;
      if (!this._deleted && (this.persistenceManager = await Ze.create(this, e), !this._deleted)) {
        if (!((r = this._popupRedirectResolver) === null || r === void 0) && r._shouldInitProactively)
          try {
            await this._popupRedirectResolver._initialize(this);
          } catch {
          }
        await this.initializeCurrentUser(n), this.lastNotifiedUid = ((i = this.currentUser) === null || i === void 0 ? void 0 : i.uid) || null, !this._deleted && (this._isInitialized = !0);
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
    var n;
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r, s = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const o = (n = this.redirectUser) === null || n === void 0 ? void 0 : n._redirectEventId, c = i == null ? void 0 : i._redirectEventId, l = await this.tryRedirectSignIn(e);
      (!o || o === c) && (l != null && l.user) && (i = l.user, s = !0);
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
    return k(
      this._popupRedirectResolver,
      this,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i);
  }
  async tryRedirectSignIn(e) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await Ut(e);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = $o();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    const n = e ? he(e) : null;
    return n && k(
      n.auth.config.apiKey === this.config.apiKey,
      this,
      "invalid-user-token"
      /* AuthErrorCode.INVALID_AUTH */
    ), this._updateCurrentUser(n && n._clone(this));
  }
  async _updateCurrentUser(e, n = !1) {
    if (!this._deleted)
      return e && k(
        this.tenantId === e.tenantId,
        this,
        "tenant-id-mismatch"
        /* AuthErrorCode.TENANT_ID_MISMATCH */
      ), n || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
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
      await this.assertedPersistence.setPersistence(we(e));
    });
  }
  async initializeRecaptchaConfig() {
    const e = await Gr(this, {
      clientType: "CLIENT_TYPE_WEB",
      version: "RECAPTCHA_ENTERPRISE"
      /* RecaptchaVersion.ENTERPRISE */
    }), n = new Wr(e);
    this.tenantId == null ? this._agentRecaptchaConfig = n : this._tenantRecaptchaConfigs[this.tenantId] = n, n.emailPasswordEnabled && new ca(this).verify();
  }
  _getRecaptchaConfig() {
    return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new lt("auth", "Firebase", e());
  }
  onAuthStateChanged(e, n, r) {
    return this.registerStateListener(this.authStateSubscription, e, n, r);
  }
  beforeAuthStateChanged(e, n) {
    return this.beforeStateQueue.pushCallback(e, n);
  }
  onIdTokenChanged(e, n, r) {
    return this.registerStateListener(this.idTokenSubscription, e, n, r);
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
  async _setRedirectUser(e, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const n = e && we(e) || this._popupRedirectResolver;
      k(
        n,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await Ze.create(
        this,
        [we(n._redirectPersistence)],
        "redirectUser"
        /* KeyName.REDIRECT_USER */
      ), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var n, r;
    return this._isInitialized && await this.queue(async () => {
    }), ((n = this._currentUser) === null || n === void 0 ? void 0 : n._redirectEventId) === e ? this._currentUser : ((r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId) === e ? this.redirectUser : null;
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
    var e, n;
    if (!this._isInitialized)
      return;
    this.idTokenSubscription.next(this.currentUser);
    const r = (n = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !== null && n !== void 0 ? n : null;
    this.lastNotifiedUid !== r && (this.lastNotifiedUid = r, this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, n, r, i) {
    if (this._deleted)
      return () => {
      };
    const s = typeof n == "function" ? n : n.next.bind(n), o = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    return k(
      o,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), o.then(() => s(this.currentUser)), typeof n == "function" ? e.addObserver(n, r, i) : e.addObserver(n);
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
    return k(
      this.persistenceManager,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.persistenceManager;
  }
  _logFramework(e) {
    !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = jr(this.config.clientPlatform, this._getFrameworks()));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var e;
    const n = {
      [
        "X-Client-Version"
        /* HttpHeader.X_CLIENT_VERSION */
      ]: this.clientVersion
    };
    this.app.options.appId && (n[
      "X-Firebase-gmpid"
      /* HttpHeader.X_FIREBASE_GMPID */
    ] = this.app.options.appId);
    const r = await ((e = this.heartbeatServiceProvider.getImmediate({
      optional: !0
    })) === null || e === void 0 ? void 0 : e.getHeartbeatsHeader());
    r && (n[
      "X-Firebase-Client"
      /* HttpHeader.X_FIREBASE_CLIENT */
    ] = r);
    const i = await this._getAppCheckToken();
    return i && (n[
      "X-Firebase-AppCheck"
      /* HttpHeader.X_FIREBASE_APP_CHECK */
    ] = i), n;
  }
  async _getAppCheckToken() {
    var e;
    const n = await ((e = this.appCheckServiceProvider.getImmediate({ optional: !0 })) === null || e === void 0 ? void 0 : e.getToken());
    return n != null && n.error && Uo(`Error while retrieving App Check token: ${n.error}`), n == null ? void 0 : n.token;
  }
}
function ft(t) {
  return he(t);
}
class zn {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = Es((n) => this.observer = n);
  }
  get next() {
    return k(
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
function ha(t, e) {
  const n = _n(t, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(), s = n.getOptions();
    if (Nt(s, e ?? {}))
      return i;
    _e(
      i,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return n.initialize({ options: e });
}
function da(t, e) {
  const n = (e == null ? void 0 : e.persistence) || [], r = (Array.isArray(n) ? n : [n]).map(we);
  e != null && e.errorMap && t._updateErrorMap(e.errorMap), t._initializeWithPersistence(r, e == null ? void 0 : e.popupRedirectResolver);
}
function fa(t, e, n) {
  const r = ft(t);
  k(
    r._canInitEmulator,
    r,
    "emulator-config-failed"
    /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
  ), k(
    /^https?:\/\//.test(e),
    r,
    "invalid-emulator-scheme"
    /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
  );
  const i = !!(n != null && n.disableWarnings), s = zr(e), { host: o, port: c } = pa(e), l = c === null ? "" : `:${c}`;
  r.config.emulator = { url: `${s}//${o}${l}/` }, r.settings.appVerificationDisabledForTesting = !0, r.emulatorConfig = Object.freeze({
    host: o,
    port: c,
    protocol: s.replace(":", ""),
    options: Object.freeze({ disableWarnings: i })
  }), i || ga();
}
function zr(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1);
}
function pa(t) {
  const e = zr(t), n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!n)
    return { host: "", port: null };
  const r = n[2].split("@").pop() || "", i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: qn(r.substr(s.length + 1)) };
  } else {
    const [s, o] = r.split(":");
    return { host: s, port: qn(o) };
  }
}
function qn(t) {
  if (!t)
    return null;
  const e = Number(t);
  return isNaN(e) ? null : e;
}
function ga() {
  function t() {
    const e = document.createElement("p"), n = e.style;
    e.innerText = "Running in emulator mode. Do not use with production credentials.", n.position = "fixed", n.width = "100%", n.backgroundColor = "#ffffff", n.border = ".1em solid #000000", n.color = "#b50000", n.bottom = "0px", n.left = "0px", n.margin = "0px", n.zIndex = "10000", n.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e);
  }
  typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", t) : t());
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
class qr {
  /** @internal */
  constructor(e, n) {
    this.providerId = e, this.signInMethod = n;
  }
  /**
   * Returns a JSON-serializable representation of this object.
   *
   * @returns a JSON-serializable representation of this object.
   */
  toJSON() {
    return be("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return be("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, n) {
    return be("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return be("not implemented");
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
async function ze(t, e) {
  return Ho(t, "POST", "/v1/accounts:signInWithIdp", Pr(t, e));
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
const ma = "http://localhost";
class Ie extends qr {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const n = new Ie(e.providerId, e.signInMethod);
    return e.idToken || e.accessToken ? (e.idToken && (n.idToken = e.idToken), e.accessToken && (n.accessToken = e.accessToken), e.nonce && !e.pendingToken && (n.nonce = e.nonce), e.pendingToken && (n.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (n.accessToken = e.oauthToken, n.secret = e.oauthTokenSecret) : _e(
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), n;
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
    const n = typeof e == "string" ? JSON.parse(e) : e, { providerId: r, signInMethod: i } = n, s = bn(n, ["providerId", "signInMethod"]);
    if (!r || !i)
      return null;
    const o = new Ie(r, i);
    return o.idToken = s.idToken || void 0, o.accessToken = s.accessToken || void 0, o.secret = s.secret, o.nonce = s.nonce, o.pendingToken = s.pendingToken || null, o;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    const n = this.buildRequest();
    return ze(e, n);
  }
  /** @internal */
  _linkToIdToken(e, n) {
    const r = this.buildRequest();
    return r.idToken = n, ze(e, r);
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    const n = this.buildRequest();
    return n.autoCreate = !1, ze(e, n);
  }
  buildRequest() {
    const e = {
      requestUri: ma,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken), this.accessToken && (n.access_token = this.accessToken), this.secret && (n.oauth_token_secret = this.secret), n.providerId = this.providerId, this.nonce && !this.pendingToken && (n.nonce = this.nonce), e.postBody = ut(n);
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
class En {
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
class Qe extends En {
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
class qe extends Qe {
  /**
   * Creates an {@link OAuthCredential} from a JSON string or a plain object.
   * @param json - A plain object or a JSON string
   */
  static credentialFromJSON(e) {
    const n = typeof e == "string" ? JSON.parse(e) : e;
    return k(
      "providerId" in n && "signInMethod" in n,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), Ie._fromParams(n);
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
    return k(
      e.idToken || e.accessToken,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), Ie._fromParams(Object.assign(Object.assign({}, e), { providerId: this.providerId, signInMethod: this.providerId }));
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return qe.oauthCredentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return qe.oauthCredentialFromTaggedObject(e.customData || {});
  }
  static oauthCredentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: n, oauthAccessToken: r, oauthTokenSecret: i, pendingToken: s, nonce: o, providerId: c } = e;
    if (!r && !i && !n && !s || !c)
      return null;
    try {
      return new qe(c)._credential({
        idToken: n,
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
class Se extends Qe {
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
    return Ie._fromParams({
      providerId: Se.PROVIDER_ID,
      signInMethod: Se.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Se.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Se.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return Se.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Se.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Se.PROVIDER_ID = "facebook.com";
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
class Ae extends Qe {
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
  static credential(e, n) {
    return Ie._fromParams({
      providerId: Ae.PROVIDER_ID,
      signInMethod: Ae.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: n
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Ae.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Ae.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: n, oauthAccessToken: r } = e;
    if (!n && !r)
      return null;
    try {
      return Ae.credential(n, r);
    } catch {
      return null;
    }
  }
}
Ae.GOOGLE_SIGN_IN_METHOD = "google.com";
Ae.PROVIDER_ID = "google.com";
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
class Oe extends Qe {
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
    return Ie._fromParams({
      providerId: Oe.PROVIDER_ID,
      signInMethod: Oe.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Oe.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Oe.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return Oe.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Oe.GITHUB_SIGN_IN_METHOD = "github.com";
Oe.PROVIDER_ID = "github.com";
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
class Pe extends Qe {
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
  static credential(e, n) {
    return Ie._fromParams({
      providerId: Pe.PROVIDER_ID,
      signInMethod: Pe.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: n
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Pe.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Pe.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = e;
    if (!n || !r)
      return null;
    try {
      return Pe.credential(n, r);
    } catch {
      return null;
    }
  }
}
Pe.TWITTER_SIGN_IN_METHOD = "twitter.com";
Pe.PROVIDER_ID = "twitter.com";
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
class Xe {
  constructor(e) {
    this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
  }
  static async _fromIdTokenResponse(e, n, r, i = !1) {
    const s = await $e._fromIdTokenResponse(e, r, i), o = Kn(r);
    return new Xe({
      user: s,
      providerId: o,
      _tokenResponse: r,
      operationType: n
    });
  }
  static async _forOperation(e, n, r) {
    await e._updateTokensIfNecessary(
      r,
      /* reload */
      !0
    );
    const i = Kn(r);
    return new Xe({
      user: e,
      providerId: i,
      _tokenResponse: r,
      operationType: n
    });
  }
}
function Kn(t) {
  return t.providerId ? t.providerId : "phoneNumber" in t ? "phone" : null;
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
class Lt extends Ce {
  constructor(e, n, r, i) {
    var s;
    super(n.code, n.message), this.operationType = r, this.user = i, Object.setPrototypeOf(this, Lt.prototype), this.customData = {
      appName: e.name,
      tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
      _serverResponse: n.customData._serverResponse,
      operationType: r
    };
  }
  static _fromErrorAndOperation(e, n, r, i) {
    return new Lt(e, n, r, i);
  }
}
function Kr(t, e, n, r) {
  return (e === "reauthenticate" ? n._getReauthenticationResolver(t) : n._getIdTokenResponse(t)).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required" ? Lt._fromErrorAndOperation(t, s, e, r) : s;
  });
}
async function _a(t, e, n = !1) {
  const r = await ot(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
  return Xe._forOperation(t, "link", r);
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
async function va(t, e, n = !1) {
  const { auth: r } = t, i = "reauthenticate";
  try {
    const s = await ot(t, Kr(r, i, e, t), n);
    k(
      s.idToken,
      r,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const o = Vt(s.idToken);
    k(
      o,
      r,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const { sub: c } = o;
    return k(
      t.uid === c,
      r,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), Xe._forOperation(t, i, s);
  } catch (s) {
    throw (s == null ? void 0 : s.code) === "auth/user-not-found" && _e(
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
async function ba(t, e, n = !1) {
  const r = "signIn", i = await Kr(t, r, e), s = await Xe._fromIdTokenResponse(t, r, i);
  return n || await t._updateCurrentUser(s.user), s;
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
function wa(t) {
  var e, n;
  if (!t)
    return null;
  const { providerId: r } = t, i = t.rawUserInfo ? JSON.parse(t.rawUserInfo) : {}, s = t.isNewUser || t.kind === "identitytoolkit#SignupNewUserResponse";
  if (!r && (t != null && t.idToken)) {
    const o = (n = (e = Vt(t.idToken)) === null || e === void 0 ? void 0 : e.firebase) === null || n === void 0 ? void 0 : n.sign_in_provider;
    if (o) {
      const c = o !== "anonymous" && o !== "custom" ? o : null;
      return new Ke(s, c);
    }
  }
  if (!r)
    return null;
  switch (r) {
    case "facebook.com":
      return new ya(s, i);
    case "github.com":
      return new Ia(s, i);
    case "google.com":
      return new Ea(s, i);
    case "twitter.com":
      return new Ta(s, i, t.screenName || null);
    case "custom":
    case "anonymous":
      return new Ke(s, null);
    default:
      return new Ke(s, r, i);
  }
}
class Ke {
  constructor(e, n, r = {}) {
    this.isNewUser = e, this.providerId = n, this.profile = r;
  }
}
class Jr extends Ke {
  constructor(e, n, r, i) {
    super(e, n, r), this.username = i;
  }
}
class ya extends Ke {
  constructor(e, n) {
    super(e, "facebook.com", n);
  }
}
class Ia extends Jr {
  constructor(e, n) {
    super(e, "github.com", n, typeof (n == null ? void 0 : n.login) == "string" ? n == null ? void 0 : n.login : null);
  }
}
class Ea extends Ke {
  constructor(e, n) {
    super(e, "google.com", n);
  }
}
class Ta extends Jr {
  constructor(e, n, r) {
    super(e, "twitter.com", n, r);
  }
}
function ka(t) {
  const { user: e, _tokenResponse: n } = t;
  return e.isAnonymous && !n ? {
    providerId: null,
    isNewUser: !1,
    profile: null
  } : wa(n);
}
function Ca(t, e, n, r) {
  return he(t).onIdTokenChanged(e, n, r);
}
function Ra(t, e, n) {
  return he(t).beforeAuthStateChanged(e, n);
}
function Jn(t) {
  return he(t).signOut();
}
const xt = "__sak";
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
class Xr {
  constructor(e, n) {
    this.storageRetriever = e, this.type = n;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(xt, "1"), this.storage.removeItem(xt), Promise.resolve(!0)) : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, n) {
    return this.storage.setItem(e, JSON.stringify(n)), Promise.resolve();
  }
  _get(e) {
    const n = this.storage.getItem(e);
    return Promise.resolve(n ? JSON.parse(n) : null);
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
function Sa() {
  const t = X();
  return In(t) || Ht(t);
}
const Aa = 1e3, Oa = 10;
class Yr extends Xr {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, n) => this.onStorageEvent(e, n), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = Sa() && na(), this.fallbackToPolling = Hr(), this._shouldAllowMigration = !0;
  }
  forAllChangedKeys(e) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n), i = this.localCache[n];
      r !== i && e(n, i, r);
    }
  }
  onStorageEvent(e, n = !1) {
    if (!e.key) {
      this.forAllChangedKeys((o, c, l) => {
        this.notifyListeners(o, l);
      });
      return;
    }
    const r = e.key;
    if (n ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
      const o = this.storage.getItem(r);
      if (e.newValue !== o)
        e.newValue !== null ? this.storage.setItem(r, e.newValue) : this.storage.removeItem(r);
      else if (this.localCache[r] === e.newValue && !n)
        return;
    }
    const i = () => {
      const o = this.storage.getItem(r);
      !n && this.localCache[r] === o || this.notifyListeners(r, o);
    }, s = this.storage.getItem(r);
    ta() && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, Oa) : i();
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r)
      for (const i of Array.from(r))
        i(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((e, n, r) => {
        this.onStorageEvent(
          new StorageEvent("storage", {
            key: e,
            oldValue: n,
            newValue: r
          }),
          /* poll */
          !0
        );
      });
    }, Aa);
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
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(n);
  }
  _removeListener(e, n) {
    this.listeners[e] && (this.listeners[e].delete(n), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling());
  }
  // Update local cache on base operations:
  async _set(e, n) {
    await super._set(e, n), this.localCache[e] = JSON.stringify(n);
  }
  async _get(e) {
    const n = await super._get(e);
    return this.localCache[e] = JSON.stringify(n), n;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
Yr.type = "LOCAL";
const Qr = Yr;
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
class ei extends Xr {
  constructor() {
    super(
      () => window.sessionStorage,
      "SESSION"
      /* PersistenceType.SESSION */
    );
  }
  _addListener(e, n) {
  }
  _removeListener(e, n) {
  }
}
ei.type = "SESSION";
const ti = ei;
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
function Pa(t) {
  return Promise.all(t.map(async (e) => {
    try {
      return {
        fulfilled: !0,
        value: await e
      };
    } catch (n) {
      return {
        fulfilled: !1,
        reason: n
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
class jt {
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
    const n = this.receivers.find((i) => i.isListeningto(e));
    if (n)
      return n;
    const r = new jt(e);
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
    const n = e, { eventId: r, eventType: i, data: s } = n.data, o = this.handlersMap[i];
    if (!(o != null && o.size))
      return;
    n.ports[0].postMessage({
      status: "ack",
      eventId: r,
      eventType: i
    });
    const c = Array.from(o).map(async (h) => h(n.origin, s)), l = await Pa(c);
    n.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: i,
      response: l
    });
  }
  /**
   * Subscribe an event handler for a particular event.
   *
   * @param eventType - Event name to subscribe to.
   * @param eventHandler - The event handler which should receive the events.
   *
   */
  _subscribe(e, n) {
    Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = /* @__PURE__ */ new Set()), this.handlersMap[e].add(n);
  }
  /**
   * Unsubscribe an event handler from a particular event.
   *
   * @param eventType - Event name to unsubscribe from.
   * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
   *
   */
  _unsubscribe(e, n) {
    this.handlersMap[e] && n && this.handlersMap[e].delete(n), (!n || this.handlersMap[e].size === 0) && delete this.handlersMap[e], Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
jt.receivers = [];
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
function Tn(t = "", e = 10) {
  let n = "";
  for (let r = 0; r < e; r++)
    n += Math.floor(Math.random() * 10);
  return t + n;
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
class Na {
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
  async _send(e, n, r = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i)
      throw new Error(
        "connection_unavailable"
        /* _MessageError.CONNECTION_UNAVAILABLE */
      );
    let s, o;
    return new Promise((c, l) => {
      const h = Tn("", 20);
      i.port1.start();
      const f = setTimeout(() => {
        l(new Error(
          "unsupported_event"
          /* _MessageError.UNSUPPORTED_EVENT */
        ));
      }, r);
      o = {
        messageChannel: i,
        onMessage(g) {
          const p = g;
          if (p.data.eventId === h)
            switch (p.data.status) {
              case "ack":
                clearTimeout(f), s = setTimeout(
                  () => {
                    l(new Error(
                      "timeout"
                      /* _MessageError.TIMEOUT */
                    ));
                  },
                  3e3
                  /* _TimeoutDuration.COMPLETION */
                );
                break;
              case "done":
                clearTimeout(s), c(p.data.response);
                break;
              default:
                clearTimeout(f), clearTimeout(s), l(new Error(
                  "invalid_response"
                  /* _MessageError.INVALID_RESPONSE */
                ));
                break;
            }
        }
      }, this.handlers.add(o), i.port1.addEventListener("message", o.onMessage), this.target.postMessage({
        eventType: e,
        eventId: h,
        data: n
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
function me() {
  return window;
}
function Da(t) {
  me().location.href = t;
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
function ni() {
  return typeof me().WorkerGlobalScope < "u" && typeof me().importScripts == "function";
}
async function Ma() {
  if (!(navigator != null && navigator.serviceWorker))
    return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function Ua() {
  var t;
  return ((t = navigator == null ? void 0 : navigator.serviceWorker) === null || t === void 0 ? void 0 : t.controller) || null;
}
function La() {
  return ni() ? self : null;
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
const ri = "firebaseLocalStorageDb", xa = 1, Bt = "firebaseLocalStorage", ii = "fbase_key";
class pt {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, n) => {
      this.request.addEventListener("success", () => {
        e(this.request.result);
      }), this.request.addEventListener("error", () => {
        n(this.request.error);
      });
    });
  }
}
function Gt(t, e) {
  return t.transaction([Bt], e ? "readwrite" : "readonly").objectStore(Bt);
}
function Ba() {
  const t = indexedDB.deleteDatabase(ri);
  return new pt(t).toPromise();
}
function dn() {
  const t = indexedDB.open(ri, xa);
  return new Promise((e, n) => {
    t.addEventListener("error", () => {
      n(t.error);
    }), t.addEventListener("upgradeneeded", () => {
      const r = t.result;
      try {
        r.createObjectStore(Bt, { keyPath: ii });
      } catch (i) {
        n(i);
      }
    }), t.addEventListener("success", async () => {
      const r = t.result;
      r.objectStoreNames.contains(Bt) ? e(r) : (r.close(), await Ba(), e(await dn()));
    });
  });
}
async function Xn(t, e, n) {
  const r = Gt(t, !0).put({
    [ii]: e,
    value: n
  });
  return new pt(r).toPromise();
}
async function $a(t, e) {
  const n = Gt(t, !1).get(e), r = await new pt(n).toPromise();
  return r === void 0 ? null : r.value;
}
function Yn(t, e) {
  const n = Gt(t, !0).delete(e);
  return new pt(n).toPromise();
}
const Fa = 800, Va = 3;
class si {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    return this.db ? this.db : (this.db = await dn(), this.db);
  }
  async _withRetries(e) {
    let n = 0;
    for (; ; )
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (n++ > Va)
          throw r;
        this.db && (this.db.close(), this.db = void 0);
      }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return ni() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = jt._getInstance(La()), this.receiver._subscribe("keyChanged", async (e, n) => ({
      keyProcessed: (await this._poll()).includes(n.key)
    })), this.receiver._subscribe("ping", async (e, n) => [
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
    var e, n;
    if (this.activeServiceWorker = await Ma(), !this.activeServiceWorker)
      return;
    this.sender = new Na(this.activeServiceWorker);
    const r = await this.sender._send(
      "ping",
      {},
      800
      /* _TimeoutDuration.LONG_ACK */
    );
    r && !((e = r[0]) === null || e === void 0) && e.fulfilled && !((n = r[0]) === null || n === void 0) && n.value.includes(
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
    if (!(!this.sender || !this.activeServiceWorker || Ua() !== this.activeServiceWorker))
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
      const e = await dn();
      return await Xn(e, xt, "1"), await Yn(e, xt), !0;
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
  async _set(e, n) {
    return this._withPendingWrite(async () => (await this._withRetries((r) => Xn(r, e, n)), this.localCache[e] = n, this.notifyServiceWorker(e)));
  }
  async _get(e) {
    const n = await this._withRetries((r) => $a(r, e));
    return this.localCache[e] = n, n;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((n) => Yn(n, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const s = Gt(i, !1).getAll();
      return new pt(s).toPromise();
    });
    if (!e)
      return [];
    if (this.pendingWrites !== 0)
      return [];
    const n = [], r = /* @__PURE__ */ new Set();
    for (const { fbase_key: i, value: s } of e)
      r.add(i), JSON.stringify(this.localCache[i]) !== JSON.stringify(s) && (this.notifyListeners(i, s), n.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] && !r.has(i) && (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r)
      for (const i of Array.from(r))
        i(n);
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), Fa);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this._get(e)), this.listeners[e].add(n);
  }
  _removeListener(e, n) {
    this.listeners[e] && (this.listeners[e].delete(n), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
si.type = "LOCAL";
const Ha = si;
new ht(3e4, 6e4);
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
function oi(t, e) {
  return e ? we(e) : (k(
    t._popupRedirectResolver,
    t,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  ), t._popupRedirectResolver);
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
class kn extends qr {
  constructor(e) {
    super(
      "custom",
      "custom"
      /* ProviderId.CUSTOM */
    ), this.params = e;
  }
  _getIdTokenResponse(e) {
    return ze(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, n) {
    return ze(e, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(e) {
    return ze(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0
    };
    return e && (n.idToken = e), n;
  }
}
function ja(t) {
  return ba(t.auth, new kn(t), t.bypassAuthState);
}
function Ga(t) {
  const { auth: e, user: n } = t;
  return k(
    n,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), va(n, new kn(t), t.bypassAuthState);
}
async function Wa(t) {
  const { auth: e, user: n } = t;
  return k(
    n,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), _a(n, new kn(t), t.bypassAuthState);
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
class ai {
  constructor(e, n, r, i, s = !1) {
    this.auth = e, this.resolver = r, this.user = i, this.bypassAuthState = s, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(n) ? n : [n];
  }
  execute() {
    return new Promise(async (e, n) => {
      this.pendingPromise = { resolve: e, reject: n };
      try {
        this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(e) {
    const { urlResponse: n, sessionId: r, postBody: i, tenantId: s, error: o, type: c } = e;
    if (o) {
      this.reject(o);
      return;
    }
    const l = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(c)(l));
    } catch (h) {
      this.reject(h);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return ja;
      case "linkViaPopup":
      case "linkViaRedirect":
        return Wa;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return Ga;
      default:
        _e(
          this.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  resolve(e) {
    ye(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
  }
  reject(e) {
    ye(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
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
const Za = new ht(2e3, 1e4);
async function za(t, e, n) {
  const r = ft(t);
  Lo(t, e, En);
  const i = oi(r, n);
  return new Be(r, "signInViaPopup", e, i).executeNotNull();
}
class Be extends ai {
  constructor(e, n, r, i, s) {
    super(e, n, i, s), this.provider = r, this.authWindow = null, this.pollId = null, Be.currentPopupAction && Be.currentPopupAction.cancel(), Be.currentPopupAction = this;
  }
  async executeNotNull() {
    const e = await this.execute();
    return k(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), e;
  }
  async onExecution() {
    ye(this.filter.length === 1, "Popup operations only handle one event");
    const e = Tn();
    this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      // There's always one, see constructor
      e
    ), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((n) => {
      this.reject(n);
    }), this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
      n || this.reject(ge(
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
    this.reject(ge(
      this.auth,
      "cancelled-popup-request"
      /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Be.currentPopupAction = null;
  }
  pollUserCancellation() {
    const e = () => {
      var n, r;
      if (!((r = (n = this.authWindow) === null || n === void 0 ? void 0 : n.window) === null || r === void 0) && r.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null, this.reject(ge(
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
      this.pollId = window.setTimeout(e, Za.get());
    };
    e();
  }
}
Be.currentPopupAction = null;
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
const qa = "pendingRedirect", Tt = /* @__PURE__ */ new Map();
class Ka extends ai {
  constructor(e, n, r = !1) {
    super(e, [
      "signInViaRedirect",
      "linkViaRedirect",
      "reauthViaRedirect",
      "unknown"
      /* AuthEventType.UNKNOWN */
    ], n, void 0, r), this.eventId = null;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */
  async execute() {
    let e = Tt.get(this.auth._key());
    if (!e) {
      try {
        const r = await Ja(this.resolver, this.auth) ? await super.execute() : null;
        e = () => Promise.resolve(r);
      } catch (n) {
        e = () => Promise.reject(n);
      }
      Tt.set(this.auth._key(), e);
    }
    return this.bypassAuthState || Tt.set(this.auth._key(), () => Promise.resolve(null)), e();
  }
  async onAuthEvent(e) {
    if (e.type === "signInViaRedirect")
      return super.onAuthEvent(e);
    if (e.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const n = await this.auth._redirectUserForId(e.eventId);
      if (n)
        return this.user = n, super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {
  }
  cleanUp() {
  }
}
async function Ja(t, e) {
  const n = Qa(e), r = Ya(t);
  if (!await r._isAvailable())
    return !1;
  const i = await r._get(n) === "true";
  return await r._remove(n), i;
}
function Xa(t, e) {
  Tt.set(t._key(), e);
}
function Ya(t) {
  return we(t._redirectPersistence);
}
function Qa(t) {
  return Et(qa, t.config.apiKey, t.name);
}
async function ec(t, e, n = !1) {
  const r = ft(t), i = oi(r, e), o = await new Ka(r, i, n).execute();
  return o && !n && (delete o.user._redirectEventId, await r._persistUserIfCurrent(o.user), await r._setRedirectUser(null, e)), o;
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
const tc = 10 * 60 * 1e3;
class nc {
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
    let n = !1;
    return this.consumers.forEach((r) => {
      this.isEventForConsumer(e, r) && (n = !0, this.sendToConsumer(e, r), this.saveEventToCache(e));
    }), this.hasHandledPotentialRedirect || !rc(e) || (this.hasHandledPotentialRedirect = !0, n || (this.queuedRedirectEvent = e, n = !0)), n;
  }
  sendToConsumer(e, n) {
    var r;
    if (e.error && !ci(e)) {
      const i = ((r = e.error.code) === null || r === void 0 ? void 0 : r.split("auth/")[1]) || "internal-error";
      n.onError(ge(this.auth, i));
    } else
      n.onAuthEvent(e);
  }
  isEventForConsumer(e, n) {
    const r = n.eventId === null || !!e.eventId && e.eventId === n.eventId;
    return n.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= tc && this.cachedEventUids.clear(), this.cachedEventUids.has(Qn(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(Qn(e)), this.lastProcessedEventTime = Date.now();
  }
}
function Qn(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId].filter((e) => e).join("-");
}
function ci({ type: t, error: e }) {
  return t === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event";
}
function rc(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return ci(t);
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
async function ic(t, e = {}) {
  return dt(t, "GET", "/v1/projects", e);
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
const sc = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, oc = /^https?/;
async function ac(t) {
  if (t.config.emulator)
    return;
  const { authorizedDomains: e } = await ic(t);
  for (const n of e)
    try {
      if (cc(n))
        return;
    } catch {
    }
  _e(
    t,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function cc(t) {
  const e = hn(), { protocol: n, hostname: r } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const o = new URL(t);
    return o.hostname === "" && r === "" ? n === "chrome-extension:" && t.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : n === "chrome-extension:" && o.hostname === r;
  }
  if (!oc.test(n))
    return !1;
  if (sc.test(t))
    return r === t;
  const i = t.replace(/\./g, "\\.");
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
const lc = new ht(3e4, 6e4);
function er() {
  const t = me().___jsl;
  if (t != null && t.H) {
    for (const e of Object.keys(t.H))
      if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = [...t.H[e].L], t.CP)
        for (let n = 0; n < t.CP.length; n++)
          t.CP[n] = null;
  }
}
function uc(t) {
  return new Promise((e, n) => {
    var r, i, s;
    function o() {
      er(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          er(), n(ge(
            t,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: lc.get()
      });
    }
    if (!((i = (r = me().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || i === void 0) && i.Iframe)
      e(gapi.iframes.getContext());
    else if (!((s = me().gapi) === null || s === void 0) && s.load)
      o();
    else {
      const c = ia("iframefcb");
      return me()[c] = () => {
        gapi.load ? o() : n(ge(
          t,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, Zr(`https://apis.google.com/js/api.js?onload=${c}`).catch((l) => n(l));
    }
  }).catch((e) => {
    throw kt = null, e;
  });
}
let kt = null;
function hc(t) {
  return kt = kt || uc(t), kt;
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
const dc = new ht(5e3, 15e3), fc = "__/auth/iframe", pc = "emulator/auth/iframe", gc = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, mc = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function _c(t) {
  const e = t.config;
  k(
    e.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const n = e.emulator ? yn(e, pc) : `https://${t.config.authDomain}/${fc}`, r = {
    apiKey: e.apiKey,
    appName: t.name,
    v: Ye
  }, i = mc.get(t.config.apiHost);
  i && (r.eid = i);
  const s = t._getFrameworks();
  return s.length && (r.fw = s.join(",")), `${n}?${ut(r).slice(1)}`;
}
async function vc(t) {
  const e = await hc(t), n = me().gapi;
  return k(
    n,
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), e.open({
    where: document.body,
    url: _c(t),
    messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: gc,
    dontclear: !0
  }, (r) => new Promise(async (i, s) => {
    await r.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const o = ge(
      t,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), c = me().setTimeout(() => {
      s(o);
    }, dc.get());
    function l() {
      me().clearTimeout(c), i(r);
    }
    r.ping(l).then(l, () => {
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
const bc = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, wc = 500, yc = 600, Ic = "_blank", Ec = "http://localhost";
class tr {
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
function Tc(t, e, n, r = wc, i = yc) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(), o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let c = "";
  const l = Object.assign(Object.assign({}, bc), {
    width: r.toString(),
    height: i.toString(),
    top: s,
    left: o
  }), h = X().toLowerCase();
  n && (c = xr(h) ? Ic : n), Lr(h) && (e = e || Ec, l.scrollbars = "yes");
  const f = Object.entries(l).reduce((p, [_, y]) => `${p}${_}=${y},`, "");
  if (ea(h) && c !== "_self")
    return kc(e || "", c), new tr(null);
  const g = window.open(e || "", c, f);
  k(
    g,
    t,
    "popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */
  );
  try {
    g.focus();
  } catch {
  }
  return new tr(g);
}
function kc(t, e) {
  const n = document.createElement("a");
  n.href = t, n.target = e;
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), n.dispatchEvent(r);
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
const Cc = "__/auth/handler", Rc = "emulator/auth/handler", Sc = encodeURIComponent("fac");
async function nr(t, e, n, r, i, s) {
  k(
    t.config.authDomain,
    t,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  ), k(
    t.config.apiKey,
    t,
    "invalid-api-key"
    /* AuthErrorCode.INVALID_API_KEY */
  );
  const o = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: n,
    redirectUrl: r,
    v: Ye,
    eventId: i
  };
  if (e instanceof En) {
    e.setDefaultLanguage(t.languageCode), o.providerId = e.providerId || "", Is(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [f, g] of Object.entries(s || {}))
      o[f] = g;
  }
  if (e instanceof Qe) {
    const f = e.getScopes().filter((g) => g !== "");
    f.length > 0 && (o.scopes = f.join(","));
  }
  t.tenantId && (o.tid = t.tenantId);
  const c = o;
  for (const f of Object.keys(c))
    c[f] === void 0 && delete c[f];
  const l = await t._getAppCheckToken(), h = l ? `#${Sc}=${encodeURIComponent(l)}` : "";
  return `${Ac(t)}?${ut(c).slice(1)}${h}`;
}
function Ac({ config: t }) {
  return t.emulator ? yn(t, Rc) : `https://${t.authDomain}/${Cc}`;
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
const Yt = "webStorageSupport";
class Oc {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = ti, this._completeRedirectFn = ec, this._overrideRedirectResult = Xa;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, n, r, i) {
    var s;
    ye((s = this.eventManagers[e._key()]) === null || s === void 0 ? void 0 : s.manager, "_initialize() not called before _openPopup()");
    const o = await nr(e, n, r, hn(), i);
    return Tc(e, o, Tn());
  }
  async _openRedirect(e, n, r, i) {
    await this._originValidation(e);
    const s = await nr(e, n, r, hn(), i);
    return Da(s), new Promise(() => {
    });
  }
  _initialize(e) {
    const n = e._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: s } = this.eventManagers[n];
      return i ? Promise.resolve(i) : (ye(s, "If manager is not set, promise should be"), s);
    }
    const r = this.initAndGetManager(e);
    return this.eventManagers[n] = { promise: r }, r.catch(() => {
      delete this.eventManagers[n];
    }), r;
  }
  async initAndGetManager(e) {
    const n = await vc(e), r = new nc(e);
    return n.register("authEvent", (i) => (k(
      i == null ? void 0 : i.authEvent,
      e,
      "invalid-auth-event"
      /* AuthErrorCode.INVALID_AUTH_EVENT */
    ), {
      status: r.onEvent(i.authEvent) ? "ACK" : "ERROR"
      /* GapiOutcome.ERROR */
    }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = { manager: r }, this.iframes[e._key()] = n, r;
  }
  _isIframeWebStorageSupported(e, n) {
    this.iframes[e._key()].send(Yt, { type: Yt }, (i) => {
      var s;
      const o = (s = i == null ? void 0 : i[0]) === null || s === void 0 ? void 0 : s[Yt];
      o !== void 0 && n(!!o), _e(
        e,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const n = e._key();
    return this.originValidationPromises[n] || (this.originValidationPromises[n] = ac(e)), this.originValidationPromises[n];
  }
  get _shouldInitProactively() {
    return Hr() || In() || Ht();
  }
}
const Pc = Oc;
var rr = "@firebase/auth", ir = "0.23.2";
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
class Nc {
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
    const n = this.auth.onIdTokenChanged((r) => {
      e((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(e, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(e);
    n && (this.internalListeners.delete(e), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    k(
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
function Dc(t) {
  switch (t) {
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
function Mc(t) {
  Je(new Ve(
    "auth",
    (e, { options: n }) => {
      const r = e.getProvider("app").getImmediate(), i = e.getProvider("heartbeat"), s = e.getProvider("app-check-internal"), { apiKey: o, authDomain: c } = r.options;
      k(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
      const l = {
        apiKey: o,
        authDomain: c,
        clientPlatform: t,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: jr(t)
      }, h = new ua(r, i, s, l);
      return da(h, n), h;
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  ).setInstanceCreatedCallback((e, n, r) => {
    e.getProvider(
      "auth-internal"
      /* _ComponentName.AUTH_INTERNAL */
    ).initialize();
  })), Je(new Ve(
    "auth-internal",
    (e) => {
      const n = ft(e.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((r) => new Nc(r))(n);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  )), Ue(rr, ir, Dc(t)), Ue(rr, ir, "esm2017");
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
const Uc = 5 * 60, Lc = wr("authIdTokenMaxAge") || Uc;
let sr = null;
const xc = (t) => async (e) => {
  const n = e && await e.getIdTokenResult(), r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > Lc)
    return;
  const i = n == null ? void 0 : n.token;
  sr !== i && (sr = i, await fetch(t, {
    method: i ? "POST" : "DELETE",
    headers: i ? {
      Authorization: `Bearer ${i}`
    } : {}
  }));
};
function Ct(t = vn()) {
  const e = _n(t, "auth");
  if (e.isInitialized())
    return e.getImmediate();
  const n = ha(t, {
    popupRedirectResolver: Pc,
    persistence: [
      Ha,
      Qr,
      ti
    ]
  }), r = wr("authTokenSyncURL");
  if (r) {
    const s = xc(r);
    Ra(n, s, () => s(n.currentUser)), Ca(n, (o) => s(o));
  }
  const i = vr("auth");
  return i && fa(n, `http://${i}`), n;
}
Mc(
  "Browser"
  /* ClientPlatform.BROWSER */
);
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
const li = "firebasestorage.googleapis.com", ui = "storageBucket", Bc = 2 * 60 * 1e3, $c = 10 * 60 * 1e3;
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
class W extends Ce {
  /**
   * @param code - A `StorageErrorCode` string to be prefixed with 'storage/' and
   *  added to the end of the message.
   * @param message  - Error message.
   * @param status_ - Corresponding HTTP Status Code
   */
  constructor(e, n, r = 0) {
    super(Qt(e), `Firebase Storage: ${n} (${Qt(e)})`), this.status_ = r, this.customData = { serverResponse: null }, this._baseMessage = this.message, Object.setPrototypeOf(this, W.prototype);
  }
  get status() {
    return this.status_;
  }
  set status(e) {
    this.status_ = e;
  }
  /**
   * Compares a `StorageErrorCode` against this error's code, filtering out the prefix.
   */
  _codeEquals(e) {
    return Qt(e) === this.code;
  }
  /**
   * Optional response message that was added by the server.
   */
  get serverResponse() {
    return this.customData.serverResponse;
  }
  set serverResponse(e) {
    this.customData.serverResponse = e, this.customData.serverResponse ? this.message = `${this._baseMessage}
${this.customData.serverResponse}` : this.message = this._baseMessage;
  }
}
var j;
(function(t) {
  t.UNKNOWN = "unknown", t.OBJECT_NOT_FOUND = "object-not-found", t.BUCKET_NOT_FOUND = "bucket-not-found", t.PROJECT_NOT_FOUND = "project-not-found", t.QUOTA_EXCEEDED = "quota-exceeded", t.UNAUTHENTICATED = "unauthenticated", t.UNAUTHORIZED = "unauthorized", t.UNAUTHORIZED_APP = "unauthorized-app", t.RETRY_LIMIT_EXCEEDED = "retry-limit-exceeded", t.INVALID_CHECKSUM = "invalid-checksum", t.CANCELED = "canceled", t.INVALID_EVENT_NAME = "invalid-event-name", t.INVALID_URL = "invalid-url", t.INVALID_DEFAULT_BUCKET = "invalid-default-bucket", t.NO_DEFAULT_BUCKET = "no-default-bucket", t.CANNOT_SLICE_BLOB = "cannot-slice-blob", t.SERVER_FILE_WRONG_SIZE = "server-file-wrong-size", t.NO_DOWNLOAD_URL = "no-download-url", t.INVALID_ARGUMENT = "invalid-argument", t.INVALID_ARGUMENT_COUNT = "invalid-argument-count", t.APP_DELETED = "app-deleted", t.INVALID_ROOT_OPERATION = "invalid-root-operation", t.INVALID_FORMAT = "invalid-format", t.INTERNAL_ERROR = "internal-error", t.UNSUPPORTED_ENVIRONMENT = "unsupported-environment";
})(j || (j = {}));
function Qt(t) {
  return "storage/" + t;
}
function Cn() {
  const t = "An unknown error occurred, please check the error payload for server response.";
  return new W(j.UNKNOWN, t);
}
function Fc(t) {
  return new W(j.OBJECT_NOT_FOUND, "Object '" + t + "' does not exist.");
}
function Vc(t) {
  return new W(j.QUOTA_EXCEEDED, "Quota for bucket '" + t + "' exceeded, please view quota on https://firebase.google.com/pricing/.");
}
function Hc() {
  const t = "User is not authenticated, please authenticate using Firebase Authentication and try again.";
  return new W(j.UNAUTHENTICATED, t);
}
function jc() {
  return new W(j.UNAUTHORIZED_APP, "This app does not have permission to access Firebase Storage on this project.");
}
function Gc(t) {
  return new W(j.UNAUTHORIZED, "User does not have permission to access '" + t + "'.");
}
function Wc() {
  return new W(j.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.");
}
function Zc() {
  return new W(j.CANCELED, "User canceled the upload/download.");
}
function zc(t) {
  return new W(j.INVALID_URL, "Invalid URL '" + t + "'.");
}
function qc(t) {
  return new W(j.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + t + "'.");
}
function Kc() {
  return new W(j.NO_DEFAULT_BUCKET, "No default bucket found. Did you set the '" + ui + "' property when initializing the app?");
}
function Jc() {
  return new W(j.CANNOT_SLICE_BLOB, "Cannot slice blob for upload. Please retry the upload.");
}
function Xc() {
  return new W(j.NO_DOWNLOAD_URL, "The given file does not have any download URLs.");
}
function Yc(t) {
  return new W(j.UNSUPPORTED_ENVIRONMENT, `${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);
}
function fn(t) {
  return new W(j.INVALID_ARGUMENT, t);
}
function hi() {
  return new W(j.APP_DELETED, "The Firebase app was deleted.");
}
function Qc(t) {
  return new W(j.INVALID_ROOT_OPERATION, "The operation '" + t + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");
}
function rt(t, e) {
  return new W(j.INVALID_FORMAT, "String does not match format '" + t + "': " + e);
}
function et(t) {
  throw new W(j.INTERNAL_ERROR, "Internal error: " + t);
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
class re {
  constructor(e, n) {
    this.bucket = e, this.path_ = n;
  }
  get path() {
    return this.path_;
  }
  get isRoot() {
    return this.path.length === 0;
  }
  fullServerUrl() {
    const e = encodeURIComponent;
    return "/b/" + e(this.bucket) + "/o/" + e(this.path);
  }
  bucketOnlyServerUrl() {
    return "/b/" + encodeURIComponent(this.bucket) + "/o";
  }
  static makeFromBucketSpec(e, n) {
    let r;
    try {
      r = re.makeFromUrl(e, n);
    } catch {
      return new re(e, "");
    }
    if (r.path === "")
      return r;
    throw qc(e);
  }
  static makeFromUrl(e, n) {
    let r = null;
    const i = "([A-Za-z0-9.\\-_]+)";
    function s(C) {
      C.path.charAt(C.path.length - 1) === "/" && (C.path_ = C.path_.slice(0, -1));
    }
    const o = "(/(.*))?$", c = new RegExp("^gs://" + i + o, "i"), l = { bucket: 1, path: 3 };
    function h(C) {
      C.path_ = decodeURIComponent(C.path);
    }
    const f = "v[A-Za-z0-9_]+", g = n.replace(/[.]/g, "\\."), p = "(/([^?#]*).*)?$", _ = new RegExp(`^https?://${g}/${f}/b/${i}/o${p}`, "i"), y = { bucket: 1, path: 3 }, m = n === li ? "(?:storage.googleapis.com|storage.cloud.google.com)" : n, v = "([^?#]*)", w = new RegExp(`^https?://${m}/${i}/${v}`, "i"), I = [
      { regex: c, indices: l, postModify: s },
      {
        regex: _,
        indices: y,
        postModify: h
      },
      {
        regex: w,
        indices: { bucket: 1, path: 2 },
        postModify: h
      }
    ];
    for (let C = 0; C < I.length; C++) {
      const E = I[C], D = E.regex.exec(e);
      if (D) {
        const T = D[E.indices.bucket];
        let A = D[E.indices.path];
        A || (A = ""), r = new re(T, A), E.postModify(r);
        break;
      }
    }
    if (r == null)
      throw zc(e);
    return r;
  }
}
class el {
  constructor(e) {
    this.promise_ = Promise.reject(e);
  }
  /** @inheritDoc */
  getPromise() {
    return this.promise_;
  }
  /** @inheritDoc */
  cancel(e = !1) {
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
function tl(t, e, n) {
  let r = 1, i = null, s = null, o = !1, c = 0;
  function l() {
    return c === 2;
  }
  let h = !1;
  function f(...v) {
    h || (h = !0, e.apply(null, v));
  }
  function g(v) {
    i = setTimeout(() => {
      i = null, t(_, l());
    }, v);
  }
  function p() {
    s && clearTimeout(s);
  }
  function _(v, ...w) {
    if (h) {
      p();
      return;
    }
    if (v) {
      p(), f.call(null, v, ...w);
      return;
    }
    if (l() || o) {
      p(), f.call(null, v, ...w);
      return;
    }
    r < 64 && (r *= 2);
    let I;
    c === 1 ? (c = 2, I = 0) : I = (r + Math.random()) * 1e3, g(I);
  }
  let y = !1;
  function m(v) {
    y || (y = !0, p(), !h && (i !== null ? (v || (c = 2), clearTimeout(i), g(0)) : v || (c = 1)));
  }
  return g(0), s = setTimeout(() => {
    o = !0, m(!0);
  }, n), m;
}
function nl(t) {
  t(!1);
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
function rl(t) {
  return t !== void 0;
}
function il(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function Rn(t) {
  return typeof t == "string" || t instanceof String;
}
function or(t) {
  return Sn() && t instanceof Blob;
}
function Sn() {
  return typeof Blob < "u" && !fs();
}
function ar(t, e, n, r) {
  if (r < e)
    throw fn(`Invalid value for '${t}'. Expected ${e} or greater.`);
  if (r > n)
    throw fn(`Invalid value for '${t}'. Expected ${n} or less.`);
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
function An(t, e, n) {
  let r = e;
  return n == null && (r = `https://${e}`), `${n}://${r}/v0${t}`;
}
function di(t) {
  const e = encodeURIComponent;
  let n = "?";
  for (const r in t)
    if (t.hasOwnProperty(r)) {
      const i = e(r) + "=" + e(t[r]);
      n = n + i + "&";
    }
  return n = n.slice(0, -1), n;
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
var Fe;
(function(t) {
  t[t.NO_ERROR = 0] = "NO_ERROR", t[t.NETWORK_ERROR = 1] = "NETWORK_ERROR", t[t.ABORT = 2] = "ABORT";
})(Fe || (Fe = {}));
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
function sl(t, e) {
  const n = t >= 500 && t < 600, i = [
    // Request Timeout: web server didn't receive full request in time.
    408,
    // Too Many Requests: you're getting rate-limited, basically.
    429
  ].indexOf(t) !== -1, s = e.indexOf(t) !== -1;
  return n || i || s;
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
class ol {
  constructor(e, n, r, i, s, o, c, l, h, f, g, p = !0) {
    this.url_ = e, this.method_ = n, this.headers_ = r, this.body_ = i, this.successCodes_ = s, this.additionalRetryCodes_ = o, this.callback_ = c, this.errorCallback_ = l, this.timeout_ = h, this.progressCallback_ = f, this.connectionFactory_ = g, this.retry = p, this.pendingConnection_ = null, this.backoffId_ = null, this.canceled_ = !1, this.appDelete_ = !1, this.promise_ = new Promise((_, y) => {
      this.resolve_ = _, this.reject_ = y, this.start_();
    });
  }
  /**
   * Actually starts the retry loop.
   */
  start_() {
    const e = (r, i) => {
      if (i) {
        r(!1, new vt(!1, null, !0));
        return;
      }
      const s = this.connectionFactory_();
      this.pendingConnection_ = s;
      const o = (c) => {
        const l = c.loaded, h = c.lengthComputable ? c.total : -1;
        this.progressCallback_ !== null && this.progressCallback_(l, h);
      };
      this.progressCallback_ !== null && s.addUploadProgressListener(o), s.send(this.url_, this.method_, this.body_, this.headers_).then(() => {
        this.progressCallback_ !== null && s.removeUploadProgressListener(o), this.pendingConnection_ = null;
        const c = s.getErrorCode() === Fe.NO_ERROR, l = s.getStatus();
        if (!c || sl(l, this.additionalRetryCodes_) && this.retry) {
          const f = s.getErrorCode() === Fe.ABORT;
          r(!1, new vt(!1, null, f));
          return;
        }
        const h = this.successCodes_.indexOf(l) !== -1;
        r(!0, new vt(h, s));
      });
    }, n = (r, i) => {
      const s = this.resolve_, o = this.reject_, c = i.connection;
      if (i.wasSuccessCode)
        try {
          const l = this.callback_(c, c.getResponse());
          rl(l) ? s(l) : s();
        } catch (l) {
          o(l);
        }
      else if (c !== null) {
        const l = Cn();
        l.serverResponse = c.getErrorText(), this.errorCallback_ ? o(this.errorCallback_(c, l)) : o(l);
      } else if (i.canceled) {
        const l = this.appDelete_ ? hi() : Zc();
        o(l);
      } else {
        const l = Wc();
        o(l);
      }
    };
    this.canceled_ ? n(!1, new vt(!1, null, !0)) : this.backoffId_ = tl(e, n, this.timeout_);
  }
  /** @inheritDoc */
  getPromise() {
    return this.promise_;
  }
  /** @inheritDoc */
  cancel(e) {
    this.canceled_ = !0, this.appDelete_ = e || !1, this.backoffId_ !== null && nl(this.backoffId_), this.pendingConnection_ !== null && this.pendingConnection_.abort();
  }
}
class vt {
  constructor(e, n, r) {
    this.wasSuccessCode = e, this.connection = n, this.canceled = !!r;
  }
}
function al(t, e) {
  e !== null && e.length > 0 && (t.Authorization = "Firebase " + e);
}
function cl(t, e) {
  t["X-Firebase-Storage-Version"] = "webjs/" + (e ?? "AppManager");
}
function ll(t, e) {
  e && (t["X-Firebase-GMPID"] = e);
}
function ul(t, e) {
  e !== null && (t["X-Firebase-AppCheck"] = e);
}
function hl(t, e, n, r, i, s, o = !0) {
  const c = di(t.urlParams), l = t.url + c, h = Object.assign({}, t.headers);
  return ll(h, e), al(h, n), cl(h, s), ul(h, r), new ol(l, t.method, h, t.body, t.successCodes, t.additionalRetryCodes, t.handler, t.errorHandler, t.timeout, t.progressCallback, i, o);
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
function dl() {
  return typeof BlobBuilder < "u" ? BlobBuilder : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : void 0;
}
function fl(...t) {
  const e = dl();
  if (e !== void 0) {
    const n = new e();
    for (let r = 0; r < t.length; r++)
      n.append(t[r]);
    return n.getBlob();
  } else {
    if (Sn())
      return new Blob(t);
    throw new W(j.UNSUPPORTED_ENVIRONMENT, "This browser doesn't seem to support creating Blobs");
  }
}
function pl(t, e, n) {
  return t.webkitSlice ? t.webkitSlice(e, n) : t.mozSlice ? t.mozSlice(e, n) : t.slice ? t.slice(e, n) : null;
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
function gl(t) {
  if (typeof atob > "u")
    throw Yc("base-64");
  return atob(t);
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
const pe = {
  /**
   * Indicates the string should be interpreted "raw", that is, as normal text.
   * The string will be interpreted as UTF-16, then uploaded as a UTF-8 byte
   * sequence.
   * Example: The string 'Hello! \\ud83d\\ude0a' becomes the byte sequence
   * 48 65 6c 6c 6f 21 20 f0 9f 98 8a
   */
  RAW: "raw",
  /**
   * Indicates the string should be interpreted as base64-encoded data.
   * Padding characters (trailing '='s) are optional.
   * Example: The string 'rWmO++E6t7/rlw==' becomes the byte sequence
   * ad 69 8e fb e1 3a b7 bf eb 97
   */
  BASE64: "base64",
  /**
   * Indicates the string should be interpreted as base64url-encoded data.
   * Padding characters (trailing '='s) are optional.
   * Example: The string 'rWmO--E6t7_rlw==' becomes the byte sequence
   * ad 69 8e fb e1 3a b7 bf eb 97
   */
  BASE64URL: "base64url",
  /**
   * Indicates the string is a data URL, such as one obtained from
   * canvas.toDataURL().
   * Example: the string 'data:application/octet-stream;base64,aaaa'
   * becomes the byte sequence
   * 69 a6 9a
   * (the content-type "application/octet-stream" is also applied, but can
   * be overridden in the metadata object).
   */
  DATA_URL: "data_url"
};
class en {
  constructor(e, n) {
    this.data = e, this.contentType = n || null;
  }
}
function ml(t, e) {
  switch (t) {
    case pe.RAW:
      return new en(fi(e));
    case pe.BASE64:
    case pe.BASE64URL:
      return new en(pi(t, e));
    case pe.DATA_URL:
      return new en(vl(e), bl(e));
  }
  throw Cn();
}
function fi(t) {
  const e = [];
  for (let n = 0; n < t.length; n++) {
    let r = t.charCodeAt(n);
    if (r <= 127)
      e.push(r);
    else if (r <= 2047)
      e.push(192 | r >> 6, 128 | r & 63);
    else if ((r & 64512) === 55296)
      if (!(n < t.length - 1 && (t.charCodeAt(n + 1) & 64512) === 56320))
        e.push(239, 191, 189);
      else {
        const s = r, o = t.charCodeAt(++n);
        r = 65536 | (s & 1023) << 10 | o & 1023, e.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | r & 63);
      }
    else
      (r & 64512) === 56320 ? e.push(239, 191, 189) : e.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | r & 63);
  }
  return new Uint8Array(e);
}
function _l(t) {
  let e;
  try {
    e = decodeURIComponent(t);
  } catch {
    throw rt(pe.DATA_URL, "Malformed data URL.");
  }
  return fi(e);
}
function pi(t, e) {
  switch (t) {
    case pe.BASE64: {
      const i = e.indexOf("-") !== -1, s = e.indexOf("_") !== -1;
      if (i || s)
        throw rt(t, "Invalid character '" + (i ? "-" : "_") + "' found: is it base64url encoded?");
      break;
    }
    case pe.BASE64URL: {
      const i = e.indexOf("+") !== -1, s = e.indexOf("/") !== -1;
      if (i || s)
        throw rt(t, "Invalid character '" + (i ? "+" : "/") + "' found: is it base64 encoded?");
      e = e.replace(/-/g, "+").replace(/_/g, "/");
      break;
    }
  }
  let n;
  try {
    n = gl(e);
  } catch (i) {
    throw i.message.includes("polyfill") ? i : rt(t, "Invalid character found");
  }
  const r = new Uint8Array(n.length);
  for (let i = 0; i < n.length; i++)
    r[i] = n.charCodeAt(i);
  return r;
}
class gi {
  constructor(e) {
    this.base64 = !1, this.contentType = null;
    const n = e.match(/^data:([^,]+)?,/);
    if (n === null)
      throw rt(pe.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
    const r = n[1] || null;
    r != null && (this.base64 = wl(r, ";base64"), this.contentType = this.base64 ? r.substring(0, r.length - 7) : r), this.rest = e.substring(e.indexOf(",") + 1);
  }
}
function vl(t) {
  const e = new gi(t);
  return e.base64 ? pi(pe.BASE64, e.rest) : _l(e.rest);
}
function bl(t) {
  return new gi(t).contentType;
}
function wl(t, e) {
  return t.length >= e.length ? t.substring(t.length - e.length) === e : !1;
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
class Ne {
  constructor(e, n) {
    let r = 0, i = "";
    or(e) ? (this.data_ = e, r = e.size, i = e.type) : e instanceof ArrayBuffer ? (n ? this.data_ = new Uint8Array(e) : (this.data_ = new Uint8Array(e.byteLength), this.data_.set(new Uint8Array(e))), r = this.data_.length) : e instanceof Uint8Array && (n ? this.data_ = e : (this.data_ = new Uint8Array(e.length), this.data_.set(e)), r = e.length), this.size_ = r, this.type_ = i;
  }
  size() {
    return this.size_;
  }
  type() {
    return this.type_;
  }
  slice(e, n) {
    if (or(this.data_)) {
      const r = this.data_, i = pl(r, e, n);
      return i === null ? null : new Ne(i);
    } else {
      const r = new Uint8Array(this.data_.buffer, e, n - e);
      return new Ne(r, !0);
    }
  }
  static getBlob(...e) {
    if (Sn()) {
      const n = e.map((r) => r instanceof Ne ? r.data_ : r);
      return new Ne(fl.apply(null, n));
    } else {
      const n = e.map((o) => Rn(o) ? ml(pe.RAW, o).data : o.data_);
      let r = 0;
      n.forEach((o) => {
        r += o.byteLength;
      });
      const i = new Uint8Array(r);
      let s = 0;
      return n.forEach((o) => {
        for (let c = 0; c < o.length; c++)
          i[s++] = o[c];
      }), new Ne(i, !0);
    }
  }
  uploadData() {
    return this.data_;
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
function mi(t) {
  let e;
  try {
    e = JSON.parse(t);
  } catch {
    return null;
  }
  return il(e) ? e : null;
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
function yl(t) {
  if (t.length === 0)
    return null;
  const e = t.lastIndexOf("/");
  return e === -1 ? "" : t.slice(0, e);
}
function Il(t, e) {
  const n = e.split("/").filter((r) => r.length > 0).join("/");
  return t.length === 0 ? n : t + "/" + n;
}
function _i(t) {
  const e = t.lastIndexOf("/", t.length - 2);
  return e === -1 ? t : t.slice(e + 1);
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
function El(t, e) {
  return e;
}
class Y {
  constructor(e, n, r, i) {
    this.server = e, this.local = n || e, this.writable = !!r, this.xform = i || El;
  }
}
let bt = null;
function Tl(t) {
  return !Rn(t) || t.length < 2 ? t : _i(t);
}
function vi() {
  if (bt)
    return bt;
  const t = [];
  t.push(new Y("bucket")), t.push(new Y("generation")), t.push(new Y("metageneration")), t.push(new Y("name", "fullPath", !0));
  function e(s, o) {
    return Tl(o);
  }
  const n = new Y("name");
  n.xform = e, t.push(n);
  function r(s, o) {
    return o !== void 0 ? Number(o) : o;
  }
  const i = new Y("size");
  return i.xform = r, t.push(i), t.push(new Y("timeCreated")), t.push(new Y("updated")), t.push(new Y("md5Hash", null, !0)), t.push(new Y("cacheControl", null, !0)), t.push(new Y("contentDisposition", null, !0)), t.push(new Y("contentEncoding", null, !0)), t.push(new Y("contentLanguage", null, !0)), t.push(new Y("contentType", null, !0)), t.push(new Y("metadata", "customMetadata", !0)), bt = t, bt;
}
function kl(t, e) {
  function n() {
    const r = t.bucket, i = t.fullPath, s = new re(r, i);
    return e._makeStorageReference(s);
  }
  Object.defineProperty(t, "ref", { get: n });
}
function Cl(t, e, n) {
  const r = {};
  r.type = "file";
  const i = n.length;
  for (let s = 0; s < i; s++) {
    const o = n[s];
    r[o.local] = o.xform(r, e[o.server]);
  }
  return kl(r, t), r;
}
function bi(t, e, n) {
  const r = mi(e);
  return r === null ? null : Cl(t, r, n);
}
function Rl(t, e, n, r) {
  const i = mi(e);
  if (i === null || !Rn(i.downloadTokens))
    return null;
  const s = i.downloadTokens;
  if (s.length === 0)
    return null;
  const o = encodeURIComponent;
  return s.split(",").map((h) => {
    const f = t.bucket, g = t.fullPath, p = "/b/" + o(f) + "/o/" + o(g), _ = An(p, n, r), y = di({
      alt: "media",
      token: h
    });
    return _ + y;
  })[0];
}
function Sl(t, e) {
  const n = {}, r = e.length;
  for (let i = 0; i < r; i++) {
    const s = e[i];
    s.writable && (n[s.server] = t[s.local]);
  }
  return JSON.stringify(n);
}
class wi {
  constructor(e, n, r, i) {
    this.url = e, this.method = n, this.handler = r, this.timeout = i, this.urlParams = {}, this.headers = {}, this.body = null, this.errorHandler = null, this.progressCallback = null, this.successCodes = [200], this.additionalRetryCodes = [];
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
function yi(t) {
  if (!t)
    throw Cn();
}
function Al(t, e) {
  function n(r, i) {
    const s = bi(t, i, e);
    return yi(s !== null), s;
  }
  return n;
}
function Ol(t, e) {
  function n(r, i) {
    const s = bi(t, i, e);
    return yi(s !== null), Rl(s, i, t.host, t._protocol);
  }
  return n;
}
function Ii(t) {
  function e(n, r) {
    let i;
    return n.getStatus() === 401 ? /* This exact message string is the only consistent part of the */ /* server's error response that identifies it as an App Check error. */ n.getErrorText().includes("Firebase App Check token is invalid") ? i = jc() : i = Hc() : n.getStatus() === 402 ? i = Vc(t.bucket) : n.getStatus() === 403 ? i = Gc(t.path) : i = r, i.status = n.getStatus(), i.serverResponse = r.serverResponse, i;
  }
  return e;
}
function Pl(t) {
  const e = Ii(t);
  function n(r, i) {
    let s = e(r, i);
    return r.getStatus() === 404 && (s = Fc(t.path)), s.serverResponse = i.serverResponse, s;
  }
  return n;
}
function Nl(t, e, n) {
  const r = e.fullServerUrl(), i = An(r, t.host, t._protocol), s = "GET", o = t.maxOperationRetryTime, c = new wi(i, s, Ol(t, n), o);
  return c.errorHandler = Pl(e), c;
}
function Dl(t, e) {
  return t && t.contentType || e && e.type() || "application/octet-stream";
}
function Ml(t, e, n) {
  const r = Object.assign({}, n);
  return r.fullPath = t.path, r.size = e.size(), r.contentType || (r.contentType = Dl(null, e)), r;
}
function Ul(t, e, n, r, i) {
  const s = e.bucketOnlyServerUrl(), o = {
    "X-Goog-Upload-Protocol": "multipart"
  };
  function c() {
    let I = "";
    for (let C = 0; C < 2; C++)
      I = I + Math.random().toString().slice(2);
    return I;
  }
  const l = c();
  o["Content-Type"] = "multipart/related; boundary=" + l;
  const h = Ml(e, r, i), f = Sl(h, n), g = "--" + l + `\r
Content-Type: application/json; charset=utf-8\r
\r
` + f + `\r
--` + l + `\r
Content-Type: ` + h.contentType + `\r
\r
`, p = `\r
--` + l + "--", _ = Ne.getBlob(g, r, p);
  if (_ === null)
    throw Jc();
  const y = { name: h.fullPath }, m = An(s, t.host, t._protocol), v = "POST", w = t.maxUploadRetryTime, b = new wi(m, v, Al(t, n), w);
  return b.urlParams = y, b.headers = o, b.body = _.uploadData(), b.errorHandler = Ii(e), b;
}
class Ll {
  constructor() {
    this.sent_ = !1, this.xhr_ = new XMLHttpRequest(), this.initXhr(), this.errorCode_ = Fe.NO_ERROR, this.sendPromise_ = new Promise((e) => {
      this.xhr_.addEventListener("abort", () => {
        this.errorCode_ = Fe.ABORT, e();
      }), this.xhr_.addEventListener("error", () => {
        this.errorCode_ = Fe.NETWORK_ERROR, e();
      }), this.xhr_.addEventListener("load", () => {
        e();
      });
    });
  }
  send(e, n, r, i) {
    if (this.sent_)
      throw et("cannot .send() more than once");
    if (this.sent_ = !0, this.xhr_.open(n, e, !0), i !== void 0)
      for (const s in i)
        i.hasOwnProperty(s) && this.xhr_.setRequestHeader(s, i[s].toString());
    return r !== void 0 ? this.xhr_.send(r) : this.xhr_.send(), this.sendPromise_;
  }
  getErrorCode() {
    if (!this.sent_)
      throw et("cannot .getErrorCode() before sending");
    return this.errorCode_;
  }
  getStatus() {
    if (!this.sent_)
      throw et("cannot .getStatus() before sending");
    try {
      return this.xhr_.status;
    } catch {
      return -1;
    }
  }
  getResponse() {
    if (!this.sent_)
      throw et("cannot .getResponse() before sending");
    return this.xhr_.response;
  }
  getErrorText() {
    if (!this.sent_)
      throw et("cannot .getErrorText() before sending");
    return this.xhr_.statusText;
  }
  /** Aborts the request. */
  abort() {
    this.xhr_.abort();
  }
  getResponseHeader(e) {
    return this.xhr_.getResponseHeader(e);
  }
  addUploadProgressListener(e) {
    this.xhr_.upload != null && this.xhr_.upload.addEventListener("progress", e);
  }
  removeUploadProgressListener(e) {
    this.xhr_.upload != null && this.xhr_.upload.removeEventListener("progress", e);
  }
}
class xl extends Ll {
  initXhr() {
    this.xhr_.responseType = "text";
  }
}
function Ei() {
  return new xl();
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
class je {
  constructor(e, n) {
    this._service = e, n instanceof re ? this._location = n : this._location = re.makeFromUrl(n, e.host);
  }
  /**
   * Returns the URL for the bucket and path this object references,
   *     in the form gs://<bucket>/<object-path>
   * @override
   */
  toString() {
    return "gs://" + this._location.bucket + "/" + this._location.path;
  }
  _newRef(e, n) {
    return new je(e, n);
  }
  /**
   * A reference to the root of this object's bucket.
   */
  get root() {
    const e = new re(this._location.bucket, "");
    return this._newRef(this._service, e);
  }
  /**
   * The name of the bucket containing this reference's object.
   */
  get bucket() {
    return this._location.bucket;
  }
  /**
   * The full path of this object.
   */
  get fullPath() {
    return this._location.path;
  }
  /**
   * The short name of this object, which is the last component of the full path.
   * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
   */
  get name() {
    return _i(this._location.path);
  }
  /**
   * The `StorageService` instance this `StorageReference` is associated with.
   */
  get storage() {
    return this._service;
  }
  /**
   * A `StorageReference` pointing to the parent location of this `StorageReference`, or null if
   * this reference is the root.
   */
  get parent() {
    const e = yl(this._location.path);
    if (e === null)
      return null;
    const n = new re(this._location.bucket, e);
    return new je(this._service, n);
  }
  /**
   * Utility function to throw an error in methods that do not accept a root reference.
   */
  _throwIfRoot(e) {
    if (this._location.path === "")
      throw Qc(e);
  }
}
function Bl(t, e, n) {
  t._throwIfRoot("uploadBytes");
  const r = Ul(t.storage, t._location, vi(), new Ne(e, !0), n);
  return t.storage.makeRequestWithTokens(r, Ei).then((i) => ({
    metadata: i,
    ref: t
  }));
}
function $l(t) {
  t._throwIfRoot("getDownloadURL");
  const e = Nl(t.storage, t._location, vi());
  return t.storage.makeRequestWithTokens(e, Ei).then((n) => {
    if (n === null)
      throw Xc();
    return n;
  });
}
function Fl(t, e) {
  const n = Il(t._location.path, e), r = new re(t._location.bucket, n);
  return new je(t.storage, r);
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
function Vl(t) {
  return /^[A-Za-z]+:\/\//.test(t);
}
function Hl(t, e) {
  return new je(t, e);
}
function Ti(t, e) {
  if (t instanceof On) {
    const n = t;
    if (n._bucket == null)
      throw Kc();
    const r = new je(n, n._bucket);
    return e != null ? Ti(r, e) : r;
  } else
    return e !== void 0 ? Fl(t, e) : t;
}
function jl(t, e) {
  if (e && Vl(e)) {
    if (t instanceof On)
      return Hl(t, e);
    throw fn("To use ref(service, url), the first argument must be a Storage instance.");
  } else
    return Ti(t, e);
}
function cr(t, e) {
  const n = e == null ? void 0 : e[ui];
  return n == null ? null : re.makeFromBucketSpec(n, t);
}
function Gl(t, e, n, r = {}) {
  t.host = `${e}:${n}`, t._protocol = "http";
  const { mockUserToken: i } = r;
  i && (t._overrideAuthToken = typeof i == "string" ? i : hs(i, t.app.options.projectId));
}
class On {
  constructor(e, n, r, i, s) {
    this.app = e, this._authProvider = n, this._appCheckProvider = r, this._url = i, this._firebaseVersion = s, this._bucket = null, this._host = li, this._protocol = "https", this._appId = null, this._deleted = !1, this._maxOperationRetryTime = Bc, this._maxUploadRetryTime = $c, this._requests = /* @__PURE__ */ new Set(), i != null ? this._bucket = re.makeFromBucketSpec(i, this._host) : this._bucket = cr(this._host, this.app.options);
  }
  /**
   * The host string for this service, in the form of `host` or
   * `host:port`.
   */
  get host() {
    return this._host;
  }
  set host(e) {
    this._host = e, this._url != null ? this._bucket = re.makeFromBucketSpec(this._url, e) : this._bucket = cr(e, this.app.options);
  }
  /**
   * The maximum time to retry uploads in milliseconds.
   */
  get maxUploadRetryTime() {
    return this._maxUploadRetryTime;
  }
  set maxUploadRetryTime(e) {
    ar(
      "time",
      /* minValue=*/
      0,
      /* maxValue= */
      Number.POSITIVE_INFINITY,
      e
    ), this._maxUploadRetryTime = e;
  }
  /**
   * The maximum time to retry operations other than uploads or downloads in
   * milliseconds.
   */
  get maxOperationRetryTime() {
    return this._maxOperationRetryTime;
  }
  set maxOperationRetryTime(e) {
    ar(
      "time",
      /* minValue=*/
      0,
      /* maxValue= */
      Number.POSITIVE_INFINITY,
      e
    ), this._maxOperationRetryTime = e;
  }
  async _getAuthToken() {
    if (this._overrideAuthToken)
      return this._overrideAuthToken;
    const e = this._authProvider.getImmediate({ optional: !0 });
    if (e) {
      const n = await e.getToken();
      if (n !== null)
        return n.accessToken;
    }
    return null;
  }
  async _getAppCheckToken() {
    const e = this._appCheckProvider.getImmediate({ optional: !0 });
    return e ? (await e.getToken()).token : null;
  }
  /**
   * Stop running requests and prevent more from being created.
   */
  _delete() {
    return this._deleted || (this._deleted = !0, this._requests.forEach((e) => e.cancel()), this._requests.clear()), Promise.resolve();
  }
  /**
   * Returns a new firebaseStorage.Reference object referencing this StorageService
   * at the given Location.
   */
  _makeStorageReference(e) {
    return new je(this, e);
  }
  /**
   * @param requestInfo - HTTP RequestInfo object
   * @param authToken - Firebase auth token
   */
  _makeRequest(e, n, r, i, s = !0) {
    if (this._deleted)
      return new el(hi());
    {
      const o = hl(e, this._appId, r, i, n, this._firebaseVersion, s);
      return this._requests.add(o), o.getPromise().then(() => this._requests.delete(o), () => this._requests.delete(o)), o;
    }
  }
  async makeRequestWithTokens(e, n) {
    const [r, i] = await Promise.all([
      this._getAuthToken(),
      this._getAppCheckToken()
    ]);
    return this._makeRequest(e, n, r, i).getPromise();
  }
}
const lr = "@firebase/storage", ur = "0.11.2";
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
const ki = "storage";
function Wl(t, e, n) {
  return t = he(t), Bl(t, e, n);
}
function hr(t) {
  return t = he(t), $l(t);
}
function Zl(t, e) {
  return t = he(t), jl(t, e);
}
function zl(t = vn(), e) {
  t = he(t);
  const r = _n(t, ki).getImmediate({
    identifier: e
  }), i = ls("storage");
  return i && ql(r, ...i), r;
}
function ql(t, e, n, r = {}) {
  Gl(t, e, n, r);
}
function Kl(t, { instanceIdentifier: e }) {
  const n = t.getProvider("app").getImmediate(), r = t.getProvider("auth-internal"), i = t.getProvider("app-check-internal");
  return new On(n, r, i, e, Ye);
}
function Jl() {
  Je(new Ve(
    ki,
    Kl,
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setMultipleInstances(!0)), Ue(lr, ur, ""), Ue(lr, ur, "esm2017");
}
Jl();
function Xl(t) {
  let e, n, r = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { height: "48" },
    { viewBox: "0 96 960 960" },
    { width: "48" },
    /*$$props*/
    t[0]
  ], i = {};
  for (let s = 0; s < r.length; s += 1)
    i = L(i, r[s]);
  return {
    c() {
      e = d("svg"), n = d("path"), a(n, "d", "M222 801q63-44 125-67.5T480 710q71 0 133.5 23.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm.654 370Q398 976 325 944.5q-73-31.5-127.5-86t-86-127.266Q80 658.468 80 575.734T111.5 420.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5 207.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5 731q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480 916q55 0 107.5-16T691 844q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480 916Zm0-370q34 0 55.5-21.5T557 469q0-34-21.5-55.5T480 392q-34 0-55.5 21.5T403 469q0 34 21.5 55.5T480 546Zm0-77Zm0 374Z"), q(e, i);
    },
    m(s, o) {
      x(s, e, o), u(e, n);
    },
    p(s, [o]) {
      q(e, i = Te(r, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { height: "48" },
        { viewBox: "0 96 960 960" },
        { width: "48" },
        o & /*$$props*/
        1 && /*$$props*/
        s[0]
      ]));
    },
    i: S,
    o: S,
    d(s) {
      s && G(e);
    }
  };
}
function Yl(t, e, n) {
  return t.$$set = (r) => {
    n(0, e = L(L({}, e), z(r)));
  }, e = z(e), [e];
}
class Ci extends ke {
  constructor(e) {
    super(), se(this, e, Yl, Xl, ie, {});
  }
}
function Ql(t) {
  let e, n, r, i = [
    { width: "800" },
    { height: "800" },
    { viewBox: "0 0 24 24" },
    { fill: "none" },
    { xmlns: "http://www.w3.org/2000/svg" },
    /*$$props*/
    t[0]
  ], s = {};
  for (let o = 0; o < i.length; o += 1)
    s = L(s, i[o]);
  return {
    c() {
      e = d("svg"), n = d("path"), r = d("path"), a(n, "d", "M11 3h2a1 1 0 0 1 1 1v.569c0 .428.287.8.682.963.396.164.856.102 1.158-.2l.403-.403a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1 0 1.414l-.402.403c-.303.302-.365.762-.201 1.158.164.395.535.682.963.682H20a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.569c-.428 0-.8.287-.963.682-.164.396-.102.856.2 1.158l.403.403a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 0 1-1.414 0l-.403-.402c-.302-.303-.762-.365-1.158-.201-.395.164-.682.535-.682.963V20a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-.569c0-.428-.287-.8-.682-.963-.396-.164-.856-.102-1.158.2l-.403.403a1 1 0 0 1-1.414 0L4.93 17.657a1 1 0 0 1 0-1.414l.402-.403c.303-.302.365-.762.201-1.158-.164-.395-.535-.682-.963-.682H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.569c.428 0 .8-.287.963-.682.164-.396.102-.856-.2-1.158l-.403-.403a1 1 0 0 1 0-1.414L6.343 4.93a1 1 0 0 1 1.414 0l.403.402c.302.303.762.365 1.158.201.395-.164.682-.535.682-.963V4a1 1 0 0 1 1-1Z"), a(n, "stroke", "#000"), a(n, "stroke-width", "1.5"), a(r, "d", "M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"), a(r, "stroke", "#000"), a(r, "stroke-width", "1.5"), q(e, s);
    },
    m(o, c) {
      x(o, e, c), u(e, n), u(e, r);
    },
    p(o, [c]) {
      q(e, s = Te(i, [
        { width: "800" },
        { height: "800" },
        { viewBox: "0 0 24 24" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" },
        c & /*$$props*/
        1 && /*$$props*/
        o[0]
      ]));
    },
    i: S,
    o: S,
    d(o) {
      o && G(e);
    }
  };
}
function eu(t, e, n) {
  return t.$$set = (r) => {
    n(0, e = L(L({}, e), z(r)));
  }, e = z(e), [e];
}
class tu extends ke {
  constructor(e) {
    super(), se(this, e, eu, Ql, ie, {});
  }
}
function nu(t) {
  let e, n, r = [
    { width: "800" },
    { height: "800" },
    { viewBox: "0 0 24 24" },
    { fill: "none" },
    { xmlns: "http://www.w3.org/2000/svg" },
    /*$$props*/
    t[0]
  ], i = {};
  for (let s = 0; s < r.length; s += 1)
    i = L(i, r[s]);
  return {
    c() {
      e = d("svg"), n = d("path"), a(n, "d", "m12 15 3-3m0 0-3-3m3 3H4m5-4.751V7.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C10.52 4 11.08 4 12.2 4h4.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105v9.607c0 1.118 0 1.677-.218 2.104a2.002 2.002 0 0 1-.875.874c-.427.218-.986.218-2.104.218h-4.606c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C9 18.48 9 17.92 9 16.8v-.05"), a(n, "stroke", "#000"), a(n, "stroke-width", "2"), a(n, "stroke-linecap", "round"), a(n, "stroke-linejoin", "round"), q(e, i);
    },
    m(s, o) {
      x(s, e, o), u(e, n);
    },
    p(s, [o]) {
      q(e, i = Te(r, [
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
    i: S,
    o: S,
    d(s) {
      s && G(e);
    }
  };
}
function ru(t, e, n) {
  return t.$$set = (r) => {
    n(0, e = L(L({}, e), z(r)));
  }, e = z(e), [e];
}
class iu extends ke {
  constructor(e) {
    super(), se(this, e, ru, nu, ie, {});
  }
}
function su(t) {
  let e, n;
  return {
    c() {
      e = N("a"), n = N("button"), n.textContent = "Log in", a(e, "href", `/login?redirect=${window.location.href}`);
    },
    m(r, i) {
      x(r, e, i), u(e, n);
    },
    p: S,
    d(r) {
      r && G(e);
    }
  };
}
function ou(t) {
  let e, n, r;
  return {
    c() {
      e = N("button"), e.textContent = "Log in";
    },
    m(i, s) {
      x(i, e, s), n || (r = ve(
        e,
        "click",
        /*signIn*/
        t[1]
      ), n = !0);
    },
    p: S,
    d(i) {
      i && G(e), n = !1, r();
    }
  };
}
function au(t) {
  let e;
  function n(s, o) {
    return (
      /*debug*/
      s[0] === "true" ? ou : su
    );
  }
  let r = n(t), i = r(t);
  return {
    c() {
      i.c(), e = pr(), this.c = S;
    },
    m(s, o) {
      i.m(s, o), x(s, e, o);
    },
    p(s, [o]) {
      r === (r = n(s)) && i ? i.p(s, o) : (i.d(1), i = r(s), i && (i.c(), i.m(e.parentNode, e)));
    },
    i: S,
    o: S,
    d(s) {
      i.d(s), s && G(e);
    }
  };
}
function cu(t, e, n) {
  let { debug: r } = e;
  const i = (c) => {
    c && localStorage.setItem("accessToken", c);
  }, s = async (c) => {
    const l = await fetch("https://api.mcsynergy.nl/auth/check-new-user", {
      method: "POST",
      headers: { authorization: c }
    });
    l.ok || alert("Something went wrong. Please try again. (Error: " + await l.text() + ")"), console.log("Response OK from auth server");
  }, o = () => {
    const c = new qe("microsoft.com");
    c.setCustomParameters({ prompt: "select_account" });
    const l = vn(), h = Ct(l);
    h.setPersistence(Qr), za(h, c).then((f) => {
      var g, p;
      if (i((g = qe.credentialFromResult(f)) == null ? void 0 : g.accessToken), (p = ka(f)) != null && p.isNewUser)
        return f.user.getIdToken();
    }).then(async (f) => {
      f && await s(f);
    }).catch((f) => {
      alert("Something went wrong. Please try again. (Error: " + f.code + ")");
    });
  };
  return t.$$set = (c) => {
    "debug" in c && n(0, r = c.debug);
  }, [r, o];
}
class lu extends ct {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = "<style>button{background-color:transparent;color:white;border-radius:12px;height:2rem;width:6rem;font-size:1rem;border:2px solid #206191;text-align:center;text-decoration:none;display:inline-block;cursor:pointer}button:hover{background-color:#206191}</style>", se(
      this,
      {
        target: this.shadowRoot,
        props: $t(this.attributes),
        customElement: !0
      },
      cu,
      au,
      ie,
      { debug: 0 },
      null
    ), e && (e.target && x(e.target, this, e.anchor), e.props && (this.$set(e.props), fe()));
  }
  static get observedAttributes() {
    return ["debug"];
  }
  get debug() {
    return this.$$.ctx[0];
  }
  set debug(e) {
    this.$$set({ debug: e }), fe();
  }
}
customElements.define("mcs-loginbutton", lu);
function uu(t) {
  let e;
  return {
    c() {
      e = N("mcs-loginbutton"), Ot(
        e,
        "debug",
        /*debug*/
        t[0]
      );
    },
    m(n, r) {
      x(n, e, r);
    },
    p(n, r) {
      r & /*debug*/
      1 && Ot(
        e,
        "debug",
        /*debug*/
        n[0]
      );
    },
    d(n) {
      n && G(e);
    }
  };
}
function hu(t) {
  let e, n;
  return {
    c() {
      e = N("p"), n = gn(
        /*username*/
        t[2]
      );
    },
    m(r, i) {
      x(r, e, i), u(e, n);
    },
    p(r, i) {
      i & /*username*/
      4 && Si(
        n,
        /*username*/
        r[2]
      );
    },
    d(r) {
      r && G(e);
    }
  };
}
function du(t) {
  let e, n, r;
  return n = new Ci({ props: { fill: "#2bc0d3" } }), {
    c() {
      e = N("a"), de(n.$$.fragment), a(e, "href", "/login");
    },
    m(i, s) {
      x(i, e, s), ue(n, e, null), r = !0;
    },
    p: S,
    i(i) {
      r || (Z(n.$$.fragment, i), r = !0);
    },
    o(i) {
      J(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && G(e), oe(n);
    }
  };
}
function fu(t) {
  let e, n, r, i;
  const s = [gu, pu], o = [];
  function c(l, h) {
    return (
      /*profilesrc*/
      l[1] != null ? 0 : 1
    );
  }
  return e = c(t), n = o[e] = s[e](t), {
    c() {
      n.c(), r = pr();
    },
    m(l, h) {
      o[e].m(l, h), x(l, r, h), i = !0;
    },
    p(l, h) {
      let f = e;
      e = c(l), e === f ? o[e].p(l, h) : (rn(), J(o[f], 1, 1, () => {
        o[f] = null;
      }), sn(), n = o[e], n ? n.p(l, h) : (n = o[e] = s[e](l), n.c()), Z(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      i || (Z(n), i = !0);
    },
    o(l) {
      J(n), i = !1;
    },
    d(l) {
      o[e].d(l), l && G(r);
    }
  };
}
function pu(t) {
  let e, n;
  return e = new Ci({ props: { fill: "#2bc0d3" } }), {
    c() {
      de(e.$$.fragment);
    },
    m(r, i) {
      ue(e, r, i), n = !0;
    },
    p: S,
    i(r) {
      n || (Z(e.$$.fragment, r), n = !0);
    },
    o(r) {
      J(e.$$.fragment, r), n = !1;
    },
    d(r) {
      oe(e, r);
    }
  };
}
function gu(t) {
  let e, n;
  return {
    c() {
      e = N("img"), St(e.src, n = /*profilesrc*/
      t[1]) || a(e, "src", n), R(e, "border-radius", "50%"), R(e, "width", "3rem"), a(e, "alt", "profile-picture");
    },
    m(r, i) {
      x(r, e, i);
    },
    p(r, i) {
      i & /*profilesrc*/
      2 && !St(e.src, n = /*profilesrc*/
      r[1]) && a(e, "src", n);
    },
    i: S,
    o: S,
    d(r) {
      r && G(e);
    }
  };
}
function dr(t) {
  let e, n, r, i, s, o, c, l, h, f, g, p, _, y;
  return r = new tu({
    props: {
      height: "40",
      width: "40",
      viewBox: "-2.5 0 25 24"
    }
  }), l = new iu({ props: { height: "40", width: "40" } }), {
    c() {
      e = N("div"), n = N("a"), de(r.$$.fragment), i = ae(), s = N("span"), s.textContent = "Settings", o = ae(), c = N("div"), de(l.$$.fragment), h = ae(), f = N("span"), f.textContent = "Log out", a(s, "class", "dropdown-button-text"), a(n, "class", "dropdown-button"), a(n, "href", "/settings"), a(f, "class", "dropdown-button-text"), a(c, "class", "dropdown-button"), a(e, "style", g = `display: ${/*openedDropdown*/
      t[4] ? void 0 : "none"};`), a(e, "class", "dropdown");
    },
    m(m, v) {
      x(m, e, v), u(e, n), ue(r, n, null), u(n, i), u(n, s), u(e, o), u(e, c), ue(l, c, null), u(c, h), u(c, f), p = !0, _ || (y = [
        ve(
          c,
          "click",
          /*click_handler*/
          t[6]
        ),
        ve(
          c,
          "keydown",
          /*keydown_handler*/
          t[7]
        ),
        ve(e, "click", At(_u)),
        ve(e, "keydown", At(vu))
      ], _ = !0);
    },
    p(m, v) {
      (!p || v & /*openedDropdown*/
      16 && g !== (g = `display: ${/*openedDropdown*/
      m[4] ? void 0 : "none"};`)) && a(e, "style", g);
    },
    i(m) {
      p || (Z(r.$$.fragment, m), Z(l.$$.fragment, m), p = !0);
    },
    o(m) {
      J(r.$$.fragment, m), J(l.$$.fragment, m), p = !1;
    },
    d(m) {
      m && G(e), oe(r), oe(l), _ = !1, Ee(y);
    }
  };
}
function mu(t) {
  let e, n, r, i, s, o, c, l, h;
  function f(w, b) {
    return (
      /*username*/
      w[2] != "" ? hu : uu
    );
  }
  let g = f(t), p = g(t);
  const _ = [fu, du], y = [];
  function m(w, b) {
    return (
      /*isLoggedin*/
      w[3] ? 0 : 1
    );
  }
  i = m(t), s = y[i] = _[i](t);
  let v = (
    /*isLoggedin*/
    t[3] && dr(t)
  );
  return {
    c() {
      e = N("div"), p.c(), n = ae(), r = N("div"), s.c(), o = ae(), v && v.c(), this.c = S, a(r, "class", "profile-picture"), a(e, "class", "user-info");
    },
    m(w, b) {
      x(w, e, b), p.m(e, null), u(e, n), u(e, r), y[i].m(r, null), u(e, o), v && v.m(e, null), c = !0, l || (h = [
        ve(r, "click", At(
          /*handleMenuOpen*/
          t[5]
        )),
        ve(r, "keydown", At(
          /*handleMenuOpen*/
          t[5]
        ))
      ], l = !0);
    },
    p(w, [b]) {
      g === (g = f(w)) && p ? p.p(w, b) : (p.d(1), p = g(w), p && (p.c(), p.m(e, n)));
      let I = i;
      i = m(w), i === I ? y[i].p(w, b) : (rn(), J(y[I], 1, 1, () => {
        y[I] = null;
      }), sn(), s = y[i], s ? s.p(w, b) : (s = y[i] = _[i](w), s.c()), Z(s, 1), s.m(r, null)), /*isLoggedin*/
      w[3] ? v ? (v.p(w, b), b & /*isLoggedin*/
      8 && Z(v, 1)) : (v = dr(w), v.c(), Z(v, 1), v.m(e, null)) : v && (rn(), J(v, 1, 1, () => {
        v = null;
      }), sn());
    },
    i(w) {
      c || (Z(s), Z(v), c = !0);
    },
    o(w) {
      J(s), J(v), c = !1;
    },
    d(w) {
      w && G(e), p.d(), y[i].d(), v && v.d(), l = !1, Ee(h);
    }
  };
}
const _u = () => {
}, vu = () => {
};
function bu(t, e, n) {
  let { debug: r } = e, i, s = "", o = !1, c = !1;
  function l() {
    n(4, c = !0), document.addEventListener("click", h);
  }
  function h() {
    n(4, c = !1), document.removeEventListener("click", h);
  }
  Oi(() => {
    const _ = Tr({
      apiKey: "AIzaSyBlfZjJyhjcgyPfxaqkZHSR5SciFBWC5IY",
      authDomain: "mcsynergy-55878.firebaseapp.com",
      projectId: "mcsynergy-55878",
      storageBucket: "mcsynergy-55878.appspot.com",
      messagingSenderId: "822930182678",
      appId: "1:822930182678:web:23e8f0b3e044ae06cb9b37",
      measurementId: "G-3BK4KLMGTJ"
    }), y = Ct(_), m = async (v) => {
      const w = localStorage.getItem("accessToken");
      try {
        const b = await fetch("https://graph.microsoft.com/v1.0/me/photo/$value", {
          headers: { Authorization: `Bearer ${w}` }
        });
        if (b.status !== 200)
          throw b.statusText;
        const I = await b.blob();
        await Wl(v, I);
      } catch (b) {
        console.error(b);
      }
    };
    y.onAuthStateChanged(async (v) => {
      if (v) {
        n(3, o = !0), n(2, s = v.displayName);
        const w = zl(_), b = Zl(w, `user/${v.uid}/profile.png`);
        try {
          n(1, i = await hr(b));
        } catch (I) {
          I.code === "storage/object-not-found" && await m(b), n(1, i = await hr(b));
        }
      } else
        n(3, o = !1), n(1, i = void 0), n(2, s = "");
    });
  });
  const f = () => Jn(Ct()), g = () => Jn(Ct());
  return t.$$set = (p) => {
    "debug" in p && n(0, r = p.debug);
  }, [
    r,
    i,
    s,
    o,
    c,
    l,
    f,
    g
  ];
}
class wu extends ct {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = "<style>.user-info{display:flex;align-items:center}.profile-picture{margin-left:1rem;margin-right:0.5rem}p{color:white;font-size:1.5rem;font-family:Calibri}.dropdown{position:absolute;top:3.5rem;right:4px;width:15rem;height:6.5rem;background-color:#206191;border-radius:16px;transition:200ms}.dropdown-button{width:max-content;height:3rem;display:flex;align-items:center;margin-left:0.25rem;text-decoration:none;font-size:1.5rem;font-family:Calibri;transition:100ms;cursor:pointer;color:white}.dropdown-button:hover{transform:scale(1.05)}.dropdown-button-text{margin-left:12px}</style>", se(
      this,
      {
        target: this.shadowRoot,
        props: $t(this.attributes),
        customElement: !0
      },
      bu,
      mu,
      ie,
      { debug: 0 },
      null
    ), e && (e.target && x(e.target, this, e.anchor), e.props && (this.$set(e.props), fe()));
  }
  static get observedAttributes() {
    return ["debug"];
  }
  get debug() {
    return this.$$.ctx[0];
  }
  set debug(e) {
    this.$$set({ debug: e }), fe();
  }
}
customElements.define("mcs-userinfo", wu);
function yu(t) {
  let e, n, r, i, s, o, c, l, h, f, g;
  return {
    c() {
      e = N("header"), n = N("div"), r = N("div"), i = N("mcs-portal"), s = ae(), o = N("a"), c = N("img"), h = ae(), f = N("div"), g = N("mcs-userinfo"), this.c = S, St(c.src, l = /*logosrc*/
      t[0]) || a(c, "src", l), a(c, "alt", "Logo"), a(c, "class", "logo"), a(
        o,
        "href",
        /*redirect*/
        t[2]
      ), a(o, "class", "h-max ml-1"), a(r, "class", "flex items-center w-80 h-full"), Ot(
        g,
        "debug",
        /*debug*/
        t[1]
      ), a(f, "class", "flex items-center w-80 justify-end h-full"), a(n, "class", "bg-MCS-DarkerBlue h-14 flex items-center justify-between");
    },
    m(p, _) {
      x(p, e, _), u(e, n), u(n, r), u(r, i), u(r, s), u(r, o), u(o, c), u(n, h), u(n, f), u(f, g);
    },
    p(p, [_]) {
      _ & /*logosrc*/
      1 && !St(c.src, l = /*logosrc*/
      p[0]) && a(c, "src", l), _ & /*redirect*/
      4 && a(
        o,
        "href",
        /*redirect*/
        p[2]
      ), _ & /*debug*/
      2 && Ot(
        g,
        "debug",
        /*debug*/
        p[1]
      );
    },
    i: S,
    o: S,
    d(p) {
      p && G(e);
    }
  };
}
function Iu(t, e, n) {
  let { logosrc: r } = e, { debug: i } = e, { redirect: s = "/" } = e;
  return t.$$set = (o) => {
    "logosrc" in o && n(0, r = o.logosrc), "debug" in o && n(1, i = o.debug), "redirect" in o && n(2, s = o.redirect);
  }, [r, i, s];
}
class Eu extends ct {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = "<style>.bg-MCS-DarkerBlue{--tw-bg-opacity:1;background-color:rgb(13 29 48 / var(--tw-bg-opacity))}.h-14{height:3.5rem}.flex{display:flex}.items-center{align-items:center}.justify-between{justify-content:space-between}.w-80{width:20rem}.h-full{height:100%}.h-max{height:-moz-max-content;height:max-content}.ml-1{margin-left:0.25rem}.logo{height:2rem;margin-top:0.25rem;z-index:1001}.justify-end{justify-content:flex-end}</style>", se(
      this,
      {
        target: this.shadowRoot,
        props: $t(this.attributes),
        customElement: !0
      },
      Iu,
      yu,
      ie,
      { logosrc: 0, debug: 1, redirect: 2 },
      null
    ), e && (e.target && x(e.target, this, e.anchor), e.props && (this.$set(e.props), fe()));
  }
  static get observedAttributes() {
    return ["logosrc", "debug", "redirect"];
  }
  get logosrc() {
    return this.$$.ctx[0];
  }
  set logosrc(e) {
    this.$$set({ logosrc: e }), fe();
  }
  get debug() {
    return this.$$.ctx[1];
  }
  set debug(e) {
    this.$$set({ debug: e }), fe();
  }
  get redirect() {
    return this.$$.ctx[2];
  }
  set redirect(e) {
    this.$$set({ redirect: e }), fe();
  }
}
customElements.define("mcs-navbar", Eu);
export {
  Eu as Navbar
};
