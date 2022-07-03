function L() {}
function J(t, n) {
	for (const e in n) t[e] = n[e];
	return t;
}
function q(t) {
	return t();
}
function j() {
	return Object.create(null);
}
function p(t) {
	t.forEach(q);
}
function K(t) {
	return typeof t == 'function';
}
function ft(t, n) {
	return t != t ? n == n : t !== n || (t && typeof t == 'object') || typeof t == 'function';
}
function R(t) {
	return Object.keys(t).length === 0;
}
function at(t, n, e, i) {
	if (t) {
		const r = D(t, n, e, i);
		return t[0](r);
	}
}
function D(t, n, e, i) {
	return t[1] && i ? J(e.ctx.slice(), t[1](i(n))) : e.ctx;
}
function _t(t, n, e, i) {
	if (t[2] && i) {
		const r = t[2](i(e));
		if (n.dirty === void 0) return r;
		if (typeof r == 'object') {
			const u = [],
				c = Math.max(n.dirty.length, r.length);
			for (let o = 0; o < c; o += 1) u[o] = n.dirty[o] | r[o];
			return u;
		}
		return n.dirty | r;
	}
	return n.dirty;
}
function dt(t, n, e, i, r, u) {
	if (r) {
		const c = D(n, e, i, u);
		t.p(c, r);
	}
}
function ht(t) {
	if (t.ctx.length > 32) {
		const n = [],
			e = t.ctx.length / 32;
		for (let i = 0; i < e; i++) n[i] = -1;
		return n;
	}
	return -1;
}
let $ = !1;
function W() {
	$ = !0;
}
function Q() {
	$ = !1;
}
function U(t, n, e, i) {
	for (; t < n; ) {
		const r = t + ((n - t) >> 1);
		e(r) <= i ? (t = r + 1) : (n = r);
	}
	return t;
}
function V(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let n = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const l = [];
		for (let s = 0; s < n.length; s++) {
			const a = n[s];
			a.claim_order !== void 0 && l.push(a);
		}
		n = l;
	}
	const e = new Int32Array(n.length + 1),
		i = new Int32Array(n.length);
	e[0] = -1;
	let r = 0;
	for (let l = 0; l < n.length; l++) {
		const s = n[l].claim_order,
			a = (r > 0 && n[e[r]].claim_order <= s ? r + 1 : U(1, r, (y) => n[e[y]].claim_order, s)) - 1;
		i[l] = e[a] + 1;
		const f = a + 1;
		(e[f] = l), (r = Math.max(f, r));
	}
	const u = [],
		c = [];
	let o = n.length - 1;
	for (let l = e[r] + 1; l != 0; l = i[l - 1]) {
		for (u.push(n[l - 1]); o >= l; o--) c.push(n[o]);
		o--;
	}
	for (; o >= 0; o--) c.push(n[o]);
	u.reverse(), c.sort((l, s) => l.claim_order - s.claim_order);
	for (let l = 0, s = 0; l < c.length; l++) {
		for (; s < u.length && c[l].claim_order >= u[s].claim_order; ) s++;
		const a = s < u.length ? u[s] : null;
		t.insertBefore(c[l], a);
	}
}
function X(t, n) {
	if ($) {
		for (
			V(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentElement !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		n !== t.actual_end_child
			? (n.claim_order !== void 0 || n.parentNode !== t) && t.insertBefore(n, t.actual_end_child)
			: (t.actual_end_child = n.nextSibling);
	} else (n.parentNode !== t || n.nextSibling !== null) && t.appendChild(n);
}
function Y(t, n, e) {
	t.insertBefore(n, e || null);
}
function Z(t, n, e) {
	$ && !e ? X(t, n) : (n.parentNode !== t || n.nextSibling != e) && t.insertBefore(n, e || null);
}
function w(t) {
	t.parentNode.removeChild(t);
}
function mt(t, n) {
	for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
}
function G(t) {
	return document.createElement(t);
}
function tt(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function T(t) {
	return document.createTextNode(t);
}
function pt() {
	return T(' ');
}
function yt() {
	return T('');
}
function gt(t, n, e) {
	e == null ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function nt(t) {
	return Array.from(t.childNodes);
}
function O(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function P(t, n, e, i, r = !1) {
	O(t);
	const u = (() => {
		for (let c = t.claim_info.last_index; c < t.length; c++) {
			const o = t[c];
			if (n(o)) {
				const l = e(o);
				return l === void 0 ? t.splice(c, 1) : (t[c] = l), r || (t.claim_info.last_index = c), o;
			}
		}
		for (let c = t.claim_info.last_index - 1; c >= 0; c--) {
			const o = t[c];
			if (n(o)) {
				const l = e(o);
				return (
					l === void 0 ? t.splice(c, 1) : (t[c] = l),
					r ? l === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = c),
					o
				);
			}
		}
		return i();
	})();
	return (u.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), u;
}
function et(t, n, e, i) {
	return P(
		t,
		(r) => r.nodeName === n,
		(r) => {
			const u = [];
			for (let c = 0; c < r.attributes.length; c++) {
				const o = r.attributes[c];
				e[o.name] || u.push(o.name);
			}
			u.forEach((c) => r.removeAttribute(c));
		},
		() => i(n)
	);
}
function xt(t, n, e) {
	return et(t, n, e, G);
}
function it(t, n) {
	return P(
		t,
		(e) => e.nodeType === 3,
		(e) => {
			const i = '' + n;
			if (e.data.startsWith(i)) {
				if (e.data.length !== i.length) return e.splitText(i.length);
			} else e.data = i;
		},
		() => T(n),
		!0
	);
}
function bt(t) {
	return it(t, ' ');
}
function M(t, n, e) {
	for (let i = e; i < t.length; i += 1) {
		const r = t[i];
		if (r.nodeType === 8 && r.textContent.trim() === n) return i;
	}
	return t.length;
}
function wt(t, n) {
	const e = M(t, 'HTML_TAG_START', 0),
		i = M(t, 'HTML_TAG_END', e);
	if (e === i) return new C(void 0, n);
	O(t);
	const r = t.splice(e, i - e + 1);
	w(r[0]), w(r[r.length - 1]);
	const u = r.slice(1, r.length - 1);
	for (const c of u)
		(c.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1);
	return new C(u, n);
}
function $t(t, n) {
	(n = '' + n), t.wholeText !== n && (t.data = n);
}
function At(t, n, e, i) {
	e === null ? t.style.removeProperty(n) : t.style.setProperty(n, e, i ? 'important' : '');
}
function Nt(t, n = document.body) {
	return Array.from(n.querySelectorAll(t));
}
class rt {
	constructor(n = !1) {
		(this.is_svg = !1), (this.is_svg = n), (this.e = this.n = null);
	}
	c(n) {
		this.h(n);
	}
	m(n, e, i = null) {
		this.e ||
			(this.is_svg ? (this.e = tt(e.nodeName)) : (this.e = G(e.nodeName)), (this.t = e), this.c(n)),
			this.i(i);
	}
	h(n) {
		(this.e.innerHTML = n), (this.n = Array.from(this.e.childNodes));
	}
	i(n) {
		for (let e = 0; e < this.n.length; e += 1) Y(this.t, this.n[e], n);
	}
	p(n) {
		this.d(), this.h(n), this.i(this.a);
	}
	d() {
		this.n.forEach(w);
	}
}
class C extends rt {
	constructor(n, e = !1) {
		super(e), (this.e = this.n = null), (this.l = n);
	}
	c(n) {
		this.l ? (this.n = this.l) : super.c(n);
	}
	i(n) {
		for (let e = 0; e < this.n.length; e += 1) Z(this.t, this.n[e], n);
	}
}
let m;
function h(t) {
	m = t;
}
function v() {
	if (!m) throw new Error('Function called outside component initialization');
	return m;
}
function Et(t) {
	v().$$.on_mount.push(t);
}
function Tt(t) {
	v().$$.after_update.push(t);
}
function vt(t, n) {
	return v().$$.context.set(t, n), n;
}
const d = [],
	H = [],
	x = [],
	B = [],
	z = Promise.resolve();
let N = !1;
function F() {
	N || ((N = !0), z.then(I));
}
function St() {
	return F(), z;
}
function E(t) {
	x.push(t);
}
const A = new Set();
let g = 0;
function I() {
	const t = m;
	do {
		for (; g < d.length; ) {
			const n = d[g];
			g++, h(n), lt(n.$$);
		}
		for (h(null), d.length = 0, g = 0; H.length; ) H.pop()();
		for (let n = 0; n < x.length; n += 1) {
			const e = x[n];
			A.has(e) || (A.add(e), e());
		}
		x.length = 0;
	} while (d.length);
	for (; B.length; ) B.pop()();
	(N = !1), A.clear(), h(t);
}
function lt(t) {
	if (t.fragment !== null) {
		t.update(), p(t.before_update);
		const n = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(E);
	}
}
const b = new Set();
let _;
function kt() {
	_ = { r: 0, c: [], p: _ };
}
function jt() {
	_.r || p(_.c), (_ = _.p);
}
function ct(t, n) {
	t && t.i && (b.delete(t), t.i(n));
}
function Mt(t, n, e, i) {
	if (t && t.o) {
		if (b.has(t)) return;
		b.add(t),
			_.c.push(() => {
				b.delete(t), i && (e && t.d(1), i());
			}),
			t.o(n);
	}
}
function Ct(t, n) {
	const e = {},
		i = {},
		r = { $$scope: 1 };
	let u = t.length;
	for (; u--; ) {
		const c = t[u],
			o = n[u];
		if (o) {
			for (const l in c) l in o || (i[l] = 1);
			for (const l in o) r[l] || ((e[l] = o[l]), (r[l] = 1));
			t[u] = o;
		} else for (const l in c) r[l] = 1;
	}
	for (const c in i) c in e || (e[c] = void 0);
	return e;
}
function Ht(t) {
	return typeof t == 'object' && t !== null ? t : {};
}
function Bt(t) {
	t && t.c();
}
function Lt(t, n) {
	t && t.l(n);
}
function ot(t, n, e, i) {
	const { fragment: r, on_mount: u, on_destroy: c, after_update: o } = t.$$;
	r && r.m(n, e),
		i ||
			E(() => {
				const l = u.map(q).filter(K);
				c ? c.push(...l) : p(l), (t.$$.on_mount = []);
			}),
		o.forEach(E);
}
function st(t, n) {
	const e = t.$$;
	e.fragment !== null &&
		(p(e.on_destroy),
		e.fragment && e.fragment.d(n),
		(e.on_destroy = e.fragment = null),
		(e.ctx = []));
}
function ut(t, n) {
	t.$$.dirty[0] === -1 && (d.push(t), F(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function qt(t, n, e, i, r, u, c, o = [-1]) {
	const l = m;
	h(t);
	const s = (t.$$ = {
		fragment: null,
		ctx: null,
		props: u,
		update: L,
		not_equal: r,
		bound: j(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(n.context || (l ? l.$$.context : [])),
		callbacks: j(),
		dirty: o,
		skip_bound: !1,
		root: n.target || l.$$.root
	});
	c && c(s.root);
	let a = !1;
	if (
		((s.ctx = e
			? e(t, n.props || {}, (f, y, ...S) => {
					const k = S.length ? S[0] : y;
					return (
						s.ctx &&
							r(s.ctx[f], (s.ctx[f] = k)) &&
							(!s.skip_bound && s.bound[f] && s.bound[f](k), a && ut(t, f)),
						y
					);
			  })
			: []),
		s.update(),
		(a = !0),
		p(s.before_update),
		(s.fragment = i ? i(s.ctx) : !1),
		n.target)
	) {
		if (n.hydrate) {
			W();
			const f = nt(n.target);
			s.fragment && s.fragment.l(f), f.forEach(w);
		} else s.fragment && s.fragment.c();
		n.intro && ct(t.$$.fragment), ot(t, n.target, n.anchor, n.customElement), Q(), I();
	}
	h(l);
}
class Dt {
	$destroy() {
		st(this, 1), (this.$destroy = L);
	}
	$on(n, e) {
		const i = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
		return (
			i.push(e),
			() => {
				const r = i.indexOf(e);
				r !== -1 && i.splice(r, 1);
			}
		);
	}
	$set(n) {
		this.$$set && !R(n) && ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
	}
}
export {
	Ct as A,
	Ht as B,
	st as C,
	J as D,
	St as E,
	at as F,
	X as G,
	dt as H,
	ht as I,
	_t as J,
	mt as K,
	Nt as L,
	C as M,
	wt as N,
	Dt as S,
	nt as a,
	gt as b,
	xt as c,
	w as d,
	G as e,
	At as f,
	Z as g,
	it as h,
	qt as i,
	$t as j,
	pt as k,
	yt as l,
	bt as m,
	L as n,
	kt as o,
	Mt as p,
	jt as q,
	ct as r,
	ft as s,
	T as t,
	vt as u,
	Tt as v,
	Et as w,
	Bt as x,
	Lt as y,
	ot as z
};
