import { NextResponse } from 'next/server';
 
export async function GET() {
  const res = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data: [] })
    }, 100)
  });
  const data = await res;
 
  return NextResponse.json({ data });
}