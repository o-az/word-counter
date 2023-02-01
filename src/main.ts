import './style.css';
import { initCounter, resetFunction } from './counter';
import { checkedQuerySelector } from './utilities';

const app = checkedQuerySelector<HTMLDivElement>('#app');
app.innerHTML = /* html */ `
  <div class="container">
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
`;

const resetButton = checkedQuerySelector<HTMLButtonElement>('#reset');
resetButton.addEventListener('click', resetFunction);

initCounter();
