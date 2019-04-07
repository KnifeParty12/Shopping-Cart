
$(function () {

    let productlist = $('#product-list');
    fetchProducts(function (products) {
        productlist.empty();
        for(product of products){
            productlist.append(createProductCard(product))
        }
    })

});
