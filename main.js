function caesarCipher(text, shift) {
    const map = {};
    const result = [];

    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(i + 97);
        const shiftedLetter = String.fromCharCode(((i + shift) % 26) + 97);
        map[letter] = shiftedLetter; 
        map[letter.toUpperCase()] = shiftedLetter.toUpperCase(); 
    }

    for (let char of text) {
        if (map[char]) {
            result.push(map[char]);
        } else {
            result.push(char); 
        }
    }

    return result.join(''); 
}

function encrypt() {
    const shift = parseInt(document.getElementById('shift').value); 
    const text = document.getElementById('text').value; 
    const encryptedText = caesarCipher(text, shift); 
    document.getElementById('result').value = encryptedText; 
}

function decrypt() {
    const shift = parseInt(document.getElementById('shift').value);
    const text = document.getElementById('text').value; 
    const decryptedText = caesarCipher(text, 26 - (shift % 26)); 
    document.getElementById('result').value = decryptedText; 
}

const products = new Set();

    function addProduct() {
        const input = document.getElementById('product');
        const product = input.value.trim();
        
        if (product && !products.has(product)) {
            products.add(product);
            const list = document.getElementById('productList');
            const li = document.createElement('li');
            li.textContent = product;
            list.appendChild(li);
        }
        
        input.value = '';
    }

    const myMap = new Map();

    function addPair() {
        const key = document.getElementById('keyInput').value;
        const value = document.getElementById('valueInput').value;
        myMap.set(key, value);
        updateDisplay();
        document.getElementById('keyInput').value = '';
        document.getElementById('valueInput').value = '';
    }

    function deletePair() {
        const key = document.getElementById('deleteKeyInput').value;
        myMap.delete(key);
        updateDisplay();
        document.getElementById('deleteKeyInput').value = '';
    }

    function searchPairs() {
        const query = document.getElementById('searchInput').value;
        let count = 0;
        myMap.forEach((value, key) => {
            if (key.includes(query) || value.includes(query)) {
                count++;
            }
        });
        document.getElementById('searchResult').innerText = `Найдено совпадений: ${count}`;
    }

    function clearMap() {
        myMap.clear();
        updateDisplay();
    }

    function updateDisplay() {
        const count = parseInt(document.getElementById('displayCount').value) || myMap.size;
        const displayDiv = document.getElementById('mapDisplay');
        displayDiv.innerHTML = '';

        let displayedPairs = 0;
        myMap.forEach((value, key) => {
            if (displayedPairs < count) {
                const pairDiv = document.createElement('div');
                pairDiv.innerText = `${key}: ${value}`;
                displayDiv.appendChild(pairDiv);
                displayedPairs++;
            }
        });
    }