import React, { Component } from 'react';

class GameBoard extends Component {

  componentDidMount() {
    var lastClicked;
    var grid = clickableGrid(10,10,function(el,row,col,i){
        console.log("You clicked on element:",el);
        console.log("You clicked on row:",row);
        console.log("You clicked on col:",col);
        console.log("You clicked on item #:",i);

        el.className='clicked';
        if (lastClicked) lastClicked.className='';
        lastClicked = el;
    });
    document.getElementById('board').appendChild(grid);

    function clickableGrid( rows, cols, callback ){
        var i=0;
        var grid = document.createElement('table');
        grid.className = 'grid';
        for (var r=1;r<=rows;++r){
            var tr = grid.appendChild(document.createElement('tr'));
            for (var c=1;c<=cols;++c){
                var cell = tr.appendChild(document.createElement('td'));
                cell.innerHTML = ++i;
                cell.addEventListener('click',(function(el,r,c,i){
                    return function(){
                        callback(el,r,c,i);
                    }
                })(cell,r,c,i),false);
            }
        }
        return grid;
    }
  }

  render() {
    return(
      <div className="row">
        <div className="col-12">name</div>
        <div className="col">
          <div id="board"></div>
        </div>
      </div>
    );
  }
}


export default GameBoard;
