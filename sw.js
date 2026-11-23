const C='jy-v2',F=['./','index.html','manifest.json','icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!='GET')return;
if(u.origin==location.origin||u.hostname=='cdn.jsdelivr.net')e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{const k=x.clone();caches.open(C).then(c=>c.put(e.request,k));return x}).catch(()=>r)))});
