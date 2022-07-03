import {
	S as T,
	i as k,
	s as q,
	e as m,
	t as E,
	k as j,
	M as x,
	c as g,
	a as v,
	h as w,
	d as f,
	m as H,
	N as A,
	b as B,
	g as D,
	G as c,
	j as C,
	n as S
} from '../../chunks/index-429e7792.js';
function G(i) {
	let t,
		a,
		s = i[0].attributes.title + '',
		n,
		p,
		r,
		o = i[0].attributes.description + '',
		_,
		d,
		u,
		h = i[0].html + '';
	return {
		c() {
			(t = m('article')),
				(a = m('h1')),
				(n = E(s)),
				(p = j()),
				(r = m('p')),
				(_ = E(o)),
				(d = j()),
				(u = new x(!1)),
				this.h();
		},
		l(l) {
			t = g(l, 'ARTICLE', {});
			var e = v(t);
			a = g(e, 'H1', { class: !0 });
			var b = v(a);
			(n = w(b, s)), b.forEach(f), (p = H(e)), (r = g(e, 'P', {}));
			var y = v(r);
			(_ = w(y, o)), y.forEach(f), (d = H(e)), (u = A(e, !1)), e.forEach(f), this.h();
		},
		h() {
			B(a, 'class', 'section-header'), (u.a = null);
		},
		m(l, e) {
			D(l, t, e), c(t, a), c(a, n), c(t, p), c(t, r), c(r, _), c(t, d), u.m(h, t);
		},
		p(l, [e]) {
			e & 1 && s !== (s = l[0].attributes.title + '') && C(n, s),
				e & 1 && o !== (o = l[0].attributes.description + '') && C(_, o),
				e & 1 && h !== (h = l[0].html + '') && u.p(h);
		},
		i: S,
		o: S,
		d(l) {
			l && f(t);
		}
	};
}
async function M({ url: i, params: t, fetch: a, session: s, stuff: n }) {
	const { slug: p } = t;
	return { props: { post: (await a(`/posts/${p}.json`).then((o) => o.json())) || {} } };
}
function I(i, t, a) {
	let { post: s = {} } = t;
	return (
		(i.$$set = (n) => {
			'post' in n && a(0, (s = n.post));
		}),
		[s]
	);
}
class N extends T {
	constructor(t) {
		super(), k(this, t, I, G, q, { post: 0 });
	}
}
export { N as default, M as load };
