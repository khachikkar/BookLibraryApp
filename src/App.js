import { useEffect, useState } from "react";
import "./App.css";
import Listitem from "./components/Listitem";

function App() {
  const mdata = [
    {
      id: 1,
      name: "book one",
    },
    {
      id: 2,
      name: "alice in wonderland",
    },
    {
      id: 3,
      name: "my fav book",
    },
  ];

  const [val, setVal] = useState("");
  const [data, setData] = useState(mdata);
  const [fulldata, setFulldata] = useState(data)



 // part of search books 
  useEffect(() => {
    
    if (val === "") {
      setData(fulldata)
      console.log(fulldata, ">>>>>")
      }else{

      const filtered = data.filter((item) => item.name.includes(val));
      setData(filtered);
      }
      
  }, [val]);


// part of add books
  const [bookval, setBookval] = useState("")
  const handleadd = ()=>{
    const newbook = {
      id: Date.now(),
      name: bookval
    }

// data.push(newbook)
setData([...data, newbook])
fulldata.push(newbook) // i add this for show data after search empaty value
    setFulldata(data)
    setBookval("")
  }



// part of hide books 
const [check, setCkeck] = useState(false)
const handlehide = (e)=>{
  setCkeck(e.target.checked)
  if(e.target.checked){
    setData([])
  }else{
    setData(fulldata)
  }
}


//part of delate books
const handledelate = (id)=>{
  console.log(id)
  setData(data.filter((item)=> item.id !== id))
}

//return code
  return (
    <div className="App">
      <section className="header">
        <h2>Library</h2>
        <h4>Books for students</h4>
        <input
          onChange={(e) => setVal(e.target.value)}
          className="search"
          type="text"
          placeholder="Search a book"
          name="search"
          value={val}
        ></input>
      </section>

      <section className="listandAdd">
        <h2>Books to read</h2>

        {data.map((item) => (
          <Listitem onDelate={()=>handledelate(item.id)} key={item.id} data={item} />
        ))}
      </section>
      <section className="addbooks">
        
      <div className="hide">
        <input onChange={handlehide}  checked={check} type="checkbox"></input>
        <span>hide all books</span>
        </div>

       <div className="add">
       <input onChange={e=>setBookval(e.target.value)}  type="text" placeholder="add a book" value={bookval}></input>
       <button  onClick={handleadd}>add</button>
       </div>
      </section>
    </div>
  );
}

export default App;
