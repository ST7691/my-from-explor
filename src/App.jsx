
import './App.css'
import ControlledFild from './componets/ControlledFild/ControlledFild'
import FormAction from './componets/FromAction/FormAction'
import Uncontrolled from './componets/Uncntrolled/Uncontrolled'
import Simple from './Simple'

function App() {

  return (
    <>
      
      <h1> React form Explore </h1>
      <Simple></Simple>
      <FormAction></FormAction>
      <ControlledFild></ControlledFild>
      <Uncontrolled></Uncontrolled>
    </>
  )
}

export default App
