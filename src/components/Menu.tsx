import { JSXElement, createSignal } from 'solid-js';

type MenuProps = {
  text: string
}

function Menu({ text }: MenuProps): JSXElement {
  const [buttonText] = createSignal(text);
  
  return (
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      {buttonText()}
    </button>
  );
}

export default Menu;