const categoriesData = [
    {
        id:'1',
        image: require('../images/pizza-icon.png'),
        title: 'Pizza',
        selected: true,
        choices:[
            {
                id:'1',
                name: 'Primavera Pizza'
            },
            {
                id:'2',
                name: 'Vegetarian Pizza'
            },
            {
                id:'3',
                name: 'Mac and Cheese Pizza'
            },
            {
                id:'4',
                name: 'Pepperoni Pizza'
            },
            {
                id:'5',
                name: 'Chicken Pizza'
            },
            {
                id:'6',
                name: 'Margarita Pizza'
            }
        ]
    },
    {
        id:'2',
        image: require('../images/shrimp-icon.png'),
        title: 'Seafood',
        selected: false,
        choices:[
            {
                id:'1',
                name: 'Fish Mackerel'
            }
        ]
    },
    {
        id:'3',
        image: require('../images/soda-icon.png'),
        title: 'Soft Drinks',
        selected: true,
        choices:[
            {
                id:'1',
                name: 'Lassi'
            }
        ]
    },
    {
        id:'4',
        image: require('../images/burger-icon.png'),
        title: 'Burgers',
        selected: false,
        choices:[
            {
                id:'1',
                name: 'Crispy Chicken Burger'
            }
        ]
    },
    {
        id:'5',
        image: require('../images/fries-icon.png'),
        title: 'Fries',
        selected: true,
        choices:[
            {
                id:'1',
                name: 'French Fries'
            }
        ]
    }
];

export default categoriesData;