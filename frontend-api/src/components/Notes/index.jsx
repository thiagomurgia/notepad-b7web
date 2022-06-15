import { useEffect, useState } from "react"
import axios from "axios";
import {BsFillTrashFill, BsFillPencilFill, BsFillPlusCircleFill } from "react-icons/bs";

import "./styles.css"

export function Notes(){

  const [notes, setNotes] = useState([]);

  const [inputValue, setInputValue] = useState("")
  const [color, setColor] = useState("#B5EAEA")

  const [selectedNote, setSelectecNote] = useState("")
  const [editButton, setEditButton] = useState(false)

  async function getNotes(){
    const response = await axios.get(process.env.REACT_APP_API_URL)
    setNotes(response.data)
  }

  async function createNote(){
    const response = await axios.post(`${process.env.REACT_APP_API_URL}`, {note: inputValue, color:color })
    setInputValue("")
    getNotes();
  }

  async function deleteNote(note){

    if(window.confirm("Tem certeza que deseja deletar a nota?") === true){
      const response = await axios.delete(`${process.env.REACT_APP_API_URL}${note.id}`)
      getNotes();
    }
    getNotes()
  }

  async function handleEditButtonClick(note){
    setSelectecNote(note)
    setEditButton("aquiiiii true",true)
  }
  

  async function editNote(){
    const response = await axios.put(`${process.env.REACT_APP_API_URL}${selectedNote.id}`, {
      id: selectedNote.id,
      note: inputValue,
      color: color
    });
    window.alert("Editado com sucesso!")
    setInputValue("")
    getNotes()
  }


  useEffect(()=>{
    getNotes();
  },[])

  return(
    <>
      <div className="container">
        <div className="fields">
          <select className="list" style={{background:`${color}`}}
          onChange={(e)=> setColor(e.currentTarget.value || "#B5EAEA")}
        >
          <option value="#B5EAEA">Selecione a prioridade</option>
          <option value="#B5EAEA" style={{background:"#B5EAEA" }}>Prioridade baixa</option>
          <option value="#F6AE99" style={{background:"#F6AE99" }}>Prioridade média</option>
          <option value="#B97A95" style={{background:"#B97A95" }}>Prioridade alta</option>
        </select>
        <input type="text"
        placeholder="Digite sua nota"
        value={inputValue}
        onChange={(event)=> setInputValue(event.target.value)}
        />
        <button
        onClick={setEditButton? selectedNote ? editNote : createNote : handleEditButtonClick}
        ><BsFillPlusCircleFill/></button>
        </div>
        <div>
        
        </div>
        <div className="notes">
          {notes.map((note) =>
          <div key={note.id}>
            <div className="note-description"
              style={{background: `${note.color}`}}
            >{note.note}</div>
            <div className="note-button"
            style={{background: "#bbb"}}>
            <p
              onClick={()=> handleEditButtonClick(note)}
            ><BsFillPencilFill className="icons"/></p>
            <p onClick={()=> deleteNote(note)}>
            <BsFillTrashFill className="icons"/>
            </p>
            </div>
          </div>
          )}
        </div>
      </div>
    </>
  )
}