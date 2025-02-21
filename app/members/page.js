"use client"
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function Members() {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState("");
  const [beyblade, setBeyblade] = useState("");

  // โหลดรายชื่อสมาชิก
  useEffect(() => {
    fetch("/api/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  // เพิ่มสมาชิก
  const addMember = async () => {
    const res = await fetch("/api/members", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, beyblade }),
    });
    const newMember = await res.json();
    setMembers([...members, newMember]);
    setName("");
    setBeyblade("");
  };

  // ลบสมาชิก
  const deleteMember = async (id) => {
    await fetch("/api/members", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setMembers(members.filter((member) => member.id !== id));
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold">👥 สมาชิก</h1>

        {/* ฟอร์มเพิ่มสมาชิก */}
        <div className="mt-4">
          <input
            className="border p-2 mr-2"
            type="text"
            placeholder="ชื่อสมาชิก"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border p-2 mr-2"
            type="text"
            placeholder="Beyblade"
            value={beyblade}
            onChange={(e) => setBeyblade(e.target.value)}
          />
          <button className="bg-blue-500 text-white p-2" onClick={addMember}>
            ➕ เพิ่มสมาชิก
          </button>
        </div>

        {/* รายชื่อสมาชิก */}
        <ul className="mt-4">
          {members.map((member) => (
            <li key={member.id} className="flex justify-between p-2 border-b">
              <span>
                {member.name} - 🌀 {member.beyblade} - ⭐ {member.points} คะแนน
              </span>
              <button
                className="bg-red-500 text-white p-1"
                onClick={() => deleteMember(member.id)}
              >
                ❌ ลบ
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
