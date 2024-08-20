import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../untils/db";

export async function POST(req: any) {
  const data = await req.json();
  // console.log(data)
  const promisePool = mysqlPool.promise();
  await promisePool.query("INSERT INTO type_cars set ?", [data]);
  return NextResponse.json({ massage: "Successfully" }, { status: 200 });
}

export async function GET() {
  const promisePool = mysqlPool.promise();
  const [row] = await promisePool.query("SELECT * FROM type_cars");
  return NextResponse.json(row)
}
