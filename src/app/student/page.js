import React from 'react'

async function getStudentData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    return res.json()
}





export default async function Page() {
    const data= await getStudentData()
    console.log(data)
  return (
    <section className="col-6">
        <h1>Student Page</h1>

        <ul>
            {
                data.map((cv,idx,arr)=>{
                    return <li key={idx}>{cv.name} {cv.email}</li>
                })

                
            }
        </ul>
        </section>
  )
}
