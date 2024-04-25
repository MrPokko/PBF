Nama : Raden Mochamad Yusfi Arif

Kelas: TI-4J

NIM  : 2341727004

## Praktikum 1: Membuat Variasi Ukuran Teks Heading dengan Contex

1. Buat project baru dan repo baru di GitHub

![img](/08-contex/img/prak%201%20langkah%201.PNG)

2. Buat struktur folder dengan prinsip atomic design

![img](/08-contex/img/prak%201%20langkah%202.PNG)

3. Buat komponen atom baru

Buat file baru di `src/components/atoms/heading`.tsx berisi kode sebagai berikut.

![img](/08-contex/img/prak%201%20langkah%203%20heading.PNG)

Kemudian buat file baru di `src\components\atoms\section.tsx` berisi kode berikut.

![img](/08-contex/img/prak%201%20langkah%203%20section.PNG)

Lalu bagian MainPage buat file baru di `src\components\templates\main_page.tsx` berisi kode sebagai berikut.

![img](/08-contex/img/prak%201%20langkah%203%20main_page.PNG)

 4. Ubah isi kode page.tsx dan run

Ubahlah kode di `src\app\page.tsx` seperti berikut. Lalu run dan lihat hasilnya di browser Anda.

![img](/08-contex/img/prak%201%20langkah%204.PNG)

### Soal 1

Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

![img](/08-contex/img/prak%201%20hasil%20soal%201.PNG)

### Penjelasan
Saya telah mempelajari cara kejra prinsip atomic design. Dan setelah code di compile muncul tulisan title, heading, sub-heading, dan sub-sub-heading. 

5. 1: Buat Contex

Buatlah file baru di `src\utilities\contex\mycontex.tsx` yang berisi kode sebagai berikut:

![img](/08-contex/img/prak%201%20langkah%205.1.PNG)

5. 2: Gunakan contex

Ubahlah isi kode komponen Heading dengan Impor useContex Hook dari React dan contex Anda:

![img](/08-contex/img/PRAK%201%20LANGKAH%205.2.PNG)

Sekarang komponen Heading tidak membutuhkan sebuah prop level, Anda tidak perlu mengoper level prop ke Heading di JSX Anda. Sebagai gantinya Perbarui JSX sehingga Section yang dapat menerimanya:

![img](/08-contex/img/prak%201%20langkah%205.2%20main%20page.PNG)

5. 3: Sediakan contex

Komponen Section saat ini merenders anaknya, bungkus mereka semua dengan sebuah contex provider untuk menyediakan LevelContex kepada mereka seperti kode berikut:

![img](/08-contex/img/prak%201%20langkah%205.3.PNG)

Soal 2

Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?
Penjelasan : hingga step ini telah mempelajari persiapan penggunaaan konsep contex dalam next.js
![img](/08-contex/img/prak%201%20hasil%20soal%20no%202%20error.PNG)

Jika terjadi error, silakan perbaiki, Mengapa hal itu bisa terjadi? Jelaskan!
Penjelasan : eror tersebut terjadi karena server membutuh kan render di sisi client dengan deklarasi "use client"

![img](/08-contex/img/prak%201%20hasil%20soal%20no%202%20perbaikan%20error.PNG)

Hasilnya :

![img](/08-contex/img/prak%201%20hasil%20soal%20no%202%20perbaikan%20error%20kedua.PNG)

8. Langkah 6: Menggunakan dan menyediakan contex dari komponen yang sama

Berikut adalah bagaimana Anda dapat melakukannya dengan mengubah sedikit kode pada komponen Section:

![img](/08-contex/img/prak%201%20langkah%206%20section.PNG)

Dengan perubahan ini, Anda tidak perlu mengoper prop level baik ke < Section > atau ke < Heading >:

![img](/08-contex/img/prak%201%20langkah%206%20main%20page.PNG)

![img](/08-contex/img/prak%201%20langkah%206%20heading.PNG)

Soal 3
Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

Penjelasan : yang di pelajari adalah cara membuat variasi ukuran teks heading dengan contex

![img](/08-contex/img/prak%201%20hasil%20soal%20no%203.PNG)


# Praktikum 2: Membuat Contex melewati komponen perantara

1. Langkah 1: Buat komponen atom baru

Buatlah file baru di `src\components\atoms\section2.tsx` berisi kode sebagai berikut.

![img](/08-contex/img/prak%202%20langkah%201%20section2.PNG)

 Lalu buatlah file baru di `src\components\atoms\post.tsx` dengan kode berikut.

![img](/08-contex/img/prak%202%20langkah%201%20post.PNG)

 Selanjutnya kita buat molecules di `src\components\molecules\recentpost.tsx` dengan kode berikut.

![img](/08-contex/img/prak%202%20langkah%201%20recentpost.PNG)

 Kemudian buat organisms di `src\components\organisms\allpost.tsx` dengan kode berikut.

![img](/08-contex/img/prak%202%20langkah%201%20allpost.PNG)

 Terakhir kita buat templates di `src\components\templates\profile_page.tsx`dengan kode berikut.

