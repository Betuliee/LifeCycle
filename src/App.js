import { useState } from "react";
import Sayac from "./components/ClassComponents";
import Counter from "./components/FunctionComponent";
import CustomButton from "./components/CustomButton/CustomButton";
import ChildrenButton from "./components/ChildrenButton/ChildrenButton";
import Column from "./components/Column/Column";
import UseRef from "./pages/TodosPage";
import TodosPage from "./pages/TodosPage";

function App() {
  const [componentType, setComponentType] = useState('TodosPage');
  return (
    <div>
      {/* {componentType==='Class' ? (
      <Sayac/> 
      ) : componentType==='Function' ? (
      <Counter/>
      ) : (<div>Seçim yapilmadi</div>)} */}
      <Column style={{gap: "20px"}}>

        <CustomButton buttonTitle={'Class component'} onClick={()=> setComponentType('Class')}/>
        <CustomButton buttonTitle={'Fonksiyon component'} onClick={()=> setComponentType('Function')}/>

        <CustomButton buttonTitle={'Todos Sayfasina Geç'} onClick={() => setComponentType('TodosPage')}/>
      </Column>
      {componentType==='Class' && <Sayac/>}
      {componentType==='Function' && <Counter/>}
      {componentType==='TodosPage' && <TodosPage/>}
      {componentType===null && <div>Seçim yapilmadi</div>}

     {/* <Counter/> */}
    </div>
  );
}

export default App;
