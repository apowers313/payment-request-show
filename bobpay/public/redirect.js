if ((window.location.host === 'webauthn.org:8443') &&
    (window.location.protocol !== 'https:')) {
  window.location.protocol = 'https:';
}