'use strict';
(self.webpackChunkplayground = self.webpackChunkplayground || []).push([
  [638],
  {
    638: (g, n, t) => {
      t.r(n), t.d(n, { default: () => _ });
      var a = t(135),
        s = t(875),
        r = t(641),
        o = t(349);
      const p = { key: 0 },
        d = { key: 1 },
        _ = (0, s.aZ)({
          async setup(y) {
            let e, u;
            const { $supabase: l } = (0, a.e)(),
              { data: c, pending: i } =
                (([e, u] = (0, s.mv)(() =>
                  (0, a.w3)('posts', () => l.from('posts').select())
                )),
                (e = await e),
                u(),
                e);
            return (h, f) =>
              (0, r.SU)(i)
                ? ((0, s.wg)(), (0, s.iD)('div', p, 'Loading...'))
                : ((0, s.wg)(),
                  (0, s.iD)('div', d, (0, o.zw)((0, r.SU)(c)), 1));
          }
        });
    }
  }
]);
