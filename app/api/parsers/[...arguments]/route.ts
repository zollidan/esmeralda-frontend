import { NextRequest, NextResponse } from 'next/server'

export async function POST(
	req: NextRequest,
	{ params }: { params: Promise<{ arguments: string[] }> }
) {
	const [parser, date] = (await params).arguments

	try {
		if (parser === 'marafon') {
			const response = await fetch(
				'https://api.aaf-bet.ru/api/parser/marafon',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			const data = await response.json()
			console.log(data)

			return NextResponse.json({ message: `${parser} начал работу!` })
		}

		if (parser === 'soccerway') {
			const response = await fetch(
				`https://api.aaf-bet.ru/api/parser/soccerway_old?date=${date}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			const data = await response.json()
			console.log(data)

			return NextResponse.json({ message: `${parser} начал работу!` })
		}
	} catch (error) {
		console.log('PARSERS_ERROR', error)
		return NextResponse.json(
			{ message: 'Что-то пошло не так!' },
			{ status: 500 }
		)
	}
}
