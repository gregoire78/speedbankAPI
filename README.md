# $peedBank

**$peedbank** est la nouvelle banque du pauvre connecté grçace à son API ;)

L'API REST est très simple d'utilisation et la sécurité y est irréprochable :p grâce aux token *[JWT](https://jwt.io/)*.

ici la collection postman contenant des urls de test
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/77f32a0384fcd2b459b2)

Have Fun with **$peedBank**, la banque rapide du future ,en dépit de la qualité, qui donnera envis aux pauvres d'épargner !!

Notre service comprend:

 * ouvertures de comptes quand vous le souhaité
 * suivi de vos dépenses

And here's some account example! :+1:

```json
[
    {
        "_id": "59fb89e3731f2e013bc76274",
        "user": "59fb20d86de25f04bc904b46",
        "name": "gold",
        "__v": 0,
        "mouvements": [
            {
                "description": "bague",
                "price": -5000,
                "_id": "59fb8a92731f2e013bc76277",
                "date": "2017-11-02T21:13:54.567Z"
            },
            {
                "description": "rendu bague",
                "price": 5000,
                "_id": "59fb95aa3fc15200c76b1815",
                "date": "2017-11-02T22:01:14.946Z"
            }
        ]
    },
    {
        "_id": "59fb95b63fc15200c76b1816",
        "user": "59fb20d86de25f04bc904b46",
        "name": "cheque",
        "__v": 0,
        "mouvements": [
            {
                "description": "salaire",
                "price": 5000,
                "_id": "59fb95e13fc15200c76b1817",
                "date": "2017-11-02T22:02:09.329Z"
            }
        ]
    }
]
```
 ### MERCI
