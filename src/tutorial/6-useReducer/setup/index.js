import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function


const reducer = (state,action) =>{

}

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello world'
}
const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName('')
    } else {
      showModal(true)
    }
  }
  return (
    <>
      {state.isModalOpen && <Modal />}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <button type='submit'>add</button>
      </form>
      {people.map((person) =>{
        return <div key={person.id}>
          <h4>{person.name}</h4>
        </div>
      })}
    </>
  )
}

export default Index
