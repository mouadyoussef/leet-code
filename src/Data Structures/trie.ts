class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!current.children.has(word[i])) {
        current.children.set(word[i], new TrieNode());
      }
      current = current.children.get(word[i])!;
    }
    current.isWord = true;
  }

  search(word: string): boolean {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!current.children.has(word[i])) {
        return false;
      }
      current = current.children.get(word[i])!;
    }
    return current.isWord;
  }

  startsWith(prefix: string): boolean {
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (!current.children.has(prefix[i])) {
        return false;
      }
      current = current.children.get(prefix[i])!;
    }
    return true;
  }
}

class TrieNode {
  private _children: Map<string, TrieNode>;
  private _isWord: boolean;

  constructor() {
    this._children = new Map();
    this._isWord = false;
  }

  public get children(): Map<string, TrieNode> {
    return this._children;
  }

  public get isWord(): boolean {
    return this._isWord;
  }

  public set isWord(value: boolean) {
    this._isWord = value;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app")); // return True
