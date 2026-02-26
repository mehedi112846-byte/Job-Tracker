// for job card functionality 

//button_top_all button_top_interview button_top_rejected not_applied1 button_interview1 button_rejected1 not_applied2 button_interview2 button_rejected2 not_applied3 button_interview3 button_rejected3 not_applied4 button_interview4 button_rejected4 not_applied button_interview5 button_rejected5 not_applied6 button_interview6 button_rejected6 not_applied7 button_interview7 button_rejected7 not_applied8 button_interview8 button_rejected8 INTERVIEW REJECTED  //

// function for interview and rejected on not applied

    let CountOfTotal = 8;
    let CountOfTotalJobs = 8;
    let CountOfInterview = 0;
    let CountOfRejected = 0;
    const Total_count_display = document.getElementById("Total_count");
    const Total_Jobs_count_display = document.getElementById("Total_Jobs");
    const Interview_count_display = document.getElementById("Interview_count");
    //const Not_Applied_Button = document.getElementById("not_applied1");
    const Reject_count_display = document.getElementById("Rejected_count");
    const Not_Applied_Button = document.getElementById("not_applied1");


function interview(id){
    const Not_Applied_Button = document.getElementById(id);
    const currentText = Not_Applied_Button.innerText;
    if(currentText === "INTERVIEW") return;
    if(currentText === "REJECTED"){
        CountOfRejected--;
        Interview_count_display.innerText = CountOfRejected;
    }
    CountOfInterview++;
    Interview_count_display.innerText = CountOfInterview;
    Not_Applied_Button.innerText = "INTERVIEW";
    Not_Applied_Button.className = "btn btn-outline btn-accent border-[#10B981] text-[#10B981]";
    Not_Applied_Button.style.display = "block";
}

function rejected(id){
    const Not_Applied_Button = document.getElementById(id);
    const currentText = Not_Applied_Button.innerText;
    if(currentText === "REJECTED") return;
    if(currentText === "INTERVIEW"){
        CountOfInterview--;
        Interview_count_display.innerText = CountOfInterview;
    }
    CountOfRejected++;
    Reject_count_display.innerText = CountOfRejected;
    Not_Applied_Button.innerText = "REJECTED";
    Not_Applied_Button.className = "btn btn-outline btn-secondary border-[#EF4444] text-[#EF4444]";
    Not_Applied_Button.style.display = "block";
}


// common function for control button color 

function buttonColor(clickedButtonId){
    const buttonsIds = ["button_top_all", "button_top_interview", "button_top_rejected"];
    buttonsIds.forEach(id => {
        const btn = document.getElementById(id);
        if(btn){
            btn.classList.remove("bg-blue-400", "text-white");
        }
    });
    const activeBtn = document.getElementById(clickedButtonId);
    if(activeBtn){
        activeBtn.classList.add("bg-blue-400", "text-white");
    }
}


// for show all card 

function showAll(){
   const full_part = document.querySelector(".main_card_container");
   const null_part = document.querySelector(".main_section_null");
   const all_cards = document.querySelectorAll('.card1, .card2, .card3, .card4, .card5, .card6, .card7, .card8');
   null_part.classList.add("hidden");
   full_part.classList.remove("hidden");
   for(let i = 0; i<all_cards.length; i++){
      all_cards[i].style.display = "block";
   } 
}


// function for show interview and rejected card 

function showInterview(){
    const full_part = document.querySelector(".main_card_container");
    const null_part = document.querySelector(".main_section_null");
    const all_cards = document.querySelectorAll('.card1, .card2, .card3, .card4, .card5, .card6, .card7, .card8');
    let found = false;

    for(let i = 0; i<all_cards.length; i++){
        const status = all_cards[i].querySelector("button");
        
         const present_status = status.innerText;

            if(present_status === "INTERVIEW"){
            all_cards[i].style.display = "block";
            found = true;
        }
         else{
            all_cards[i].style.display = "none";
        }
        
    }
    if(!found){
        full_part.classList.add("hidden");
        null_part.classList.remove("hidden");
    }
}

// for rejected button 

function showReject(){
    const full_part = document.querySelector(".main_card_container");
    const null_part = document.querySelector(".main_section_null");
    const all_cards = document.querySelectorAll('.card1, .card2, .card3, .card4, .card5, .card6, .card7, .card8');
    let found = false;

    for(let i = 0; i<all_cards.length; i++){
        const status = all_cards[i].querySelector("button");
        
         const present_status = status.innerText;

            if(present_status === "REJECTED"){
            all_cards[i].style.display = "block";
            found = true;
        }
         else{
            all_cards[i].style.display = "none";
        }
        
    }
    if(!found){
        full_part.classList.add("hidden");
        null_part.classList.remove("hidden");
    }
}


// function for delete card 

function delete_card(element){
    const full_part = document.querySelector(".main_card_container");
    const null_part = document.querySelector(".main_section_null");
    if(element.id.includes("DeleteIcon")){
        const card = element.closest('[class^="card"]');
        if(card){
            card.classList.add("hidden");
        }
    }
    CountOfTotal--;
    Total_count_display.innerText = CountOfTotal;
    CountOfTotalJobs--;
    Total_Jobs_count_display.innerText = CountOfTotalJobs;
    if(CountOfTotal===0 && CountOfTotalJobs===0){
       full_part.classList.add("hidden");
       null_part.classList.remove("hidden"); 
    }
}