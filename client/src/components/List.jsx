import React from 'react';
import ListElement from './ListElement.jsx';

const List = (props) => {
  return (
    <div>
      {props.studentlist.map((student, key) => {
        return (
          <ListElement student={student} key={key}/>
        )
      })}
    </div>
  )
}


export default List