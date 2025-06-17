export const getStudents = async ()=>{
    const response = await fetch('http://127.0.0.1:8000', {
        method: 'GET'
      })
      const data = await response.json()
      return data
} 