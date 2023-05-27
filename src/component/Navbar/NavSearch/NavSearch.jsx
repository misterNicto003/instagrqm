import React, { useState } from 'react'
import cls from "./navSearch.module.scss"

const NavSearch = ({classname}) => {

  const [search, setSearch] =useState("");

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const clearInput = () => {
    setSearch('')
  }
  return (
<form className={`${cls.NavSearch} ${classname || ""}`}>


  <input type='text' placeholder='Search...' onChange={handleChange} value={search}/> 
  {search && <span onClick={clearInput}>&times;</span> }
</form>
  )
}

export default NavSearch