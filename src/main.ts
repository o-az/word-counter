import './style.css';
import { initCounter, resetFunction } from './counter';
import { checkedQuerySelector } from './utilities';

const app = checkedQuerySelector<HTMLDivElement>('#app');
app.innerHTML = /* html */ `
  <main>
    <div class="text-3xl flex justify-evenly text-center mb-6">
      <p>
        words
        <span id="word-count">0</span>
      </p>
      <button id="reset">reset</button>
      <p>
        characters
        <span id="character-count">0</span>
      </p>

    </div>
    <textarea class="text-white p-4 resize w-[600px] h-[300px] text-xl font-medium"></textarea>
  </main>
`;

const resetButton = checkedQuerySelector<HTMLButtonElement>('#reset');
resetButton.addEventListener('click', resetFunction);

initCounter();
