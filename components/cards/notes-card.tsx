'use client';
import { useState,useEffect } from "react"
import { generateClient } from "aws-amplify/api";
import { createNote } from "@/utils/graphql/mutations";
import { currentAuthenticatedUser } from "@/utils/auth-helpers";

const client = generateClient();
export default function NotesCard({id, name, notes}:{id: string,name: string, notes}){
        const [newNote, setNewNote] = useState('');
        const [noteModal, setNoteModal] = useState(true);
        const timestamp = new Date()
        const month = ((timestamp.getMonth()+1) <= 10 ? "0"+(timestamp.getMonth()+1) : timestamp.getMonth()+1).toString()
        const day = (timestamp.getDate() <= 10 ? "0"+timestamp.getDate() : timestamp.getDate()).toString()
        const today = (timestamp.getFullYear()+"-"+month+"-"+day).toString();
        const [todaysDate, setTodaysDate] = useState(today);
        const [user, setUser] = useState(undefined);
        const [email, setEmail] = useState(undefined);
        function handleNoteSubmit(e){
            e.preventDefault();
            const currentUser = currentAuthenticatedUser().then((user) => {user});
            setUser(currentUser);
            setTodaysDate(today);
            console.log(todaysDate, newNote, user, id)
            const queryData = async () => {
                try {
                await client.graphql({
                    query: createNote.replaceAll("__typename", ""),
                    variables: {
                      input: {
                        date: todaysDate,
                        text: newNote,
                        referralsNotesId: id
                      },
                    },
                  });
                } catch (error) {
                    console.log('error', error);
            }; 
        }
        return queryData().then(()=>setNoteModal(!noteModal))
        }
        if (noteModal) return(
            <button className="flex justify-center items-center h-full align-middle bg-gray-400 text-white text-xs p-1 rounded-md" onClick={()=>setNoteModal(!noteModal)}>Notes</button>
       ); else return(
        <div className="absolute flex flex-col-reverse h-[400px] w-[310px] bg-white bg-opacity-75 rounded-xl text-xs p-1 top-0 z-90">
            <div className={`flex flex-row gap-2 justify-end p-2`}>
                <button className="relative bg-gray-400  rounded-xl text-white text-xs w-16 p-2" onClick={()=>setNoteModal(!noteModal)}>Cancel</button>
                <button className="relative bg-blue1 rounded-xl text-white text-xs w-16 p-2" onClick={handleNoteSubmit}>Save</button>
            </div>
            <textarea className="h-[300px] w-[300px] p-2 bg-white text-black text-lg" placeholder={'Enter a new Note'} onChange={e => setNewNote(e.target.value)}></textarea>
            <ol className={`flex flex-col`}>
                {notes.items.map((notes, index) => (
                <li key={index} className={`flex flex-row gap-2`}>
                <p>{notes.date} : </p>
                <p>{notes.text}</p>
            </li>
                ))}

                
            </ol>
            <hr className="border-pink border-[1.5px] w-1/2 mb-2 ml-1"/>
            <h3 className={`px-1 text-blue1 text-2xl`}>Notes</h3>
            <div className={`flex flex-row bg-blue1 w-full rounded-t-md h-10 items-center`}>
                <h2 className={`px-1 text-white text-lg uppercase`}>Name:</h2>
                <p className={`text-white text-sm px-1`}>{name}</p>
            </div>
        </div>
       )
    }