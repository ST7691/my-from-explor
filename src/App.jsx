
import './App.css'
import ControlledFild from './componets/ControlledFild/ControlledFild'
import FamilyTree from './componets/FamailyTree/FamilyTree'
import FormAction from './componets/FromAction/FormAction'
import Hookform from './componets/Hookform/Hookform'
import Productmanagement from './componets/Productmangment/Productmanagement'
import Uncontrolled from './componets/Uncntrolled/Uncontrolled'
import Simple from './Simple'

function App() {

  return (
    <>
      
      <h1> React form Explore </h1>
      {/* simplw form */}
      <Simple></Simple>
      {/* action ar bitore formda diye */}
      <FormAction></FormAction>
      {/* controlled form */}
      <ControlledFild></ControlledFild>
      {/* un control from */}
      <Uncontrolled></Uncontrolled>
      {/* creat hook and use */}
      <Hookform></Hookform>
      {/* product add table */}
      <Productmanagement></Productmanagement>
      {/* context use */}
      <FamilyTree></FamilyTree>
    </>
  )
}

export default App
