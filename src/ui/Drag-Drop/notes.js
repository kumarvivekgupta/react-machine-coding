

import React, { useEffect, useState } from 'react'
import Note from './note';
import { createRef, useRef } from "react";

const Notes = () => {
    const [input, setInput] = useState('');
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: 'note1',
        },
        {
            id: 2,
            title: 'note2',
        },
    ]);

    const noteRefs = useRef([]);


    const addNote = () => {
        setNotes([...notes, { id: notes.length + 1, title: input, position: determineNewPosition() }]);
        setInput('');
    }

    const determineNewPosition = (e) => {
        const maxX = window.innerWidth - 250;
        const maxY = window.innerHeight - 250;
        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY)
        }
    }
    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        const updatedNotes = notes.map((note, i) => {
            const savedNote = savedNotes.find((n) => n.id === note.id);
            if (savedNote) {
                return { ...note, position: savedNote.position };
            } else {
                const position = determineNewPosition();
                return { ...note, position: position };
            }
        });
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }, []);

    const handleDragStart = (note, e) => {
        const { id } = note;
        const noteRef = noteRefs.current[id - 1].current;
        const rect = noteRef.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const startPos = note.position;

        const handleDragMove = (e) => {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            noteRef.style.left = `${x}px`;
            noteRef.style.top = `${y}px`;
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleDragMove);
            document.removeEventListener("mouseup", handleMouseUp);

            const finalRect = noteRef.getBoundingClientRect();
            const newPosition = { x: finalRect.left, y: finalRect.top };

            if (checkForOverlap(id)) {
                // check for overlap
                noteRef.style.left = `${startPos.x}px`;
                noteRef.style.top = `${startPos.y}px`;
            } else {
                updateNotePosition(id, newPosition);
            }

        }


        document.addEventListener("mousemove", handleDragMove);
        document.addEventListener("mouseup", handleMouseUp);
    }

    const checkForOverlap = (id) => {
        const currentNoteRef = noteRefs.current[id - 1].current;
        const currentRect = currentNoteRef.getBoundingClientRect();

        return notes.some((note) => {
            if (note.id === id) return false;

            const otherNoteRef = noteRefs.current[note.id - 1].current;
            const otherRect = otherNoteRef.getBoundingClientRect();

            const overlap = !(
                currentRect.right < otherRect.left ||
                currentRect.left > otherRect.right ||
                currentRect.bottom < otherRect.top ||
                currentRect.top > otherRect.bottom
            );

            return overlap;
        });
    };
    const updateNotePosition = (id, newPosition) => {
        const updatedNotes = notes.map((note) =>
            note.id === id ? { ...note, position: newPosition } : note
        );
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    };


    return (
        <div>

            <input onChange={(e)=>setInput(e.target.value)} value={input} /> <button onClick={addNote}>Add Note</button>

            {notes.map((note, i) => <Note ref={noteRefs?.current[i] ? noteRefs.current[i] : noteRefs.current[i] = createRef()}
                key={note.id} title={note.title}
                initialPos={note.position} onMouseDown={(e) => handleDragStart(note, e)}
            />)}



        </div>
    )
}

export default Notes;