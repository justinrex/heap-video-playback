import { loadHeap } from './analytics';

beforeEach(() => {
  delete window.heap;
  document.querySelectorAll('#heap-loader').forEach(script => script.remove());
});

test('does not load analytics without an app ID or with the old placeholder', () => {
  expect(loadHeap('')).toBe(false);
  expect(loadHeap('YOUR_APP_ID')).toBe(false);
  expect(window.heap).toBeUndefined();
  expect(document.querySelector('script[src*="heapanalytics"]')).toBeNull();
});

test('loads the configured project once and queues early API calls', () => {
  expect(loadHeap('123456')).toBe(true);
  window.heap.track('test-event', { source: 'fixture' });
  expect(window.heap[0]).toEqual(['track', 'test-event', { source: 'fixture' }]);
  expect(document.getElementById('heap-loader')).toHaveAttribute('src', 'https://cdn.heapanalytics.com/js/heap-123456.js');
  expect(loadHeap('123456')).toBe(false);
  expect(document.querySelectorAll('#heap-loader')).toHaveLength(1);
});
