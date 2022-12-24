import React, { useState, useEffect } from 'react';
import Support from './components/Support';
import ListCast from './components/ListCast';
import Modals from './components/Modals';
import Nav from './components/Nav';

function App() {
  const [cast, setCast ] = useState([]);
  let [memberInfo, setMemberInfo] = useState(null);

  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });
  
  // solution to wrapping problem
  function handleMembers(info) {
    setMemberInfo(info > Number(cast.length) - 1 ? cast[0] :
      info <  0 ? cast[Number(cast.length) - 1] : cast[info]);
  }

  return (
    <>
    <Nav cast={cast} onChoice={(info) => {setMemberInfo(info)}}/>
    <div className="container">
        <hgroup>
          <img src="images/group.svg" alt="Stargazers group"/>
          <h1>Meet the StarGazers</h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <ListCast cast={ cast } onChoice={ (info) => {setMemberInfo(info)}}/>
          { memberInfo &&
            <Modals member={memberInfo}
                    handleClose={() => {setMemberInfo(null)}}
                    handleMember={(info) => {handleMembers(info)}} />}
          <Support />
        </hgroup>
    </div>
    </>
  )
}
export default App
