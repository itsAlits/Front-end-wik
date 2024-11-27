"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white">DwiksMotors</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-indigo-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              />
            </svg>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/Login">
              <button className="px-6 py-2 text-sm font-medium text-white bg-transparent hover:bg-gray-700 rounded-lg transition">
                Masuk
              </button>
            </Link>
            <Link href="/Register">
              <button className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition">
                Daftar
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-16 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Temukan Motor Bekas{" "}
              <span className="text-indigo-500">Impian Anda</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl">
              Platform terpercaya untuk menemukan motor bekas berkualitas dengan harga terbaik. 
              Dilengkapi dengan sistem rekomendasi pintar untuk membantu Anda membuat keputusan yang tepat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/DaftarMotor">
                <button className="px-8 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition transform hover:scale-105">
                  Lihat Daftar Motor
                </button>
              </Link>
              <Link href="/rekomendasi">
                <button className="px-8 py-3 text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition transform hover:scale-105">
                  Dapatkan Rekomendasi
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="text-3xl font-bold text-indigo-500 mb-2">500+</div>
                <div className="text-gray-400">Motor Tersedia</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="text-3xl font-bold text-indigo-500 mb-2">50+</div>
                <div className="text-gray-400">Partner Dealer</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="text-3xl font-bold text-indigo-500 mb-2">1000+</div>
                <div className="text-gray-400">Pengguna Aktif</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="text-3xl font-bold text-indigo-500 mb-2">4.8</div>
                <div className="text-gray-400">Rating Pengguna</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Mengapa Memilih DwiksMotors?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kami menyediakan fitur-fitur terbaik untuk membantu Anda menemukan motor bekas yang sesuai dengan kebutuhan dan budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-6 rounded-xl"
            >
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sistem Rekomendasi Pintar</h3>
              <p className="text-gray-400">
                Dapatkan rekomendasi motor yang sesuai dengan preferensi dan budget Anda menggunakan teknologi AI.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-6 rounded-xl"
            >
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proses Cepat & Mudah</h3>
              <p className="text-gray-400">
                Temukan motor impian Anda dengan cepat melalui interface yang user-friendly dan proses yang sederhana.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-6 rounded-xl"
            >
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Terpercaya & Aman</h3>
              <p className="text-gray-400">
                Semua motor telah melalui proses verifikasi untuk memastikan kualitas dan keamanan transaksi Anda.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Butuh Bantuan?</h2>
          <p className="text-gray-400 mb-8">
            Tim kami siap membantu Anda 24/7
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <div className="bg-gray-800 p-6 rounded-xl flex-1">
              <h3 className="font-bold text-white">Email</h3>
              <p className="text-gray-400">support@DwiksMotors.id</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl flex-1">
              <h3 className="font-bold text-white">Telepon</h3>
              <p className="text-gray-400">0853-3351-5158</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl flex-1">
              <h3 className="font-bold text-white">Live Chat</h3>
              <p className="text-gray-400">Tersedia 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Testimoni Pengguna
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="avatar placeholder">
                  <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    SG
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-white">Suma Gunawan</h3>
                  <p className="text-gray-400">Bali</p>
                </div>
              </div>
              <p className="text-gray-400">
                "Sangat membantu dalam mencari motor bekas yang sesuai dengan budget. Prosesnya mudah dan cepat!"
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="avatar placeholder">
                  <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    AL
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-white">Alit Si Ganteng</h3>
                  <p className="text-gray-400">Bali</p>
                </div>
              </div>
              <p className="text-gray-400">
                "Rekomendasi yang diberikan sangat akurat. Saya menemukan motor impian saya dengan harga yang sesuai."
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="avatar placeholder">
                  <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    WP
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-white">Widia Pratama</h3>
                  <p className="text-gray-400">Bali</p>
                </div>
              </div>
              <p className="text-gray-400">
                "Platform yang sangat terpercaya. Semua motor bekas sudah diverifikasi dengan baik."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Pertanyaan Umum
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="font-bold text-white mb-2">Bagaimana cara mendaftar di DwiksMotors?</h3>
              <p className="text-gray-400">
                Klik tombol "Daftar Sekarang", isi formulir pendaftaran dengan data diri Anda, dan verifikasi email Anda. Setelah itu, Anda bisa langsung menggunakan layanan kami.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="font-bold text-white mb-2">Apakah semua motor bekas sudah diverifikasi?</h3>
              <p className="text-gray-400">
                Ya, setiap motor bekas yang terdaftar di platform kami telah melalui proses verifikasi untuk memastikan kualitas dan keaslian informasi.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="font-bold text-white mb-2">Bagaimana sistem rekomendasi bekerja?</h3>
              <p className="text-gray-400">
                Sistem kami menganalisis preferensi Anda seperti budget, merek, tipe motor, dan kondisi yang diinginkan untuk memberikan rekomendasi motor bekas yang paling sesuai.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-center">
        <div className="container mx-auto px-6">
          <p className="text-gray-400">
            2024 DwiksMotors. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="#" className="text-gray-400 hover:text-white">Tentang Kami</Link>
            <Link href="#" className="text-gray-400 hover:text-white">Syarat & Ketentuan</Link>
            <Link href="#" className="text-gray-400 hover:text-white">Kebijakan Privasi</Link>
            <Link href="#" className="text-gray-400 hover:text-white">Hubungi Kami</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
