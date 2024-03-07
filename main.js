var fetchApi = (url) => {
    const result = fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data)=>{
        return data;
    })
    return result;
}

// fetch('https://dummyjson.com/products')
//     .then((response) => {
//         return response.json();
//     })
    fetchApi('http://localhost:3000/products')
    .then((data) => {
        var htmls = ""
        data.products.forEach((item) => {
            htmls += `
            <div class="item">
                <div class="img">
                    <img src="${item.thumbnail}" alt="${item.title}">
                </div>
                <div class="title">${item.title}</div>
                <div class="cost">${item.price}$</div>
                <div class="buy">Buy Now</div>
            </div>`
        })
        var product = document.querySelector('.products');
        product.innerHTML = htmls;
    })
