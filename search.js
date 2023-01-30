
        const search = () =>{
          const searchbox = document.getElementsByClassName("search-input").value.toUpperCase();
          const storeitems = document.getElementsByClassName("row")
          //const product= document.getElementsByClassName("col-lg-12 d-flex justify-content-center")
         const pname = document.getElementsByClassName("coding");

         for (var i=0;i< pname.length;i++)
         {
          let match = product[i].getElementsByClassName("coding")[0];
          if(match)
          {
            let textvalue = match.textContent || match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox) > -1)
            {
              product[i].style.display = " ";

            }
            else{
              product[i].style.display = "none";
            }
          }
         }
        }   
        