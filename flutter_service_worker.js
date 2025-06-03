'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4815be98d5e523440c25e988ddf83c19",
".git/config": "d754298c419cfa03d164a592672ad91c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "240f98de03d78c245810a859870d3fdc",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "428116bb03bd3073839f8635ce691091",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "87a58f2a437e0bdf6bbcd1886d61a423",
".git/logs/refs/heads/master": "87a58f2a437e0bdf6bbcd1886d61a423",
".git/logs/refs/remotes/origin/master": "20346fcb25b84aa0f46715e23b0ac40a",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/03/e489b81bd3ca4b9c9a3220dd5bc8ef69b7a1a8": "5916b6a8e6d7a22038d26e0f54f5689e",
".git/objects/0a/644f22c33880c0dd549aaa829f9da0f6e5a332": "073818561211a3f7556372f9383762c4",
".git/objects/0d/8e4f8be506a8860e1cd1d9dbc22802ff26b8df": "a304f970a3241164aaad438bc8d93c2a",
".git/objects/0e/61ce9e54479232059f9cc39cf85736ea3284b0": "5f15e7ddbd5d8fe74b6f0bced6a2da1f",
".git/objects/0e/9e2439d969704f16aa599d70b97b9a442197ff": "e2ef21b2c8b152552ab95a1f6c076726",
".git/objects/10/466690267ddf49dc05a89f551f82a7c882c199": "ecdcceb8409b29fefd9a463aaf9c626b",
".git/objects/12/a20d04723fd3b85b6490104b238fdccb795679": "009297c18960c7ced1be06bf3d51a52d",
".git/objects/16/e4f9ad36237900a66428273f3c68e89feef011": "56c17ec69d2a3d45ef171ac93dff6c34",
".git/objects/18/32de4c7206031c8069b0fe377a57f27346cea4": "c3cb0ce653d16eccd9df7eed18a679e0",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1f/27561579bf4dc905d92fd9c4d385104ebec7f7": "af2d2bb405f2d036de3469e7a809a8ae",
".git/objects/27/2b828cebe3629b69766fb2f5be2d5fc31bda77": "cc0dc436950b8eb150843a8c0479bed0",
".git/objects/28/13f7a5e8243e68ef9453b240d38c4cf1ca0d76": "46abe5dabd65a0a65ad30f82e95130c0",
".git/objects/29/fda9b016542969c19408b3f490b66cb3048aa7": "176d4c2552201e6403d0b142f2cc5aa0",
".git/objects/2b/63814687596a89c20d06ca87087b0b28cf583e": "d54d02855dba65f714fc38f8c8cc5992",
".git/objects/32/3c1d6f8b5deb128f44480a7f1a9d6daf2d3141": "64d2d61d90d10fd8a1f70a3bc685d671",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/38/3cd379f63db8da4d1f962fdfeeb440095b0505": "df05cfa133d78e5f40a37539a92bfb00",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/3b99ed37634cba3c16879707f4b290e6943dc5": "48351a7cddf039975a85c16eac44734c",
".git/objects/53/acbb18958f65cee5ecbc58cc611732cc73a6fd": "4a9be2925c1c439ed418c87c462b254e",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/48e0831f3b5c6448b5977f5537212fb67f4f72": "1b74e4a72c459452b1c967a95401a0fc",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/68/f2d5233323a111709ba9498cae784d587b4e4f": "45a1ef8e3ee50762d51a00f437de420a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/74/1ef8defaba03738c08fe8db4f31573c1f0d7c0": "e76363ea9704d27eadd17d9351f37a76",
".git/objects/74/ca94ad331f1610ecd2a59c7c34d25b92c02d7e": "6a23d17ba6a84b7a56702e994dbc0da1",
".git/objects/75/fc99e4c664de0bea869f1351c1dae4e770cce2": "3f545244a1bb5389bee85eacd37f2156",
".git/objects/76/1a9aa0c5afd0811ae399ff4ce6fd6dbfa47cca": "31e0e3b4f6a0efe970ff6ea0c6cf636f",
".git/objects/82/cdbc3c2559f225c5d65fe77b844ce620bea0f9": "55d4af2fc29125c44ccb4ad4636cd60d",
".git/objects/83/e97ece6644def335fbea4b53c7034ab550eda7": "ae6e829666f45293037eaa8071f0a2f3",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8c/00ca5f63877472c9d9a79e35467d989aa5ba26": "67f65686fc7919cdf705dd5aaa9ce970",
".git/objects/8d/8bb4773ce6effb38f9f0867f4a92c7cb5b2894": "6b0fafc59060ada19cf17e98e698355d",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/6ddd4a1a11f15f2b4f0467895ffdc4544a4773": "1e41ce226bf91b304882b95f5acd3cd1",
".git/objects/93/3e1775a954708e6ba2deec1d03cb0a44a82950": "bd20db596fa861b7063b9562c930afd2",
".git/objects/94/b0aeaaf4ef5a314489289b9b6d22acfd137ca1": "7c89ed07a1ced120df8f051cd1cc0451",
".git/objects/97/8a2946ddc6776ebf3386227a55e1780a3c5ea5": "4328638e1b2b67e3b4af08a8211f66fb",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/0ef6f8246373ca6382926d3a8ba8e8b0ffec89": "8f07a932fa6dc72970e7c1fe7306e359",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/00ae5ca272cafc27772885e114c7ef2095806f": "8675203e088b36e55dba7cc9dfa8b4aa",
".git/objects/b0/e3a6ed16a8c7734bec125648d29f14fb417c1e": "dfeb088658da412855dd838736aad629",
".git/objects/b7/e8cc811bfa10fd651cfff7625d80fd8cab3677": "5f9db2820bbc8599095df9a9e3fac5c9",
".git/objects/bc/455441a2369dd0504433f79bdd96e2c9cd824e": "f3d8a676869fe83b2b00f8aec714113e",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/d2/c7d2706fda69cf6e12d2f68d91e99c4afd26e9": "25c88dc31fd20e54161d1864c15bc4a0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/2ef2dd4e881fe181ad719a0212d64233f438d4": "65189e3b661065257d859931b376c983",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/19f658cfe4470fb2a7aa3b3ce10d576222b58e": "09fa4646e7e69d02b898596aa890e74d",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dc/5c8f717233a512e146edb91c8116a1bbbec75b": "c73b8c8a8dcdb9a66a204ef8d4d9496d",
".git/objects/dc/b716568ab78776db26dd3b398a60360216d0da": "cde66712a0ee17ebb393d1456142427a",
".git/objects/e3/cf251af85c38697dc700d6f4b49899fc0a1bd8": "98120c75c3ba279f4660139815fde5fe",
".git/objects/e5/cf1bef8964a645c6b9815c469df51316469ef6": "1fc2cdfdfa7b80b656d042ec146891ab",
".git/objects/e6/7f7ffce82f8d0ae60702a4021c42708cea978e": "35f04ab49d4a2768d8608c9de8712812",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/d231679bee2c0c4fcd9a25055f5aec26ec8234": "4d9d692e6572c780fd349a2cb105fcf2",
".git/objects/ef/ed752ea33a575241fa60c8b3d44f86f20b9a23": "a06ade69c1699c17cb83c77354465acb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/ORIG_HEAD": "588d172a79203a0d989353098af1b6bb",
".git/refs/heads/master": "4db2c701001a24c63d61f982ef711e47",
".git/refs/remotes/origin/master": "4db2c701001a24c63d61f982ef711e47",
"assets/AssetManifest.bin": "566142de2b5f098a61e588e5c080ccf6",
"assets/AssetManifest.bin.json": "b1321e94fe42f7db95d98e93b3046774",
"assets/AssetManifest.json": "cf937afe8228e93d5d27db9339ad1bc0",
"assets/assets/background.png": "dd865407ee60982727f9cf12cb566abb",
"assets/assets/logo.png": "c593cf9a6ab03fd6037f2f80fb9b1daf",
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
"flutter_bootstrap.js": "72585f96dafa6ca1f28b8e823cef3d12",
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
"main.dart.js": "527f01a2000862d2921fc510afdabf70",
"manifest.json": "033c21b003690bdaedfdea645d2d3b3f",
"README.md": "5987829cccf59f448dc4b9ee70f3de36",
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
