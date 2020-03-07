import React, { Component } from 'react';

class OponentGameBoard extends Component {

  componentDidMount() {
    var lastClicked;
    var itemSelected = [1,2,22,32];
    var grid = clickableGrid(10,10,function(el,row,col,i){
        //console.log("You clicked on element:",el);
        //console.log("You clicked on row:",row);
        //console.log("You clicked on col:",col);
        //console.log("You clicked on item #:",i);
        let hit = false;

        el.className='clicked';
        if (lastClicked) lastClicked.className='';
        lastClicked = el;

        function checkItem(item){
          if(item === i){
            hit = true;
          }

          if(hit === false){
            el.style.backgroundColor = "#BCD7E8";
          }else{
            el.style.backgroundColor = "#EB3328";
          }
        }

        let call = itemSelected.find(checkItem);

    });
    document.getElementById('board-2').appendChild(grid);

    function clickableGrid( rows, cols, callback ){
        var i=0;
        var grid = document.createElement('table');
        grid.className = 'grid';
        for (var r=1;r<=rows;++r){
            var tr = grid.appendChild(document.createElement('tr'));
            for (var c=1;c<=cols;++c){
                var cell = tr.appendChild(document.createElement('td'));
                //cell.innerHTML = ++i;
                cell.value = ++i;
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

        <div className="col">
          <p>Oponente <span class="badge badge-danger">Offline</span></p>
          <div id="board-2"></div>
        </div>

    );
  }
}


export default OponentGameBoard;
