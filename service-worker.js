/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bbe79da06128917fdd6353fd03d1747f"
  },
  {
    "url": "assets/css/0.styles.714a7de3.css",
    "revision": "1c773189bfaed7d87cc55780d944021d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.74163b06.js",
    "revision": "a9e38caf09fc1a4cb4f853919f02aac6"
  },
  {
    "url": "assets/js/11.e3708d94.js",
    "revision": "04661c440e01fd34f0378ed36f595305"
  },
  {
    "url": "assets/js/12.47773d6e.js",
    "revision": "25e42a3324d93087e02acfab60c45d71"
  },
  {
    "url": "assets/js/13.250e10f1.js",
    "revision": "8d10dbb68801c8621cd6b3aedab31aeb"
  },
  {
    "url": "assets/js/14.55227556.js",
    "revision": "907c70f94a766586bec9579e9580e5bd"
  },
  {
    "url": "assets/js/15.c245f5c3.js",
    "revision": "158c3a29c3e115f7ab024b6f7ae8771d"
  },
  {
    "url": "assets/js/16.73829149.js",
    "revision": "091705e5ab69a3ae0f693f934d6349b6"
  },
  {
    "url": "assets/js/17.1100f3bb.js",
    "revision": "3e3c0d0752ada85f062851a7a2274cb8"
  },
  {
    "url": "assets/js/18.1f5265a8.js",
    "revision": "b542896ca442d069c2c526bc71037b9a"
  },
  {
    "url": "assets/js/19.841c8b45.js",
    "revision": "b74044a6eaead7f5c90b8b6f796accb7"
  },
  {
    "url": "assets/js/2.1b37ce37.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/20.04d66b74.js",
    "revision": "49dba574fa688f8fa0592a4b67eeff8a"
  },
  {
    "url": "assets/js/21.d4781880.js",
    "revision": "d1eb0959bd9ce03f3ccad11923f98733"
  },
  {
    "url": "assets/js/22.03b052d5.js",
    "revision": "ad170d68401b80e5870cc7e4e31612f9"
  },
  {
    "url": "assets/js/23.feabe5f1.js",
    "revision": "0d5c889bb48be494efb374669d9a7a50"
  },
  {
    "url": "assets/js/24.5a944dea.js",
    "revision": "6907baad88ef8c88ef3c04a8a42d5a67"
  },
  {
    "url": "assets/js/25.6c46ab4d.js",
    "revision": "d52dbfb36c4186eb62ced5d1a15dbaa5"
  },
  {
    "url": "assets/js/26.d2d25ffd.js",
    "revision": "0938399e797e559d0a12c84f2755366f"
  },
  {
    "url": "assets/js/27.cc2c71ab.js",
    "revision": "b1744c47e3912ac4e3fda7813d8bab00"
  },
  {
    "url": "assets/js/28.03c1e105.js",
    "revision": "38fa1c05a30e0d8b258d1064d5a0fea9"
  },
  {
    "url": "assets/js/29.601fdb67.js",
    "revision": "5e3346bfac225073cf082119915a4406"
  },
  {
    "url": "assets/js/3.c3545b72.js",
    "revision": "01197f5e236be99fc7d8481f40ef25e7"
  },
  {
    "url": "assets/js/30.206d963e.js",
    "revision": "848676dc1ba0519cc6f88ac37fad8464"
  },
  {
    "url": "assets/js/31.f9b49154.js",
    "revision": "419e7d972b65d6507f79c4d572efb7f2"
  },
  {
    "url": "assets/js/4.866e23c1.js",
    "revision": "9d47f9473059a1dc3453f38d56e75387"
  },
  {
    "url": "assets/js/5.a52b5344.js",
    "revision": "7e6bf8a82af7be1644154ca10f093c9c"
  },
  {
    "url": "assets/js/6.937525b5.js",
    "revision": "e55ce1fb94e7535d378cf538e1ac7cd0"
  },
  {
    "url": "assets/js/7.c9207290.js",
    "revision": "ad2bf7a0b67cd8c3ea828d37da908098"
  },
  {
    "url": "assets/js/8.79619488.js",
    "revision": "df9a13ca5f3aae7c392570c49649d086"
  },
  {
    "url": "assets/js/9.33cb9a9a.js",
    "revision": "5ec25eec76e3504f97e362672fa2e474"
  },
  {
    "url": "assets/js/app.c6ea06d2.js",
    "revision": "c43c44fbaf070992068771f288cd0afd"
  },
  {
    "url": "config/index.html",
    "revision": "86ec03552736d0aac2cae3e9c0448016"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "311fd52f49d5f995cf0898f8adcb2039"
  },
  {
    "url": "guide/assets.html",
    "revision": "f41eca883f07f2699997da1d10208bbc"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "e543d9a1ada23506296048d29c9363be"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "6a66f5b7bd0f77a89fa3dc3056416a5f"
  },
  {
    "url": "guide/deploy.html",
    "revision": "a0fe3e8b11e42bd46182b0a921432b9c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "43c40382dbdfd0bc4b214e0b20d5d3a0"
  },
  {
    "url": "guide/i18n.html",
    "revision": "e39c34fc184894417fd668e5650d6c67"
  },
  {
    "url": "guide/index.html",
    "revision": "13522b280e5b78a20fb6fd6d712131aa"
  },
  {
    "url": "guide/markdown.html",
    "revision": "396d5e5c5f8a4bbb3f281ae7a6acddf0"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "ee07a4a8064f54d71f714991df2d389f"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "41daf11cf48848c9507f997185bcfa79"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "myphoto.png",
    "revision": "0750297ebd8fcb85eaa40a70f5933e5f"
  },
  {
    "url": "zh/config/index.html",
    "revision": "5da190fc5c1727e24f42742b8f8ece4f"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "b72d270074b2de8e1c724b6c00d9bc46"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "3ecaa47f7a489bb8139271b2a1de83e7"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "d7480fd5e9cab07ad71dc2a3900bd5a1"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "ae8bd83801a80b0d82e4c381b3495cbd"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "357fa1959e942b4aae4f551f92974d61"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "6ad9ceea2ef2c54030011b8fc1ff7061"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "cdaf746e091dff8fbdc3b6b506fcb64a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "b8abf67c09ac84513cc68fca7c48507b"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "ffe0d6c03b35e10fa7361fc43f598307"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "0be2101f442a30e41e0bf5965ae73fb4"
  },
  {
    "url": "zh/index.html",
    "revision": "0a6b29fcf1acb5ada3b5417af9ee937d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
