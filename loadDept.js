//function allDept()
//document.getElementById("clck").onclick = function() {allDept()};

function allDept()
{
    console.log("fdjsnfksjf")
    const Url='http://localhost:3000/api/getAllDepts'
    getJSON(Url,function allDept(data)
    {
        for (var i in data) 
        {
            var element = document.createElement("h2");
            element.innerHTML = data[i].Name;
            console.log(data);
            ("#data").append(element);
        }
        $("#clck").click(allDept);
    })
}