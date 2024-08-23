import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";

export async function POST(req: any) {
  const data = await req.json();
//   console.log(data);
  const promisePool = mysqlPool.promise();
  await promisePool.query("INSERT INTO users set ?", [data]);
  return NextResponse.json({ massage: "Add Successfully" }, { status: 200 });
}
