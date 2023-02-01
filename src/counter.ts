import { checkedQuerySelector } from './utilities';

function wordCounter(text: string): number {
  const textArray = text.split(' ');
  let wordCount = 0;
  for (const word of textArray) {
    if (/[A-Za-z]/.test(word)) wordCount++;
  }
  return wordCount;
}

const characterCounter = (text: string): number => text.length;

const renderText = (domElement: HTMLElement, text: string) => (domElement.textContent = text);

export function resetFunction() {
  const textArea = checkedQuerySelector<HTMLTextAreaElement>('textarea');
  const wordDOM = checkedQuerySelector<HTMLParagraphElement>('#word-count');
  const characterDOM = checkedQuerySelector<HTMLParagraphElement>('#character-count');
  textArea.value = '';
  wordDOM.textContent = '0';
  characterDOM.textContent = '0';
}

export function initCounter() {
  const textArea = checkedQuerySelector<HTMLTextAreaElement>('textarea');
  const wordDOM = checkedQuerySelector<HTMLParagraphElement>('#word-count');
  const characterDOM = checkedQuerySelector<HTMLParagraphElement>('#character-count');
  textArea.addEventListener('input', ({ target }) => {
    const { value } = target as HTMLTextAreaElement;
    renderText(wordDOM, wordCounter(value).toString());
    renderText(characterDOM, characterCounter(value).toString());
  });
}
