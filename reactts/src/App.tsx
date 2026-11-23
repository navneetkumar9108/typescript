import './App.css'
import { Card } from './components/Card.tsx'
import { ChaiCard } from './components/ChaiCard.tsx'
import ChaiList from './components/ChaiList.tsx'
import { Counter } from './components/Counter.tsx'
import { OrderForm } from './components/OrderForm.tsx'
import type { Chai } from './types.ts'

const menu: Chai[] = [
  {id: 1, name:"Masala",price:25},
  {id: 2, name:"Ginger",price:50},
  {id: 3, name:"Lemon",price:60},
]

function App() {

  return (
    <>
      <section id="center"> 
        <h1>Vite  + React</h1>
        {/* <ChaiCard name="Navneet" price="5000" /> */}
        <ChaiCard name="Navneet" price={5000} />
        <ChaiCard name="iPhone" price={58000} />
      </section>
      <section>
        <Counter/>
      </section>
      <section>
        <ChaiList items={menu}/>
      </section>
      <section>
<OrderForm  onSubmit={(order)=>{
  console.log("placed",order.name,order.cups);
}}/>   
 </section>

 <section>
  <Card title='Chai aur TypeScript' footer={<button>Order Now</button>}/>
 </section>
    </>
  )
}

export default App
