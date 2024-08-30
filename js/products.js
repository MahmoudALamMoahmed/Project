/*products*/

/* Start products JQ And Pagination */

$(document).ready(function () {
  const apiUrl = "https://fakestoreapi.com/products";
  const itemsPerPage = 6; // Number of items per page
  let currentPage = 1;
  let products = [];

  // Fetch data from API
  function fetchData() {
    $.ajax({
      url: apiUrl,
      method: "GET",
      success: function (data) {
        products = data;
        displayPage(currentPage);
        setupPagination();
      },
      error: function (error) {
        console.log("Error fetching data:", error);
      },
    });
  }

  // Display products for the current page
  function displayPage(page) {
    $("#products").empty();
    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let paginatedItems = products.slice(start, end);

    paginatedItems.forEach((product) => {
      $("#products").append(`
              <div class="ms-4 mb-4">
                  <div class="card rounded-4 border-3 border-dark-subtle" style="width:360px;height:330px;">
                      <img src="${product.image}" class="card-img-top" alt="${
        product.title
      }" style="width:100px;height:100px;margin:10px auto;">
                      <hr>
                      <div class="card-body position-relative">
                          <p class="card-title fw-semibold">${product.title}</p>
                          <div>
                              <p class="card-text fw-bold text-success">\$${
                                product.price
                              }</p>
                              <p class="card-text fw-bold text-success text-decoration-line-through">${Math.trunc(
                                product.price + 50
                              )}</p> 
                              <a class="fs-1 me-3 mb-3 position-absolute bottom-0 end-0" href="#" style="color:black"><i class="fa-solid fa-cart-shopping"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
          `);
    });
  }

  // Setup pagination controls
  function setupPagination() {
    $("#pagination").empty();
    let pageCount = Math.ceil(products.length / itemsPerPage);
    for (let i = 1; i <= pageCount; i++) {
      $("#pagination").append(`
              <li class="page-item ${i === currentPage ? "active" : ""}">
                  <a class="page-link" href="#">${i}</a>
              </li>
          `);
    }

    $(".page-link").on("click", function (e) {
      e.preventDefault();
      currentPage = parseInt($(this).text());
      displayPage(currentPage);
      setupPagination();
    });
  }

  // Initial fetch and display
  fetchData();
});

/* End products JQ And Pagination */
