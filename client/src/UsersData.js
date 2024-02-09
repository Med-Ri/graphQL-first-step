import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      name
      userName
      age
      nationality
    }
  }
`;

const UsersData = () => {
  const { data, loading , error } = useQuery(QUERY_ALL_USERS);

  if (loading) {
    return <h1> LOADING...  </h1>
  }

  if (error) {
    console.log('error', error)
  }


  return( 
    <div>
        <h1> List of users </h1>
        {
            data && data?.users?.map ((user , i) => {
                return (
                    <div key={i}>
                        <hr></hr>
                        <h1> {user?.name} </h1>
                        <h2> User_Name : {user?.userName} </h2>
                        <h2> Age: {user?.age} </h2>
                        <h2> Nationality : {user?.nationality} </h2>
                        <hr></hr>
                    </div>
                )
            })
        }
    </div>
  );
};

export default UsersData;
