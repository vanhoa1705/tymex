import App from './App'
import ReactDOM from 'react-dom/client'
import './libs/font-awesome'
import './index.css'

function startApp() {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<App />)
}

startApp()
