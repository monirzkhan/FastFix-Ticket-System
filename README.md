1. What is JSX, and why is it used?
ANS:
JSX কি ?
JSX বা JavaScript XML হলো JavaScript-এর এমন একটি পদ্ধতি যা JavaScript ফাইলের ভেতরেই HTML-এর মতো কোড লিখতে সাহায্য করে।

why is it used?
JSX ছাড়া React-এ কোড লেখা বেশ কঠিন এবং সময়সাপেক্ষ।
কোড সহজে পড়তে এবং প্রজেক্ট দ্রুত ডেভেলপমেন্ট এর জন্য এইটা ব্যবহার হয়ে থাকে। 


2. What is the difference between State and Props?

ANS:
Props (Properties):
এটি হলো কম্পোনেন্টের বাইরের থেকে আসা Data।	
এটি Immutable (পরিবর্তন করা যায় না)।
এটি প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে পাঠানো হয়।	
কম্পোনেন্টের মধ্যে তথ্য আদান-প্রদান করা।	

State:
এটি হলো কম্পোনেন্টের নিজস্ব অভ্যন্তরীণ Data।
এটি Mutable (পরিবর্তন করা যায়)।
এটি যে কম্পোনেন্টে তৈরি করা হয়, সেই কম্পোনেন্টই এর মালিক।
কম্পোনেন্টের বর্তমান অবস্থা বা ইন্টারঅ্যাকশন ট্র্যাক করা।



3. What is the useState hook, and how does it work?
What is the useState hook?
Ans: 'useState'-হলো React-এর একটি বিশেষ ফাংশন যা কোনো ফাংশনাল কম্পোনেন্টের ভেতরে State বা তথ্য ধরে রাখতে এবং তা পরিবর্তন করতে ব্যবহার করা হয়।

how does it work?
Ans: 'useState' ফাংশন দুটি জিনিস দেয়:
a. Current State Value: বর্তমান ডেটা বা মান।
b. Updater Function: এই মানটি পরিবর্তন করার জন্য একটি ফাংশন।
যখন আমরা আপডেট ফাংশনটি ব্যবহার করে মান পরিবর্তন করি, React স্বয়ংক্রিয়ভাবে কম্পোনেন্টটিকে পুনরায় রেন্ডার (Re-render) করে, যাতে স্ক্রিনে নতুন তথ্য দেখা যায়।



4. How can you share state between components in React?
Ans: React-এ কম্পোনেন্টগুলোর মধ্যে স্টেট (State) শেয়ার করা বা আদান-প্রদান করার কয়েকটি জনপ্রিয় উপায় আছে।
যেমন:
a. Lifting State Up: যখন শুধু ২-৩টি পাশাপাশি কম্পোনেন্টের মধ্যে ডেটা শেয়ার করতে হয়।
b. Context API (Prop Drilling):	যখন অনেকগুলো চাইল্ড কম্পোনেন্টে (যেমন: থিম, ইউজার লগইন ইনফো) ডেটা পাঠাতে হয়।
c. Redux/Zustand: যখন অ্যাপ অনেক বড় এবং স্টেট ম্যানেজমেন্ট খুব জটিল হয়ে যায়।
d. URL Params: যখন ডেটা ব্রাউজারের লিঙ্কে থাকা প্রয়োজন (যেমন: Product Details)।


5. How is event handling done in React?
Ans: React-এ ইভেন্টগুলো CamelCase-এ লিখতে হয় যেমন সব ছোট হাতের অক্ষর (onclick) পরিবর্তে CamelCase (onClick) লিখতে হয় এবং ফাংশনগুলোকে স্ট্রিং হিসেবে না পাঠিয়ে যেমন: ("handleClick()") সরাসরি Function Reference হিসেবে কার্লি ব্রেস দিয়ে ({handleClick})পাঠাতে হয়।