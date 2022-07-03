import {
	S as A,
	i as B,
	s as M,
	F as S,
	e as u,
	t as q,
	k as x,
	c as d,
	a as m,
	h as E,
	d as _,
	m as H,
	b as v,
	g as w,
	G as p,
	H as k,
	I as z,
	J as C,
	r as D,
	p as F
} from '../chunks/index-429e7792.js';
function G(r) {
	let t, n, c, o, l, i, y, h, f;
	const b = r[1].default,
		s = S(b, r, r[0], null);
	return {
		c() {
			(t = u('header')),
				(n = u('h1')),
				(c = q('My Blog')),
				(o = x()),
				(l = u('nav')),
				(i = u('a')),
				(y = q('Home')),
				(h = x()),
				s && s.c(),
				this.h();
		},
		l(e) {
			t = d(e, 'HEADER', { class: !0 });
			var a = m(t);
			n = d(a, 'H1', { class: !0 });
			var g = m(n);
			(c = E(g, 'My Blog')), g.forEach(_), (o = H(a)), (l = d(a, 'NAV', { class: !0 }));
			var j = m(l);
			i = d(j, 'A', { href: !0 });
			var $ = m(i);
			(y = E($, 'Home')),
				$.forEach(_),
				j.forEach(_),
				a.forEach(_),
				(h = H(e)),
				s && s.l(e),
				this.h();
		},
		h() {
			v(n, 'class', 'svelte-1hbqpj'),
				v(i, 'href', '/'),
				v(l, 'class', 'svelte-1hbqpj'),
				v(t, 'class', 'svelte-1hbqpj');
		},
		m(e, a) {
			w(e, t, a),
				p(t, n),
				p(n, c),
				p(t, o),
				p(t, l),
				p(l, i),
				p(i, y),
				w(e, h, a),
				s && s.m(e, a),
				(f = !0);
		},
		p(e, [a]) {
			s && s.p && (!f || a & 1) && k(s, b, e, e[0], f ? C(b, e[0], a, null) : z(e[0]), null);
		},
		i(e) {
			f || (D(s, e), (f = !0));
		},
		o(e) {
			F(s, e), (f = !1);
		},
		d(e) {
			e && _(t), e && _(h), s && s.d(e);
		}
	};
}
function I(r, t, n) {
	let { $$slots: c = {}, $$scope: o } = t;
	return (
		(r.$$set = (l) => {
			'$$scope' in l && n(0, (o = l.$$scope));
		}),
		[o, c]
	);
}
class N extends A {
	constructor(t) {
		super(), B(this, t, I, G, M, {});
	}
}
export { N as default };
