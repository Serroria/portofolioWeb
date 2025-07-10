import React from 'react'

const Contact= () =>{
  return (
    <section className='p-5 mb-5'>
    <div className='gap-10'>
      <h1>Contact</h1>
      <form>
        <label>Name:
          <input type="text"  required  /> 
        </label> <br/>
         <label>Email:
          <input type="text" required placeholder='write your email'/>
        </label><br/>
         <label>Text:
          <input type="textarea" placeholder="Test" />
        </label><br/>
        <input type="submit"></input>
        
      </form>
      </div>
      </section>

  )
}

export default Contact