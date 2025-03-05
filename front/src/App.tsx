import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RetreatManagementPage } from './admin/pages/RetreatManagementPage'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: '"Rubik", sans-serif',
  },
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={theme}>
        <RetreatManagementPage />
      </ThemeProvider>
    </>
  )
}

export default App
