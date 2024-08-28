import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";

export async function POST(req: any) {
  const { uemail, upwd } = await req.json();
  console.log('Email =>',uemail);
  console.log('Password',upwd);
  const promisePool = await mysqlPool.promise();

  const [rows] = await promisePool.query(
    "SELECT * FROM users U JOIN roles R ON R.rid = U.rid WHERE uemail = ? AND upwd = ?",
    [uemail, upwd]
  );
  if (rows) {
    return NextResponse.json(rows[0], { status: 200 });
  }

  // if (rows.length === 0) {
  //   return NextResponse.json({ message: "User not found" }, { status: 404 });
  // }

  // const user = rows[0];

  // // สมมติว่าคุณเข้ารหัสรหัสผ่านและต้องการเปรียบเทียบมัน:
  // // const isMatch = await bcrypt.compare(password, user.password);

  // if (user.password === upwd) {
  //   // เปลี่ยนเป็น `isMatch` ถ้าคุณใช้ bcrypt
  //   return NextResponse.json(user, { status: 200 });
  // } else {
  //   return NextResponse.json(
  //     { message: "Invalid credentials" },
  //     { status: 401 }
  //   );
  // }
}