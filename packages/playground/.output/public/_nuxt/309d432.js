(() => {
  'use strict';
  var v = {},
    g = {};
  function r(e) {
    var o = g[e];
    if (o !== void 0) return o.exports;
    var t = (g[e] = { exports: {} });
    return v[e].call(t.exports, t, t.exports, r), t.exports;
  }
  (r.m = v),
    (() => {
      var e = [];
      r.O = (o, t, i, u) => {
        if (t) {
          u = u || 0;
          for (var n = e.length; n > 0 && e[n - 1][2] > u; n--) e[n] = e[n - 1];
          e[n] = [t, i, u];
          return;
        }
        for (var a = 1 / 0, n = 0; n < e.length; n++) {
          for (var [t, i, u] = e[n], s = !0, f = 0; f < t.length; f++)
            (u & !1 || a >= u) && Object.keys(r.O).every((b) => r.O[b](t[f]))
              ? t.splice(f--, 1)
              : ((s = !1), u < a && (a = u));
          if (s) {
            e.splice(n--, 1);
            var d = i();
            d !== void 0 && (o = d);
          }
        }
        return o;
      };
    })(),
    (() => {
      r.n = (e) => {
        var o = e && e.__esModule ? () => e.default : () => e;
        return r.d(o, { a: o }), o;
      };
    })(),
    (() => {
      r.d = (e, o) => {
        for (var t in o)
          r.o(o, t) &&
            !r.o(e, t) &&
            Object.defineProperty(e, t, { enumerable: !0, get: o[t] });
      };
    })(),
    (() => {
      (r.f = {}),
        (r.e = (e) =>
          Promise.all(
            Object.keys(r.f).reduce((o, t) => (r.f[t](e, o), o), [])
          ));
    })(),
    (() => {
      r.u = (e) => '9bc6d9f.js';
    })(),
    (() => {
      r.g = (function () {
        if (typeof globalThis == 'object') return globalThis;
        try {
          return this || new Function('return this')();
        } catch {
          if (typeof window == 'object') return window;
        }
      })();
    })(),
    (() => {
      r.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o);
    })(),
    (() => {
      var e = {},
        o = 'playground:';
      r.l = (t, i, u, n) => {
        if (e[t]) {
          e[t].push(i);
          return;
        }
        var a, s;
        if (u !== void 0)
          for (
            var f = document.getElementsByTagName('script'), d = 0;
            d < f.length;
            d++
          ) {
            var l = f[d];
            if (
              l.getAttribute('src') == t ||
              l.getAttribute('data-webpack') == o + u
            ) {
              a = l;
              break;
            }
          }
        a ||
          ((s = !0),
          (a = document.createElement('script')),
          (a.charset = 'utf-8'),
          (a.timeout = 120),
          r.nc && a.setAttribute('nonce', r.nc),
          a.setAttribute('data-webpack', o + u),
          (a.src = t)),
          (e[t] = [i]);
        var c = (h, b) => {
            (a.onerror = a.onload = null), clearTimeout(p);
            var m = e[t];
            if (
              (delete e[t],
              a.parentNode && a.parentNode.removeChild(a),
              m && m.forEach((_) => _(b)),
              h)
            )
              return h(b);
          },
          p = setTimeout(
            c.bind(null, void 0, { type: 'timeout', target: a }),
            12e4
          );
        (a.onerror = c.bind(null, a.onerror)),
          (a.onload = c.bind(null, a.onload)),
          s && document.head.appendChild(a);
      };
    })(),
    (() => {
      r.r = (e) => {
        typeof Symbol != 'undefined' &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      };
    })(),
    (() => {
      r.p = '/_nuxt/';
    })(),
    (() => {
      var e = { 666: 0 };
      (r.f.j = (i, u) => {
        var n = r.o(e, i) ? e[i] : void 0;
        if (n !== 0)
          if (n) u.push(n[2]);
          else if (i != 666) {
            var a = new Promise((l, c) => (n = e[i] = [l, c]));
            u.push((n[2] = a));
            var s = r.p + r.u(i),
              f = new Error(),
              d = (l) => {
                if (r.o(e, i) && ((n = e[i]), n !== 0 && (e[i] = void 0), n)) {
                  var c = l && (l.type === 'load' ? 'missing' : l.type),
                    p = l && l.target && l.target.src;
                  (f.message =
                    'Loading chunk ' +
                    i +
                    ` failed.
(` +
                    c +
                    ': ' +
                    p +
                    ')'),
                    (f.name = 'ChunkLoadError'),
                    (f.type = c),
                    (f.request = p),
                    n[1](f);
                }
              };
            r.l(s, d, 'chunk-' + i, i);
          } else e[i] = 0;
      }),
        (r.O.j = (i) => e[i] === 0);
      var o = (i, u) => {
          var [n, a, s] = u,
            f,
            d,
            l = 0;
          if (n.some((p) => e[p] !== 0)) {
            for (f in a) r.o(a, f) && (r.m[f] = a[f]);
            if (s) var c = s(r);
          }
          for (i && i(u); l < n.length; l++)
            (d = n[l]), r.o(e, d) && e[d] && e[d][0](), (e[n[l]] = 0);
          return r.O(c);
        },
        t = (self.webpackChunkplayground = self.webpackChunkplayground || []);
      t.forEach(o.bind(null, 0)), (t.push = o.bind(null, t.push.bind(t)));
    })();
})();
