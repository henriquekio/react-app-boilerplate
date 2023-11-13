import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import routes from './routes.ts'

const router = createBrowserRouter([{ path: routes.HOME, element: <Home /> }])

export default router
