var bookMark =document.getElementById("BookmarkName");
var bookUrl =document.getElementById("BookmarkUrl");



var allBookMark =[];
var markCheck = /^\w{3}/;
var urlCheck =/^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

if(JSON.parse(localStorage.getItem("book")) !=null)
    allBookMark=JSON.parse(localStorage.getItem("book"));
display();

function getData()
{
    if(bookMark.classList.contains("is-valid") &&bookUrl.classList.contains("is-valid"))
        {
            console.log(bookMark.value);
            var book ={
                mark:bookMark.value,
                url:bookUrl.value,
            }
            allBookMark.push(book);
            localStorage.setItem("book",JSON.stringify(allBookMark));
            display();
            clear()
        

        }
        else
        {
            document.getElementById("divShow").classList.replace("d-none","d-flex");
        }
   
}
function display()
{
    var container ="";
    for(var i=0 ;i<allBookMark.length;i++)
        {
            container+= `
            <tr>
            <td>
                ${i+1}
            </td>
            <td>
                ${allBookMark[i].mark}
            </td>
            <td>
            <a href="${allBookMark[i].url}" target="_blank">
            <button class="btn visit">
                <i class="fa-solid fa-eye pe-2"></i>
                Visit
            </button>
           </a>
            </td>
            
            <td>
                <button class="btn delelte" onclick="delelte(${i})">
                    <i class="fa-solid fa-trash-can pe-2"></i>
                    delelte
                </button>
            </td>
          </tr>
            `
        }

        document.getElementById("tbody").innerHTML =container;
}
function clear()
{
    bookMark.value="";
    bookUrl.value ="";
    bookMark.classList.remove("is-valid");
    bookUrl.classList.remove("is-valid");



}
function delelte(i)
{
    allBookMark.splice(i,1);
    localStorage.setItem("book",JSON.stringify(allBookMark));
    display();


}

function testName()
{
    if(markCheck.test(bookMark.value))
        {
            bookMark.classList.add("is-valid");
            bookMark.classList.remove("is-invalid");  

        }
        else
        {
            bookMark.classList.remove("is-valid");

            bookMark.classList.add("is-invalid");  

        }
}
function testUrl()
{
    if(urlCheck.test(bookUrl.value))
        {
            bookUrl.classList.add("is-valid");
            bookUrl.classList.remove("is-invalid");  

        }
        else
        {
            bookUrl.classList.remove("is-valid");

            bookUrl.classList.add("is-invalid");  

        }
}
document.getElementById("close").addEventListener("click" ,function()
{
    document.getElementById("divShow").classList.replace("d-flex","d-none");
});