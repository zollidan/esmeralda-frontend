'use client'

import { use, useState } from "react"

import toast from "react-hot-toast"

import { IoClose } from "react-icons/io5"

const ParserPage = ({ params }: { params: Promise<{ parser: string }> }) => {
    const { parser } = use(params)

    const [date, setDate] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleOnModal = () => setIsOpen(!isOpen)

    const launchParser = async (parser: string) => {
        const response = await fetch(`/api/parsers/${parser}/${date}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ parser, date }),
        })
        const data = await response.json()
        const { message } = data
        toast.success(message, {})
        handleOnModal()
    }

    const dateIsDate = (parser: string, date: string) => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/

        if (dateRegex.test(date)) {
            launchParser(parser)
        } else {
            toast.error(`Неправильный формат даты!`, {})
        }
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
            <div className="space-y-4 px-6">
                <h1 className="font-bold text-3xl">Soccerway</h1>
                <button
                    type='button'
                    onClick={handleOnModal}
                    className="px-3 py-2 text-white rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors"
                >
                    Запуск
                </button>

                {isOpen &&
                    <div className="flex justify-center items-center absolute -top-4 left-0 w-full h-screen bg-black/60 backdrop-blur-sm z-50">
                        <div className="flex flex-col items-center gap-y-4 p-3 rounded-xl bg-white">
                            <div className="flex justify-end w-full">
                                <button
                                    type='button'
                                    onClick={handleOnModal}
                                    className="p-2 hover:text-black rounded-lg hover:bg-gray-300/60 transition-colors"
                                >
                                    <IoClose className="size-5" />
                                </button>
                            </div>
                            <h1 className="font-medium text-xl">Выберите дату</h1>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="px-3 py-2 min-w-96 h-10 border rounded-lg shadow-sm"
                            />
                            <button
                                type='button'
                                onClick={() => {
                                    if (!date) {
                                        toast.error(`Выберите дату!`, {})
                                    } else {
                                        dateIsDate(parser, date)
                                    }
                                }}
                                className="px-3 py-2 w-full text-white rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors"
                            >
                                Запуск
                            </button>
                        </div>
                    </div>
                }

            </div>
        )
    }
}

export default ParserPage