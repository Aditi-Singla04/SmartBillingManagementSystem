let current_inventory = {
    1: {
        name: "Acer Nitro 7",
        brand: "Acer",
        price: 1000,
        quantity: 10,
    },
    2: {
        name: "Asus ROG Strix",
        brand: "Asus",
        price: 1200,
        quantity: 5,
    },
    3: {
        name: "MSI GL65 Leopard",
        brand: "MSI",
        price: 1500,
        quantity: 3,
    },
    4: {
        name: "Lenovo Legion Y540",
        brand: "Lenovo",
        price: 1300,
        quantity: 7,
    },
    5: {
        name: "HP Omen 15",
        brand: "HP",
        price: 1100,
        quantity: 8,
    },
};

let incoming_purchase = {
    1: {
        name: "Acer Nitro 7",
        brand: "Acer",
        price: 1000,
        quantity: 5,
    },
    2: {
        name: "Asus ROG Strix",
        brand: "Asus",
        price: 1200,
        quantity: 5,
    },
    3: {
        name: "MSI GL65 Leopard",
        brand: "MSI",
        price: 1500,
        quantity: 3,
    },
    4: {
        name: "Lenovo Legion Y540",
        brand: "Lenovo",
        price: 1300,
        quantity: 7,
    },
    5: {
        name: "HP Omen 15",
        brand: "HP",
        price: 1100,
        quantity: 8,
    },
    6: {
        name: "Dell G3",
        brand: "Dell",
        price: 900,
        quantity: 10,
    },
};

let orders = {
    1: {
        name: "Acer Nitro 7",
        brand: "Acer",
        price: 1000,
        quantity: 5,
    },
};

function is_empty(string) {
    if (string.length == 0) {
        return true;
    }
    return false;
}

function getIndex(tbody) {
    let index = tbody.children.length || 0;
    return index;
}

function clearAll() {
    clearCurrentInventory();
    clearIncomingOrder();
    clearOutgoingOrder();
}

function clearCurrentInventory() {
    document.querySelector("#current_inventory_list").innerHTML = "";
}

function clearIncomingOrder() {
    document.querySelector("#incoming_inventory_list").innerHTML = "";
}

function clearOutgoingOrder() {
    document.querySelector("#outgoing_inventory_list").innerHTML = "";
}

function addCurrentInventory() {
    let productName = document.querySelector("#current_order_product_name").value;
    let productBrand = document.querySelector(
        "#current_order_product_brand"
    ).value;
    let productPrice = document.querySelector(
        "#current_order_product_price"
    ).value;
    let productQuantity = document.querySelector(
        "#current_order_product_quantity"
    ).value;

    if (
        is_empty(productName) ||
        is_empty(productBrand) ||
        is_empty(productPrice) ||
        is_empty(productQuantity)
    ) {
        alert("Please fill out all fields");
        return;
    }

    let tbody = document.querySelector("#current_inventory_list");

    let tr = `<tr>
    <th scope='row'>${getIndex(tbody) + 1}</th>
    <td>${productName}</td>
    <td>${productBrand}</td>
    <td>${productQuantity}</td>
    <td>$${productPrice}</td>`;

    tbody.innerHTML += tr;
}

function addIncomingOrder() {
    let productName = document.querySelector(
        "#incoming_order_product_name"
    ).value;
    let productBrand = document.querySelector(
        "#incoming_order_product_brand"
    ).value;
    let productPrice = document.querySelector(
        "#incoming_order_product_price"
    ).value;
    let productQuantity = document.querySelector(
        "#incoming_order_product_quantity"
    ).value;

    if (
        is_empty(productName) ||
        is_empty(productBrand) ||
        is_empty(productPrice) ||
        is_empty(productQuantity)
    ) {
        alert("Please fill out all fields");
        return;
    }

    let tbody = document.querySelector("#incoming_inventory_list");

    let tr = `<tr>
    <th scope='row'>${getIndex(tbody) + 1}</th>
    <td>${productName}</td>
    <td>${productBrand}</td>
    <td>${productQuantity}</td>
    <td>$${productPrice}</td>`;

    tbody.innerHTML += tr;
}

