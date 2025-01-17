'use client'

import { use } from "react"

const ParserPage = ({ params }: { params: Promise<{ parser: string }> }) => {
    const { parser } = use(params)

    const launchParser = async (parser: string) => {
        const response = await fetch(`/api/parsers/${parser}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ parser }),
        })

        const data = await response.json()
        console.log(data)
    }

    if (parser === 'marafon') {
        return (
            <div className="space-y-4 px-6">
                <h1 className="font-bold text-3xl">Marafon</h1>
                <button
                    type='button'
                    onClick={() => launchParser(parser)}
                    className="px-3 py-2 text-white rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors"
                >
                    Запуск
                </button>
            </div>
        )
    }

    if (parser === 'soccerway') {
        return (
            <div className="px-6">
                {parser}
            </div>
        )
    }
}

export default ParserPage