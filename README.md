## How to run the web app?

0. Clone the repo
1. Install dependencies `npm install`
2. Start lite-server with `npm start`


## Assignment Instructions
To complete this assignment, you will use the array of animal objects and DOM manipulation to display a set of animal cards in your browser. 

0. Start app
1. Open dev console to view `animal` data
2. Select the `header` by `id` and change the color of the `header` text to blue
3. Select the card container div by its class
4. Iterate over the array of animal objects
5. For each animal, use DOM manipulation to create a card that meets the following requirements:
- [ ] Card has a `class` of `card`
- [ ] Card has an **image element** with attributes, including a `class` of `card-img-top`, `src` of the **animal's image url**, an `alt` of `animal image`, as well as a `style` attribute that sets the image `width` to `18rem`
- [ ] Card has a child `div` with a `class` of `card-body`
- [ ] In the card's body, there is a **heading element** with a `class` of `card-title` and the animal's name as text
- [ ] Below the **card title**, there is a **paragraph element** that displays the animal's **description**

