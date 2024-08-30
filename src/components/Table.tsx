

const Table = ({columns} : {columns:{header: string, accessor: string, className?: string}[]}) => {
    return (
        <table className="w-full mt-4">
            <thead>
                <tr className="text-left text-gray-500 text-sm">
                    {columns.map((col)=>(
                        <th key={col.accessor}>{col.header}</th>
                    ))}
                </tr>
            </thead>
        </table>
    );
}

export default Table;