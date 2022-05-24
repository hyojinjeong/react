import React from "react";
import { useParams } from 'react-router-dom';

const MemberDetail = ({memberList}) => {
  const params = useParams();

 return(
    <section>
      <h1>Member Detail</h1>
      name : {memberList[params.memberId].title} <br />
      phone : {memberList[params.memberId].phone} <br />
      email : {memberList[params.memberId].email} <br />
      address : {memberList[params.memberId].address} <br />
      region : {memberList[params.memberId].region} <br />
      country : {memberList[params.memberId].country} <br />
      currency : {memberList[params.memberId].currency} <br />
      date : {memberList[params.memberId].date} <br />
      company : {memberList[params.memberId].company} <br />
      city : {memberList[params.memberId].city} <br />                                                      
    </section>
 )
}

export default MemberDetail;