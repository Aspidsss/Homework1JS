let myMap = new Map([
    ["key1", "value1"]
    ["key2", "value2"]
    ["key3", "value3"]
])
for (let key of myMap.keys()) {
    const value = myMap.get(key)
    console.log('Ключ —"${key}', 'значение — ${value}');
}