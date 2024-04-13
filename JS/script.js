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
        submitButton.disabled = true;
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
var medType = document.getElementById('medType');
const weightParag = document.getElementById('weightParag');
var fuBp = document.getElementById('fuBp');
var fuBMI = document.getElementById('_dyExer');
var fuWeight = document.getElementById('fuWeight');
var dytMeds = document.getElementById('_dytMeds');
var medForHype = document.getElementById('medForHype');
let meds;
let exer;
const medsSelection = document.getElementsByClassName('medsSelection');

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
                dytMeds.style.display = 'none';
                fuBp.style.display = 'none';
                document.getElementById('bp2').innerText = bpValue + " mmHg";
                document.getElementById('bp2').innerHTML += " | Normal";
                medType.innerText = "";
                medForHypeD = "";
            } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
                bpParag.innerText = "Elevated";
                bpParag.style.display = 'block';
                bpParag.style.color = 'orange';
                dytMeds.style.display = 'none';
                fuBp.style.display = 'none';
                document.getElementById('bp2').innerText = bpValue + " mmHg";
                document.getElementById('bp2').innerHTML += " | Elevated";
                medType.innerText = "";
                medForHypeD = "";
            } else if ((systolic >= 130 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)) {
                bpParag.innerText = "Stage 1 Hypertension";
                bpParag.style.display = 'block';
                bpParag.style.color = 'red';
                dytMeds.style.display = 'flex';
                dytMeds.addEventListener('click', function() {
                    meds = getValue('meds');
                    if (meds === 'Yes') {
                        console.log('asdkhas');
                        fuBp.style.display = 'block';
                        medForHype.addEventListener('blur', function(event) {
                            var medFH = event.target.value.trim();
                            if (medFH.endsWith('pril')) {
                                console.log('hehehe');
                                medType.innerText = "ACE Inhibitor";
                                medType.style.display = 'block';
                                medType.style.color = 'green';
                            } else if (medFH.endsWith('pine')) {
                                medType.innerText = "ARB";
                                medType.style.display = 'block';
                                medType.style.color = 'green';
                            } else if (medFH.endsWith('tan')) {
                                medType.innerText = "Calcium Channel Blocker";
                                medType.style.display = 'block';
                                medType.style.color = 'green';
                            } else {
                                medType.innerText = "None";
                                medType.style.display = 'none';
                            }
                            
                        });
                    } else {
                        console.log('aaaaaa');
                        console.log(meds);
                        fuBp.style.display = 'none';
                    }
                });

                document.getElementById('bp2').innerText = bpValue + " mmHg";
                document.getElementById('bp2').innerText += " | Stage 1";
            } else {
                bpParag.innerText = "Stage 2 Hypertension";
                bpParag.style.display = 'block';
                bpParag.style.color = 'red';
                dytMeds.style.display = 'flex';
                dytMeds.addEventListener('click', function() {
                    meds = getValue('meds');
                    if (meds === 'Yes') {
                        console.log('asdkhas');
                        fuBp.style.display = 'block';
                        medForHype.addEventListener('blur', function(event) {
                            var medFH = event.target.value.trim();
                            if (medFH.endsWith('pril')) {
                                console.log('hehehe');
                                medType.innerText = "ACE Inhibitor";
                                medType.style.display = 'block';
                                medType.style.color = 'green';
                            } else if (medFH.endsWith('pine')) {
                                medType.innerText = "ARB";
                                medType.style.display = 'block';
                                medType.style.color = 'green';
                            } else if (medFH.endsWith('tan')) {
                                medType.innerText = "Calcium Channel Blocker";
                                medType.style.display = 'block';
                                medType.style.color = 'green';
                            } else {
                                medType.innerText = "None";
                                medType.style.display = 'none';
                            }
                            
                        });
                    } else {
                        console.log('aaaaaa');
                        console.log(meds);
                        fuBp.style.display = 'none';
                    }
                });
                document.getElementById('bp2').innerText = bpValue + " mmHg";
                document.getElementById('bp2').innerText += " | Stage 2";
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

let fuWeightV;
var dyExerV;
let fuw2 = document.getElementById('fuw2');

fuw2.addEventListener('blur', function() {
    fuWeightV = fuw2.value;
    console.log('ITO YUNG HINAHANAP MO');
});

var weightText = "";

weight.addEventListener('blur', function(){
    var heightValue = height.value;
    document.getElementById('height').innerText = heightValue + " cm";

    var weightValue = weight.value;
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
                fuw2.addEventListener('input', function() {
                    fuWeightV = fuw2.value;
                    weightText = weightValue + " kg\nUnderweight\nLifestyle:\n ";
                });
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                weightParag.innerText = "Normal";
                weightParag.style.display = 'flex';
                weightParag.style.color = 'green';
                fuBMI.style.display = 'none';
                fuWeight.style.display = 'none';
                weightText += "\nNormal";
            } else if (bmi >= 25 && bmi <= 29.9) {
                weightParag.innerText = "Overweight";
                weightParag.style.display = 'flex';
                weightParag.style.color = 'orange';
                fuBMI.style.display = 'flex';
                fuWeight.style.display = 'flex';
                document.getElementsByClassName('exerSelection')[0].addEventListener('click', function() {
                    exer = getValue('exer');
                    
                    console.log(exer);
                    console.log(fuWeightV);
                    if (exer === 'Yes') {
                        weightText = weightValue + " kg\nOverweight\nExercises: Yes\nLifestyle:\n "
                    } else {
                        weightText = weightValue + " kg\nOverweight\nExercises: No\nLifestyle:\n ";
                    }
                });
                // dyExerV = getValue('exer');
                // fuw2.addEventListener('blur', function() {
                //     fuWeightV = fuw2.value;
                // });
                // console.log(dyExerV);
                // console.log(fuWeightV);
                // if (dyExerV === 'Yes') {
                //     document.getElementById('weight2').innerText += "\nOverweight\nExercises: Yes\nLifestyle:\n " + fuWeightV;
                // } else {
                //     document.getElementById('weight2').innerText += "\nOverweight\nExercises: No\nLifestyle:\n " + fuWeightV;
                // }
            } else {
                weightParag.innerText = "Obese";
                weightParag.style.display = 'block';
                weightParag.style.color = 'red';
                fuBMI.style.display = 'flex';
                fuWeight.style.display = 'flex';
                fuWeightV = fuw2.value;
                dyExerV = getValue('exer');
                if (dyExerV === 'Yes') {
                    weightText = weightValue + " kg\nObese\nExercises: Yes\nLifestyle:\n ";
                } else {
                    weightText = weightValue + " kg\nObese\nExercises: No\nLifestyle:\n ";
                }
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
var fullNameD;
fullName.addEventListener('input', () => {
    // Get the current value of fullName when it changes
    fullNameD = fullName.value;
    console.log(fullNameD);
    
});

var age2 = document.getElementById('pAge');
var ageD;
age2.addEventListener('input', () => {
    // Get the current value of age when it changes
    ageD = age2.value// Corrected line
    console.log(ageD);
    console.log("hello");
    
});

var genderInputs = document.querySelectorAll('input[name="gender"]');

var genderValue;
genderInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        genderValue = this.value;
        console.log("Selected gender:", genderValue);
        
    });
});


