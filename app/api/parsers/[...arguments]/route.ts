import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ arguments: string[] }> }
) {
  const [parser, start_date, end_date] = (await params).arguments;

  try {
    if (parser === "soccerway1") {
      const response = await fetch(
        `https://api.aaf-bet.ru/api/run/soccerway1?date_start=${start_date}&date_end=${end_date}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return NextResponse.json({ message: `${parser} начал работу!` });
    }
    if (parser === "soccerway2") {
      const response = await fetch(
        `https://api.aaf-bet.ru/api/run/soccerway2?start_date=${start_date}&end_date=${end_date}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return NextResponse.json({ message: `${parser} начал работу!` });
    }
  } catch (error) {
    console.log("PARSERS_ERROR", error);
    return NextResponse.json(
      { message: "Что-то пошло не так!" },
      { status: 500 }
    );
  }
}
