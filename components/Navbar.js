import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Beyblade X Tournament</h1>
        <ul className="flex space-x-4">
          <li><Link href="/">🏠 หน้าแรก</Link></li>
          <li><Link href="/members">👥 สมาชิก</Link></li>
          <li><Link href="/tournament">⚔️ การแข่งขัน</Link></li>
          <li><Link href="/leaderboard">🏆 คะแนน</Link></li>
        </ul>
      </div>
    </nav>
  );
}
