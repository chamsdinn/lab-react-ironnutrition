import React from 'react'
import { Divider, Input } from 'antd';

const Search = ({searchFood, setSearchFood}) => {
   
   
    const handleSearch = (event) => {
        setSearchFood(event.target.value)
    }
    
    return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchFood} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search