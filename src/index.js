import App from './App'
import ReactDOM from 'react-dom/client'

function startApp() {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<App />)
}

startApp()
