import React from 'react'
import PersonList from './PersonList'

function NameList() {
    const names = ['balaji','ravi','nirmal','baby','balaji']
    const nameList = names.map((name,index) => <h2 key={index}>{index}-{name}</h2>)
    
    const persons = [
      {
        id : 1,
        name : 'balaji',
        skill : 'Java'
      },
      {
        id : 2,
        name : 'ravi',
        skill : 'C'
      },
      {
        id : 3,
        name : 'baby',
        skill : 'Cooking'
      }
    ]
    // const personList = persons.map(args => <PersonList key={args.id} person = {args}/>)
    const personList = persons.map(person =>(
      <h2>
            I am {person.id}. I am {person.name}. I Know {person.skill}
      </h2>
    ))
    return(
          <div>
            {personList}
            {nameList}
          </div>
    )
}

export default NameList