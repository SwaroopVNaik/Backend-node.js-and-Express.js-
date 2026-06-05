# Data Storage

## What is Data Storage?

* Data Storage is a place where data is stored permanently.
* Applications use data storage to save user information.
* Examples:

  * User Details
  * Login Credentials
  * Products
  * Orders
  * Notes
  * Tasks

---

# Types of Databases

There are mainly two types of databases:

1. SQL Database
2. NoSQL Database

---

# SQL Database

## Definition

* SQL databases store data in a structured format.
* Data is organized into tables.

### Example

| ID | Name    | Age |
| -- | ------- | --- |
| 1  | Swaroop | 22  |
| 2  | Rahul   | 21  |

### Key Points

* Uses Rows and Columns
* Structured Data
* Fixed Schema
* Examples:

  * MySQL
  * PostgreSQL
  * Oracle
  * SQL Server

---

# NoSQL Database

## Definition

* NoSQL stands for **Not Only SQL**.
* Data is stored in flexible formats such as documents.

### Example

```json
{
    "name": "Swaroop",
    "age": 22
}
```

### Key Points

* Flexible Structure
* Stores Data as Objects/Documents
* Easy to Scale
* Examples:

  * MongoDB
  * CouchDB
  * Firebase Firestore

---

# MongoDB

## What is MongoDB?

* MongoDB is a NoSQL Database.
* It stores data in the form of documents.
* Data is stored in BSON (Binary JSON) format.

### Example Document

```json
{
    "name": "Swaroop",
    "email": "swaroop@gmail.com",
    "age": 22
}
```

---

# Why MongoDB?

* Stores application data permanently.
* Flexible schema.
* Easy to work with JavaScript applications.
* Fast development.
* Highly scalable.

---

# Backend Architecture

A backend application usually contains two servers:

## 1. Application Server

### Example

* Node.js
* Express.js

### Responsibilities

* Handles Routes
* Handles Requests
* Handles Responses
* Performs Business Logic
* Communicates with Database

---

## 2. Database Server

### Example

* MongoDB

### Responsibilities

* Stores Data
* Retrieves Data
* Updates Data
* Deletes Data

---

# MongoDB Terminologies

## Database

* A database is the top-level container.
* It contains multiple collections.

### Example

```text
InstagramDB
```

---

## Collection

* A collection is similar to a table in SQL.
* It stores related documents.

### Example

```text
Users
Posts
Comments
```

---

## Document

* A document is a single record inside a collection.
* Stored as an object.

### Example

```json
{
    "name": "Swaroop",
    "age": 22
}
```

---

## Schema

### Definition

* A schema defines the structure of a document.
* It specifies which fields are allowed.

### Example

```javascript
const userSchema = {
    name: String,
    age: Number
}
```

---

## Model

### Definition

* A model is created from a schema.
* It is used to interact with a collection.

### Example

```javascript
const User = mongoose.model("User", userSchema);
```

---

## Keys

### Definition

* Keys are field names inside a document.

### Example

```json
{
    "name": "Swaroop",
    "age": 22
}
```

Here:

```text
name
age
```

are Keys.

---

# Mongoose Connection Flow

```text
Application
      ↓
Mongoose.connect()
      ↓
Database Created/Connected
      ↓
Model Created
      ↓
Collection Created
      ↓
Document Created
```

---

# Easy Mapping

```text
Code                          MongoDB

mongoose.connect()     →      Database

mongoose.model()       →      Collection

User.create()          →      Document

Document Fields        →      Keys
```

---

# Complete Structure

```text
Database
   ↓
Collection
   ↓
Document
   ↓
Keys
```

### Example

```text
InstagramDB
    ↓
Users
    ↓
{
    name: "Swaroop",
    age: 22
}
    ↓
name, age
```

---

# One-Line Revision Notes

* Data Storage → Stores application data permanently.
* SQL → Stores data in tables.
* NoSQL → Stores data in documents/objects.
* MongoDB → NoSQL Database.
* Database → Contains Collections.
* Collection → Contains Documents.
* Document → Contains Data.
* Keys → Fields inside Documents.
* Schema → Defines document structure.
* Model → Used to interact with collections.
* Mongoose → Connects Node.js with MongoDB.
