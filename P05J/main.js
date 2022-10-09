<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css" />
    <title>Top 5 My Best Friends</title>
</head>
<script></script>
<body><center>
    <div class="container">
        <div class="atas">
            <h1>My Top 10 Best Friends</h1>
        </div>
    </div>
    <table class="mytabel">
        <tr>
            <th>NIM</th>
            <th>Nama</th>
            <th>Aalamat</th>
            <th>Action</th>
        </tr>
        <tr class="satu">
            <td class="nim">41226149</td>
            <td class="nama">Abimanyu Putra Suteja</td>
            <td class="alamat">Kab. Majalengka</td>
            <td class="hapus" id="hapus_1">Hapus</td>
        </tr>
        <tr class="dua">
            <td class="nim">41226123</td>
            <td class="nama">Muhamad Taufiq Hidayat</td>
            <td class="alamat">Kab. Majalengka</td>
            <td class="hapus" id="hapus_2">Hapus</td>
        </tr>
        <tr class="tiga">
            <td class="nim">41226152</td>
            <td class="nama">Maulana Sujarwadi</td>
            <td class="alamat">Kab. Kuningan</td>
            <td class="hapus" id="hapus_3">Hapus</td>
        </tr>
        <tr class="empat">
            <td class="nim">41226122</td>
            <td class="nama">Muhamad Bagus Mustofa Madinah</td>
            <td class="alamat">Kab. Majalengka</td>
            <td class="hapus" id="hapus_4">Hapus</td>
        </tr>
        <tr class="lima">
            <td class="nim">41226083</td>
            <td class="nama">Muhamad Ibnu Syna</td>
            <td class="alamat">Kab. Majalengka</td>
            <td class="hapus" id="hapus_5">Hapus</td>
        </tr>
        </tr>
    </table>
    <div class="button">
        <a onclick="alert(Mau kembali?)" href="../index.html">Kembali</a>
    </div></center>
    <script>
        $(document).ready(function(){
            alert(0)
            $('.nim').click(function(){
                let isi = $(this).text();
                alert(isi);
                let isi2 = prompt('Apakah anda ingin menghapusnya?:',isi);
                if(!isi2) return;
                alert(isi2);

                $(this).text(isi2);
            })
            $('.nama').click(function(){
                let isi = $(this).text();
                alert(isi);
                let isi2 = prompt('Apakah anda ingin menghapusnya?:',isi);
                if(!isi2) return;
                alert(isi2);

                $(this).text(isi2);
            })
            $('.alamat').click(function(){
                let isi = $(this).text();
                alert(isi);
                let isi2 = prompt('Apakah anda ingin menghapusnya?:',isi);
                if(!isi2) return;
                alert(isi2);

                $(this).text(isi2);
            })
            $('.hapus').click(function(){
                let isi = $(this).text();
                alert(isi);
                let isi2 = prompt('Apakah anda ingin menghapusnya?:',isi);
                if(!isi2) return;
                alert(isi2);

                $(this).text(isi2);
        })
    </script>
    <script src="main.js"></script>
</body>
</html>