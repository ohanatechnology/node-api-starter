import React from 'react'

    const Yachts = ({ yachts }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {yachts.map((yacht) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{yacht.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{yacht.length}</h6>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Yachts