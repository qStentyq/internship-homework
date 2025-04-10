

export default function Greeting({name = ''}: {name?: string}) {
  return (
    <>
      {name ? 
        <h1>Hello {name}</h1> : 
        <h1>Hello Guest</h1>}
    </>
  )
}

/*<div className='guest_menu'>Guest 
          <input type="text" placeholder="Enter your name " value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
          <button onClick={() => setName(inputVal)}>Login</button>
      
        </div>*/
