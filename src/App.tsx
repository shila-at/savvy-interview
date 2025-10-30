import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ListView } from './container/list'
import { ListProvider } from './providers'

function App() {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <ListProvider>
          <ListView />
        </ListProvider>
      </BrowserRouter>
    </>
  )
}

export default App
