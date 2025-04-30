import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const response = await fetch('https://flower.aaf-bet.ru/api/tasks')
		const data = await response.json()
		const tasks = Object.values(data)

		return NextResponse.json(tasks)
	} catch (error) {
		console.error('TASKS ERROR', error)
		return NextResponse.json(
			{ message: 'Что-то пошло не так!' },
			{ status: 500 }
		)
	}
}
