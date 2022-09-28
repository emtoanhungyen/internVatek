import React, { useRef, useState } from 'react'

type Props = {}

const Search = (props: Props) => {
    const [search, setSearch] = useState('');
    console.log(search);


    return (
        <div>
            <input
                className='border mt-[15px]'
                type="text"
                onChange={(event) => {
                    setSearch(event.target.value);
                }}
            />
        </div>
    )
}

export default Search