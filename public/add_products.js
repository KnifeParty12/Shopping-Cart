$(function () {
    let ProductName = $('#productName');
    let ProductManufacturer = $('#productManufacturer');
    let ProductPrice = $('#productPrice');
    $('#btnProductAdd').click(function () {

        addProduct(
            ProductName.val(),
            ProductManufacturer.val(),
            ProductPrice.val(),
            function (addedProduct) {
                window.alert("Addded" + addedProduct.name + "to database")
            }
        )
    })

});
