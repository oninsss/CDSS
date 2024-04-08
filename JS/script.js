const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');
const steps = document.querySelectorAll('.step');
const submitButton = document.querySelector('.btn-submit');
const form_steps = document.querySelectorAll('.form-step');

let active = 1;

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
    } else {
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
});

prevButton.addEventListener('click', () => {
    active--;

    if (active < 1) {
        active = 1;
    }

    updateProgress();
    counter--;
});


function getValue(name) {
    var data = document.getElementsByName(name);
    for (var i = 0; i < data.length; i++) {
        if (data[i].checked) {
            return data[i].value;
        }
    }
}

let dizziness;
let legPain;
let uncomfortable;
let uncomfortable2;
let smoke;
let diabetes;

submitButton.addEventListener('click', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    dizziness = getValue('dizziness');
    legPain = getValue('legPain');
    uncomfortable = getValue('uncomfortable');
    uncomfortable2 = getValue('uncomfortable2');
    smoke = getValue('smoke');
    diabetes = getValue('diabetes');

    localStorage.setItem('dizziness', dizziness);
    localStorage.setItem('legPain', legPain);
    localStorage.setItem('uncomfortable', uncomfortable);
    localStorage.setItem('uncomfortable2', uncomfortable2);
    localStorage.setItem('smoke', smoke);
    localStorage.setItem('diabetes', diabetes);


    if (dizziness == 'yes' || legPain == 'yes' || uncomfortable == 'yes' || uncomfortable2 == 'yes' || smoke == 'yes' || diabetes == 'yes') {
        document.getElementById('diagnosisParag').innerText = "Based on your responses and risk factors, it is possible that you have Peripheral Artery Disease (PAD). It is recommended to consult with a healthcare provider for further evaluation and testing."
    }

    if (dizziness === 'yes' && legPain === 'yes' && uncomfortable === 'yes') {
        document.getElementById('planParag').innerHTML = "If applicable, continue the patient's current antihypertensive regimen, otherwise adding a medication to manage her dizziness and headaches. <br> <br> Exercise: Supervised exercise programs can improve claudication symptoms and overall functional capacity";
        
        document.getElementById('intParag').innerHTML = "Prescribe medication to manage dizziness, leg pain, and leg discomfort. Possible options include antiplatelet agents, such as aspirin or clopidogrel, to reduce the risk of blood clots. <br> <br> Additionally, medications to improve blood flow, such as cilostazol or pentoxifylline, may be considered. It is important to consult with a healthcare provider for appropriate medication selection and dosage.";
        
        document.getElementById('evalParag').innerHTML = "\
            • Schedule a follow-up appointment with your healthcare provider within the next two weeks.<br><br>\
            • Monitor symptoms such as dizziness, leg pain, and discomfort.<br><br>\
            • Gradually increase physical activity and track your steps daily.<br><br>\
            • Continue taking prescribed medications as directed.<br><br>\
            • Provide feedback on the effectiveness of interventions and report any new symptoms.<br><br>\
        ";
    }
    

    if (uncomfortable2 == 'yes' || uncomfortable2 == 'no') {
        nextButton.dispatchEvent(new Event('click'));
    }
});

