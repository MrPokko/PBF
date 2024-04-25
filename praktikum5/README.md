Nama : Raden Mochamad Yusi Arif

Kelas: TI-4J

NIM  : 2341727004

## Praktikum 1: Membuat routing sederhana 

1. Persiapkan project dengan memanfaatkan template repository yang telah dipersiapkan di alamat https://github.com/dhanifudin/routing-demo dan gunakan tombol Use this template kemudian pilih Create a new repository.
    ![1](/routing-demoo/images/Screenshot_498.png)

2. Clone project ke lokal laptop anda dan lakukan instalasi dependencies dengan menjalankan perintah berikut. `npm install`
    ![1](/routing-demoo/images/Screenshot_499.png)

3. Silahkan buka project tersebut dengan menggunakan VSCode dan perhatikan file yang ada dalam folder app.
    ![1](/routing-demoo/images/Screenshot_500.png)

4. Routing di ReactJS dengan NextJS memanfaatkan organisasi penamaan folder dan file pada folder app. Silahkan tambahkan file page.tsx di dalam folder app, dan buatlah komponen dengan kode berikut.
    ![1](/routing-demoo/images/Screenshot_500.png)


`src/component/button.tsx` <br>
![1](/04-event-state/img/Screenshot_424.png)


`src/app/page.tsx` <br>
![2](/04-event-state/img/Screenshot_425.png)


`Result` <br>
![3](/04-event-state/img/Screenshot_426.png)


### Langkah 2

`src/components/button.tsx` <br>
![4](/04-event-state/img/Screenshot_427.png)

Muncul eror dengan solusi menambahkan "use client".

`Issue result` <br>
![5](/04-event-state/img/Screenshot_428.png)

`src/components/page.tsx` <br>
![6](/04-event-state/img/Screenshot_429.png)

`Fix result` <br>
![6](/04-event-state/img/Screenshot_430.png)

`src/components/button.tsx` <br>
![6](/04-event-state/img/Screenshot_431.png)

`Result` <br>
![6](/04-event-state/img/Screenshot_432.png)

## Praktikum 2

`src/components/button.tsx` <br>
![6](/04-event-state/img/Screenshot_433.png)

`Result` <br>
![6](/04-event-state/img/Screenshot_434.png)

## Praktikum 3

### Langkah 1

`src/components/button.tsx` <br>
![6](/04-event-state/img/Screenshot_438.png)

`src/components/page.tsx` <br>
![6](/04-event-state/img/Screenshot_439.png)

`Result` <br>
![6](/04-event-state/img/Screenshot_440.png)

### Langkah 2

`src/components/button.tsx` <br>
![6](/04-event-state/img/Screenshot_435.png)

`src/components/page.tsx` <br>
![6](/04-event-state/img/Screenshot_439.png)

`Result` <br>
![6](/04-event-state/img/Screenshot_440.png)

## Praktikum 4

`src/data/article.tsx` <br>
![6](/04-event-state/img/Screenshot_441.png)

`src/component/gallery.tsx` <br>
![6](/04-event-state/img/Screenshot_442.png)

`src/components/page.tsx` <br>
![6](/04-event-state/img/Screenshot_443.png)

`Result` <br>
![6](/04-event-state/img/Screenshot_444.png)

## Soal
1. Jika kita menekan tombol "Artikel Selanjutnya" sebanyak 5x (atau melebihi halaman total artikel), apa yang akan terjadi?
2. Modifikasilah gallery.tsx agar bisa meng-handle permasalahan tersebut.
3. Tambahkan tombol "Artikel Sebelumnya", untuk menampilkan artikel secara mundur.

### Jawaban
1. Akan terjadi eror karena hanya ada 5 data yang berada pada file article.jsx hanya
2. Berikut kode yang di modifikasi <br>
![6](/04-event-state/img/Screenshot_445.png)
3.  Berikut hasil kode yang telah dimodifikasi <br>
![6](/04-event-state/img/Screenshot_446.png)

## Praktikum 5

### Langkah 1

`src/components/form.tsx` <br>
![6](/04-event-state/img/Screenshot_447.png)

`src/components/page.tsx` <br>
![6](/04-event-state/img/Screenshot_448.png)

`Result` <br>
![6](/04-event-state/img/Screenshot_449.png)

