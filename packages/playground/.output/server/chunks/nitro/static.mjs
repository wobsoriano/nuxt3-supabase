import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/28bf0dc.js": {
    "type": "application/javascript",
    "etag": "\"53b-N+UTiwXrl400zcKdlZKdq50gb8s\"",
    "mtime": "2021-10-16T15:22:32.455Z",
    "path": "../public/_nuxt/28bf0dc.js"
  },
  "/_nuxt/309d432.js": {
    "type": "application/javascript",
    "etag": "\"afc-57DwS9gQTD6cKTLhIMIGxOK7sgo\"",
    "mtime": "2021-10-16T15:22:32.455Z",
    "path": "../public/_nuxt/309d432.js"
  },
  "/_nuxt/9bc6d9f.js": {
    "type": "application/javascript",
    "etag": "\"1f2-N+sLGCEDgKihosCYX3LJ4L3nHXM\"",
    "mtime": "2021-10-16T15:22:32.455Z",
    "path": "../public/_nuxt/9bc6d9f.js"
  },
  "/_nuxt/b35c3c1.js": {
    "type": "application/javascript",
    "etag": "\"35cc3-qPtVGd0KY3NL3AFW7EjmV0aGdcM\"",
    "mtime": "2021-10-16T15:22:32.454Z",
    "path": "../public/_nuxt/b35c3c1.js"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/Users/wobsoriano/Documents/tests/nuxt3-supabase/packages/playground/dist" + "/" + "1634397749";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
