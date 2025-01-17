import { NextRequest, NextResponse } from 'next/server'

export async function POST(
	req: NextRequest,
	{ params }: { params: Promise<{ parser: string }> }
) {
	const { parser } = await params

	try {
		if (parser === 'marafon') {
			await fetch('https://api.aaf-bet.ru/api/parser/marafon')

			return NextResponse.json('Парсер запущен!', { status: 200 })
		}
	} catch (error) {
		console.log('PARSER_ERROR', error)
		return NextResponse.json(
			{ message: 'Что-то пошло не так!' },
			{ status: 500 }
		)
	}
}
