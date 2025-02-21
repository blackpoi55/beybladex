import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto text-center py-10">
        <h1 className="text-4xl font-bold">🔥 Beyblade X Tournament</h1>
        <p className="text-gray-600 mt-4">จัดการแข่งขัน สุ่มแมตช์ และคำนวณคะแนนอัตโนมัติ</p>
      </main>
    </div>
  );
}
