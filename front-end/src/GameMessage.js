import React from 'react';

/*export default ({ gameId, name, message}) =>
<div className="row mt-5">
  <div className="col-12">
    <strong>Game ID:</strong> {gameId}
  </div>
  <div className="col-12 col-md-6 mt-2">
    <p>Jogador: <strong>{name}</strong></p>
  </div>
  <div className="col-12 col-md-6 mt-2">
    <p>Jogador: <strong>{message}</strong></p>
  </div>
</div>
;*/

export default ({ name, message }) =>
  <div className="row text-center">
    <div className="col-12">
      <strong>{name}</strong> <em>{message}</em>
    </div>
  </div>
