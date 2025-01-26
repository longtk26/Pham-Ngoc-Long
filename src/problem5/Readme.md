# A Crude Server

## Introduction 🔖
This server is a RESTful API designed to manage product resources efficiently. It supports the fundamental operations:

1. **Create**: Add new products to the database.
2. **Read**: Fetch product details or list products with filters.
3. **Update**: Modify existing product information.
4. **Delete**: Remove products from the database.  
<br/>

The server utilizes **PostgreSQL** as its database, **Prisma ORM** for seamless database interaction, and **Docker** for a streamlined setup.

## Database Schema
![schema](imgs/schema.png)

## How to Run 🤔
Ensure that `make` tools, `nodejs`, and `docker` are installed and running on your machine.  
<br/>
You can verify their installation using the following commands:
```bash
make --version 
docker --version
node --version
```

My versions:
1. `make`: `4.3`
2. `nodejs`: `v23.6.1`
3. `docker`: `26.1.1`

### Step 1: Clone Github repository
```bash
git clone https://github.com/longtk26/Pham-Ngoc-Long.git
```
### Step 2: Navigate to the Project Directory

```bash
cd Pham-Ngoc-Long/src/problem5
```
### Step 3: Install Dependencies
```bash
npm install
```
### Step 4: Set Up the .env File
While in the `Pham-Ngoc-Long/src/problem5 ` directory, create a `.env` file using the template provided in `.ex.env`.

Alternatively, you can copy the following content:
```bash
PORT=8080

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://99tech:99tech@localhost:5432/99tech?schema=public"
```

### Step 5: Initialize the Environment
1. Run the PostgreSQL Database
    ```bash
    make pre_env
    ```
    - This command runs the `docker-compose.yml` file in the environment folder and starts a PostgreSQL database on port 5432.
    - Username: `99tech`
    - Password: `99tech`
    - Database name: `99tech`   
    - You can modify these parameters in the `docker-compose.yml` file.
    - Note: If you make changes, update the `.env` file accordingly. However, it is recommended to keep the defaults for a smoother setup experience.
2. Migrate the Database
    ```bash
    make migrateup name=init_db
    ```
    - This command migrates the PostgreSQL database and creates a `products` table following the provided schema.
3. Generate the Prisma client 
    ```bash
    make genclient
    ```
    - This command generates the Prisma client, enabling interaction with the database. Supported operations include Get, Create, Update, and Delete.

### Step 6: Run the Application 🎇
```bash
make start
```
When the application started. You will see the output is
```bash
Server is running on port http://localhost:8080
====Postgresql is connected====
```

## Clean Up After Exiting the Application
### Step 1: Stop the application
```bash
Ctrl + C
```
## Step 2: Clean Up the PostgreSQL Database (Running on Docker)
```bash
make down_env
```

## API Documentation
Access the API documentation at this link: [Document](https://documenter.getpostman.com/view/20508875/2sAYQgfnys)