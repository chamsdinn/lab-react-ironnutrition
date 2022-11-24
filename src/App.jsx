import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import { Row, Divider, Button } from 'antd';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';
function App() {
  const [allFoods, setallFoods] = useState(foods)
  const [searchFood, setSearchFood] = useState("")
  const removeFood = (name) => {
    const remainingFoods = allFoods.filter((food) => food.name !== name)
    setallFoods(remainingFoods)
  }
  return (
    <div className="App">
      <Search searchFood={searchFood} setSearchFood={setSearchFood} />
      {/* Display Add Food component here */}
      <AddFoodForm setFood={setallFoods} />


      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>


      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {allFoods.filter(food => food.name.includes(searchFood)).map((food) => {
          return (
            <FoodBox key={food.name} food={food} removeFood={removeFood} />
          )
        })}
      </Row>
    </div>
  );
}

export default App;
