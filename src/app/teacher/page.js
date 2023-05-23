import React from 'react'


async function getTeacherData(){
  const res = await fetch('https://gorest.co.in/public/v2/users')
  return res.json()
}

export default async function Page() {
  const data = await getTeacherData()
  console.log(data)

  

  return (
    <section className="col-6">
     <h1>Teacher Page</h1>
        {
          data.map((cv,idx,arr)=>{
            return <li key={idx}>{cv.name}{cv.email}</li>

          })
        }
      </section>
  )
}
