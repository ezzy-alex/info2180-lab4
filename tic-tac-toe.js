/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

/*----- app's state (variables) -----*/

let board;
let turn = 'X';
let win;

/*----- cached element references -----*/

// Adds 'square' class to each div with id = 'board'.

  
var grid = document.getElementById("board").children;
	for(var i = 0; i < grid.length; i++) {
  	grid[i].classList.add("square");
    
  }

const squares = Array.from(document.querySelectorAll('#board div'));

// give id attribute new-game to button element

var x = document.getElementsByClassName("btn")[0];
x.id = 'new-game';

var y = document.getElementById('status');

var z = document.getElementsByClassName('square');

var	a = document.querySelectorAll('.square')[0];
var	b = document.querySelectorAll('.square')[1];
var	c = document.querySelectorAll('.square')[2];
var	d = document.querySelectorAll('.square')[3];
var	e = document.querySelectorAll('.square')[4];
var	f = document.querySelectorAll('.square')[5];
var	g = document.querySelectorAll('.square')[6];
var	h = document.querySelectorAll('.square')[7];
var	i = document.querySelectorAll('.square')[8];


/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
var messages = document.querySelector('#status');
document.getElementById('new-game').addEventListener('click', init);

a.addEventListener('mouseover', ahover);
a.addEventListener("mouseout", anoHover);

b.addEventListener('mouseover', bhover);
b.addEventListener("mouseout", bnoHover);

c.addEventListener('mouseover', chover);
c.addEventListener("mouseout", cnoHover);

d.addEventListener('mouseover', dhover);
d.addEventListener("mouseout", dnoHover);

e.addEventListener('mouseover', ehover);
e.addEventListener("mouseout", enoHover);

f.addEventListener('mouseover', fhover);
f.addEventListener("mouseout", fnoHover);

g.addEventListener('mouseover', ghover);
g.addEventListener("mouseout", gnoHover);

h.addEventListener('mouseover', hhover);
h.addEventListener("mouseout", hnoHover);

i.addEventListener('mouseover', ihover);
i.addEventListener("mouseout", inoHover);



/*----- functions -----*/


function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        
       // return winner ? winner : board.includes('') ? null : 'T';
        
        if (winner){
        	return winner;
        }else if(board.includes('')){
        	return null;
        }else{
        	return ('T');
        }
       
};

function ahover(){  
  a.classList.add('hover');		    
}

function anoHover(){  
  a.classList.remove('hover');     			    
}

function bhover(){  
  b.classList.add('hover');		    
}

function bnoHover(){  
  b.classList.remove('hover');  			    
}

function chover(){  
  c.classList.add('hover');		    
}

function cnoHover(){  
  c.classList.remove('hover'); 			    
}

function dhover(){  
  d.classList.add('hover');		    
}

function dnoHover(){  
  d.classList.remove('hover'); 			    
}

function ehover(){  
  e.classList.add('hover');		    
}

function enoHover(){  
  e.classList.remove('hover');			    
}

function fhover(){  
  f.classList.add('hover');		    
}

function fnoHover(){  
  f.classList.remove('hover');		    
}

function ghover(){  
  g.classList.add('hover');		    
}

function gnoHover(){  
  g.classList.remove('hover'); 			    
}

function hhover(){  
  h.classList.add('hover');		    
}

function hnoHover(){  
  h.classList.remove('hover');			    
}

function ihover(){  
  i.classList.add('hover');		    
}

function inoHover(){  
  i.classList.remove('hover');   			    
}

function handleTurn() {

		// get index of the first square that is clicked.
    
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    

    if (grid[idx].textContent !== ''){
    	return;
    } else{
    	board[idx] = turn;
      	if (turn == 'X'){
    			grid[idx].classList.remove('O');
    			grid[idx].classList.add('X');          
    			turn = 'O';
   			} else{
    				grid[idx].classList.remove('X');
    				grid[idx].classList.add('O');
    				turn = 'X';
    			}
    	}

    win = getWinner();
    render();
};



function init() {
	
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    
    render();
};

function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
 
    squares[index].textContent = mark;
  
    });
    
    if (win == 'T'){
    	y.classList.remove('you-won');
    	messages.textContent = `That's a tie!`;
    }else if(win){
    	y.classList.add('you-won');
    	messages.textContent = `Congratulations! ${win} is the winner!`;
      init();
    } else{
    	y.classList.remove('you-won');
    	messages.textContent = `Move your mouse over a square and click to play an X or an O.`;
    }
    
    
};

init();