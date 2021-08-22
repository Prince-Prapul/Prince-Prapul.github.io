'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
".git/config": "4954ed628258937ea1124f72fbcefa94",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f3c7bd1d72269c17164ec60653962f3e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ee79de8b623bf731c869cf25071f921e",
".git/logs/refs/heads/master": "ee79de8b623bf731c869cf25071f921e",
".git/logs/refs/remotes/origin/master": "fb2acbb0cd40d67d031ed40d9bbd7210",
".git/objects/0a/b6157b926b9299f23a050e4fe60b2a24e15cf3": "84730292bb224c9e4eaa5244eddc1fbe",
".git/objects/11/d1713e02b5c761c120feb027be95d4612b1a1f": "23485620d6d61a0031983cb4205345fe",
".git/objects/19/f3af2bf7e1ec386f8af65a83994dd3661ba5b5": "761e3345bbaa573ed5f66dd95f3455f1",
".git/objects/26/7e8bf6776ce02e46034f8d62683bacad50b048": "701e675b8f8b8f67adc278d56a893744",
".git/objects/2d/e239d1c2611c023d0581382ba0c303573cbba6": "0f9c587babac96db0abc00ed32659d28",
".git/objects/31/06be353074864d565780d4fc97a057322ee018": "3a5c71f94b77899499be8c63b1381366",
".git/objects/31/cfa35e1a671bd14936284a35e3c47aa1a69b81": "9e9de028a6a75f9439f9ae2433fb80a3",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/4a/f149acd8524686ccd587743bc445f7be4bb7cb": "eb648f3aa46ac736c0a2015b8f1533ed",
".git/objects/4b/a3ec02a15bf9f8ea8af063188cf55d04636dad": "1039250153ee63bccc100e32556b5463",
".git/objects/4c/4cedcd6c9c6fe38b01befb178443d798957765": "ba73581900d519e0fd23e8663c4f9195",
".git/objects/52/96045e961bc51aad3115845134299063c35581": "b59b31fd898ed6bbcb90e18981f6c827",
".git/objects/52/e894daa2973fa1f2f69144f58c362a391aa0ed": "8797f0380d6e63ba44ae14a6b4601645",
".git/objects/55/2d046d31fa85e099f5472163209ca59bd3bcc7": "ae140adb23a9a29c6dcca93f795fd5c3",
".git/objects/59/03aadbdf42b4cf90347d00070df27dedb35aa0": "2cebbdb5c50e46a3e9975f637d647652",
".git/objects/5f/e75eb4ac7ac98efe9e52f59e4f936a89ca1dd1": "e8175133466decde1971a8fdc8d966dd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8d/b18c6a15eece6e2ab2e17ede06a3dcdf033cdc": "0633ac308e8de938bc03b9ff3b132c8f",
".git/objects/93/d356fe9d7d4b0562d200ce331e0d811b8032a5": "5d62fc234dadee3058b8275e243d6661",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/d9cd0abbe3a1ae8bcd83e6d5ebecae15e3a645": "fd8c7b4e84d20a85f86d1cde7e766894",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/7f1a5d7d6719d96d452d71de1f6ca719a9493a": "587fbae149e66d56f6da4d222dec056f",
".git/objects/cc/ded6fa97d1335e794ba839eb7759a2f47b72b8": "2400b96aa364fb68786d407f04eb720c",
".git/objects/d2/3d13ad6cd28e396dbd790f930f3826145031df": "545d0cc7c51212e15b285cb831a27a2a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/b834a4dd5df2abb80d80ade8d2566bef49b90b": "242f4f308b006d7ad518da95679949a2",
".git/objects/df/259f0eed22f38936c0a5934bfc98ac24cc9ff8": "71c509e7ec5908acf9bd598815c69736",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fb/fc9689e8b48dcc3552a79322058416e950f170": "c68dbed8544808a14d2a389bba76420f",
".git/refs/heads/master": "452e6883a4025d00614f776be3b8b510",
".git/refs/remotes/origin/master": "452e6883a4025d00614f776be3b8b510",
"assets/AssetManifest.json": "25be28c196c0a02201ac5949ad65f4ed",
"assets/assets/fonts/MySocialIcons.ttf": "345787fe6cbe5bf827f3a84436278f6f",
"assets/assets/fonts/Ubuntu-Bold.ttf": "e00e2a77dd88a8fe75573a5d993af76a",
"assets/assets/fonts/Ubuntu-Medium.ttf": "8e22c2a6e3a3c679787e763a97fa11f7",
"assets/assets/fonts/Ubuntu-Regular.ttf": "2505bfbd9bde14a7829cc8c242a0d25c",
"assets/assets/images/education.png": "dd7e2d99738624cd83015530e43ecc3b",
"assets/assets/images/load.gif": "e3c8e5511732a3f0b739c8002b6265f8",
"assets/assets/images/man.png": "fe9c1d6a06a907900265bf09f6329322",
"assets/assets/images/Prapul%2520Logo.png": "5abeef0fd61cc8fbfeb44a1cc3f3766b",
"assets/assets/images/Prapul.png": "120fd311b136a0152cab821e34167e9c",
"assets/assets/images/Prapul1.png": "120fd311b136a0152cab821e34167e9c",
"assets/FontManifest.json": "927f2f13a2d04e1dbe1ab15efbdb72fa",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "8064d78326199ab1d8c4118f0b69a6a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "120fd311b136a0152cab821e34167e9c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "90e245fc9fe26d57a7c5d3fcc72df3d7",
"/": "90e245fc9fe26d57a7c5d3fcc72df3d7",
"main.dart.js": "2a2cbcee70f9cf67a77fbe17f159b8e0",
"manifest.json": "7a6da7457595019d642254b0fd9c99e7",
"version.json": "bbe81d1828db114aadda1b1734ae2d6f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
