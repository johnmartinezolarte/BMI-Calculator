const tag=parameter=>document.querySelector(parameter);
const weight=tag('#weight');
const height=tag('#height');
const btnCalculate=tag('.calculate');
const btnRestart=tag('.restart');
const resultBmi=tag('.quantitative_result');
const resultCondition=tag('.qualitative_result');
const resultRecommendation=tag('.recommendation');

let bmi, weightNormalMin, weightNormalMax;

btnCalculate.addEventListener('click', ()=>{(weight.value&&height.value)?calculateBmi():location.reload()});

btnRestart.addEventListener('click', refresh);

function refresh(){
    location.reload();
}
function calculateBmi(){
    bmi=(weight.value/height.value**2).toFixed(1);
    weightNormalMin=(18.5*height.value**2).toFixed(1);
    weightNormalMax=(24.9*height.value**2).toFixed(1);
    resultBmi.innerHTML=bmi;
    resultRecommendation.innerHTML=`For this height, a weight range of ${weightNormalMin}–${weightNormalMax} kg is a normal BMI.`;
    calculateConditionColor();
}
function calculateConditionColor(){
    if(bmi<18.5){
        resultCondition.innerHTML='Under Weight';
        resultBmi.style.background='#00bfff';
        resultCondition.style.color='#00bfff';
    }else if(bmi>=18.5 && bmi<=24.9){
        resultCondition.innerHTML='Normal';
        resultBmi.style.background='#32cd32';
        resultCondition.style.color='#32cd32';
    }else if(bmi>=25 && bmi<=29.9){
        resultCondition.innerHTML='Over Weight';
        resultBmi.style.background='#ffa500';
        resultCondition.style.color='#ffa500';
    }else if(bmi>=30 && bmi<=34.9){
        resultCondition.innerHTML='Obese';
        resultBmi.style.background='#ff6347';
        resultCondition.style.color='#ff6347';
    }else{
        resultCondition.innerHTML='Extremely Obese';
        resultBmi.style.background='#ba0c0c';
        resultCondition.style.color='#ba0c0c';
        resultBmi.style.color='#ffffff';
    }
}