Nama : Raden Mochamad Yusfi Arif

Kelas: TI-4J

NIM  : 2341727004

## Praktikum 1: Instalasi Redux dan bootstrap

1. install project next.js baru, karena kita tidak menggunakan default App Router. Kita buat project baru dengan nama pertemuan-06 pada repo PBF <br>
![1](/pertemuan-06/img/Screenshot_539.png)<br>

2. Membuka open folder untuk project pertemuan-06 di VS Code, maka isi direktori yang ada di dalamnya sedikit berbeda dengan project yang sudah pernah kita buat sebelumnya. Yaitu terdapat folder pages dan styles.<br>
![1](/pertemuan-06/img/Screenshot_540.png)

3. Menggunakan CSS Library Bootstrap dengan menjalankan perintah `npm install bootstrap`<br>
![1](/pertemuan-06/img/Screenshot_544.png)

4. Import bootstrap pada aplikasi next.js kita. Kita edit file pages/_app.tsx<br>
![1](/pertemuan-06/img/Screenshot_542.png)

5. Implementasi bootstrap pada project next.js dengan mengubah  file pages/index.tsx<br>
![1](/pertemuan-06/img/Screenshot_543.png)


6. Menjalankan project next.js dengan hasil berikut<br>
![1](/pertemuan-06/img/Screenshot_567.png)<br>
![1](/pertemuan-06/img/Screenshot_566.png)<br>
Penjelasan : Kode tersebut adalah project React yang menggunakan Bootstrap untuk membuat sebuah tombol. Saat tombol tersebut ditekan, sebuah jendela modal Bootstrap akan muncul dengan pesan "Halo semua, kita sedang menggunakan bootstrap di Next.js". Jendela modal ini dimunculkan menggunakan fitur bawaan Bootstrap yang memungkinkan tampilan modal ketika tombol tertentu ditekan.

## Praktikum 2: Contoh Login dengan Redux
1. Menginstall redux-toolkit dan redux-persistent<br>
![1](/pertemuan-06/img/Screenshot_546.png)<br>

2. Menginstall wrapper untuk redux di next.js<br>
![1](/pertemuan-06/img/Screenshot_569.png)<br>

3. Menginstall html parser yang ada di react untuk memparsing html string menjadi sebuah html page<br>
![1](/pertemuan-06/img/Screenshot_547.png)<br>

4. Setelah berhasil menginstal, dapat melihatnya file package.json<br>
![1](/pertemuan-06/img/Screenshot_570.png)<br>

5. Buat folder dengan nama redux yang sejajar dengan folder public<br>
![1](/pertemuan-06/img/Screenshot_549.png)<br>

6. Buat file redux/auth/authSlice.js<br>
![1](/pertemuan-06/img/Screenshot_550.png)<br>

7. Buat file redux/store/store.js<br>
![1](/pertemuan-06/img/Screenshot_551.png)<br>

8. Buat file .env.local untuk menyimpan Key pada persistConfig<br>
![1](/pertemuan-06/img/Screenshot_553.png)<br>

9. Buat file baru di pages/login.tsx<br>
![1](/pertemuan-06/img/Screenshot_557.png)<br>
![1](/pertemuan-06/img/Screenshot_558.png)<br>

10. Jalankan project kita di browser<br>
![1](/pertemuan-06/img/Screenshot_552.png)<br>
Penjelasan : Ketika aplikasi dijalankan, halaman akan menampilkan status login pengguna. Jika pengguna telah masuk, akan muncul pesan "Yay, berhasil login!!!" dengan tombol "Log out" untuk keluar dari sesi login. Sedangkan jika pengguna belum masuk, akan muncul pesan "Anda telah logout!" dengan tombol "Log in" untuk memulai sesi login. Status login disimpan dan dikelola menggunakan Redux, di mana tindakan dipicu saat pengguna melakukan klik pada tombol login atau logout. Tampilan halaman menggunakan Bootstrap untuk tata letak yang responsif dan penampilan yang lebih menarik.

