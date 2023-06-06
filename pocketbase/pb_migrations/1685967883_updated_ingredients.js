migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eee4qtczqcrsb5u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xgs0z8zu",
    "name": "ingredients_img",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eee4qtczqcrsb5u")

  // remove
  collection.schema.removeField("xgs0z8zu")

  return dao.saveCollection(collection)
})
