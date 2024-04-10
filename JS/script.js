const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');
const steps = document.querySelectorAll('.step');
const submitButton = document.querySelector('.btn-submit');
const form_steps = document.querySelectorAll('.form-step');

let active = 1;
let submitted = false;

window.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName('trueDiabetes')[0].style.display = 'none';
});

const updateProgress = () => {
    steps.forEach((step, index) => {
        if (index == (active - 1)) {
            step.classList.add('active');
            form_steps[index].classList.add('active');
        } else {
            step.classList.remove('active');
            form_steps[index].classList.remove('active');
        }
        
    });

    if (active === steps.length) {
        nextButton.disabled = true;
        submitButton.disabled = true;
    } else if (active === 1) {
        prevButton.disabled = true;
        submitButton.disabled = false;
    } else if (active === 2 && submitted === true) {
        prevButton.disabled = true;
        submitButton.disabled = false;
    }else {
        prevButton.disabled = false;
        nextButton.disabled = false;
        submitButton.disabled = true;
    }

}


nextButton.addEventListener('click', () => {
    active++;

    if (active > steps.length) {
        active = steps.length;
    }
    updateProgress();
    console.log(fullName);
});

prevButton.addEventListener('click', () => {
    active--;

    if (active < 1) {
        active = 1;
    }

    updateProgress();
});

function calculateBMI(weight, height) {
    // Convert height from cm to meters
    var heightMeters = height / 100;
    
    // Calculate BMI
    var bmi = weight / (heightMeters * heightMeters);
    
    return bmi;
}

function getValue(name) {
    var data = document.getElementsByName(name);
    for (var i = 0; i < data.length; i++) {
        if (data[i].checked) {
            return data[i].value;
        }
    }
}

const bp = document.getElementById('bp');
const height = document.getElementsByName('height')[0];
const weight = document.getElementsByName('weight')[0];
var bpParag = document.getElementById('bpParag');
const weightParag = document.getElementById('weightParag');
var fuBp = document.getElementById('fuBp');
var fuWeight = document.getElementById('fuWeight');

bp.addEventListener('blur', function(event) {
    var bpValue = event.target.value.trim(); // Remove leading/trailing spaces
    var systolic, diastolic;

    // Check if input is not empty
    if (bpValue !== '' && bpValue.includes('/')) {
        var bpParts = bpValue.split('/');
        systolic = parseInt(bpParts[0]);
        diastolic = parseInt(bpParts[1]);

        if (!isNaN(systolic) && !isNaN(diastolic)) {
            if (systolic < 120 && diastolic < 80) {
                bpParag.innerText = "Normal";
                bpParag.style.display = 'block';
                bpParag.style.color = 'green';
                document.getElementById('bp2').innerText = bpValue + " mmHg | Normal";
            } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
                bpParag.innerText = "Elevated";
                bpParag.style.display = 'block';
                bpParag.style.color = 'orange';
                document.getElementById('bp2').innerText = bpValue + " mmHg | Elevated";
            } else if ((systolic >= 130 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)) {
                bpParag.innerText = "Stage 1 Hypertension";
                bpParag.style.display = 'block';
                bpParag.style.color = 'red';
                fuBp.style.display = 'block';
                document.getElementById('bp2').innerText = bpValue + " mmHg | Stage 1";
            } else {
                bpParag.innerText = "Stage 2 Hypertension";
                bpParag.style.display = 'block';
                bpParag.style.color = 'red';
                fuBp.style.display = 'block';
                document.getElementById('bp2').innerText = bpValue + " mmHg | Stage 2";
            }
        } else {
            // Invalid input, clear previous text
            bpParag.innerText = "";
            bpParag.style.display = 'none';
        }
    } else {
        // Empty input or incorrect format, clear previous text
        bpParag.innerText = "";
        bpParag.style.display = 'none';
    }
});


weight.addEventListener('blur', function(){
    var heightValue = height.value;
    document.getElementById('height').innerText = heightValue + " cm";

    var weightValue = weight.value;
    document.getElementById('weight2').innerText = weightValue + " kg";
    console.log(weightValue);

    // Check if both weight and height are valid numbers
    if (!isNaN(weightValue) && !isNaN(heightValue) && heightValue !== 0) {
        var bmi = calculateBMI(parseFloat(weightValue), parseFloat(heightValue));

        if (!isNaN(bmi)) {
            if (bmi < 18.5) {
                weightParag.innerText = "Underweight";
                weightParag.style.display = 'block';
                weightParag.style.color = 'orange';
                fuWeight.style.display = 'block';
                document.getElementById('weight2').innerText += " | Underweight";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                weightParag.innerText = "Normal";
                weightParag.style.display = 'block';
                weightParag.style.color = 'green';
                document.getElementById('weight2').innerText += " | Normal";
            } else if (bmi >= 25 && bmi <= 29.9) {
                weightParag.innerText = "Overweight";
                weightParag.style.display = 'block';
                weightParag.style.color = 'orange';
                fuWeight.style.display = 'block';
                document.getElementById('weight2').innerText += " | Overweight";
            } else {
                weightParag.innerText = "Obese";
                weightParag.style.display = 'block';
                weightParag.style.color = 'red';
                fuWeight.style.display = 'block';
                document.getElementById('weight2').innerText += " | Obese";
            }
        } else {
            weightParag.innerText = "";
            weightParag.style.display = 'none';
        }
    } else {
        weightParag.innerText = "";
        weightParag.style.display = 'none';
    }
});


