import Link from 'next/link'
import React from 'react'

export default function LeftAside() {
  return (
    <aside className="col-3">
        <ul className="nav flex-column">
            <li className=" bg-info m-1 mt-1 mb-1 nav-item">
                <Link className="nav-link text-white active" href="/student"> Student - App Router</Link>
            </li>
            <li className=" bg-info m-1 mt-1 mb-1 nav-item">
                <Link className="nav-link text-white active" href="/teacher">Teacher - App Router</Link>
            </li>
           
            
        </ul>

    </aside>
  )
}
