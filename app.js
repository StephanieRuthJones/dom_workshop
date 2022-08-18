document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM has been fully loaded')
    console.table(animals)
    const navbar = document.querySelector('#navigation')
    navbar.style.color = "blue"

    const cardsContainer = document.querySelector('.cards-container')
    
    const createAnimalCard = () => {
        const animalCard = document.createElement('div')
        animalCard.className = "card"
        animalCard.style.width = "18rem"
        return animalCard
    }
    const createAnimalImg = animal => {
        const animalImage = document.createElement('img')
        animalImage.className = "card-img-top"
        animalImage.src = animal.image
        return animalImage
    }
    const createCardBody = animal => {
        const cardBody = document.createElement('div')
        cardBody.className = "card-body"
        const animalName = document.createElement('h5')
        animalName.textContent = animal.name
        const animalDescription = document.createElement('p')
        animalDescription.innerText = animal.description
        cardBody.append(animalName, animalDescription)
        return cardBody
    }
    animals.map(animal => {
        const animalCard = createAnimalCard()
        const animalImage = createAnimalImg(animal)
        const cardBody = createCardBody(animal)

        animalCard.appendChild(animalImage)
        cardsContainer.appendChild(animalCard)
        animalCard.appendChild(cardBody)

    })

})