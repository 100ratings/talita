const trigger = document.querySelector('#secret-trigger');
const story = document.querySelector('#story-text');

const normalText = [
  'Talita tem uma pata na chácara do Tio Tinoco.',
  'A pata de Talita chama-se <strong>Tita</strong>.',
  'Tita é uma pata muito esperta e bonita.',
  'Tita e o pato Tomé têm oito patinhos.',
  'Tita cuida muito bem de seus filhotinhos.'
];

const secretText = [
  'Tarata tcheim una pati na cháchala do Tchau Chico.',
  'A pati de Tarata chamaçi Tati.',
  'Tati é uma pati muicjo esprecha e bonita.',
  'Tati e o pati Tomé tcheim oilivid patinhos.',
  'Tati caida muirtdo bem de seus filatilhos.'
];

function renderText(lines) {
  story.innerHTML = lines.map((line) => `<p>${line}</p>`).join('');
}

function showSecretText() {
  renderText(secretText);
}

function restoreNormalText() {
  renderText(normalText);
}

// pointer events funcionam tanto para toque quanto para mouse.
trigger.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  trigger.setPointerCapture?.(event.pointerId);
  showSecretText();
});

trigger.addEventListener('pointerup', restoreNormalText);
trigger.addEventListener('pointercancel', restoreNormalText);
trigger.addEventListener('pointerleave', restoreNormalText);

// Também permite testar o segredo usando teclado, sem alterar a experiência no celular.
trigger.addEventListener('keydown', (event) => {
  if (event.key === ' ' || event.key === 'Enter') {
    event.preventDefault();
    showSecretText();
  }
});

trigger.addEventListener('keyup', (event) => {
  if (event.key === ' ' || event.key === 'Enter') {
    event.preventDefault();
    restoreNormalText();
  }
});
