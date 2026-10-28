const commands = [
  'addEventProperties', 'addUserProperties', 'clearEventProperties', 'identify',
  'resetIdentity', 'removeEventProperty', 'setEventProperties', 'track', 'unsetEventProperty',
];

export function loadHeap(appId) {
  if (!appId || appId === 'YOUR_APP_ID' || document.getElementById('heap-loader')) return false;
  const heap = window.heap = window.heap || [];
  heap.load = (id, config = {}) => {
    heap.appid = id;
    heap.config = config;
    for (const command of commands) {
      heap[command] = (...args) => heap.push([command, ...args]);
    }
    const script = document.createElement('script');
    script.id = 'heap-loader';
    script.async = true;
    script.src = `https://cdn.heapanalytics.com/js/heap-${encodeURIComponent(id)}.js`;
    document.head.append(script);
  };
  heap.load(appId);
  return true;
}
