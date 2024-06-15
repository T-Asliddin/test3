import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
import './index.css'


const Index = () => {
    let {id} = useParams()
    const [user,setuser]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/users").then(res=>{
            setuser(res.data)
        })
    },[])

    console.log(user);

  return (
    <>
    <div className="container">
    {user.map(item=>{
        console.log(item.id);
       if (item.id===id) {
        return(<div className='box'>
            <h1>{item.name}</h1>
            <h2>{item.email}</h2>
            <h3>{item.number}</h3>
        </div>)
        
       }
    })}
    </div>
    </>
  )
}

export default Index