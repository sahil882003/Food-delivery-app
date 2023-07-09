import React from 'react'
import Card from '../Card';
import { useSelector } from 'react-redux';
function Home() {
  const cart=useSelector(state=> state.cart);
  const [search,updatesearch]=React.useState('');
  const [fooditems, setfooditems] = React.useState([]);
  const [categories, setcategories] = React.useState([]);
  function onchange(e)
  {
    e.preventDefault();
    updatesearch(e.target.value);
  }
  function handleclick(e)
  {
    e.preventDefault();
  }
  async function fetchdata() {
    var result = await fetch('http://localhost:5000/api/fetchfooddata', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    });
    result = await result.json();
    setfooditems(result[0]);
    setcategories(result[1]);
  }
  React.useEffect(() => {
    fetchdata();
  }, [])
  
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-interval='30' data-ride='carousel' style={{ 'height': '500px' }}>
        <div className="carousel-inner">
          <div className="carousel-caption d-md-block d-sm-block" style={{ zIndex: 10}}>
            <div className="d-flex justify-content-center" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" onChange={onchange} value={search} aria-label="Search" />
              {/* <button className="btn btn-outline-success text-white bg-success" onClick={handleclick} type="submit">Search</button> */}
            </div>
          </div>
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900x700/?burger" style={{ 'height': '500px', 'filter': 'brightness(30%)' }} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700/?cake" style={{ 'height': '500px', 'filter': 'brightness(30%)' }} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700/?salad" style={{ 'height': '500px', 'filter': 'brightness(30%)' }} className="d-block w-100" alt="..." />
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
      <div className='container'>
      
        {
          (categories !== []) ?
            categories.map((category) => {
              return (


                <div className='row mb-3'>
                  <div key={category._id} className='fs-3 m-3'>{category.CategoryName}</div>
                  <hr />
                  {

                    (fooditems !== []) ?
                      fooditems.filter((item) => { return ((item.categoryname === category.CategoryName) &&(item.name.toLowerCase().includes(search.toLowerCase())) ) }).map((filtereditem) => {
                        return (

                          <div id={filtereditem._id}  className='col-12 col-md-6 col-lg-3'>  <Card id={filtereditem._id} key={filtereditem._id} name={filtereditem.name} image={filtereditem.image} description={filtereditem.description} options={filtereditem.options} /></div>

                        )
                      }) :

                      <div key='Loading screen'>Loading..</div>

                  }
                </div>

              );
            }) :
            <h1 key="loading .screen">Loading...</h1>
        }
       
      </div>
    </div>
  )
}

export default Home;