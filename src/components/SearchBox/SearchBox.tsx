import "./SearchBox.css"

interface SearchBoxProps {
    onInputChange: (inputValue: string) => void;
}

const SearchBox = ({onInputChange}: SearchBoxProps) => {
    return (
        <input onChange ={(e)=>{
            onInputChange(e.target.value)}} 
            className="search" type="seach" 
            placeholder="Search Pokémons"></input>
    )
}

export default SearchBox