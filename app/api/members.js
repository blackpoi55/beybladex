import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    // ดึงรายชื่อสมาชิกทั้งหมด
    const members = await prisma.member.findMany();
    return res.status(200).json(members);
  }

  if (req.method === "POST") {
    // เพิ่มสมาชิกใหม่
    const { name, beyblade } = req.body;
    const newMember = await prisma.member.create({
      data: { name, beyblade },
    });
    return res.status(201).json(newMember);
  }

  if (req.method === "DELETE") {
    // ลบสมาชิก
    const { id } = req.body;
    await prisma.member.delete({ where: { id } });
    return res.status(200).json({ message: "Member deleted" });
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
