const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "lib", "links.ts");
let content = fs.readFileSync(filePath, "utf8");

// ── Chair names (councils) ────────────────────────────────────────────────────
const chairNames = [
  "Agrima Kalra", "Siddharth Ramesh", "Ameya Iyer", "Joshua Tiji",
  "Deeksha Singh", "Vedavathy Venu Thonnakkal", "Rohan Atul Singhvi", "Nayonika Nair",
  "Aayush Mehta", "Gayathri Sangisetti", "Hibah Abdul Kareem", "Samhitha Jagadish",
  "Noel Emmanuel Binu", "Radhika Ganesan", "Ishaan V Binesh", "Shiven Thareja",
  "Anirudh Sachin Nair", "Avran Mathew Thomas", "Riddhi Mayur", "Ayana Jaiswal",
  "Anne Devassy", "Prapti Dey", "Sreechaitra M.S", "Zoraiz Al Raz",
  "Sreyas Sreevalsan", "Mihir Anand Pappu", "Inushka Ananth",
  "Nikhil Nandi", "Darsh Thareja",
];

// ── Team member names ──────────────────────────────────────────────────────────
const teamNames = [
  "Lakshmi Bala", "Rudra Dev Sumod", "Kushagra Vashishth",
  "Hiranya Bansal", "Aarin S. Niranjane", "Vaibhav Raj Saxena", "Anirudh Ramasubramanian",
  "Vaidehi Pramod", "Krishang Mayur", "Leann Dennis", "Asmi Amit Vanare",
  "Ishaan Gupta", "Tanvi Nair", "Anish Suresh Kumar", "Bryl Lizen Dias", "Nikhil Reddy",
  "Fathima Hazeeb", "Alaine Bijosh", "Ridhima Pai", "Hadassah Crystaline",
  "Diya Rajiv", "Dune Mary Johnson",
  "Nathania Felix", "Dhiyashree Dhinesh", "Devansh V Sharma", "Nadiya Abid Hussain",
  "Abhiram Senthilkumar", "Abhijith Roseben Pradeep",
  "Arya Chaudhary", "Gayatri Sharma", "Muhammed Zahin", "Prisha Raghuram",
  "Vishakha Sharma", "Nidhi Nambiar",
  "Arya Rastogi", "Akunth Khanna", "Aishwarya Saravanan",
  "Abhinav Patnaik",
  "Dhruvi Karia", "Ashi Bhatt", "Saranya Balasubramanian", "Mohammed Omar",
  "Dhruv Karia", "Saurav Sanal",
];

// Replace names
[...chairNames, ...teamNames].forEach((name) => {
  content = content.split(`"${name}"`).join(`"TBA"`);
});

// Replace /councils/chairs/ANYTHING.png → placeholder (except if already placeholder)
content = content.replace(/["']\/councils\/chairs\/(?!placeholder)[^"']*["']/g, '"/councils/chairs/placeholder.png"');

// Replace /teams/ANYTHING.png → placeholder (except if already placeholder)
content = content.replace(/["']\/teams\/(?!placeholder)[^"']*["']/g, '"/teams/placeholder.png"');

fs.writeFileSync(filePath, content, "utf8");
console.log("✅  links.ts updated — all names set to TBA, all photos set to placeholder.");
