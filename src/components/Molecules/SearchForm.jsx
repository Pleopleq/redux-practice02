import React from 'react'
import SearchInput from '../Atoms/SearchInput'

const SearchForm = () => {
    return (
        <form>
            <SearchInput></SearchInput>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SearchForm