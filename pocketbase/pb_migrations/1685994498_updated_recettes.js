migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oshlhq7cim90chs")

  // update
  collection.schema.addField(new SchemaField({
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
      "displayFields": [
        "nom"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oshlhq7cim90chs")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
