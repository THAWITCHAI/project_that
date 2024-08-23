import { NextResponse } from "next/server";
import { mysqlPool } from "../../../../../untils/db";

export async function DELETE(req: any) {
  const {cid} = await req.json();
  // console.log(cid)
  const promisePool = mysqlPool.promise();
  await promisePool.query("DELETE FROM cars WHERE cid = ?",cid);
  return NextResponse.json({ massage: "Delete Successfully" }, { status: 200 });
}