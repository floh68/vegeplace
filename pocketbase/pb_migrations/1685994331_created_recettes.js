migrate((db) => {
  const collection = new Collection({
    "id": "oshlhq7cim90chs",
    "created": "2023-06-05 19:45:31.154Z",
    "updated": "2023-06-05 19:45:31.154Z",
    "name": "recettes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9m0lnqc3",
        "name": "nom",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "laxzutwv",
        "name": "instructions",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "aos1umxd",
        "name": "ingredients",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "eee4qtczqcrsb5u",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("oshlhq7cim90chs");

  return dao.deleteCollection(collection);
})
