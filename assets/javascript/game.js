

    var crystalValue1 = '';
    var crystalValue2 = '';
    var crystalValue3 = '';
    var crystalValue4 = '';
    var targetNumber;
    var score = '';
    var winCount = 0;
    var lossCount = 0;

$(document).ready(function() {

    winCount = 0;
        $('#wins').text("WINS: " + winCount);

    lossCount = 0;
        $('#losses').text("LOSSES: " + lossCount);

    crystalValue1 = Math.floor(Math.random() * 12) + 1;
    crystalValue2 = Math.floor(Math.random() * 12) + 1;
    crystalValue3 = Math.floor(Math.random() * 12) + 1;
    crystalValue4 = Math.floor(Math.random() * 12) + 1;
            

    function startGame() {

        score = 0;
        $('#score').text(score);
 
        targetNumber = Math.floor(Math.random() * 102) + 19;

        $('#targetNumber').text(targetNumber);
    
        $('.col-lg-6').on('click', '#emerald', function() {  
            $('#score').text(score += crystalValue1);
            checkScore();
        });

        $('.col-lg-6').on('click', '#ruby', function() { 
            $('#score').text(score += crystalValue2);
            checkScore();
        }); 

        $('.col-lg-6').on('click', '#citrine', function() {
            $('#score').text(score += crystalValue3);
            checkScore();
        });

        $('.col-lg-6').on('click', '#sapphire', function() {    
            $('#score').text(score += crystalValue4);
            checkScore();
        });
        
    }

    function checkScore() {

        if (score === targetNumber) {
            winCount ++;
            $('#wins').text("WINS: " + winCount);
            startGame();
        };
        if (score > targetNumber) {
            lossCount ++;
            $('#losses').text("LOSSES: " + lossCount);
            startGame();
        };

    }
    startGame();    

});