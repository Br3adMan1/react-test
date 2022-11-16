import React,{ useState } from "react"
import "./SearchBar.css"
const animals=
[
"Dog",
"Cat",
"lizzard",
"bird",
"squirl"
]
const SearchBar=()=>
{
    const [searchValue,setSearchValue]=useState("the search value")
    const handleInputChange=(event)=>
    {
        setSearchValue(event.target.value)
    }
    const handleClear=()=>
    {
       setSearchValue("")
    }
    const shouldDisplayButton= searchValue.length>0
    const filteredAnimals=animals.filter((animal)=>
    {
        return animal.includes(searchValue)
    })
    return <div>
        <input type="text" value={searchValue} onChange={handleInputChange} />
        {shouldDisplayButton&&<button onClick={handleClear}>clear</button>}
        {filteredAnimals.map((animal)=>{
            return<li key={animal}>{animal}</li>
        })}
    </div>
}
export default SearchBar