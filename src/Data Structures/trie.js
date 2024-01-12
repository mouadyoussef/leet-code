var Trie = /** @class */ (function () {
    function Trie() {
        this.root = new TrieNode();
    }
    Trie.prototype.insert = function (word) {
        var current = this.root;
        for (var i = 0; i < word.length; i++) {
            if (!current.children.has(word[i])) {
                current.children.set(word[i], new TrieNode());
            }
            current = current.children.get(word[i]);
        }
        current.isWord = true;
    };
    Trie.prototype.search = function (word) {
        var current = this.root;
        for (var i = 0; i < word.length; i++) {
            if (!current.children.has(word[i])) {
                return false;
            }
            current = current.children.get(word[i]);
        }
        return current.isWord;
    };
    Trie.prototype.startsWith = function (prefix) {
        var current = this.root;
        for (var i = 0; i < prefix.length; i++) {
            if (!current.children.has(prefix[i])) {
                return false;
            }
            current = current.children.get(prefix[i]);
        }
        return true;
    };
    return Trie;
}());
var TrieNode = /** @class */ (function () {
    function TrieNode() {
        this._children = new Map();
        this._isWord = false;
    }
    Object.defineProperty(TrieNode.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrieNode.prototype, "isWord", {
        get: function () {
            return this._isWord;
        },
        set: function (value) {
            this._isWord = value;
        },
        enumerable: false,
        configurable: true
    });
    return TrieNode;
}());
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
var trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app")); // return True
