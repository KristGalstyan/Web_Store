export const burgers = [
  {
    title: 'Basic Burger',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: Math.random() * 500,
    quantity: 1,
    price: '5.6',
    url: 'https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg'
  },
  {
    title: 'Classic Smashed Cheeseburger',
    text: "We've got the secret to cooking a burger that's crispy on the outside, yet juicy on the inside.",
    id: Math.random() * 500,
    quantity: 1,
    price: '7.8',
    url: 'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg'
  },
  {
    title: 'Ultimate Veggie Burger',
    text: "Kelsey Youngman's Ultimate Veggie Burgers use a variety of grains, legumes, and vegetables to layer",
    id: Math.random() * 500,
    quantity: 1,
    price: '9.3',

    url: 'https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg'
  },
  {
    title: 'Spicy beef burger',
    text: 'Competition for the best burger in London has gone mad. I’ve used the brilliant technique of',
    id: Math.random() * 500,
    quantity: 1,
    price: '3.5',
    url: 'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1288_1_1434099660.jpg?tr=w-800,h-1066'
  }
]

export const sides = [
  {
    title: 'Melting potatoes',
    text: 'Roasted in butter and chicken stock, these potato slices will melt in your mouth.',
    id: Math.random() * 500,
    quantity: 1,
    price: '7.7',
    url: 'https://img.taste.com.au/Qp-mCvHg/w720-h480-cfill-q80/taste/2017/02/melting-potatoes-121104-1.jpg'
  },
  {
    title: 'Barbecued pumpkin wedges with kale',
    text: 'Barbecued in maple syrup, these sweet and tender pumpkin wedges are the perfect match for kale.',
    id: Math.random() * 500,
    quantity: 1,
    price: '8',
    url: 'https://img.taste.com.au/9pCpeenc/w720-h480-cfill-q80/taste/2017/02/barbecued-pumpkin-wedges-with-kale-121047-1.jpg'
  },
  {
    title: 'Corn cobs with oregano and chilli butter',
    text: "Super chargrilled side — everything's yummier with a little black stripe!",
    id: Math.random() * 500,
    quantity: 1,
    price: '6',
    url: 'https://img.taste.com.au/ZUEAzEvh/w720-h480-cfill-q80/taste/2016/11/corn-cobs-with-oregano-and-chilli-butter-77627-1.jpeg'
  },
  {
    title: "Marion's bombay potatoes",
    text: 'This spicy potato side dish goes brilliantly with slow-roasted Indian lamb for a feast of Indian flavours.',
    id: Math.random() * 500,
    quantity: 1,
    price: '9.3',
    url: 'https://img.taste.com.au/0B1yQJRP/w720-h480-cfill-q80/taste/2016/11/marions-bombay-potatoes-109915-1.jpeg'
  }
]

export const drinks = [
  {
    title: 'Old Fashioned',
    text: "There may be no better test of a bartender's mettle than ordering an Old Fashioned. The recipe is simple:",
    id: Math.random() * 500,
    quantity: 1,
    price: '8',
    url: 'https://hips.hearstapps.com/hmg-prod/images/old-fashioned-1592951230.jpg?crop=1xw:1xh;center,top&resize=980:*'
  },
  {
    title: 'Margarita',
    text: 'Cloyingly sweet margarita mixes have given this drink a bad name. A well-made version is a fresh mix of lime juice and tequila, with a hint of sweetener:',
    id: Math.random() * 500,
    quantity: 1,
    price: '6',
    url: 'https://hips.hearstapps.com/hmg-prod/images/margarita-1592951298.jpg?crop=1xw:1xh;center,top&resize=980:*'
  },
  {
    title: 'Martini',
    text: 'James Bond was wrong—whether you drink it with gin or vodka, stirred is the way to go when ordering a martini.',
    id: Math.random() * 500,
    quantity: 1,
    price: '12',
    url: 'https://hips.hearstapps.com/hmg-prod/images/martini-1592951711.jpg?crop=1xw:1xh;center,top&resize=980:*'
  },
  {
    title: 'Mojito',
    text: 'Muddle mint into a shaker tin, then add ice and rest of ingredients. Shake to chill and strain into a highball glass with ice.',
    id: Math.random() * 500,
    quantity: 1,
    price: '10',
    url: 'https://hips.hearstapps.com/hmg-prod/images/mojito-1592951385.jpg?crop=1xw:1xh;center,top&resize=980:*'
  }
]

export const fullMenu = [].concat(drinks, sides, burgers)
