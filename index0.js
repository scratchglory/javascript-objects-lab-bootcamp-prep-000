var recipes = {}

//updateObjectWithKeyAndValue(object, key, value)
function updateObjectWithKeyAndValue(obj, key, value) {
  return object.assign({}, obj, {[key]: value})
}

//destructivelyUpdateObjectWithKeyandValue(object, key, value) updates 'object' with the given 'key' and 'value'
//return entire updated object
function destructivelyUpdateObjectWithKeyandValue(object, key, value) {
  object[key] = value
  return object
}

//deleteFromObjectByKey(object, key) deletes 'key' from a clone of object
//returns the new object (non-destructive)
function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

///destructivelyDeleteFromObjectByKey(object, key) returns object without the dletekey/value pair
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}