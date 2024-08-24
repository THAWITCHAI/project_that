import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";

export async function GET(req: any) {
  const promisePool = mysqlPool.promise();
  const [row] = await promisePool.query("SELECT * FROM users U JOIN roles R ON U.rid = R.rid");
  return NextResponse.json(row);
}
export async function POST(req: any) {
  const data = await req.json();
  //   console.log(data);
  const promisePool = mysqlPool.promise();
  await promisePool.query("INSERT INTO users set ?", [data]);
  return NextResponse.json({ massage: "Add Successfully" }, { status: 200 });
}
export async function DELETE(req: any) {
  const data = await req.json();
  //   console.log(data);
  const promisePool = mysqlPool.promise();
  await promisePool.query("DELETE FROM users WHERE ?", [data]);
  return NextResponse.json({ massage: "Add Successfully" }, { status: 200 });
}