var phone = document.getElementById('telNum');
var phoneD;
phone.addEventListener('input', () => {
    // Get the current value of phone when it changes
    phoneD = phone.value;
    document.getElementById('phone').innerText = phoneD;
    console.log(phoneD);
});

var fullAdd = "";
var strAddD = "";
var cityD = "";
var zipD = "";

var strAdd = document.getElementById('sttAdd');
var strAddD;
strAdd.addEventListener('blur', () => {
    // Get the current value of street address when it changes
    strAddD = strAdd.value;
    fullAdd = fullAdd + strAddD + " ";
    console.log(fullAdd);
});

var city = document.getElementById('cityAdd');
var cityD;
city.addEventListener('blur', () => {
    // Get the current value of city when it changes
    cityD = city.value;
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
var zipD;
zip.addEventListener('blur', () => {
    // Get the current value of zip when it changes
    zipD = zip.value;
    console.log(zipD);
    fullAdd = fullAdd + zipD;
    
    console.log(fullAdd);
});

var medForHype = document.getElementById('medForHype');
var medForHypeD = "";
medForHype.addEventListener('blur', () => {
    // Get the current value of medForHype when it changes
    medForHypeD = medForHype.value;
    console.log(medForHypeD);
    
});

const diabetesTrue = document.getElementsByName('diabetes');
const dcol = document.getElementsByClassName('dcol');
const dType = document.getElementById('dType');
const diabetesType2 = document.getElementsByClassName('diabetesType');
var t1Fu = document.getElementById('_t1Fu');
var t2Fu = document.getElementById('_t2Fu');
var dcolVal;

var counter = 0;

diabetesTrue.forEach((diabetes) => {
    diabetes.addEventListener('click', () => {
        if (diabetes.value === 'Yes') {
            document.getElementsByClassName('trueDiabetes')[0].style.display = 'flex';
            
            Array.from(diabetesType2).forEach((dcol) => {

                dcol.addEventListener('click', () => {
                    diabetesType = getValue('diabetesType');
                    console.log(diabetesType);
                    if (diabetesType === 'Type 1') {
                        document.getElementById('_t1Fu').style.display = 'flex';
                        document.getElementById('_t2Fu').style.display = 'none';
                        dcolVal = getValue('dt2')
                    } else if (diabetesType === 'Type 2') {
                        document.getElementById('_t2Fu').style.display = 'flex';
                        document.getElementById('_t1Fu').style.display = 'none';
                        dcolVal = getValue('dt3')
                    } else {
                        document.getElementById('_t1Fu').style.display = 'none';
                        document.getElementById('_t2Fu').style.display = 'none';
                        dcolVal = "";
                        console.log('No diabetes type selected');
                    }
                });
            });    

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
    document.getElementById('diabetes2').innerText = diabetes + " \n" + diabetesType + " \n" + dcolVal;
    
    document.getElementById('fullName').innerText = fullNameD;
    document.getElementById('tAge').innerText = ageD;
    document.getElementById('gender').innerText = genderValue;
    document.getElementById('address').innerText = fullAdd;
    document.getElementById('bp2').innerText += "\nMedicines:\n   - " + medForHypeD + "\n↳ " + medType.innerText;
    document.getElementById('weight2').innerText = weightText + fuWeightV;
    counter++;

    // diagnosis = document.getElementById('diagnosis').value;
    // recommendations = document.getElementById('recommendations').value;
    // intervention = document.getElementById('intervention').value;
    // evaluation = document.getElementById('evaluation').value;

    if (counter == 0) {
        document.getElementById('diagnosisParag').innerText = "No Diagnosis yet. Please fill out the dianosis part on summary of assessment first";
    } else{
        document.getElementById('diagnosisParag').innerText = "Activity intolerance related to peripheral artery disease (PAD) ";
    }

    if (counter == 0) {
        document.getElementById('planParag').innerText = "No Recommendations yet. Please fill out the recommendations part on summary of assessment first";
    } else{
        document.getElementById('planParag').innerHTML = "<b>Short term:</b> Assess level of activity tolerance and pain intensity, Educate the patient on the importance of having short periods of activity followed by rest, Implement pain management strategies<br><br><b>Long term:</b> Collaborate with a physical therapist, Continue to educating the patient on condition, Monitor the patient’s leg and thigh pain, Encourage patient to engage in daily supervised walking exercises, Evaluate the patient’s progress and modify the walking plan";
    }

    if (counter == 0) {
        document.getElementById('intParag').innerText = "No Intervention yet. Please fill out the intervention part on summary of assessment first";
    } else{
        document.getElementById('intParag').innerHTML = "Assess the client’s level of activity tolerance and difficulties in mobility<br><br>(Trigger)<br><b>Discontinue if:</b><br>Chest discomfort, dizziness, and a drop in vital signs<br><br>Have the client perform the activity more slowly, in a longer time with more rest or pauses, Examine the client's understanding of the reasons behind activity intolerance, Assess the client's degree of activity intolerance, Assess the client’s ability to move upper and lower extremity strength and further assess their degree of comfort, Assess the client’s coordination and balance, Assess and guide the client’s nutritional status and sleeping pattern, Gradually escalate activity using range-of-motion exercises in bed, Administer pain medications";
    }

    if (counter == 0) {
        document.getElementById('evalParag').innerText = "No Evaluation yet. Please fill out the evaluation part on summary of assessment first";
    } else{
        document.getElementById('evalParag').innerText = "The patient’s level of activity tolerance and pain intensity were able to be assessed and monitored, application of warm compress on legs were performed, follow-up checkup for monitoring, application of home and bed excersises with assistance";
    }
    

    if (uncomfortable2 == 'Yes' || uncomfortable2 == 'No') {
        nextButton.dispatchEvent(new Event('click'));
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
    }

    document.getElementById('summaryParag').style.display = 'none';
    document.getElementById('teybol').style.display = 'block';
    // document.getElementById('ncp').style.display = 'block';
    // document.getElementsByClassName('secondPart')[0].style.display = 'flex';
    // document.getElementsByClassName('secondPart')[1].style.display = 'flex';
    // document.getElementsByClassName('secondPart')[2].style.display = 'flex';
    // document.getElementsByClassName('secondPart')[3].style.display = 'flex';
    
});

