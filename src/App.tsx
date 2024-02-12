import { createSignal, createResource, onMount, Show, For, type Component, Accessor } from 'solid-js';
import Menu from './components/Menu';
import { getTimeSlots } from './services/time';
import TimeSlot from './components/TimeSlot';

const App: Component = () => {
  const [timeSlotsResource] = createResource(getTimeSlots);

  const [selectedSlot, setSelectedSlot] = createSignal<number | null>(null);
  const [isUiReady, setIsUiReady] = createSignal(false);

  onMount(() => {
    setIsUiReady(true);
  });

  const handleSelectSlot = (index: number) => {
    setSelectedSlot(prev => prev === index ? null : index);
  };

  const isFetching = timeSlotsResource.loading;

  return (
    <>
      <div class="flex justify-center items-center h-screen">
        <div class="text-center">
          <h1 class="text-3xl font-bold underline mb-8">Timed Orders App</h1>
          <div class="space-x-4 mb-8">
            <Menu text='Dnes 4.4.' />
            <Menu text='Zitra 5.4.' />
          </div>
          <Show when={isUiReady()}>
            <div class="grid grid-cols-3 gap-4 max-h-96 overflow-y-auto">
              <Show when={!isFetching} fallback={
                <For each={timeSlotsResource()?.Data}>
                  {(slot, index) => (
                    <TimeSlot
                      time={slot.Time}
                      capacity={slot.Capacity}
                      originalCapacity={slot.OriginalCapacity}
                      onSelect={() => handleSelectSlot(index())}
                      isSelectedSlot={index() === selectedSlot()}
                    />
                  )}
                </For>
              }>
                <p>Loading...</p>
              </Show>
            </div>
          </Show>
        </div>
      </div>
    </>
  );
};

export default App;