let dizziness;
let legPain;
let uncomfortable;
let uncomfortable2;
let smoke;
let diabetes;
let diabetesType;
let headache;
let blurred;
let fatigue;
let tingling;
let cramping;
let piFeet;
let piCalves;
let piButtocks;
let piHip;
let piThigh;

var fullName = document.getElementById('fName');
fullName.addEventListener('input', () => {
    // Get the current value of fullName when it changes
    var fullNameD = fullName.value;
    console.log(fullNameD);
    document.getElementById('fullName').innerText = fullNameD;
});

var age2 = document.getElementById('pAge');
age2.addEventListener('input', () => {
    // Get the current value of age when it changes
    var ageD = age2.value// Corrected line
    console.log(ageD);
    console.log("hello");
    document.getElementById('tAge').innerText = ageD;
});

var genderInputs = document.querySelectorAll('input[name="gender"]');

genderInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        var genderValue = this.value;
        console.log("Selected gender:", genderValue);
        document.getElementById('gender').innerText = genderValue;
    });
});


var phone = document.getElementById('telNum');
phone.addEventListener('input', () => {
    // Get the current value of phone when it changes
    var phoneD = phone.value;
    document.getElementById('phone').innerText = phoneD;
    console.log(phoneD);
});

var fullAdd = "";
var strAddD = "";
var cityD = "";
var zipD = "";

var strAdd = document.getElementById('sttAdd');
strAdd.addEventListener('blur', () => {
    // Get the current value of street address when it changes
    var strAddD = strAdd.value;
    fullAdd = fullAdd + strAddD + " ";
    console.log(fullAdd);
});

var city = document.getElementById('cityAdd');
city.addEventListener('blur', () => {
    // Get the current value of city when it changes
    var cityD = city.value;
    fullAdd = fullAdd + cityD + ", ";
    console.log(fullAdd);
});

// var state = document.getElementById('stateAdd');
// state.addEventListener('input', () => {
//     // Get the current value of state when it changes
//     var stateD = state.value;
//     fullAdd = fullAdd + stateD + " ";
//     console.log(fullAdd);
// });

var zip = document.getElementById('zipAdd');
zip.addEventListener('blur', () => {
    // Get the current value of zip when it changes
    var zipD = zip.value;
    console.log(zipD);
    fullAdd = fullAdd + strAddD + cityD + zipD;
    document.getElementById('address').innerText = fullAdd;
    console.log(fullAdd);
});

var medForHype = document.getElementById('medForHype');
medForHype.addEventListener('blur', () => {
    // Get the current value of medForHype when it changes
    var medForHypeD = medForHype.value;
    console.log(medForHypeD);
    document.getElementById('bp2').innerText += " | \nMedicines: " + medForHypeD;
});

const diabetesTrue = document.getElementsByName('diabetes');



diabetesTrue.forEach((diabetes) => {
    diabetes.addEventListener('click', () => {
        if (diabetes.value === 'Yes') {
            document.getElementsByClassName('trueDiabetes')[0].style.display = 'block';
        } else {
            document.getElementsByClassName('trueDiabetes')[0].style.display = 'none';
        }
    });
});


