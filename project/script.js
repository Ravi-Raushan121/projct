// JavaScript for managing apartment and family information

// Apartment Info Variables
let apartmentInfo = {};

// Family Members Array
let familyMembers = [];

// Handle the apartment form submission
document.getElementById("apartmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get apartment details from input fields
    const apartmentNumber = document.getElementById("apartmentNumber").value;
    const ownerName = document.getElementById("ownerName").value;
    const address = document.getElementById("address").value;

    // Store apartment details in apartmentInfo object
    apartmentInfo = {
        apartmentNumber,
        ownerName,
        address
    };

    // Display apartment details on the page
    displayApartmentDetails();
    document.getElementById("apartmentForm").reset();
});

// Display apartment details
function displayApartmentDetails() {
    const apartmentDetailsDiv = document.getElementById("apartmentDetails");
    apartmentDetailsDiv.innerHTML = `
        <p><strong>Apartment Number:</strong> ${apartmentInfo.apartmentNumber}</p>
        <p><strong>Owner Name:</strong> ${apartmentInfo.ownerName}</p>
        <p><strong>Address:</strong> ${apartmentInfo.address}</p>
    `;
}

// Handle family form submission
document.getElementById("familyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get family member details from input fields
    const memberName = document.getElementById("memberName").value;
    const relation = document.getElementById("relation").value;

    // Create a new family member object and add it to the familyMembers array
    const newFamilyMember = { memberName, relation };
    familyMembers.push(newFamilyMember);

    // Display updated family list
    displayFamilyList();
    document.getElementById("familyForm").reset();
});

// Display family members list
function displayFamilyList() {
    const familyListUl = document.getElementById("familyList");
    familyListUl.innerHTML = "";

    familyMembers.forEach(function(member) {
        const li = document.createElement("li");
        li.textContent = `${member.memberName} (${member.relation})`;
        familyListUl.appendChild(li);
    });
}
