function clearDisplay(){
    document.getElementById("display").value="";
}
function toDisplay(value)
{
    document.getElementById("display").value+=value;
}
function calculate()
{
    try
    {
    const re=eval(document.getElementById("display").value);
    document.getElementById("display").value=re;
    }
    catch(error)
    {
        document.getElementById("display").value="ERROR";
    }
}