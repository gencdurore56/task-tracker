/*
Filename: ComplexApplication.js

This code represents a complex application that incorporates multiple modules and utilizes advanced JavaScript concepts.

*/

// Module 1: User Management
const UserManagement = (function () {
    let users = [];

    function addUser(user) {
        users.push(user);
        console.log(`User ${user} added successfully.`);
    }

    function getUsers() {
        return users;
    }

    return {
        addUser,
        getUsers
    };
})();

// Module 2: Product Management
const ProductManagement = (function () {
    let products = [];

    function addProduct(product) {
        products.push(product);
        console.log(`Product ${product} added successfully.`);
    }

    function getProducts() {
        return products;
    }

    return {
        addProduct,
        getProducts
    };
})();

// Module 3: Order Management
const OrderManagement = (function () {
    let orders = [];

    function addOrder(order) {
        orders.push(order);
        console.log(`Order ${order} added successfully.`);
    }

    function getOrders() {
        return orders;
    }

    return {
        addOrder,
        getOrders
    };
})();

// Main Application
const ComplexApplication = (function (UserManagement, ProductManagement, OrderManagement) {
    function checkAndProcessOrder(user, product) {
        if (UserManagement.getUsers().includes(user) && ProductManagement.getProducts().includes(product)) {
            OrderManagement.addOrder({ user, product });
        } else {
            console.log("Invalid user or product!");
        }
    }

    return {
        checkAndProcessOrder
    };
})(UserManagement, ProductManagement, OrderManagement);

// Usage
UserManagement.addUser("John");
UserManagement.addUser("Sarah");
ProductManagement.addProduct("Laptop");
ProductManagement.addProduct("Phone");

ComplexApplication.checkAndProcessOrder("John", "Laptop");
ComplexApplication.checkAndProcessOrder("Sarah", "Desktop");

console.log(UserManagement.getUsers());
console.log(ProductManagement.getProducts());
console.log(OrderManagement.getOrders());