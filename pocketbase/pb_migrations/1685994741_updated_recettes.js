migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oshlhq7cim90chs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9chxtvva",
    "name": "liste_ingredients",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oshlhq7cim90chs")

  // remove
  collection.schema.removeField("9chxtvva")

  return dao.saveCollection(collection)
})
