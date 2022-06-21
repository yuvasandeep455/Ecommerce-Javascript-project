const btn = document.querySelectorAll('.button-value');
const storeProducts = document.querySelectorAll('.store-product');
for (i = 0; i < btn.length; i++) {

    btn[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        storeProducts.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};



// const search = document.querySelectorAll("search");
// search.addEventListner("keyup", (e) =>{
// e.preventDefault();
// const searchValue = search.value.toLowerCase().trim();

// for(i=0, i < storeProducts.length; i++ ){
//     if(storeProducts[i].classList.contains(searchValue)){
//         storeProducts[i].style.display = "block";
//     } else if(searchValue == ""){
//         storeProducts[i].style.display = "block";

//     }else{
//         storeProducts[i].style.display = "none";
//     }
// }

// })

