'use strict';
(self.webpackChunkplayground = self.webpackChunkplayground || []).push([
  [143],
  {
    778: (t, n, s) => {
      s.d(n, { Z: () => c });
      var e = s(875);
      function a(d, l) {
        const u = (0, e.up)('NuxtPage');
        return (0, e.wg)(), (0, e.iD)('div', null, [(0, e.Wm)(u)]);
      }
      var o = s(407);
      const _ = {},
        c = (0, o.Z)(_, [['render', a]]);
    },
    860: (t, n, s) => {
      s.d(n, { Z: () => e });
      const e = {};
    },
    612: (t, n, s) => {
      s.d(n, { Z: () => e });
      const e = {
        globalMeta: {
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ],
          link: [],
          style: [],
          script: []
        },
        mixinKey: 'created'
      };
    },
    14: (t, n, s) => {
      s.d(n, { Z: () => i });
      var e = s(73),
        a = s(501),
        o = s(323),
        _ = s(135),
        p = s(364);
      const d = () =>
          Promise.resolve({
            supabaseUrl: 'https://vwqscxqytalithhwlrjw.supabase.co',
            supabaseKey:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTA5ODAwOCwiZXhwIjoxOTQ0Njc0MDA4fQ.dnOA5mc9JjNx-ivN8ZxoD3kfaqtI18npAyAuqwkT3wM'
          }),
        l = (0, _.fm)(async (b) => {
          const m = await d(),
            { supabaseKey: v, supabaseUrl: r, supabaseOptions: x } = m,
            O = (0, p.eI)(r, v, x);
          b.provide('supabase', O);
        });
      var u = s(282);
      const i = [e.Z, a.Z, o.Z, l, u.Z];
    },
    489: (t, n, s) => {
      s.d(n, { Z: () => e.Z });
      var e = s(297);
    },
    973: (t, n, s) => {
      s.d(n, { Z: () => e });
      const e = [
        {
          name: 'index',
          path: '/',
          file: '/Users/wobsoriano/Documents/tests/nuxt3-supabase/packages/playground/pages/index.vue',
          children: [],
          component: () => s.e(638).then(s.bind(s, 638))
        }
      ];
    }
  },
  (t) => {
    var n = (e) => t((t.s = e));
    t.O(0, [571], () => n(867));
    var s = t.O();
  }
]);
