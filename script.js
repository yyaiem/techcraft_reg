// loop:
// while (true) {
//     let transection_number = prompt("Enter Your Transection ID:")
//     if (transection_number.length > 7) {
//         document.getElementById("transection_id").value = transection_number;
//         break loop;
//     } else {
//         alert("Please enter a valid Transection ID");
//         continue;
//     }
// }


function isValidNumber(input) {
    const regex = /^\d{7,14}$/;
    return regex.test(input);
}

function promptForNumber() {
    document.getElementById('membership_form').style.display = 'none';
    document.getElementById('Err_msg').innerHTML = "Something Wrong !! Reload the form, Enter a valid Transection ID in Popup Input Window.."
    document.getElementById('Err_msg').style.display = 'flex';
    let userInput;

    while (true) {
        transection_number = prompt("Please enter Your UPI Transection ID:");

        // Handle the case when the user presses cancel
        if (transection_number === null) {
            continue;
        }

        // Trim the input to remove whitespace
        transection_number = transection_number.trim();

        // Check for blank input
        if (transection_number === "") {
            continue;
        }

        // Validate the number
        if (!isValidNumber(transection_number)) {
            alert("Invalid input! Please enter a Valid Upi Transection ID!!");
        } else {
            document.getElementById('Err_msg').style.display = 'none';
            document.getElementById('membership_form').style.display = 'block';
            document.getElementById("transection_id").value = transection_number;
            break; // Exit the loop
        }
    }
}

// Run the function on page load
window.onload = promptForNumber;






var currentDate = new Date();
var formattedDate = currentDate.toLocaleString();
document.getElementById("date_time").value = formattedDate;


function showInputs() {
    var numMembers = document.getElementById("grp_mem").value;
    var memberInputsDiv = document.getElementById("memberInputs");
    memberInputsDiv.innerHTML = ""; // Clear previous inputs

    for (var i = 1; i < numMembers; i++) {
        var memberIndex = i + 1;
        var memberDiv = document.createElement("div");
        memberDiv.className = "member-input";

        var nameLabel = document.createElement("label");
        nameLabel.textContent = "Member " + memberIndex + " Name: ";
        nameLabel.className = "qst_labl";

        var nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.name = "member_name_" + memberIndex;
        nameInput.id = "member_name_" + memberIndex;
        nameInput.className = "ansfield";
        nameInput.placeholder = " Enter Member " + memberIndex + " Full Name"
        nameInput.required

        var genderLabel = document.createElement("label");
        genderLabel.textContent = "Member " + memberIndex + " Gender: ";
        genderLabel.className = "qst_labl"

        var genderInput = document.createElement("select");
        genderInput.name = "member_gender_" + memberIndex;
        genderInput.id = "member_gender_" + memberIndex;
        genderInput.className = "ansfield"
        genderInput.required
        var genderOptions = ["Male", "Female", "LGBTQ"];
        genderOptions.forEach(function (option) {
            var optionElem = document.createElement("option");
            optionElem.value = option;
            optionElem.textContent = option;
            genderInput.appendChild(optionElem);
        });

        var phoneLabel = document.createElement("label");
        phoneLabel.textContent = "Member " + memberIndex + " Phone Number: ";
        phoneLabel.className = "qst_labl"
        var phoneInput = document.createElement("input");
        phoneInput.type = "text";
        phoneInput.name = "member_phone_" + memberIndex;
        phoneInput.id = "member_phone_" + memberIndex;
        phoneInput.className = "ansfield"
        phoneInput.placeholder = "Enter Member " + memberIndex + " Phone No."
        phoneInput.required

        memberDiv.appendChild(nameLabel);
        memberDiv.appendChild(document.createElement("br"));
        memberDiv.appendChild(nameInput);
        memberDiv.appendChild(document.createElement("br"));
        memberDiv.appendChild(genderLabel);
        memberDiv.appendChild(document.createElement("br"));
        memberDiv.appendChild(genderInput);
        memberDiv.appendChild(document.createElement("br"));
        memberDiv.appendChild(phoneLabel);
        memberDiv.appendChild(document.createElement("br"));
        memberDiv.appendChild(phoneInput);
        memberDiv.appendChild(document.createElement("br"));
        memberDiv.appendChild(document.createElement("br"));

        memberInputsDiv.appendChild(memberDiv);
    }
}


let url = 'https://script.google.com/macros/s/AKfycbyNRnWW93AfchUy_8nnJmyFYWipSx4kyZb_BqLpNL80KSF0gcnq4qqhun3gNCbAbNNd/exec'
let form = document.querySelector('#membership_form')
form.addEventListener("submit", (e) => {
    e.target.status_box.innerHTML = "Submitting..";

    let form_data = new FormData(form);

    fetch(url, { method: "POST", body: form_data }).then((res) => res.text())
        .then((finalRes) => {
            e.target.status_box.innerHTML = "Submitted";
            form.reset();
            setTimeout(() => {
                e.target.status_box.innerHTML = "Submit";

            }, 1000)
            // alert
            console.log(finalRes)
            // alert(finalRes)
            // window.scrollTo({
            //     top: 0,
            //     behavior: 'smooth'
            // });
            window.location.href = "./submit.html";
        })

    e.preventDefault();

})