## Soal
1. Coba akses http://localhost:3000/login, dan klik tombol login. Kemudian lakukan refresh page berkali-kali (jika perlu restart npm run dev nya). Simpulkan apa yang terjadi ?<br>
Jawab : <br> Jadi ketika dilakukan refresh page berkali-kali saat dalam keadaan sesi login, website akan menampilkan pesan error setelah beberapa di refresh. Hal ini terjadi karena saat proses refresh, status login yang disimpan di Redux akan kembali ke nilai awalnya, yang mana mungkin tidak sesuai dengan yang diharapkan (misalnya, kembali menjadi "belum login"). Sebagai hasilnya, komponen akan mencoba menampilkan pesan yang sesuai dengan status login saat itu, yang mungkin tidak diinginkan karena status login seharusnya sudah ada. Oleh karena itu, menyimpan status login secara persisten (misalnya di local storage) dapat membantu mengatasi masalah ini.
![1](/pertemuan-06/img/Screenshot_556.png)<br>

2. Baris 25 dan 30 terdapat method parse(), apa yang terjadi jika kita tidak menggunakan method tersebut?<br>
Jawab : <br>Jika tidak menggunakan fungsi parse dari pustaka html-react-parser, maka kode akan tetap berfungsi, tetapi harus menuliskan kode HTML langsung sebagai string di dalam JSX sesuai gambar di bawah. Ini dapat dilakukan karena JSX memungkinkan menyertakan HTML secara langsung. Namun, jika HTML yang ingin gunakan disimpan sebagai string dan perlu diproses, maka memerlukan parse.
![1](/pertemuan-06/img/Screenshot_557.png)<br>
![1](/pertemuan-06/img/Screenshot_559.png)<br>

## Praktikum 3: Membuat Aplikasi Counter Sederhana
1. Buat file baru di redux/counter/naikTurunSlice.js<br>
![1](/pertemuan-06/img/Screenshot_562.png)<br>

2. Memodifikasi redux/store/store.js untuk menambahkan Redux reducer pada store<br>
![1](/pertemuan-06/img/Screenshot_563.png)<br>

3. Buat file baru di pages/counter.tsx<br>
![1](/pertemuan-06/img/Screenshot_564.png)<br>

4. Jalankan project kita di browser<br>
![1](/pertemuan-06/img/Screenshot_565.png)<br>
Penjelasan : Halaman akan menampilkan total jumlah mobil yang dimiliki pengguna. Terdapat dua tombol, satu untuk menambah jumlah mobil dan satu lagi untuk mengurangi jumlah mobil. Jumlah mobil ditampilkan di antara tombol-tombol tersebut. Saat tombol tambah ditekan, total jumlah mobil akan bertambah, dan saat tombol kurang ditekan, total jumlah mobil akan berkurang. Namun, jika total jumlah mobil sudah mencapai 0 dan tombol kurang ditekan, akan muncul peringatan bahwa jumlah mobil minimal adalah 0. Tampilan halaman menggunakan Bootstrap untuk memperindah tata letak dan gaya tombol.

## Tugas (Pertanyaan Praktikum)
1. Apa kegunaan dari kode ini import { useEffect } from "react"; Pada file pages/_app.tsx? jelaskan<br>
Jawab :<br> Fungsi ini memungkinkan kita melakukan beberapa tindakan yang berkaitan dengan tampilan setelah komponen di-render.yang pada kode selanjutnya mencoba mengimpor fungsi useEffect dari pustaka React yang digunakan untuk memastikan bahwa stylesheet dari Bootstrap dimuat dengan benar agar aplikasi dapat 
menggunakan gaya css dari Bootstrap.

2. Jika pada file pages/_app.tsx kita tidak menggunakan useEffect (menghapus baris 3, dan baris 9-11), apa yang akan terjadi?<br>
Jawab : <br> ketika menghapus `import{ useEffect } from "react";` akan menyebabkan aplikasi gagal untuk memuat stylesheet Bootstrap secara dinamis menggunakan useEffect, yang mungkin mengakibatkan tampilan aplikasi tidak sesuai dengan yang diharapkan atau bahkan bisa menyebabkan aplikasi menjadi tidak berfungsi dengan benar. <br><br>
Sementara jika baris `return <Component {...pageProps} />;` dihapus, maka fungsi MyApp tidak akan mengembalikan elemen yang diperlukan untuk merender halaman utama aplikasi. Akibatnya, halaman utama tidak akan ditampilkan dengan benar, dan aplikasi mungkin akan mengalami kesalahan yang membuat tampilan tidak muncul atau tidak berfungsi seperti yang diharapkan.

