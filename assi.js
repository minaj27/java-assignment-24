const generateComponent =(curr)=>{
    const divComp =document.createElement("div");
    divComp.setAttribute("class","comp");

    const empid = document.createElement("h1");
    empid.innerText=curr.empid;

    const name = document.createElement("h3");
    name.innerText =curr.fname+"  "+  curr.lname ;

    const email = document.createElement("h3");
    email.innerText = curr.email ;

    const mobile = document.createElement("h3");
    mobile.innerText = curr.mobile ;

    const city = document.createElement("h3");
    city.innerText = curr.city ;

    divComp.appendChild(empid);
    divComp.appendChild(name);
    divComp.appendChild(email);
    divComp.appendChild(mobile);
    divComp.appendChild(city);

      mainDiv.appendChild(divComp);
      
}
data.forEach((item)=>{
    generateComponent(item)
})