# Session 24
## MongoDB
1. Installation
2. NoSQL vs SQL
3. Run Mongo Shell
  - For Windows: <code>mongo</code> or <code>mongosh</code>
  - For Mac/Linux: <code>mongosh</code>
4. Commands
###### Database & Collections
  - Show DB: <code>show dbs</code>
  - Create DB: <code>use flipkart</code>
  - Check if data present inside DB(i.e. show collections): <code>show collections</code>
  - Create Collections: <code>db.createCollection('products')</code>
  - Switch to other DB: <code>use netflix</code>
  - Delete collection: <code>db.movies.drop()</code>
  - Delete DB(make sure that you're inside that DB): <code>db.dropDatabase()</code> 
###### Documents
  - Check if data present inside collection(i.e. show documents): <code>db.products.find()</code>
  - Create Document: <code>db.products.insertOne({name:'Laptop',price:'2000'})</code>
  - Search doc with filters <code>db.products.find({price:1000})</code>
  - Show first Document: <code>db.products.findOne()</code>
  - Create multiple Documents: <code>db.products.insertMany({name:'Keyboard',price:'200'},{name:'Mouse',price:'100'})</code>
  - In case, your data is not formatted: <code>db.products.find().pretty()</code>
  - Update doc: <code>db.products.update( {filter},{$set:{name:'TV'}} )</code>
  - Delete document: <code>db.products.deleteOne({filter})</code>
  - Delete multiple docs: <code>db.products.deleteMany({_id: {$in:[__,__] } })</code>
  - Insert Obj: <code>db.products.update({_id:__},{$set: {reviews: [{text: 'Great',stars:4},{text: 'Avg',stars:3}] } })</code> 
###### Operators
  - Comparison
  - Logical
    - <code>db.products.find({$and:[ {price:{$eq:10}},{name:{$eq:'TV'}} ]})</code>
5. MongoDB Compass
