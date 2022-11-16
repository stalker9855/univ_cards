const btn = document.querySelector('.btn');
const userText = document.getElementById('userText');
const computerText = document.getElementById('computerText');
const cardsImg = [document.getElementById('userCardImg'), document.getElementById('computerCardImg')];
const cards = document.querySelectorAll('.card');
class Card{
    constructor(name, point, source){
        this.name = name;
        this.point = point;
        this.source = source;
    }
}
const arrayCards = [
    new Card("Six", 6, "img/6.jpg"), 
    new Card("Seven", 7, "img/7.jpg"), 
    new Card("Eight", 8, "img/8.jpg"),
    new Card("Nine", 9, "img/9.jpg"),
    new Card("Ten", 10, "img/10.jpg"), 
    new Card("Vallet", 2, "img/vallet.jpg"), 
    new Card("Queen", 3, "img/queen.jpg"),
    new Card("King", 4, "img/king.jpg"),
    new Card("Ace", 11,"img/ace.jpg")];

    let userScore = 0;
    let computerScore = 0;
    let count = 0;
    let flag = false;
    let flip_flag = false;
    var userName_ = prompt("Enter you name: ", "User");
    if(userName_ == null || userName_ == ""){
        userName_ = "User";
        userText.innerHTML = userName_ + ": " + userScore;
    }
    else{
        userText.innerHTML = userName_ + ": " + userScore;
        
    }
const roll = () => Math.floor(9 * Math.random()); 
function Reset(){
    userScore = 0;
    computerScore = 0;
    count = 0;
    userText.innerHTML = userName_ + ": " + 0;
    computerText.innerHTML = "Computer: " + 0;
    flag = false;
}
function Flip()
{
    cards.forEach(element => {
        element.classList.toggle('is-flipped'); 
    });
}
console.log(flip_flag);
btn.addEventListener('click', () =>
{
        flip_flag = !flip_flag;
        Flip();
        if(flip_flag)
        {
            count++;
            let userRoll = roll();
            let computerRoll = roll();
            userScore += arrayCards[userRoll].point;
            computerScore += arrayCards[computerRoll].point;
            setTimeout(() => {userText.innerHTML =  userName_ + ": " + userScore;
                            computerText.innerHTML = "Computer: " + computerScore;}, 480);
            if(count == 3) flag = true;
                
                    cardsImg[0].src = arrayCards[userRoll].source;
                    cardsImg[1].src = arrayCards[computerRoll].source;
             
            setTimeout(()=> { if(flag){
                if(userScore > computerScore){
                    alert('You win!! Congratulations!');
                }
                else if(computerScore > userScore){
                    alert('You lose.. Maybe next time :)');
                }
                else if(computerScore == userScore){
                    alert('Draw!');
                }
                Reset();
            }}, 1010);
        }
});
