const products = [
    {
        "_id": "1",
        "rating": 4.5,
        "numReviews": 12,
        "img": "images/coffe_table_eternity.png", 
        "name": "Журнальный стол 'Eternity'",
        "brand": "WETORNIX",
        "category": "Журнальные столы",
        "price": 149.99,
        "description": "",
        "quantity": 3,

    },
    {
        "_id": "2",
        "rating": 4.2,
        "numReviews": 7,
        "name": "Журнальный стол 'Minimalism'",
        "brand": "WETORNIX",
        "category": "Журнальные столы",
        "img": "img/images/table_minimalism.png",
        "price": 179,
        "description": "",
        "quantity": 5,

    },
    {
        "_id": "3",
        "rating": 4.8,
        "numReviews": 4,
        "name": "Журнальный стол 'Lake'",
        "brand": "WETORNIX",
        "category": "Журнальные столы",
        "img": "img/images/table_lake.png",
        "price": 999,
        "description": "",
        "quantity": 1,

    },
    {
         "_id": "4",
        "rating": 4.5,
        "numReviews": 11,
        "name": "Журнальный стол 'Circuit'",
        "brand": "WETORNIX",
        "category": "Журнальные столы",
        "img": "img/images/table_circuit.png",
        "price": 699,
        "description": "",
        "quantity": 10,

    }, {
         "_id": "4",
        "rating": 4.8,
        "numReviews": 18,
        "name": "Обеденный стол 'Refraction'",
        "brand": "WETORNIX",
        "img": "img/images/obed_refraction.png",
        "category": "Обеденные столы",
        "price": 649,
        "description": "",
        "quantity": 3,
    },
    {
         "_id": "5",
        "rating": 4.3,
        "numReviews": 11,
        "name": "Обеденный стол 'Wide Away'",
        "brand": "WETORNIX",
        "img": "img/images/obed_wide_away.png",
        "category": "Обеденные столы",
        "price": 599,
        "description": "",
        "quantity": 6,
    },
    {
         "_id": "6",
        "rating": 4.4,
        "numReviews": 10,
        "name": "Обеденный стол 'Default'",
        "brand": "WETORNIX",
        "img": "img/images/obed_default.png",
        "category": "Обеденные столы",
        "price": 489,
        "description": "",
        "quantity": 11,
    },
    {
         "_id": "7",
        "rating": 4.2,
        "numReviews": 12,
        "name": "Обеденный стол 'Wex'",
        "brand": "WETORNIX",
        "img": "img/images/obed_wex.png",
        "category": "Обеденные столы",
        "price": 679,
        "description": "",
        "quantity": 15,
    },
    {
         "_id": "8",
        "rating": 4.9,
        "numReviews": 3,
        "name": "Декорированный стол 'Serenity'",
        "brand": "WETORNIX",
        "img": "img/images/tabledecor_serenity.png",
        "category": "Декорированные столы",
        "price": 899,
        "description": "",
        "quantity": 5,
    },
    {
         "_id": "9",
        "rating": 4.3,
        "numReviews": 7,
        "name": "Декорированный стол 'Pit'",
        "brand": "WETORNIX",
        "img": "img/images/tabledecor_pit.png",
        "category": "Декорированные столы",
        "price": 899,
        "description": "",
        "quantity": 3,
    },
    {
         "_id": "10",
        "rating": 4.9,
        "numReviews": 7,
        "name": "Декорированный стол 'Shards'",
        "brand": "WETORNIX",
        "img": "img/images/tabledecor_shards.png",
        "category": "Декорированные столы",
        "price": 599,
        "description": "",
        "quantity": 14,
    },
    {
         "_id": "11",
        "rating": 4.4,
        "numReviews": 4,
        "name": "Декорированный стол 'Black'",
        "brand": "WETORNIX",
        "img": "img/images/tabledecor_black.png",
        "category": "Декорированные столы",
        "price": 799,
        "description": "",
        "quantity": 7,
    },
    {
         "_id": "12",
        "rating": 4.6,
        "numReviews": 9,
        "name": "Настенные часы 'Ember'",
        "brand": "WETORNIX",
        "img": "img/images/decor_ember.png",
        "category": "Декор",
        "price": 39,
        "description": "",
        "quantity": 20,
    },
    {
         "_id": "13",
        "rating": 4.5,
        "numReviews": 17,
        "name": "Декоротивная картина 'Waves'",
        "brand": "WETORNIX",
        "img": "img/goods/decor_waves.png",
        "category": "Декор",
        "price": 139,
        "description": "",
        "quantity": 10,
    },
    {
         "_id": "14",
        "rating": 4.9,
        "numReviews": 20,
        "name": "Настенная карта мира 'Around world'",
        "brand": "WETORNIX",
        "img": "img/images/decor_map.png",
        "category": "Декор",
        "price": 99,
        "description": "",
        "quantity": 10,
    },
    {
         "_id": "15",
        "rating": 4.3,
        "numReviews": 9,
        "name": "Светильник 'Sunlight'",
        "brand": "WETORNIX",
        "img": "img/images/decor_sunlight.png",
        "category": "Декор",
        "price": 39,
        "description": "",
        "quantity": 17,
    },
    {
         "_id": "16",
        "rating": 4.7,
        "numReviews": 12,
        "name": "Зеркала 'Cosy'",
        "brand": "WETORNIX",
        "img": "img/goods/decor_cosy.png",
        "category": "Декор",
        "price": 89,
        "description": "",
        "quantity": 21,
    },
    {
         "_id": "17",
        "rating": 4.8,
        "numReviews": 8,
        "name": "Подсвечник 'Ships in the night'",
        "brand": "WETORNIX",
        "img": "img/images/decor_ships.png",
        "category": "Декор",
        "price": 109,
        "description": "",
        "quantity": 12,
    },
    {
         "_id": "18",
        "rating": 4.6,
        "numReviews": 18,
        "name": "Полка 'Meld'",
        "brand": "WETORNIX",
        "img": "img/images/shelve_meld/shelve1.png",
        "category": "Полки",
        "price": 69,
        "description": "",
        "quantity": 2,
    },
    {
         "_id": "19",
        "rating": 4.7,
        "numReviews": 14,
        "name": "Полка 'Concentration'",
        "brand": "WETORNIX",
        "img": "img/images/shelve_concentration.png",
        "category": "Полки",
        "price": 29,
        "description": "",
        "quantity": 19,
    },
    {
         "_id": "20",
        "rating": 4.8,
        "numReviews": 19,
        "name": "Полка 'Aestetic'",
        "brand": "WETORNIX",
        "img": "img/images/shelve_aestetic.png",
        "category": "Полки",
        "price": 49,
        "description": "",
        "quantity": 9,
    },
    {
         "_id": "21",
        "rating": 4.9,
        "numReviews": 11,
        "name": "Полка 'Tidebringer'",
        "brand": "WETORNIX",
        "img": "img/images/shelve_tidebringer.png",
        "category": "Полки",
        "price": 59,
        "description": "",
        "quantity": 16,
    },
    {
         "_id": "22",
        "rating": 4.6,
        "numReviews": 10,
        "name": "Полка 'Pragmatic'",
        "brand": "WETORNIX",
        "img": "img/images/shelve_pragmatic.png",
        "category": "Полки",
        "price": 79,
        "description": "",
        "quantity": 18,
    },
    {
         "_id": "23",
        "rating": 4.4,
        "numReviews": 7,
        "name": "Полка 'Crown'",
        "brand": "WETORNIX",
        "img": "img/images/shelve_crown.png",
        "category": "Полки",
        "price": 69,
        "description": "",
        "quantity": 8,
    },
]