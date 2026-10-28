import { render, screen, fireEvent } from '@testing-library/react';
import App, { videoUrl } from './App';

const { inspectPlayer } = vi.hoisted(() => ({ inspectPlayer: vi.fn() }));
vi.mock('react-player', () => ({
  default: props => {
    inspectPlayer(props);
    return <button onClick={() => props.onError(Error('offline'))}>Simulate media error</button>;
  },
}));

test('preserves the reproduction video, native controls, autoplay, and viewport dimensions', () => {
  render(<App />);
  const props = inspectPlayer.mock.calls.at(-1)[0];
  expect(props).toMatchObject({ url: videoUrl, controls: true, playing: true, width: '100vw', height: '100dvh' });
  expect(screen.getByRole('main', { name: 'Video playback reproduction' })).toBeInTheDocument();
});

test('shows a useful error when the external video cannot load', () => {
  render(<App />);
  expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Simulate media error' }));
  expect(screen.getByRole('alert')).toHaveTextContent('Video unavailable');
});
