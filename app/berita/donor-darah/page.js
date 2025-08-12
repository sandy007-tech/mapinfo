export default function DonorDarahPage() {
  return (
    <div className="min-h-screen bg-white text-green-900 p-6">
      <h1 className="text-4xl font-bold text-center mb-1">
        Aksi Donor Darah 
      </h1>
      <h1 className="text-4xl font-bold text-center mb-10">
        PT. Mulia Agro Permai
      </h1>
      <p className="mb-4 text-justify">
        Sebagai salah satu wujud cinta tanah air dan peduli terhadap sesama, PT. Mulia Agro Permai di Sampit bekerja sama dengan Palang Merah Indonesia (PMI) di Kabupaten Kotawaringin Timur melakukan Kegiatan Donor Darah. Acara berlangsung pada hari Sabtu, 14 Juni 2025 bertempat di Klinik Pratama PT. Mulia Agro Permai. Kegiatan donor darah ini merupakan CSR Serentak dari seluruh KLK Group dalam rangka memperingati hari donor darah sedunia.
      </p>
      <img 
        src="/donor-darah2.jpg" 
        alt="Donor Darah" 
        className="w-full max-w-xl rounded-lg shadow-lg mb-4"
      />
      <p className="mb-4 text-justify">
        Kepala PMI Kotawaringin Timur dalam sambutannya sangat mengapresiasi kegiatan donor darah ini, dan berharap kegiatan serupa dapat terus dilaksanakan setiap tahunnya, karena dapat memberikan manfaat yang banyak bagi masyarakat dan memberi efek Kesehatan juga bagi para pendonor. Kegiatan aksi donor darah ini didukung oleh karyawan dan karyawati dari anak Perusahaan KLK Group yang berada di Kotawaringin Timur,  serta karyawan dari kontraktor yang berada dilingkungan Perusahaan. Pada kegiatan ini berhasil mengumpulkan 100 Pendaftar, yang kemudian dilanjutkan dengan pemeriksaan persyaratan sebagai pendonor, dimana dari hasil Skrining di dapat 75 orang peserta yang memenuhi syarat sebagai pendonor.
      </p>
      <img 
        src="/donor-darah4.jpg" 
        alt="Donor Darah" 
        className="w-full max-w-xl rounded-lg shadow-lg mb-4"
      />
      <p className="mb-4 text-justify">
        Sesuai dengan Tema Hari Donor Darah Sedunia 2025 adalah "Give blood, give hope: together we save lives", yang dalam bahasa Indonesia berarti "Berikan darah, berikan harapan: bersama kita selamatkan nyawa", dikutip dari berbagai sumber. Tema ini menekankan pentingnya donor darah sukarela dalam memberikan harapan dan menyelamatkan nyawa, serta mengajak masyarakat untuk bersatu dalam upaya kemanusiaan ini serta memupuk rasa solidaritas antar sesama, sehingga dengan kegiatan ini diharapkan dapat memberikan manfaat kepada masyarakat terutama masyarakat yang sedang membutuhkan darah.
      </p>
      <img 
        src="/donor-darah3.jpg" 
        alt="Donor Darah" 
        className="w-full max-w-xl rounded-lg shadow-lg mb-4"
        />
         <p className="mb-4 text-justify">
       Kantong darah yang sudah terkumpul langsung diserahkan ke petugas PMI dan segera dibawa ke kantor PMI Kota Sampit.
      </p>
        {/* Footer */}
      <footer className="mt-16 border-t pt-6 text-center text-gray-500 text-sm relative z-10">
        &copy; {new Date().getFullYear()} KLK KALTENG NEWS – PT. Mulia Agro Permai. All rights reserved.
      </footer>
    </div>
  );
}
