import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import BookList from './components/BookList'
import CourseForThisSemester from './components/CourseForThisSemester'

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Header />
      <HomePage />
      
      <hr style={{ margin: '40px 0' }} />
      
      <BookList />
      <CourseForThisSemester />
    </div>
  )
}

export default App