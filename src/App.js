import CalculateArea from "./components/CalculateArea"
import ButtonArea from "./components/ButtonArea"
import Footer from "./components/layout/Footer"
import { MainContext } from "./components/context"
import { useState } from "react"
function App() {
  const [value, setValue] = useState([])

  // data variable'ının içerisine kullanacağım context'leri yerleştiriyorum
  const data = {
    value,
    setValue,
  }

  return (
    // .jsx(.js)'ler arasında değer,fonksiyon,state vb. gibilerinin aktarımını yapabilmek için context oluşturuyorum(bu projede yalnızca state)
    <MainContext.Provider value={data}>
      <div className="App">
        <CalculateArea />
        <ButtonArea />
        <Footer />
      </div>
    </MainContext.Provider>
  )
}

export default App
