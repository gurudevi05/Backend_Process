
// Import URL Module

import {URL} from "url";

// Create a URL Object 

const myUrl = new URL ("https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles");

// Access different parts

console.log("Full URL:",myUrl.href);
console.log("Protocol",myUrl.protocol);
console.log("Host",myUrl.hostname);
console.log("path:",myUrl.pathname);
console.log("Query String:",myUrl.search);
console.log("Hash:",myUrl.hash);

// Work with query Parameters

console.log("Name Parameter:",myUrl.searchParams.get("mobile"));
console.log("Place Parameter:",myUrl.searchParams.get("place"));

// Add or change a parameter

myUrl.searchParams.append("date","2025-12-01");
console.log("Updated URL:",myUrl.toString());








