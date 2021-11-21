const express = require('express')
const app = express()
const port = 8080

const merchant_model = require('./merchant_model')


app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});


// app.get('/', (req, res) => {
//     merchant_model.getMerchants()
//         .then(response => {
//             res.status(200).send(response);
//         })
//         .catch(error => {
//             res.status(500).send(error);
//         })
// })
const data =   [
    {
        point: [59.907411, 30.298797],
        city: "Санкт-Петербург",
        name: "Балтийский вокзал",
        packages: [
            {
                sender: {
                    name: "Иванова Мария Ивановна",
                    phone: "8 (914) 77-77-77",
                    station: "Санкт-Петербург - Балтийская"
                },
                recipient: {
                    name: "Иванова Мария Ивановна",
                    phone: "8 (914) 77-77-77",
                    station: "Москва - Белорусский вокзал"
                },
                size: "средняя",
                methodOfTransportation: "Скоростной поезд №123 - Пассажирское купе 20.11. 2021 16:00 - 20.11.2021 19:52"
            },
            {
                sender: {
                    name: "Иванова Мария Ивановна",
                    phone: "8 (914) 77-77-77",
                    station: "Санкт-Петербург - Балтийская"
                },
                recipient: {
                    name: "Иванова Мария Ивановна",
                    phone: "8 (914) 77-77-77",
                    station: "Москва - Белорусский вокзал"
                },
                size: "большая",
                methodOfTransportation: "Скоростной поезд №123 - Пассажирское купе 20.11. 2021 16:00 - 20.11.2021 19:52"
            },
            {
                sender: {
                    name: "Иванова Мария Ивановна",
                    phone: "8 (914) 77-77-77",
                    station: "Санкт-Петербург - Балтийская"
                },
                recipient: {
                    name: "Иванова Мария Ивановна",
                    phone: "8 (914) 77-77-77",
                    station: "Москва - Белорусский вокзал"
                },
                size: "большая",
                methodOfTransportation: "Скоростной поезд №123 - Пассажирское купе 20.11. 2021 16:00 - 20.11.2021 19:52"
            },
            {
                sender: {
                    name: "Иванова Мария Ивановна",
                    phone: "8 (914) 77-77-77",
                    station: "Санкт-Петербург - Балтийская"
                },
                recipient: {
                    name: "Иванова Мария Ивановна",
                    phone: "8 (914) 77-77-77",
                    station: "Москва - Белорусский вокзал"
                },
                size: "большая",
                methodOfTransportation: "Скоростной поезд №123 - Пассажирское купе 20.11. 2021 16:00 - 20.11.2021 19:52"
            },
            {
                sender: {
                    name: "Иванова Мария Ивановна",
                    phone: "8 (914) 77-77-77",
                    station: "Санкт-Петербург - Балтийская"
                },
                recipient: {
                    name: "Иванова Мария Ивановна",
                    phone: "8 (914) 77-77-77",
                    station: "Москва - Белорусский вокзал"
                },
                size: "большая",
                methodOfTransportation: "Скоростной поезд №123 - Пассажирское купе 20.11. 2021 16:00 - 20.11.2021 19:52"
            }
        ]
    },
    {
        point: [59.919906, 30.329185],
        city: "Санкт-Петербург",
        name: "Витебвский вокзал",
        packages: [{
            sender: {
                name: "Иванова Мария Ивановна",
                phone: "8 (914) 77-77-77",
                station: "Санкт-Петербург - Балтийская"
            },
            recipient: {
                name: "Иванова Мария Ивановна",
                phone: "8 (914) 77-77-77",
                station: "Москва - Белорусский вокзал"
            },
            size: "средняя",
            methodOfTransportation: "Скоростной поезд №123 - Пассажирское купе 20.11. 2021 16:00 - 20.11.2021 19:52"
        }
        ]
    },
    {
        point: [59.931668, 30.441711],
        city: "Санкт-Петербург",
        name: "Ладожский вокзал",
        packages: [{
            sender: {
                name: "Иванова Мария Ивановна",
                phone: "8 (914) 77-77-77",
                station: "Санкт-Петербург - Балтийская"
            },
            recipient: {
                name: "Иванова Мария Ивановна",
                phone: "8 (914) 77-77-77",
                station: "Москва - Белорусский вокзал"
            },
            size: "средняя",
            methodOfTransportation: "Скоростной поезд №123 - Пассажирское купе 20.11. 2021 16:00 - 20.11.2021 19:52"
        }
        ]
    },
    {
        point: [59.930146, 30.362059],
        name: "Московский вокал",
        city: "Санкт-Петербург",
        packages: [{
            sender: {
                name: "Иванова Мария Ивановна",
                phone: "8 (914) 77-77-77",
                station: "Санкт-Петербург - Балтийская"
            },
            recipient: {
                name: "Иванова Мария Ивановна",
                phone: "8 (914) 77-77-77",
                station: "Москва - Белорусский вокзал"
            },
            size: "средняя",
            methodOfTransportation: "Скоростной поезд №123 - Пассажирское купе 20.11. 2021 16:00 - 20.11.2021 19:52"
        }
        ]
    },
    {
        point: [59.955513, 30.356355],
        name: "Финляндский вокзал",
        city: "Санкт-Петербург",
        packages: [{
            sender: {
                name: "Иванова Мария Ивановна",
                phone: "8 (914) 77-77-77",
                station: "Санкт-Петербург - Балтийская"
            },
            recipient: {
                name: "Иванова Мария Ивановна",
                phone: "8 (914) 77-77-77",
                station: "Москва - Белорусский вокзал"
            },
            size: "средняя",
            methodOfTransportation: "Скоростной поезд №123 - Пассажирское купе 20.11. 2021 16:00 - 20.11.2021 19:52"
        }
        ]
    }

]



app.get('/', (req, res) => {
    res.status(200).send(data);
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
