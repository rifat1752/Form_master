
import './App.css'
import Form from './components/Form/Form'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
import StateForm from './components/Statefulform/StateForm'

function App() {

  const handleSignUpSubmit = data =>{
    console.log('sing up data',data)
  
}
const handleUpdateSubmit = data =>{
  console.log('Update data',data)

}


  return (
    <>
     
      <h1>Vite + React</h1>
      
      {/* <Form></Form> */}
      {/* <StateForm></StateForm> */}
      <ReuseableForm formTitle={"Sign UP"} handleSubmit={handleSignUpSubmit}></ReuseableForm>
      <ReuseableForm formTitle={"Profile Update"} buttonText='Updete' handleSubmit={handleUpdateSubmit}></ReuseableForm>

    </>
  )
}

export default App
