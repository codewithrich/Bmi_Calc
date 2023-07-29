
    
calbut.addEventListener('click', () => {
    let height= document.getElementById('height').value;
    let weight= document.getElementById('weight').value;
    let resultSection = document.getElementById('resultSection');
    let bmi = (Math.round(weight / (height*height) *703))

        if (bmi <= 15){
        resultSection.textContent=`your BMI is ${bmi} and Your normal`}
        else{
        resultSection.textContent=`your BMI is ${bmi} and Your obese`}
        
    });

    