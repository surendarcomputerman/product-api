let contain = document.querySelector('.container');
fetch('https://fakestoreapi.com/products')
.then(Response => Response.json())
.then((data)=>{ 
    data.map((value)=>{

        let element = document.createElement('div')
        element.classList.add('elements')

        let ids = document.createElement('h4')
        ids.classList.add('i')
        ids.innerHTML=` ID: ${value.id}`

        let titles = document.createElement('p')
        titles.classList.add('tit')
        titles.innerHTML=` Title: ${value.title}`

        let prices = document.createElement('p')
        prices.classList.add('rs')
        prices.innerHTML=` Price: ${value.price}`

        let descriptions = document.createElement('p')
        descriptions.classList.add('des')
        descriptions.innerHTML=`Description: ${value.description}`

        let images = document.createElement('img')
        images.classList.add('ig')
        images.src=value.image

        let ratings = document.createElement('p')
        ratings.classList.add('rate')
        ratings.innerHTML=` Rating: ${value.rating.rate}`


        element.appendChild(ids)
        element.appendChild(titles)
        element.appendChild(prices)
        element.appendChild(descriptions)
        element.appendChild(images)
        element.appendChild(ratings)

        contain.appendChild(element)

    })
})