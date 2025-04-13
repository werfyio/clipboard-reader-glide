import functionCode from './function.js';

window.addEventListener('message', async (event) => {
  const { type, payload } = event.data;
  if (type === 'glide-experimental-code-input') {
    const result = await functionCode(payload);
    window.parent.postMessage({ type: 'glide-experimental-code-output', payload: result }, '*');
  }
});
