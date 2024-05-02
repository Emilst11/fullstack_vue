# Nama Aplikasi Anda

Deskripsi singkat tentang aplikasi Anda di sini.

## Instalasi

1. Pastikan Anda memiliki Node.js dan npm terinstal di komputer Anda.
2. Clone repositori ini ke komputer Anda.
3. Buka terminal dan arahkan ke direktori aplikasi.
4. Jalankan perintah berikut untuk menginstal semua dependensi:

    ```bash
    npm install
    ```
## Konfigurasi

1. Buat file `.env` di direktori akar aplikasi Anda.
2. Konfigurasikan file `.env` Anda dengan variabel-variabel lingkungan yang diperlukan. Berikut adalah contoh:

    ```plaintext
    PORT=8000

    DB_HOST=
    DB_NAME=
    DB_PORT=5432
    DB_USER=
    DB_PASSWORD=

    SECRET_KEY=
    ```

    Gantilah nilai-nilai `DB_USER`, `DB_HOST`, `DB_PASSWORD`, dan `DB_NAME` dengan informasi yang sesuai untuk koneksi database Anda.

    Kemudian masukan nilai `SECRET_KEY` dengan key yang anda berikan random
    
## Migrasi Database & Data Awal

1. Setelah mengatur file `.env`, jalankan migrasi database dengan menjalankan perintah:

    ```bash
    npm run migrate
    ```

    Perintah ini akan membuat struktur tabel dalam database Anda sesuai dengan definisi model Anda.

2. Setelah menjalankan migrasi, Anda dapat menambahkan data awal ke database dengan menjalankan perintah:

    ```bash
    npm run seed
    ```

    Perintah ini akan menambahkan data awal ke dalam tabel-tabel yang telah dibuat.


## Menjalankan Aplikasi

1. Setelah menyelesaikan konfigurasi dan migrasi, Anda dapat menjalankan aplikasi dengan perintah:

    ```bash
    npm run dev
    ```

    Aplikasi akan berjalan di [http://localhost:8000](http://localhost:8000) secara default.


## Penggunaan Postman

Anda dapat menggunakan Postman untuk menguji API yang disediakan oleh aplikasi ini. Dokumentasi Postman tersedia [di sini](https://documenter.getpostman.com/view/17653484/2sA3BuX9gC).
