 const tbody = document.querySelector("#tbody")
 
 async function getData(){
     const url = "https://restcountries.com/v3.1/all"
     try {
         const resultado = await axios.get(url) 
        
         for(elementos of resultado.data){
            const tr = document.createElement("tr")
            const tdName = document.createElement("td") 
            const tdCapital = document.createElement("td") 
            const tdArea = document.createElement("td") 
            const tdCourrencies = document.createElement("td") 


            tdName.textContent = elementos.name.common
            tdCapital.textContent = elementos.capital ? elementos.capital[0] : "-"
            tdArea.textContent = elementos.area.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
            tdCourrencies.textContent = elementos.currencies ? Object.keys(elementos.currencies) : "-"

            tr.append(tdName,tdCapital,tdArea,tdCourrencies)
            tbody.append(tr)
            
         }
        
    } catch (error) {
    console.log(error)     
     }
     
 }
 getData()