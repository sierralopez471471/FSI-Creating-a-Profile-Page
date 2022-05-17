let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let div = document.createElement('div')
div.setAttribute('class', 'dog-content')
content.append(div)

let img = document.createElement('img')
img.setAttribute('class', 'dog-image')
img.setAttribute('src', './assets/rizzo.jpg')
div.append(img)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
div.append(dogDetails)
let h3 = document.createElement('h3')
h3.append('Description: ')

div.append(h3)
