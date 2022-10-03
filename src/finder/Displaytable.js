import React from "react";

const Displaytable = ({data, repository}) => {
  return (
    <>
      <table className="ui celled table">


        <thead>
          <tr>
            <th>Name</th>
            <th>Avatar</th>
            <th>Location</th>
            <th>Bio</th>
            <th>Repositories</th>
          </tr>
        </thead>



        <tbody>
          <tr>
            <td>{data.name}</td>
            <td>{!data.avatar_url? " " : (
              <img className="ui small circular image" src={data.avatar_url} alt={data.avatar_url}/>
            )}</td>
            <td>{data.location}</td>
            <td>{data.bio}</td>
            <td>{repository.map(repo => (
              <div className="ui relaxed divided list" key={repo.name}>
                <div className="item">
                  <i className="large github midde aligned icon"></i>
                    <div className="content">
                      <a className="header" href={repo.html_url} target=" _blank ">
                        {repo.name}
                      </a>
                    </div>
                </div>

              </div>
            )) }</td>
          </tr>
        </tbody>


      </table>
    </>
  );
};

export default Displaytable;
