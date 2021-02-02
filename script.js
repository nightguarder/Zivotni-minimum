let vysledek;

function GetValues(){
    //ziskani dat
    let dospeli =document.getElementById("form1").elements[0].value;
    dospeli=Number(dospeli);
    let deti6 =document.getElementById("form1").elements[1].value;
    deti6=Number(deti6);
    let deti15 =document.getElementById("form1").elements[2].value;
    deti15=Number(deti15);
    let deti26=document.getElementById("form1").elements[3].value;
    deti26=Number(deti26);

    return {
        dospeli:dospeli,
        dite06:deti6,
        dite15:deti15,
        dite26:deti26,
    };

}
//promenne
let jednotlivec=3860;
let dospeli1=3550; //prvni osoba v domacnosti
let dospeli2=3200; //druha osoba v domacnosti atd.
let pocitadlo=0;


function Pocitej(){
    //ziskani hodnot z inputu
let values=GetValues();

let input1=values.dospeli;

//ziskani pocet deti
let input2=values.dite06;
input2=(1970 *input2);
let input3=values.dite15;
input3=(2420 *input3);
let input4=values.dite26;
input4=(2770*input4);

        if (values.dospeli==0)
        return alert("Please input more than 0");

        else if (values.dospeli==1 &&values.dite06==0&&values.dite15==0 &&values.dite26==0)
            return Vysledek(jednotlivec);

        else if (values.dospeli==1&&values.dite06!=null &&values.dite15!=null &&values.dite26!=null){
            for(let i=1;i<=input1;i++){
                vysledek=(dospeli1 +input2 +input3 +input4);
                return (Vysledek(vysledek));
            }
        }
        else if (values.dospeli<=2&&values.dite06!=null &&values.dite15!=null &&values.dite26!=null){
            for (let i=1;i<=input1;i++){
                vysledek=(dospeli1+dospeli2 +input2+input3+input4);
                return Vysledek(vysledek);
            }
        }
        else {
            //zjistit pocet dospelych
            for (let i=1;i<=input1;i++){
                console.log(input1);
                vysledek=((dospeli1)) +(dospeli2*(input1-1));
                pocitadlo+=vysledek;
            }
            return (Vysledek(vysledek));
        }

}//function Pocitej()

function Vysledek(vysledek){
    document.getElementById("vysledek").value=vysledek +" Kč";
}