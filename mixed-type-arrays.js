// Task 1: Create the Profile
let userProfile = {
    userName: "Miles Turing",
    age: 30,
    subscriptionStatus: "Active",
    location: "New Mexico, USA",
    hobbies: ["Hiking", "Mountain Biking"]
};

// Task 2: Access and Log Profile Details
console.log("User Name:", userProfile.userName);
console.log("Second Hobby:", userProfile.hobbies[1]);

// Task 3: Modify the Profile
userProfile.age = 30; // Update age
userProfile.hobbies.push("Photography"); // Add a new hobby

// Task 4: Display the Updated Profile
console.log("Updated Profile:", userProfile);
