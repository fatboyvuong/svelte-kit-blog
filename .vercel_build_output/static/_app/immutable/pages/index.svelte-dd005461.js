import {
	S as M,
	i as N,
	s as S,
	e as m,
	t as E,
	k as b,
	c as p,
	a as g,
	h as k,
	d as _,
	m as q,
	b as P,
	g as y,
	G as h,
	j as C,
	n as w,
	l as B,
	r as d,
	x as K,
	y as T,
	z as D,
	p as v,
	C as F,
	q as z,
	K as J,
	L as O,
	o as G
} from '../chunks/index-429e7792.js';
function Q(r) {
	let e, o, l, t, i, a, n, s, u;
	return {
		c() {
			(e = m('article')),
				(o = m('h1')),
				(l = E(r[0])),
				(t = b()),
				(i = m('p')),
				(a = E(r[1])),
				(n = b()),
				(s = m('a')),
				(u = E('Read more...')),
				this.h();
		},
		l(f) {
			e = p(f, 'ARTICLE', {});
			var c = g(e);
			o = p(c, 'H1', {});
			var R = g(o);
			(l = k(R, r[0])), R.forEach(_), (t = q(c)), (i = p(c, 'P', {}));
			var j = g(i);
			(a = k(j, r[1])), j.forEach(_), (n = q(c)), (s = p(c, 'A', { href: !0 }));
			var A = g(s);
			(u = k(A, 'Read more...')), A.forEach(_), c.forEach(_), this.h();
		},
		h() {
			P(s, 'href', r[2]);
		},
		m(f, c) {
			y(f, e, c), h(e, o), h(o, l), h(e, t), h(e, i), h(i, a), h(e, n), h(e, s), h(s, u);
		},
		p(f, [c]) {
			c & 1 && C(l, f[0]), c & 2 && C(a, f[1]), c & 4 && P(s, 'href', f[2]);
		},
		i: w,
		o: w,
		d(f) {
			f && _(e);
		}
	};
}
function U(r, e, o) {
	let { title: l } = e,
		{ description: t } = e,
		{ url: i } = e;
	return (
		(r.$$set = (a) => {
			'title' in a && o(0, (l = a.title)),
				'description' in a && o(1, (t = a.description)),
				'url' in a && o(2, (i = a.url));
		}),
		[l, t, i]
	);
}
class V extends M {
	constructor(e) {
		super(), N(this, e, U, Q, S, { title: 0, description: 1, url: 2 });
	}
}
function H(r, e, o) {
	const l = r.slice();
	return (l[1] = e[o]), (l[3] = o), l;
}
function I(r) {
	let e,
		o,
		l = r[0],
		t = [];
	for (let a = 0; a < l.length; a += 1) t[a] = L(H(r, l, a));
	const i = (a) =>
		v(t[a], 1, 1, () => {
			t[a] = null;
		});
	return {
		c() {
			for (let a = 0; a < t.length; a += 1) t[a].c();
			e = B();
		},
		l(a) {
			for (let n = 0; n < t.length; n += 1) t[n].l(a);
			e = B();
		},
		m(a, n) {
			for (let s = 0; s < t.length; s += 1) t[s].m(a, n);
			y(a, e, n), (o = !0);
		},
		p(a, n) {
			if (n & 1) {
				l = a[0];
				let s;
				for (s = 0; s < l.length; s += 1) {
					const u = H(a, l, s);
					t[s]
						? (t[s].p(u, n), d(t[s], 1))
						: ((t[s] = L(u)), t[s].c(), d(t[s], 1), t[s].m(e.parentNode, e));
				}
				for (G(), s = l.length; s < t.length; s += 1) i(s);
				z();
			}
		},
		i(a) {
			if (!o) {
				for (let n = 0; n < l.length; n += 1) d(t[n]);
				o = !0;
			}
		},
		o(a) {
			t = t.filter(Boolean);
			for (let n = 0; n < t.length; n += 1) v(t[n]);
			o = !1;
		},
		d(a) {
			J(t, a), a && _(e);
		}
	};
}
function L(r) {
	let e, o;
	return (
		(e = new V({ props: { title: r[1].title, description: r[1].description, url: r[1].url } })),
		{
			c() {
				K(e.$$.fragment);
			},
			l(l) {
				T(e.$$.fragment, l);
			},
			m(l, t) {
				D(e, l, t), (o = !0);
			},
			p(l, t) {
				const i = {};
				t & 1 && (i.title = l[1].title),
					t & 1 && (i.description = l[1].description),
					t & 1 && (i.url = l[1].url),
					e.$set(i);
			},
			i(l) {
				o || (d(e.$$.fragment, l), (o = !0));
			},
			o(l) {
				v(e.$$.fragment, l), (o = !1);
			},
			d(l) {
				F(e, l);
			}
		}
	);
}
function W(r) {
	let e,
		o,
		l,
		t,
		i,
		a,
		n = r[0] && I(r);
	return {
		c() {
			(e = b()), (o = m('main')), (l = m('h1')), (t = E('Posts')), (i = b()), n && n.c(), this.h();
		},
		l(s) {
			O('[data-svelte="svelte-1kq4tab"]', document.head).forEach(_),
				(e = q(s)),
				(o = p(s, 'MAIN', { class: !0 }));
			var f = g(o);
			l = p(f, 'H1', {});
			var c = g(l);
			(t = k(c, 'Posts')), c.forEach(_), (i = q(f)), n && n.l(f), f.forEach(_), this.h();
		},
		h() {
			(document.title = 'My Blog'), P(o, 'class', 'svelte-8q8u67');
		},
		m(s, u) {
			y(s, e, u), y(s, o, u), h(o, l), h(l, t), h(o, i), n && n.m(o, null), (a = !0);
		},
		p(s, [u]) {
			s[0]
				? n
					? (n.p(s, u), u & 1 && d(n, 1))
					: ((n = I(s)), n.c(), d(n, 1), n.m(o, null))
				: n &&
				  (G(),
				  v(n, 1, 1, () => {
						n = null;
				  }),
				  z());
		},
		i(s) {
			a || (d(n), (a = !0));
		},
		o(s) {
			v(n), (a = !1);
		},
		d(s) {
			s && _(e), s && _(o), n && n.d();
		}
	};
}
async function Z({ fetch: r }) {
	return { props: { posts: await r('/post.json').then((o) => o.json()) } };
}
function X(r, e, o) {
	let { posts: l = [] } = e;
	return (
		(r.$$set = (t) => {
			'posts' in t && o(0, (l = t.posts));
		}),
		[l]
	);
}
class x extends M {
	constructor(e) {
		super(), N(this, e, X, W, S, { posts: 0 });
	}
}
export { x as default, Z as load };
