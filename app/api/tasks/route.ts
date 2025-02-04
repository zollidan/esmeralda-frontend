import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const response = await fetch('https://api.aaf-bet.ru/api/tasks/all')
		const tasks = await response.json()
		return NextResponse.json(tasks)
	} catch (error) {
		console.error('TASKS_ERROR', error)
		return NextResponse.json(
			{ message: 'Что-то пошло не так!' },
			{ status: 500 }
		)
	}
}
