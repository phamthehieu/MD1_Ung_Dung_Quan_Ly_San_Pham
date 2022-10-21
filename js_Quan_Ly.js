let listProduct = ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6', 'Xiaomi Redmi Note 4', 'Apple iPhone 6S'];

function displayAll() {
    let str = ` <tr> 
            <td>Product Name</td>
            <td></td> 
            <td>Số lượng: ${listProduct.length}</td>
            </tr>`
    for (let i = 0; i < listProduct.length; i++) {
        str += `<tr>
        <td>${listProduct[i]}</td>
        <td><button onclick="showFromEdit(${i})">Edit</button></td>
        <td><button onclick="deleteProDuct(${i})">Delete</button></td>
    </tr>`
        document.getElementById("displayArena").innerHTML = str;

    }
}

displayAll();

function find() {
    let proDuctName = document.getElementById("add").value;
    document.getElementById("add").value = "";
    listProduct.push(proDuctName);
    displayAll()
}

function deleteProDuct(inDex) {
    listProduct.splice(inDex, 1);
    displayAll();
}

function showFromEdit(inDex) {
    let arr = "";
    arr = `<input type="text" id="editProduct" value="${listProduct[inDex]}"><button onclick="saveProduct(${inDex})">Edit</button>`;
    document.getElementById("edit").innerHTML = arr;
}

function saveProduct(inDex) {
    listProduct[inDex] = document.getElementById("editProduct").value;
    document.getElementById("edit").innerHTML = "";
    displayAll();
}
