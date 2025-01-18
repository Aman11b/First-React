
import { createRoot } from 'react-dom/client'
import './index.css'

function App(){
  return(
    <>
      <h1>Hello there</h1>
      <p>This is my first react app</p>
    </>
  )
}
createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
