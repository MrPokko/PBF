
Raden Mochamad Yusfi Arif - 2341727004 - TI-4J

Soal 1
TypeScript
TypeScript merupakan bahasa pemrograman open-source yang dikembangkan oleh Microsoft. Bahasa ini menyediakan fitur tipe statis opsional yang dapat meningkatkan keamanan dan keandalan kode JavaScript.

ESLint
ESLint adalah alat linting JavaScript yang membantu dalam mengidentifikasi dan memperbaiki pola kode yang buruk atau tidak efisien. Alat ini berperan dalam menjaga konsistensi kode serta memastikan standar kualitas yang tinggi.

Tailwind CSS
Tailwind CSS adalah kerangka kerja CSS yang memungkinkan pengembang untuk dengan cepat membuat desain web responsif dan konsisten. Pendekatan utility-first yang digunakan oleh Tailwind CSS memungkinkan fleksibilitas besar dalam desain.

App Router
App Router bertanggung jawab atas manajemen navigasi dalam aplikasi web. Ini mempermudah pengguna untuk berpindah antara berbagai halaman atau bagian dari aplikasi tanpa perlu memuat ulang seluruh situs web.

Import Alias
Import Alias memungkinkan pemberian nama alias pada direktori atau modul dalam kode JavaScript/TypeScript. Fitur ini membantu dalam pengorganisasian kode serta meningkatkan keterbacaan.

Soal 2
Folder
.git
Direktori yang digunakan oleh Git untuk menyimpan semua metadata dan database objek proyek. Ini penting untuk kontrol versi dan manajemen kode sumber.
node_modules
Berisi berbagai file dan konfigurasi yang mendukung fitur-fitur Next.js, seperti routing pages, built-in CSS support, layout component, image optimization, font optimization, script optimization, static file serving, dan fast refresh.
Public
Folder ini berisi file-file statis yang dapat diakses langsung oleh pengguna. Misalnya, file HTML utama (index.html) berada di sini bersama dengan file gambar, favicon, atau font yang akan digunakan dalam aplikasi. Ini adalah tempat yang tepat untuk meletakkan aset yang tidak akan dimanipulasi oleh React atau Webpack.
src
Direktori yang berisi kode sumber dari aplikasi React. Kode JavaScript atau TypeScript, komponen React, file CSS, atau file lain yang dibutuhkan untuk membangun aplikasi berada di sini. Ini adalah tempat utama di mana Anda akan menghabiskan sebagian besar waktu Anda dalam pengembangan aplikasi.
File
.eslintrc.json
File konfigurasi untuk ESLint, alat yang mengidentifikasi dan melaporkan pola yang ditemukan dalam kode ECMAScript/JavaScript untuk menjadikannya lebih konsisten dan menghindari bug.

.gitignore
Daftar file dan direktori yang diabaikan saat mengunggah ke repositori Git.

next.config.mjs & next-env.d.ts

File konfigurasi terkait kerangka kerja Next.js yang digunakan untuk merender aplikasi React secara server-side.

package.json & package-lock.json

Berisi metadata tentang proyek seperti dependensi. File lock memastikan setiap instalasi menghasilkan versi dependensi yang sama di semua mesin.

postcss.config.js

File konfigurasi untuk PostCSS, alat untuk mengubah CSS dengan plugin JavaScript seperti autoprefixer atau cssnext.

README.md

File markdown berisi informasi tentang proyek seperti petunjuk instalasi atau dokumentasi.

tailwind.config.ts

File konfigurasi untuk kerangka kerja Tailwind CSS yang memungkinkan pengembang membangun situs web modern dengan struktur kelas CSS berbasis utilitas.

tsconfig.json

Opsi konfigurasi untuk proyek TypeScript.

Soal 3

Penjelasan: Pada proyek Next.js, setelah berhasil mengubah teks, tidak perlu menjalankan perintah npm run dev atau melakukan reload halaman di browser karena adanya fitur yang disebut "Hot Module Replacement" (HMR) dalam lingkungan pengembangan Next.js. HMR memungkinkan perubahan kode yang dibuat pada aplikasi Next.js untuk langsung tercermin di browser tanpa perlu melakukan reload halaman secara manual. Perintah npm run dev secara default mengaktifkan HMR.

Tugas Praktikum 2 PBF Semester 8

Remix

Gatsby

Perbedaan di Antara Ketiga Framework
Next.js: Merupakan framework React yang memungkinkan pembuatan aplikasi web dengan mudah, termasuk fitur-fitur seperti Server-side Rendering (SSR) dan Static Site Generation (SSG), serta kemampuan routing dinamis. Cocok digunakan untuk aplikasi yang memerlukan performa tinggi dan fleksibilitas dalam penanganan rute.
Remix: Adalah framework yang kuat untuk membangun aplikasi web dengan fokus pada manajemen data yang canggih, rerendering otomatis untuk meningkatkan performa, serta kemampuan mutasi langsung di sisi server. Cocok digunakan untuk aplikasi dengan logika data yang kompleks dan penanganan formulir yang kuat.
Gatsby: Merupakan Static Site Generator yang memungkinkan pembuatan situs web statis dengan cepat dan efisien. Dengan menggunakan GraphQL untuk mengelola data, serta sistem plugin yang kuat untuk menambahkan fungsionalitas tambahan, Gatsby cocok digunakan untuk pembuatan situs web dengan performa tinggi dan SEO yang optimal.