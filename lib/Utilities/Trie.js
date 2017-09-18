import Node from './Node';

export default class Trie {
  constructor() {
    this.root = null;
    this.wordCount = 0;
  }

  insert(word) {
    const node = new Node();

    if (!this.root) {
      this.root = node;
    }

    let currentNode = this.root;
    const letters = [...word];

    letters.forEach(letter => {
      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new Node(letter);
      }
      currentNode = currentNode.children[letter];
    });

    if (!currentNode.isWord) {
      currentNode.isWord = true;
      this.wordCount++;
    }
  }

  count() {
    return this.wordCount;
  }

  suggest(prefix) {
    let currentNode = this.root;
    const prefixArray = [...prefix];
    const suggestionsArray = [];

    prefixArray.forEach(letter => {
      if (currentNode) {
        currentNode = currentNode.children[letter];
      }
    });

    const traverseTheTrie = (prefix, currentNode) => {
      const childLetters = Object.keys(currentNode.children);

      childLetters.forEach(letter => {
        const child = currentNode.children[letter];
        const newString = prefix + letter;
        if (child.isWord) {
          suggestionsArray.push({ word: newString, frequency: child.frequency, lastTouched: child.lastTouched })
        }
        traverseTheTrie(newString, child);
      });
    };

    if (currentNode && currentNode.isWord) {
      suggestionsArray.push({ word: prefix, frequency: currentNode.frequency, lastTouched: currentNode.lastTouched })
    }

    if (currentNode) {
      traverseTheTrie(prefix, currentNode);
    }

    suggestionsArray.sort((a, b) => {
      return b.frequency - a.frequency || b.lastTouched - a.lastTouched;
    });

    return suggestionsArray.map(obj => {
      return {
        value: obj.word,
        label: obj.word
      };
    });
  }

  select(word) {
    const wordsArray = [...word];
    let currentNode = this.root;

    wordsArray.forEach(word => {
      currentNode = currentNode.children[word];
    });

    currentNode.frequency++;
    currentNode.lastTouched = Date.now();
  }

  populate(words) {
    words.data.forEach(word => {
      this.insert(word);
    });
  }

}
