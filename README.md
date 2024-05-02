# Deskripsi Projek

Repository Github ini hanya terdiri dari 2 folder yaitu:
- Frontend
- Backend

Saya tidak menambahkan folder `Database` karena saya menggunakan migrasi dari sequelize dengan perintah migrasi ada pada readme di dalam folder backend atau [klik disini](https://github.com/SHG-Thomas/Emilst11/tree/main/backend)

## Environment Variable
Masing-masing repository memiliki Environment Variablenya dengan contoh sebagai berikut:

## Frontend
```env
VITE_API_ENDPOINT=
```

## Backend
```env
PORT=

DB_HOST=
DB_NAME=
DB_PORT=
DB_USER=
DB_PASSWORD=

SECRET_KEY=
```

## Yang Mesti Diperhatikan
Karena saya tidak menggunakan folder ddatabase atau saya tidak memberikan query untuk membuat tabel database karena saya menggunakan dan memanfaatkan fitur migrasi dan seeding yang dimiliki oleh `Sequelize`. Ada beberapa poin yang harus diperhatikan:
1. Masukan .env file di dalam folder backend dengan contoh yg diberikan dan pastikan terhubung dengan database
2. Jalankan perintah Migrate Terlebih Dahulu
3. Jalankan perintah Seed 
4. Jalankan server dengan mengetik `npm run dev`