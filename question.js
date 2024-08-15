const root_div=document.getElementById("root");
const frag=document.createDocumentFragment();
function alertmsg(event) {
    
    const form=document.createElement("form");
    form.classList.add("formClass");
    const label=document.createElement("label");
    label.setAttribute("for","name");
    label.textContent=`Enter Your Name`;
    label.classList.add("labelClass");
    const input=document.createElement("input");
    input.id="name";
    input.type="Text";
    input.placeholder=`Enter Your Name`;
    input.classList.add("inputClass");
    const span=document.createElement("span");
    span.classList.add("context");
    span.id="spanItem";
    form.appendChild(span);
    label.appendChild(input);
    form.appendChild(label);
    frag.appendChild(form);
    root_div.appendChild(frag);
}
function output(){
    const output=document.getElementById("name").value;
    const a=document.getElementById("spanItem");
    a.textContent=`HAPPY 78TH INDEPENDENCE DAY ${output.toUpperCase()}`
}
root_div.addEventListener("change",output);

export {alertmsg};