function addOutgoingOrder() {
    let productName = document.querySelector(
        "#outgoing_order_product_name"
    ).value;
    let productBrand = document.querySelector(
        "#outgoing_order_product_brand"
    ).value;
    let productPrice = document.querySelector(
        "#outgoing_order_product_price"
    ).value;
    let productQuantity = document.querySelector(
        "#outgoing_order_product_quantity"
    ).value;

    if (
        is_empty(productName) ||
        is_empty(productBrand) ||
        is_empty(productPrice) ||
        is_empty(productQuantity)
    ) {
        alert("Please fill out all fields");
        return;
    }

    let tbody = document.querySelector("#outgoing_inventory_list");

    let tr = `<tr>
    <th scope='row'>${getIndex(tbody) + 1}</th>
    <td>${productName}</td>
    <td>${productBrand}</td>
    <td>${productQuantity}</td>
    <td>$${productPrice}</td>`;

    tbody.innerHTML += tr;
}



// Example product list (in a real application, this might be fetched from a server)
// Example product list (in a real application, this might be fetched from a server)
// let currentInventory = [
//     { id: 1, name: 'Acer Nitro 7', brand: 'Acer', quantity: 10, price: 30000 },
//     { id: 2, name: 'Asus Rog 17', brand: 'Asus', quantity: 15, price: 50000 },
//     { id: 3, name: 'HP Rog 17', brand: 'HP', quantity: 20, price: 45000 }
//   ];
  
//   // Function to handle the add current inventory button click
//   function addCurrentInventory() {
//     const name = document.getElementById('current_order_product_name').value;
//     const brand = document.getElementById('current_order_product_brand').value;
//     const quantity = parseInt(document.getElementById('current_order_product_quantity').value);
//     const price = parseInt(document.getElementById('current_order_product_price').value);
  
//     const id = currentInventory.length ? currentInventory[currentInventory.length - 1].id + 1 : 1;
//     currentInventory.push({ id, name, brand, quantity, price });
//     updateInventoryTable();
//   }
  
//   // Function to handle the edit item button click
//   function editItem(type, id) {
//     const product = currentInventory.find(item => item.id === id);
//     if (product) {
//       document.getElementById('updateProductId').value = product.id;
//       document.getElementById('updateProductName').value = product.name;
//       document.getElementById('updateProductBrand').value = product.brand;
//       document.getElementById('updateProductQuantity').value = product.quantity;
//       document.getElementById('updateProductPrice').value = product.price;
//       const updateModal = new bootstrap.Modal(document.getElementById('updateModal'));
//       updateModal.show();
//     }
//   }
  
//   // Function to handle the save changes button click
//   document.getElementById('updateForm').addEventListener('submit', function (event) {
//     event.preventDefault();
//     const id = parseInt(document.getElementById('updateProductId').value);
//     const name = document.getElementById('updateProductName').value;
//     const brand = document.getElementById('updateProductBrand').value;
//     const quantity = parseInt(document.getElementById('updateProductQuantity').value);
//     const price = parseInt(document.getElementById('updateProductPrice').value);
  
//     const productIndex = currentInventory.findIndex(item => item.id === id);
//     if (productIndex !== -1) {
//       currentInventory[productIndex] = { id, name, brand, quantity, price };
//       updateInventoryTable();
//       const updateModal = bootstrap.Modal.getInstance(document.getElementById('updateModal'));
//       updateModal.hide();
//     }
//   });
  
//   // Function to handle the delete item button click
//   function deleteItem(type, id) {
//     currentInventory = currentInventory.filter(item => item.id !== id);
//     updateInventoryTable();
//   }
  
//   // Function to handle the clear all button click
//   function clearAll() {
//     currentInventory = [];
//     updateInventoryTable();
//   }
  
//   // Function to handle the clear current inventory button click
//   function clearCurrentInventory() {
//     currentInventory = currentInventory.filter(item => item.quantity > 0);
//     updateInventoryTable();
//   }
  
//   // Function to update the inventory table
//   function updateInventoryTable() {
//     const tbody = document.getElementById('current_inventory_list');
//     tbody.innerHTML = '';
//     currentInventory.forEach((product, index) => {
//       const row = document.createElement('tr');
//       row.innerHTML = `
//         <th scope="row">${index + 1}</th>
//         <td>${product.name}</td>
//         <td>${product.brand}</td>
//         <td>${product.quantity}</td>
//         <td>Rs ${product.price}</td>
//         <td>
//           <button class="btn btn-warning btn-sm" onclick="editItem('current', ${product.id})">Update</button>
//           <button class="btn btn-danger btn-sm" onclick="deleteItem('current', ${product.id})">Delete</button>
//         </td>
//       `;
//       tbody.appendChild(row);
//     });
//   }
  
//   // Initial call to populate the inventory table
//   updateInventoryTable();
  