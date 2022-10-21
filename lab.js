class HashTable {
  constructor() {
    this.table = new Array(1000);
    this.size = 0;
    this.length = 1000;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = this.table[index] ? [...this.table[index].filter(el => el[0] !== key), [key, value]] : [[key, value]]
    console.log(this.table[index], index)
    this.size++;
  }

  get(key) {
    const target = this.hash(key);
    return this.table[target].find(el => el[0] === key);
  }

  remove(key) {
    const index = this.hash(key);

    if (this.table[index] && this.table[index].length) {
      const posision = this.table[index].indexOf(key)
      this.table[index] = this.table[index].filter(el => el[0] !== key)
      /* console.log(this.table[index], posision) */ 
      /* arrthis.table[index].splice(posision, 1) */
      this.size--;
      return true;
    } else {
      return false;
    }
  }
}

var hashTable = new HashTable()
hashTable.set('asd', 1)
hashTable.set('dsa', 2)
hashTable.remove('dsa')
console.log(hashTable.get('asd'))