submitButton.addEventListener('click', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    submitted = true;

    dizziness = getValue('dizziness');
    legPain = getValue('legPain');
    uncomfortable = getValue('uncomfortable');
    uncomfortable2 = getValue('uncomfortable2');
    smoke = getValue('smoke');
    diabetes = getValue('diabetes');
    diabetesType = getValue('diabetesType');
    dizziness = getValue('dizziness');
    headache = getValue('headache');
    blurred = getValue('blurred');
    legPain = getValue('legPain');
    uncomfortable = getValue('uncomfortable');
    uncomfortable2 = getValue('uncomfortable2');
    fatigue = getValue('fatigue');
    tingling = getValue('tingling');
    cramping = getValue('cramping');
    piFeet = getValue('piFeet');
    piCalves = getValue('piCalves');
    piButtocks = getValue('piButtocks');
    piHip = getValue('piHip');
    piThigh = getValue('piThigh');

    localStorage.setItem('dizziness', dizziness);
    localStorage.setItem('legPain', legPain);
    localStorage.setItem('uncomfortable', uncomfortable);
    localStorage.setItem('uncomfortable2', uncomfortable2);
    localStorage.setItem('smoke', smoke);
    localStorage.setItem('diabetes', diabetes);
    localStorage.setItem('diabetesType', diabetesType);
    localStorage.setItem('dizziness', dizziness);
    localStorage.setItem('headache', headache);
    localStorage.setItem('blurred', blurred);
    localStorage.setItem('legPain', legPain);
    localStorage.setItem('uncomfortable', uncomfortable);
    localStorage.setItem('uncomfortable2', uncomfortable2);
    localStorage.setItem('fatigue', fatigue);
    localStorage.setItem('tingling', tingling);
    localStorage.setItem('cramping', cramping);
    localStorage.setItem('piFeet', piFeet);
    localStorage.setItem('piCalves', piCalves);
    localStorage.setItem('piButtocks', piButtocks);
    localStorage.setItem('piHip', piHip);
    localStorage.setItem('piThigh', piThigh);


    // if (diabetes == 'yes') {
    //     document.getElementsByClassName('trueDiabetes')[0].style.display = 'block';
    // };

    // if (dizziness == 'yes' || legPain == 'yes' || uncomfortable == 'yes' || uncomfortable2 == 'yes' || smoke == 'yes' || diabetes == 'yes') {
    //     document.getElementById('diagnosisParag').innerText = "Based on your responses and risk factors, it is possible that you have Peripheral Artery Disease (PAD). It is recommended to consult with a healthcare provider for further evaluation and testing."
    // }

    // if (dizziness === 'yes' && legPain === 'yes' && uncomfortable === 'yes') {
    //     document.getElementById('planParag').innerHTML = "If applicable, continue the patient's current antihypertensive regimen, otherwise adding a medication to manage her dizziness and headaches. <br> <br> Exercise: Supervised exercise programs can improve claudication symptoms and overall functional capacity";
        
    //     document.getElementById('intParag').innerHTML = "Prescribe medication to manage dizziness, leg pain, and leg discomfort. Possible options include antiplatelet agents, such as aspirin or clopidogrel, to reduce the risk of blood clots. <br> <br> Additionally, medications to improve blood flow, such as cilostazol or pentoxifylline, may be considered. It is important to consult with a healthcare provider for appropriate medication selection and dosage.";
        
    //     document.getElementById('evalParag').innerHTML = "\
    //         • Schedule a follow-up appointment with your healthcare provider within the next two weeks.<br><br>\
    //         • Monitor symptoms such as dizziness, leg pain, and discomfort.<br><br>\
    //         • Gradually increase physical activity and track your steps daily.<br><br>\
    //         • Continue taking prescribed medications as directed.<br><br>\
    //         • Provide feedback on the effectiveness of interventions and report any new symptoms.<br><br>\
    //     ";
    // }
    

    

    // document.getElementById('diabetesType').innerText = diabetesType;
    diabetesType = getValue('diabetesType');

    document.getElementById('dizziness').innerText = dizziness;
    document.getElementById('headache').innerText = headache;
    document.getElementById('legPain').innerText = legPain;
    document.getElementById('blurred').innerText = blurred;
    document.getElementById('legPain').innerText = legPain;
    document.getElementById('uncomfortable').innerText = uncomfortable;
    document.getElementById('fatigue2').innerText = fatigue;
    document.getElementById('tingling2').innerText = tingling;
    document.getElementById('cramping2').innerText = cramping;
    document.getElementById('piFeet2').innerText = piFeet;
    document.getElementById('piCalves2').innerText = piCalves;
    document.getElementById('piButtocks2').innerText = piButtocks;
    document.getElementById('piHip2').innerText = piHip;
    document.getElementById('piThigh2').innerText = piThigh;
    document.getElementById('uncomfortable2').innerText = uncomfortable2;
    document.getElementById('smoke2').innerText = smoke;
    document.getElementById('diabetes2').innerText = diabetes + " | " + diabetesType;

    diagnosis = document.getElementById('diagnosis').value;
    recommendations = document.getElementById('recommendations').value;
    intervention = document.getElementById('intervention').value;
    evaluation = document.getElementById('evaluation').value;

    if (diagnosis == '') {
        document.getElementById('diagnosisParag').innerText = "No Diagnosis yet. Please fill out the dianosis part on summary of assessment first";
    } else{
        document.getElementById('diagnosisParag').innerText = diagnosis;
    }

    if (recommendations == '') {
        document.getElementById('planParag').innerText = "No Recommendations yet. Please fill out the recommendations part on summary of assessment first";
    } else{
        document.getElementById('planParag').innerText = recommendations;
    }

    if (intervention == '') {
        document.getElementById('intParag').innerText = "No Intervention yet. Please fill out the intervention part on summary of assessment first";
    } else{
        document.getElementById('intParag').innerText = intervention;
    }

    if (evaluation == '') {
        document.getElementById('evalParag').innerText = "No Evaluation yet. Please fill out the evaluation part on summary of assessment first";
    } else{
        document.getElementById('evalParag').innerText = evaluation;
    }
    

    if (uncomfortable2 == 'Yes' || uncomfortable2 == 'No') {
        nextButton.dispatchEvent(new Event('click'));
    }

    document.getElementById('summaryParag').style.display = 'none';
    document.getElementById('teybol').style.display = 'block';
    document.getElementById('ncp').style.display = 'block';
    document.getElementsByClassName('secondPart')[0].style.display = 'flex';
    document.getElementsByClassName('secondPart')[1].style.display = 'flex';
    document.getElementsByClassName('secondPart')[2].style.display = 'flex';
    document.getElementsByClassName('secondPart')[3].style.display = 'flex';
});

