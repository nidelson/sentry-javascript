!function(n,e,t,r,o,a,i,c,_,p){for(var s=p,forceLoad=!1,f=0;f<document.scripts.length;f++)if(document.scripts[f].src.indexOf(i)>-1){s&&"no"===document.scripts[f].getAttribute("data-lazy")&&(s=!1);break}var u=!1,l=[],d=function(n){("e"in n||"p"in n||n.f&&n.f.indexOf("capture")>-1||n.f&&n.f.indexOf("showReportDialog")>-1)&&s&&E(l),d.data.push(n)};function E(i){if(!u){u=!0;var p=e.scripts[0],s=e.createElement(t);s.src=c,s.crossOrigin="anonymous",s.addEventListener("load",(function(){try{n[r]&&n[r].__SENTRY_LOADER__&&(n[r]=R),n[o]&&n[o].__SENTRY_LOADER__&&(n[o]=h),n.SENTRY_SDK_SOURCE="loader";var e=n[a],t=e.init,c=[];_.tracesSampleRate&&c.push(new e.BrowserTracing),(_.replaysSessionSampleRate||_.replaysOnErrorSampleRate)&&c.push(new e.Replay),c.length&&(_.integrations=c),e.init=function(n){var e=_;for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);t(e)},function(e,t){try{for(var a=0;a<e.length;a++)"function"==typeof e[a]&&e[a]();var i=d.data,c=!(void 0===(u=n.__SENTRY__)||!u.hub||!u.hub.getClient());i.sort((function(n){return"init"===n.f?-1:0}));var _=!1;for(a=0;a<i.length;a++)if(i[a].f){_=!0;var p=i[a];!1===c&&"init"!==p.f&&t.init(),c=!0,t[p.f].apply(t,p.a)}!1===c&&!1===_&&t.init();var s=n[r],f=n[o];for(a=0;a<i.length;a++)"e"in i[a]&&s?s.apply(n,i[a].e):"p"in i[a]&&f&&f.apply(n,[i[a].p])}catch(n){console.error(n)}var u}(i,e)}catch(n){console.error(n)}})),p.parentNode.insertBefore(s,p)}}d.data=[],n[a]=n[a]||{},n[a].onLoad=function(n){l.push(n),s&&!forceLoad||E(l)},n[a].forceLoad=function(){forceLoad=!0,s&&setTimeout((function(){E(l)}))},["init","addBreadcrumb","captureMessage","captureException","captureEvent","configureScope","withScope","showReportDialog"].forEach((function(e){n[a][e]=function(){d({f:e,a:arguments})}}));var R=n[r];n[r]=function(){d({e:[].slice.call(arguments)}),R&&R.apply(n,arguments)},n[r].__SENTRY_LOADER__=!0;var h=n[o];n[o]=function(e){d({p:"reason"in e?e.reason:"detail"in e&&"reason"in e.detail?e.detail.reason:e}),h&&h.apply(n,arguments)},n[o].__SENTRY_LOADER__=!0,s||setTimeout((function(){E(l)}))}(
  window,
  document,
  'script',
  'onerror',
  'onunhandledrejection',
  'Sentry',
  'loader.js',
  __LOADER_BUNDLE__,
  __LOADER_OPTIONS__,
  __LOADER_LAZY__
);