![img](/08-contex/img/prak%202%20langkah%201%20profile%20page.PNG)

2. Langkah 2: Tambahkan ProfilePage ke page.tsx lalu run

Tambahkan komponen ProfilePage seperti kode berikut.

![img](/08-contex/img/prak%202%20langkah%202%20nambah%20profilepage%20ke%20page.PNG)

Hapus bagian theme pada file tailwind.config.ts seperti kode berikut.

![img](/08-contex/img/prak%202%20langkah%202%20hapus%20theme.PNG)

Hapus semua style CSS di file `src\app\globals`.css lalu ganti dengan kode berikut.

![img](/08-contex/img/prak%202%20langkah%202%20globals%20css.PNG)

Ketika Anda run dengan npm run dev maka di browser akan tampil seperti berikut.

![img](/08-contex/img/prak%202%20langkah%202%20hasilnya.PNG)

Soal 4

Capture hasilnya dan buatlah laporan di README.md. Tambahkan teks Nama dan NIM pada bagian komponen Post agar menunjukkan itu hasil kerja Anda!

![img](/08-contex/img/Screenshot_681.png)

# Praktikum 3: Membuat Contex Tema Light/Dark

1. Langkah 1: Membuat variabel tema

Buatlah file dan folder baru di `src\utilities\themes\mythemes.tsx` yang berisi kode berikut.

![img](/08-contex/img/prak%203%20langkah%201%20mythemes.PNG)

Kemudian buatlah contexnya di file `src\utilities\contexs\mycontex.tsx`

![img](/08-contex/img/prak%203%20langkah%201%20mycontex.PNG)

2. Langkah 2: Buat komponen atom NavBar

Buatlah file baru di `src\components\atoms\navbar.tsx`

![img](/08-contex/img/prak%203%20langkah%202%20navbar.PNG)

3. Langkah 3: Buat Provider

Buatlah provider di `src\components\atoms\myapp`.tsx

![img](/08-contex/img/prak%203%20langkah%203%20myapp.PNG)

4. Langkah 4: Buat masing-masing page

Pindahkan komponen ProfilePage ke file `src\components\templates\profile_page.tsx`

![img](/08-contex/img/prak%203%20langkah%204%20profile_page.PNG)

Sehingga struktur folder di templates menjadi seperti berikut. Anda dapat berkreasi dengan konten pada About dan Contacts.

![img](/08-contex/img/prak%203%20langkah%204%20foler-folder.PNG)

5. Langkah 5: Buat routing

Buatlah folder dan file baru di dalam app agar routing page masing-masing dapat diakses seperti berikut.

![img](/08-contex/img/prak%203%20langkah%205%20folder-folder.PNG)

Gantilah isi kode pada `src\app\page.tsx` menjadi seperti berikut.

![img](/08-contex/img/prak%203%20langkah%205%20page%20benar.PNG)

Termasuk di masing-masing page `src\app\profile\page.tsx`, untuk page About dan Contacs silakan Anda sesuaikan.

![img](/08-contex/img/prak%203%20langkah%205%20profile%20page.PNG)

untuk `src\app\contact\page.tsx`

![img](/08-contex/img/prak%203%20langkah%205%20contact%20page.PNG)

untuk `src\app\about\page.tsx`

![img](/08-contex/img/prak%203%20langkah%205%20about%20page.PNG)

Soal 5
Silakan save semua dan lakukan running di browser Anda. Capture hasilnya dan buatlah laporan di README.md. Tambahkan teks Nama dan NIM pada setiap page routing agar menunjukkan itu hasil kerja Anda sendiri!

Hasil untuk Home

![img](/08-contex/img/prak%203%20hasil%20home%20asli%20yang%20benar.PNG)

Hasil untuk About

![img](/08-contex/img/prak%203%20hasil%20about%20yang%20benar.PNG)

Hasil untuk Contact

![img](/08-contex/img/prak%203%20hasil%20contact%20yang%20benar.PNG)

Hasil untuk Profile

![img](/08-contex/img/prak%203%20hasil%20profile%20yang%20benar.PNG)

Hasil untuk Set Dark Theme

![img](/08-contex/img/prak%203%20hasil%20set%20dark%20yang%20benar.PNG)


Apakah toggle button tema sudah berfungsi ? jika belum, silakan perbaiki!

Sudah berfungsi 

Mengapa ketika refresh atau berpindah halaman tema tidak permanen ? Buatlah menjadi permanen walaupun page sudah direfresh dan pindah halaman!

Kode Program myapp.tsx yang diganti menjadi

![img](/08-contex/img/prak%203%20kode%20program%201%20ganti%20dark%20permanen.PNG)

![img](/08-contex/img/prak%203%20kode%20program%202%20ganti%20dark%20permanen.PNG)

Hasilnya menjadi seperti dibawah ini

Untuk Home

![img](/08-contex/img/prak%203%20hasil%20Home%20dark.PNG)

Untuk About

![img](/08-contex/img/prak%203%20hasil%20%20About%20dark.PNG)

Untuk Contact

![img](/08-contex/img/prak%203%20hasil%20contact%20dark.PNG)