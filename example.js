
const root_div=document.getElementById("root");
function createClass(){
    let classes= {
        first:"orange",
        second:"white",
        third:"green",
    }
    return classes;
}
function render(){
    let frag=document.createDocumentFragment();
    const el=document.createElement("div");
    el.classList.add("wrapper");
    const classes=createClass();
    const classkey=Object.keys(classes);
    for(let index=0;index<3;index++){
        const child=document.createElement("div");
        const className = classes[classkey[index]];
        child.classList.add(className);
        if(classes[classkey[index]] === "white"){
            const round=document.createElement("div");
            const img=document.createElement("img");
            img.classList.add("imgtag");
            img.src="./assests/Ashoka_Chakra.svg";
            img.draggable=false;
            round.appendChild(img);
            
            round.classList.add("circle");
            child.appendChild(round);
        }
        el.appendChild(child);
    }
    frag.appendChild(el);
    root_div.appendChild(frag); 
}
export {createClass,render};