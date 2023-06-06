migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oshlhq7cim90chs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "szsq5hou",
    "name": "prix",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oshlhq7cim90chs")

  // remove
  collection.schema.removeField("szsq5hou")

  return dao.saveCollection(collection)
})
