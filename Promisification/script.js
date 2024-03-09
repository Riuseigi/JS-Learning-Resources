//Promisification

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

// usage:
// loadScript('path/script.js', (err, script) => {...})

// Let’s promisify it.

// We’ll make a new function loadScriptPromise(src), that does the same (loads the script), but returns a promise instead of using callbacks.

// In other words, we pass it only src (no callback) and get a promise in return, that resolves with script when the load is successful, and rejects with the error otherwise.

// Here it is:

let loadScriptPromise = function(src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err);
      else resolve(script);
    });
  });
};

// usage:
// loadScriptPromise('path/script.js').then(...)