3. Mengapa di react/nextjs penulisan tag html untuk class, harus diganti menjadi className ?<br>
Jawab : <br> Di React dan Next.js, kita menggunakan className sebagai pengganti untuk atribut class pada elemen JSX. Ini karena dalam JSX, kita sedang menulis kode JavaScript, dan class adalah kata kunci dalam JavaScript yang digunakan untuk membuat kelas. Jadi, untuk menghindari kebingungan antara penggunaan class sebagai kata kunci JavaScript dan untuk menetapkan kelas CSS pada elemen HTML, kita menggunakan className. Ini adalah aturan yang diterapkan agar kode kita tetap konsisten dan tidak membingungkan antara konteks JavaScript dan HTML saat menggunakan JSX dalam React dan Next.js.

4. Apakah store pada nextjs bisa menyimpan banyak redux reducer? <br>
Jawab : <br> Ya, kita dapat menggunakan store Redux untuk menyimpan banyak reducer di Next.js yang berarti  bisa memiliki banyak bagian kecil yang mengatur bagian-bagian khusus dari state dalam aplikasi.

5. Jelaskan kegunaan dari file store.js!<br>
Jawab : <br> Kode ini digunakan untuk membuat dan mengatur bagaimana data disimpan dan dikelola dalam aplikasi Next.js menggunakan Redux dan Redux Persist. Pertama, kita siapkan pengaturan dasar untuk menyimpan data dengan Redux Persist. Kemudian, kita gabungkan berbagai bagian data aplikasi menggunakan Redux. Setelah itu, kita atur agar data bisa disimpan secara persisten dengan Redux Persist. Terakhir, kita membuat store untuk menyimpan data aplikasi dan mengekspornya agar bisa digunakan di seluruh aplikasi. Dengan begini, kita bisa mengelola data aplikasi dengan lebih mudah dan menyimpannya bahkan ketika aplikasi dimatikan.

6. Pada file pages/login.tsx, apa maksud dari kode ini ? `const { isLogin } = useSelector((state) => state.auth);` <br>
Jawab : <br> Baris `const { isLogin } = useSelector((state) => state.auth);` digunakan untuk mengambil nilai dari properti `isLogin` dari state Redux di dalam komponen `LoginCheck`. Fungsi `useSelector` dari React Redux memungkinkan kita untuk memilih bagian tertentu dari state Redux dan mengaksesnya di dalam komponen React. Dalam kasus ini, `useSelector` digunakan untuk memilih state `auth` dari store Redux, kemudian mengambil nilai `isLogin` dari state tersebut. Dengan menggunakan `{ isLogin }`, kita mengekstrak nilai `isLogin` dari state `auth` sehingga bisa langsung digunakan di dalam komponen `LoginCheck` tanpa harus menuliskan `state.auth.isLogin` berulang kali.

7. Pada file pages/counter.tsx, apa maksud dari kode ini? `const {totalCounter} = useSelector((state) => state.counter);`
Jawab : <br> Baris `const { totalCounter } = useSelector((state) => state.counter);` digunakan untuk mengambil nilai dari properti `totalCounter` dari state Redux di dalam komponen `CounterNaikTurun`. Pada file pages/counter.tsx, `useSelector` digunakan untuk memilih state `counter` (nama slice dari state) dari store Redux, kemudian mengambil nilai `totalCounter` dari state tersebut. Dengan menggunakan `{ totalCounter }`, kita mengekstrak nilai `totalCounter` dari state `counter` sehingga bisa langsung digunakan di dalam komponen `CounterNaikTurun` tanpa harus menuliskan `state.counter.totalCounter` berulang kali.













