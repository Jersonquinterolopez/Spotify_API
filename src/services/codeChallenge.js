// GENERATING CODE VERIFIER

export const dec2hex = (dec) => {
  return ('0' + dec.toString(16)).substr(-2);
};

export const generateCodeVerifier = () => {
  var array = new Uint32Array(56 / 2);
  window.crypto.getRandomValues(array);
  return Array.from(array, dec2hex).join('');
};

// GENERATE CODE CHALLENGE FROM CODE VERIFIER

function sha256(plain) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest('SHA-256', data);
}

function base64urlencode(a) {
  var str = '';
  var bytes = new Uint8Array(a);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    str += String.fromCharCode(bytes[i]);
  }
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export async function generateCodeChallenge(v) {
  var hashed = await sha256(v);
  var challenge = base64urlencode(hashed);
  return challenge;
}
