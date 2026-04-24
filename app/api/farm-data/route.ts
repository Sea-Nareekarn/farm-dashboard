import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.RAILWAY_API_BASE_URL;

  if (!baseUrl) {
    return NextResponse.json({ error: 'Configuration missing' }, { status: 500 });
  }

  try {
    const response = await fetch(`${baseUrl}/api/Farm/transactions`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Railway API responded with error' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Fetch Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}