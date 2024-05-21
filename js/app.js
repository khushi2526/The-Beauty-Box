/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Khushi Shaileshkumar Kotadia
 *      Student ID: 167632215
 *      Date: 27-11-2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;
let items = document.querySelector(".products");
let navigationBar = document.querySelector("#category-menu");

function main() {
  document.getElementById("category").textContent = "Make-Up";
  showItems(
    products.filter(function (product) {
      if (product.categories.includes("C1")) {
        return product;
      }
    })
  );

  showNavBtn();

  function createProductCard(product) {
    return `
  
  <article class="card">
    <img src="${product.imagePath}" alt="Product-Image">
    <div class="card-info">
    <header>
      <h4 style="font-size:18px"><b>${product.name}</b></h4>
      <p class="card-text" style="font-size:13px">${product.description}</p>
      <h4 class="price"><b>CAD $${product.price}</b></h4>
    </header>
    </div>
  </article>`;
  }

  function showItems(item) {
    let showProduct = item.map(function (product) {
      return createProductCard(product);
    });

    showProduct = showProduct.join("");
    items.innerHTML = showProduct;
  }

  function showNavBtn() {
    const showCategory = categories
      .map(function (item) {
        return `<button data-id="${item.name}" class="btn" type="button">${item.name}</button>`;
      })
      .join("");

    navigationBar.innerHTML = showCategory;
    let clickBtn = document.querySelectorAll(".btn");

    clickBtn.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        let category = e.currentTarget.dataset.id;
        document.getElementById("category").textContent = e.currentTarget.dataset.id;

        if (category === "Make-Up") {
          category = "C1";
        } else if (category === "Skin-Care") {
          category = "C2";
        } else if (category === "Hair-Care") {
          category = "C3";
        } else if (category === "Fragrance") {
          category = "C4";
        }

        const productCategory = products.filter(function (item) {
          if (item.categories.includes(category)) {
            return item;
          }
        });

        showItems(productCategory);
      });
    });
  }
}

addEventListener("DOMContentLoaded", main);
