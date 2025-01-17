const ParserPage = ({ params }: { params: { parser: string } }) => {
    const parser = params.parser

    return (
        <div className="px-6">
            {parser}
        </div>
    )
}

export default ParserPage