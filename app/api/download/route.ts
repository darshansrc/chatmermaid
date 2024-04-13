import { convert } from "convert-svg-to-png";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    console.log("here");
    const { svgBuffer } = await request.json();
    console.log("SVG Buffer:", svgBuffer);

    const pngBuffer = await convert(Buffer.from(svgBuffer, "binary"), {
      width: 400,
      height: 300,
    });

    return NextResponse.json({ pngBuffer }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
