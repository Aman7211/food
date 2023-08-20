import React,{useEffect, useState} from 'react'
import Navbar1 from '../components/Navbar1'
import Card from '../components/Card1'
import Footer from '../components/Footer'


export default function Home() {
  const [search, setsearch] = useState('');
const [foodcat, setfoodcat] = useState([]);
const [fooditem, setfooditem] = useState([]);
const apiUrl = process.env.REACT_APP_API_URL;

// const apiUrl = "http://localhost:4000/api/foodData" || "https://food-lecp.onrender.com/api/foodData";
const loadData = async ()=>{
  let response = await fetch(`https://${apiUrl}/api/foodData`,{
    method: "POST",
    headers: {
      'Content-Type' : 'application/json'
    }

  });
  response = await response.json();
  setfooditem(response[0]);
  setfoodcat(response[1]);
  // console.log(response[0],response[1]);
}

useEffect(()=>{
  loadData()
},[])


  return (
    <div>
     <div>  <Navbar1/> </div>
     <div>
    <div id="carouselExampleFade" className="carousel slide carousel-fade mt-1" data-bs-ride="carousel">
  <div className="carousel-inner" id='carousel'>
    
    <div className="carousel-item active">
      <img src={'/media/1.png'} className="d-block w-100 img-fluid" style={{filter: "brightness(70%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={'/media/3.png'} className="d-block w-100" style={{filter: "brightness(70%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={'/media/4.png'} className="d-block w-100" style={{filter: "brightness(70%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div  id='def'>
  <div className=" container form-inline justify-content-center ">
    <input className="container form-control mt-10 mr-sm-2 " id='abc' type="search" placeholder="Let Search the Delicious Food" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
    {/* <button className="btn btn-outline-success my-1 my-sm-2 text-light bg-success" type="submit">Search</button> */}
</div>
    </div>
</div>
    <div className='container'>
      {

  foodcat!== []? foodcat.map((data)=>{
    return(
    <div className='row'>
      <div key={data._id} className="fs-3 m-3" style={{"color": "#05361f", "fontWeight":"700", "fontSize":"x-larger", "textDecoration":"underline", "textDecorationColor":"#198753", "textDecorationStyle": "double"}}>
        {data.CategoryName}
        </div>
        {
          fooditem!== []? fooditem.filter((item)=>item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map(filterItems =>{
            return(
              <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                <Card fooditem={filterItems}
                  options={filterItems.options[0]}
               ></Card>
                </div>
            )
          }) : <div>No Such Data Found</div>}
          <hr  style={{"color": "#198753",
            "borderTop": "6px solid #198753"}}/>
          </div>  
          )
          })
        :""
        
}
    </div>
  <div><Footer/></div>
    </div>
  )
    }