`Penjelasan`
Kode di tersebut adalah sebuah komponen Form dalam React yang memungkinkan pengguna untuk menebak nama hewan yang ditakuti oleh Doraemon. Komponen ini menggunakan `useState` untuk mengelola state dari variabel Jawaban, error, dan status. Ketika pengguna mengirimkan tebakan, fungsi `handleSubmit` akan dipanggil, dan jika tebakan benar, akan ditampilkan pesan "Yay...Jawaban Benar!". Jika terjadi kesalahan, pesan kesalahan akan ditampilkan di bawah form. Fungsi `submitForm` digunakan untuk menangani pengiriman tebakan dan memberikan respons setelah jeda 500 milidetik.

### Langkah 2

`src/components/form.tsx` <br>
![6](/04-event-state/img/Screenshot_453.png)

`src/components/page.tsx` <br>
![6](/04-event-state/img/Screenshot_451.png)

`Result` <br>
![6](/04-event-state/img/Screenshot_452.png)

state fullName digantikan variable biasa

`src/components/form.tsx` <br>
![6](/04-event-state/img/Screenshot_450.png)

`Result` <br>
![6](/04-event-state/img/Screenshot_452.png)

`Penjelasan`
Setelah kode di compile memiliki hasil yang sama

## Soal

1. Apa perbedaan dari fungsi Form_2 yang pertama dengan yang kedua?
2. Kenapa perlu menghapus state fullName? Apa keuntungannya?

### Jawaban

1. Perbedaan nya antara lain

- Cara Penanganan State:
    - Kode pertama menggunakan tiga state terpisah untuk `firstName`, `lastName`, dan `fullName`.
    - Kode kedua hanya menggunakan state untuk `firstName` dan `lastName`, sementara `fullName` dihitung langsung di dalam komponen.

- Perhitungan Nama Lengkap (`fullName`):
   - Kode pertama menghitung `fullName` setelah mengubah state `firstName` atau `lastName` di dalam fungsi khusus.
   - Kode kedua menghitung `fullName` langsung di dalam JSX, tanpa perlu fungsi tambahan.

2. keuntungannya adalah kemampuan Perubahan `fullName`:
- Kode pertama mungkin memiliki masalah dengan pembaruan nilai yang tertinggal karena cara React mengelola pembaruan state secara asinkron.
- Kode kedua lebih langsung, sehingga `fullName` selalu mencerminkan nilai terbaru dari `firstName` dan `lastName`.

## Praktikum 6

### Langkah 1

`src/components/accordion.tsx`
![6](/04-event-state/img/Screenshot_454.png)


`src/components/page.tsx` <br>
![6](/04-event-state/img/Screenshot_455.png)

`Result` <br>
![6](/04-event-state/img/Screenshot_456.png)

`Penjelasan`
Kode tersebut merupakan komponen yang membuat sebuah accordion (sebuah elemen UI yang memungkinkan pengguna untuk memperluas dan menyembunyikan konten) dengan dua panel yang bisa di-klik

### Langkah 2
`src/components/chat.tsx` <br>
![6](/04-event-state/img/Screenshot_457.png)
![6](/04-event-state/img/Screenshot_458.png)

`src/components/page.tsx` <br>
![6](/04-event-state/img/Screenshot_459.png)

`Result` <br>
![6](/04-event-state/img/Screenshot_460.png)

`Penjelasan`
Menambahkan ini agar React bisa lebih baik dalam mengelola bagaimana komponen Chat ini diperbarui. Jadi, setiap kali memilih kontak baru, "key" membantu React memahami bahwa Chat seharusnya di-update dengan benar.

## Soal

1. Apa tujuan dari penulisan ini key={to.email} pada < Chat key={to.email} contact={to} / > ?
2. Apa fungsi dari props key tersebut?

### Jawaban

1. Tujuannya adalah untuk membantu ne dalam proses pembaruan ulang komponen saat terjadi perubahan pada struktur daftar dan data pada komponen.

2. Prop "key" dalam React berfungsi untuk memberikan identifikasi unik kepada setiap komponen, memungkinkan optimisasi re-render, dan membantu dalam menjaga state untuk komponen yang berbeda saat daftar komponen mengalami perubahan, sehingga memastikan pengalaman pengguna yang konsisten.
