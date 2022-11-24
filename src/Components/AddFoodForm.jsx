import React, {useState} from 'react'
import { Divider, Input } from 'antd';
const AddFoodForm = ({setFood}) => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleSubmit =(event) => {
        event.preventDefault()

        setFood((currentState)=>{
            const copy = [...currentState]
            copy.push({name, image, calories, servings})
            return copy
        })
        setName("")
        setImage("")
        setCalories(0)
        setServings(0)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleImageChange = (event) => {
        setImage(event.target.value)
    }
    const handleCaloriesChange = (event) => {
        setCalories(parseInt(event.target.value))
    }
    const handleServingsChange = (event) => {
        setServings(parseInt(event.target.value))
    }
  return (
    <>
    <div>AddFoodForm</div>
    
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameChange} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageChange} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesChange} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsChange} />

      <button type="submit">Create</button>
    </form>
    </>
  )
}

export default AddFoodForm