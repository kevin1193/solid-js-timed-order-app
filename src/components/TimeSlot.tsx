import { JSXElement, createSignal } from 'solid-js';

type TimeSlotProps = {
  time: string;
  capacity: number;
  originalCapacity: number;
  onSelect: () => void;
  isSelectedSlot: any
}

function TimeSlot(props: TimeSlotProps): JSXElement {
    const isFull = props.capacity === props.originalCapacity;
    
    const handleClick = () => {
      if (!isFull) {
        props.onSelect();
      }
    };

    return (
      <button 
        class={`${isFull ? 'bg-gray-500' : (props.isSelectedSlot ? 'bg-green-500' : 'bg-blue-500')} ${isFull ? 'hover:bg-gray-700' : (props.isSelectedSlot ? 'hover:bg-green-700' : 'hover:bg-blue-700')} text-white font-bold py-2 px-4 rounded-full`}
        onClick={handleClick}
        disabled={isFull}
      >
        <div>
          <div>{props.time}</div>
          <div>{props.capacity} / {props.originalCapacity}</div>
        </div>
      </button>
    );
  }
  
  export default TimeSlot;