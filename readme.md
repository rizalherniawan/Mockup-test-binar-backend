Langkah - langkah dalam membuat API adalah sebagai berikut:

1. Proses inisiasi npm dengan cara mengetik `npm init` di command line.

2. Install module yang diperlukan, yaitu:

   - express
   - sequelize
   - postgres
   - cookie-parser
   - jsonwebtoken
   - bcrpyt
   - dotenv
   - sequelize command line di depedency

3. Proses instalasinya adalah dengan mengetik di command line dengan command seperti di bawah ini:
   ```
   npm i express pg sequelize cookie-parser jsonwebtoken bcrypt dotenv
   ```
   ```
   npm i -D sequelize-cli
   ```
4. Inisiai server express seperti yang dicontohkan di file server.js
   ```
   const express = require('express')
   const app = express()
   const cookieParser = require('cookie-parser')
   const api = require('./routes')
   const PORT = 4000

   app.use(express.json())
   app.use(express.urlencoded({extended: true}))
   app.use(cookieParser())

   app.use(api)

   app.listen(PORT, () => {
      console.log(`Server is connected to PORT: ${PORT}`)
   })
   ```

5. Inisiasi database dengan menggunakan sequelize di command line dengan mengetik command seperti di bawah ini:

   ```
   npx sequelize init
   ```

6. Mengatur konfigurasi database di file config.json di dalam folder config dengan mengubah username database, password database, host database , nama database, dan database yang digunakan pada dialect

7. Membuat database dengan mengetik command di command line seperti di bawah ini:

   ```
   npx sequelize db:create
   ```

8. Membuat model data table untuk user dan data product dengan mmengetik command pada command line seperti di bawah ini:

   ```
   npx sequelize model:generate --name user --attributes name:string,email:string,password:string
   ```

   ```
   npx sequelize model:generate --name data -- attributes name:string,price:integer,imageurl:string
   ```

9. Mengatur validasi data pada file user dan data di folder models dan migration

10. Proses migrasi ke database dengan mengetik command pada command line seperti di bawah ini:
    
    ```
    npx sequelize db:migrate
    ```
11. Pembatalan migrasi dapat dilakukan dengan cara mengetik command:
    
    ```
    npx sequelize db:migrate:undo:all
    ```

12. Semua service untuk user dan product diletakan di folder controller dengan menggunakan class

13. Karena terdapat fitur login maka diperlukan middleware authentication

14. Membuat end point di folder routes 

15. Membuat file untuk pengaturan token serta enkripsi password dengan bcrypt yang semua file tersebut diletakan di folder handler

Hail uji coba API melalui postman:

   endpoint: http://localhost:4000/auth/signup <br />
   fitur: **signup new user** <br />
   method: **POST**

   ```json
   {
      "status": "OK",
      "result": {
         "id": 1,
         "name": "Rizal",
         "email": "rizal00@mail.com",
         "password": "$2b$10$485zKRb7MmBb.b0SsJ5D0.HKD3eHYfLGfD9OmcfQoqtMEzVMj4QJW",
         "updatedAt": "2022-07-05T02:43:05.452Z",
         "createdAt": "2022-07-05T02:43:05.452Z"
      }
   }
   ```
   endpoint: http://localhost:4000/auth/login <br />
   fitur: **login user** <br />
   method: **POST**

   ```json
   {
      "status": "OK",
      "result": {
         "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlJpemFsIiwiZW1haWwiOiJyaXphbDAwQG1haWwuY29tIiwiY3JlYXRlZEF0IjoiMjAyMi0wNy0wNVQwMjo0MzowNS40NTJaIiwidXBkYXRlZEF0IjoiMjAyMi0wNy0wNVQwMjo0MzowNS40NTJaIiwiaWF0IjoxNjU2OTkzMTM2fQ.dECbVPrUYy-REOfT0sxaGUsmOq1imVImabwVjcj_Hrg"
      }
   }
   ```

   endpoint: http://localhost:4000/v1/products <br />
   fitur: **add product** <br />
   method: **POST**

   ```json
   {
      "status": "OK",
      "results": {
         "id": 2,
         "name": "Boneka",
         "price": 60000,
         "imageurl": "https://asset.kompas.com/crops/9XarEYm_NVQrK_5Z9dstmxusF0k=/0x104:1000x604/750x500/data/photo/2018/12/21/630135758.jpg",
         "updatedAt": "2022-07-05T05:29:39.003Z",
         "createdAt": "2022-07-05T05:29:39.003Z"
      }
   }
   ```

   endpoint: http://localhost:4000/v1/products <br />
   fitur: **get all products** <br />
   method: **GET**

   ```json
   {
      "status": "OK",
      "results": [
         {
               "id": 1,
               "name": "Remote Kontrol Mobil - Mobilan",
               "price": 90000,
               "imageurl": "https://images.tokopedia.net/img/cache/500-square/product-1/2017/1/6/185838/185838_d7798f2b-ab46-4fa3-81e7-8221c177f18a_567_481.png",
               "createdAt": "2022-07-05T05:25:16.792Z",
               "updatedAt": "2022-07-05T05:25:16.792Z"
         },
         {
               "id": 2,
               "name": "Boneka",
               "price": 60000,
               "imageurl": "https://asset.kompas.com/crops/9XarEYm_NVQrK_5Z9dstmxusF0k=/0x104:1000x604/750x500/data/photo/2018/12/21/630135758.jpg",
               "createdAt": "2022-07-05T05:29:39.003Z",
               "updatedAt": "2022-07-05T05:29:39.003Z"
         }
      ]
   }
   ```

   endpoint: http://localhost:4000/v1/products/:id <br />
   fitur: **get product by id** <br />
   method: **GET**

   ```json
   {
      "status": "OK",
      "results": {
         "id": 1,
         "name": "Remote Kontrol Mobil - Mobilan",
         "price": 90000,
         "imageurl": "https://images.tokopedia.net/img/cache/500-square/product-1/2017/1/6/185838/185838_d7798f2b-ab46-4fa3-81e7-8221c177f18a_567_481.png",
         "createdAt": "2022-07-05T05:25:16.792Z",
         "updatedAt": "2022-07-05T05:25:16.792Z"
      }
   }
   ```

   endpoint: http://localhost:4000/v1/products/:id <br />
   fitur: **update product by id** <br />
   method: **PUT**

   ```json
   {
      "status": "OK",
      "result": {
         "id": 2,
         "name": "Boneka",
         "price": 30000,
         "imageurl": "https://asset.kompas.com/crops/9XarEYm_NVQrK_5Z9dstmxusF0k=/0x104:1000x604/750x500/data/photo/2018/12/21/630135758.jpg",
         "createdAt": "2022-07-05T05:29:39.003Z",
         "updatedAt": "2022-07-05T06:12:00.683Z"
      }
   }
   ```

   endpoint: http://localhost:4000/v1/products/:id <br />
   fitur: **delete product by id** <br />
   method: **DELETE**

   ```json
   {
      "status": "OK",
      "result": {
         "message": "2 deleted"
      }
   }
   ```