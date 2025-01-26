# A Crude Server

## Introduction 🔖
This server is a RESTful API designed to manage product resources efficiently. It supports the fundamental operations:

1. Create: Add new products to the database.
2. Read: Fetch product details or list products with filters.
3. Update: Modify existing product information.
4. Delete: Remove products from the database.
<br/>

The server utilizes PostgreSQL as its database, Prisma ORM for seamless database interaction, and Docker for a streamlined setup.
## Database schema
![schema](imgs/schema.png)

## How to run 🤔
Ensure that `make` tools, `nodejs` and `docker` are running on your machine.
<br/>
Check these tools are activating with commands:
```bash
make --version
docker --version
node --version
```

### Step 1: Clone github repository
```bash
git clone https://github.com/longtk26/Pham-Ngoc-Long.git
```
### Step 2: Redirect to problem5 folder using this command

```bash
cd Pham-Ngoc-Long/src/problem5
```
### Step 3: Install dependencies
```bash
npm install
```
### Step 4: Setup .env file
When you are in `Pham-Ngoc-Long/src/problem5`. Create a `.env` file with the content follow in `.ex.env` file
<br/>

You can quickly copy it below
```bash
PORT=8080

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://99tech:99tech@localhost:5432/99tech?schema=public"
```

### Step 5: Init environment
1. Run Postgres database
    ```bash
    make pre_env
    ```
    - This command will run docker-compose.yml file in environment folder and start a postgres database with port 5432
    - Username: `99tech`
    - Password: `99tech`
    - Database name: `99tech`   
    - You can change 3 parameters above in docker-compose.yml file
    - Note: If you change parameters, you also need to change in `.env` file. For the best experience, encourage to keep all things as default.
2. Migrate database
    ```bash
    make migrateup name=init_db
    ```
    - This command will migrate up postgres database and create a table `products` with the schema that i provided above.
3. Generate Prisma client 
    ```bash
    make genclient
    ```
    - This command will generate prisma client to interact with database. The operations supported are Get, Create, Update and Delete

### Step 6: Run application 🎇
```bash
make start
```
When the application started. You will see the output is
```bash
Server is running on port http://localhost:8080
====Postgresql is connected====
```