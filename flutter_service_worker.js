'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "566142de2b5f098a61e588e5c080ccf6",
"assets/AssetManifest.bin.json": "b1321e94fe42f7db95d98e93b3046774",
"assets/AssetManifest.json": "cf937afe8228e93d5d27db9339ad1bc0",
"assets/assets/background.png": "dd865407ee60982727f9cf12cb566abb",
"assets/assets/logo.png": "032291e64141d7bd2429540d478628fe",
"assets/FontManifest.json": "4b4e008efe89aed017ff431655068680",
"assets/fonts/MaterialIcons-Regular.otf": "1a3c23732753d58c4e5cd3aeb186fb59",
"assets/fonts/SigmarOne-Regular.ttf": "0d102b3e5784752cf83740a31a7c7ecb",
"assets/fonts/stinger-fit-trial.bold.ttf": "2376f1bf2eeafbab9f33fa84b4cdadff",
"assets/NOTICES": "dbcca8c7b10137001d85989100275d98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.jpg": "487b088b80334367ae40971824b9a165",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "3b86721dae33849eb1c6259194ef7f88",
"icons/android-icon-144x144.png": "e2d7af477838f95d8cd561321fd66802",
"icons/android-icon-192x192.png": "00f8e13c8439adf774686dab56311934",
"icons/android-icon-36x36.png": "7a663a4f7ace31a37defb78008e7d1b1",
"icons/android-icon-48x48.png": "367fc6cc496dcdfb557f3ea448c0032b",
"icons/android-icon-72x72.png": "645940c6e2b0d128da834dd2a3291ea3",
"icons/android-icon-96x96.png": "ca84c6c2a917c65607010e3543675041",
"icons/apple-icon-114x114.png": "5b7e3c12dc22d74e2f1f8f5ddedacfcd",
"icons/apple-icon-120x120.png": "8bb2312619ef8e165d90baaf0e7f9a2f",
"icons/apple-icon-144x144.png": "e2d7af477838f95d8cd561321fd66802",
"icons/apple-icon-152x152.png": "df1df12fadd81fea71fe35e4f2b4b44d",
"icons/apple-icon-180x180.png": "e456d7ad0061730571d12a8e0a14585c",
"icons/apple-icon-57x57.png": "9fbfbb0b9942514293b017b796b17c1f",
"icons/apple-icon-60x60.png": "c78b330d235fdb662d558eb13fde9a41",
"icons/apple-icon-72x72.png": "645940c6e2b0d128da834dd2a3291ea3",
"icons/apple-icon-76x76.png": "70fc9d4c54a4f6b34c7185884c67a433",
"icons/apple-icon-precomposed.png": "5bb48f1c6de99b98eb9ecf59d868ef5e",
"icons/apple-icon.png": "5bb48f1c6de99b98eb9ecf59d868ef5e",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "72f7676a9a1f89622b6854e5800f52a2",
"icons/favicon-32x32.png": "b4c011a58bdc92f68060a5adf0f9071f",
"icons/favicon-96x96.png": "ca84c6c2a917c65607010e3543675041",
"icons/favicon.ico": "a4c6852ece6a0d6de78e7f18b0399d3d",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "e2d7af477838f95d8cd561321fd66802",
"icons/ms-icon-150x150.png": "c307ac400190c11bb6b84ebed6c93955",
"icons/ms-icon-310x310.png": "5f02567beb418f277554df3edb20f6e8",
"icons/ms-icon-70x70.png": "60a2dfebd3476c269261ceb3e296de73",
"index.html": "ce9cd0ee1841a8d5c9bf1135b724661f",
"/": "ce9cd0ee1841a8d5c9bf1135b724661f",
"main.dart.js": "4dcd7266232196609d422b86c307586f",
"manifest.json": "033c21b003690bdaedfdea645d2d3b3f",
"version.json": "2886c1710b63703560f958b9fa9f0378"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
