import React from 'react';
import { Link } from 'react-router-dom';

const Member = ({memberList}) => {

  return(
    <div>
      {memberList.map((member, idx) => 
        <div key={member.id} style={{margin: '10px', border: "1px solid black", width: "250px"}}>
          name : {member.title} <br />
          phone : {member.phone} <br />
          email : {member.email} <br />
          detail: <Link to={`/member/${idx}`}>memberDetail</Link>
        </div>)}
    </div>
  )
}

export default Member;