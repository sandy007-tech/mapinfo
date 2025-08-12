"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Nama: ${nama}\nEmail: ${email}\nPesan: ${pesan}`);
    setNama("");
    setEmail("");
    setPesan("");
  }

  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{ backgroundImage: "url('/sawit.jpg')" }}
      ></div>

      {/* Header & Navbar */}
      <header className="text-center relative z-10">
        <nav className="bg-red-900 bg-opacity-70 text-white p-3 flex items-center justify-between rounded mb-6">
          {/* Logo dan Judul */}
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Logo" className="max-w-[100px] h-auto mt-[-10]" />
            <div className="text-xl font-bold mt-2">KLK KALTENG NEWS</div>
          </div>

          {/* Navigasi */}
          <div className="space-x-4">
            <a href="#beranda" className="hover:underline">Beranda</a>
            <a href="#berita" className="hover:underline">Berita</a>
            <a href="#tentang" className="hover:underline">Tentang</a>
            <a href="#kontak" className="hover:underline">Kontak</a>
          </div>
        </nav>
      </header>

      {/* Beranda */}
      <section id="beranda" className="relative z-10 text-center text-white py-24 px-4">
        <h1 className="text-4xl text-green-900 md:text-5xl font-bold mb-4">Selamat Datang di KLK KALTENG NEWS</h1>
        <p className="text-lg md:text-xl text-green-900 mb-6">Portal Informasi KLK Group Kalteng</p>
        <a href="#berita" className="bg-green-700 hover:bg-green-800 transition-colors px-6 py-3 rounded text-white font-semibold">
          Lihat Berita Terbaru
        </a>
      </section>

      {/* Berita */}
      <section
        id="berita"
        className="mb-12 relative z-10 bg-white bg-opacity-80 p-6 rounded max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-green-900">Berita Terbaru</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Berita 1 */}
          <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <img src="/berita1.jpg" alt="Panen Raya" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg text-green-900 font-semibold mb-2">PT. Mulia Agro Permai Gelar Panen Raya Semester III 2025</h3>
              <p className="text-sm text-gray-600 mb-2">5 Juni 2025</p>
              <p className="text-gray-700 mb-4">
                Panen raya jagung kali ini yang diadakan di kebun MAP Timur yang dihadiri oleh Wakil Bupati Kotawaringin Timur dan dinas pertanian serta pihak Polres dan Polda.
              </p>
              <Link
                href="/berita/panen-raya"
                className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Baca Selengkapnya
              </Link>
            </div>
          </article>

          {/* Berita 2 */}
          <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <img src="/berita2.jpg" alt="Program CSR" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg text-green-900 font-semibold mb-2">Program Donor Darah Dalam Membantu UTD Dalam Penyediaan Kantong Darah</h3>
              <p className="text-sm text-gray-600 mb-2">14 Juli 2025</p>
              <p className="text-gray-700 mb-4">
                PT. Mulia Agro Permai berkolaborasi dengan PMI Kota Sampit dalam mengadakan kegiatan donor darah dengan mengajak seluruh karyawan PT. KLK Region Kalteng.
              </p>
              <Link
                href="/berita/donor-darah"
                className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Baca Selengkapnya
              </Link>
            </div>
          </article>

          {/* Berita 3 */}
          <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <img src="/berita3.jpg" alt="Pelatihan K3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg text-green-900 font-semibold mb-2">Kemeriahan Pengingatan Hari Kemerdekaan 17 Agustus PT. Mulia Agro Permai</h3>
              <p className="text-sm text-gray-900 mb-2">28 Juli 2025</p>
              <p className="text-gray-700 mb-4">
                Tanggal 17 Agustus merupakan hari yang penting bagi rakyat Indonesia dimana merupakan hari kemerdekaan yang diwarnai dengan kemeriahan dan banyaknya perlombaan.
              </p>
              <Link
                href="/berita/hari-kemerdekaan"
                className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Baca Selengkapnya
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="mb-12 relative z-10 bg-white bg-opacity-80 p-6 rounded max-w-3xl mx-auto">
        <h2 className="text-2xl text-center text-green-800 font-semibold mb-4">Tentang Website</h2>
        <p className="text-gray-800 text-center">
          KLK KALTENG NEWS adalah portal informasi PT. Mulia Agro Permai, anak perusahaan dari PT. KLK yang bergerak di bidang perkebunan kelapa sawit.
        </p>
      </section>

      {/* Kontak */}
      <section id="kontak" className="mb-12 relative z-10 bg-white bg-opacity-80 p-6 rounded max-w-3xl mx-auto">
        <h2 className="text-2xl text-green-800 font-semibold mb-4">Hubungi Kami</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="border p-2 w-full rounded text-green-800"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded text-green-800"
            required
          />
          <textarea
            placeholder="Pesan"
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            className="border p-2 w-full rounded h-24 text-green-800"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Kirim
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t pt-6 text-center text-gray-500 text-sm relative z-10">
        &copy; {new Date().getFullYear()} KLK KALTENG NEWS – PT. Mulia Agro Permai. All rights reserved.
      </footer>
    </div>
  );
}
