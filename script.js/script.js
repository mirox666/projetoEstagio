 const tbody = document.querySelector("#tbody")

 async function getData(){
     const url = "https://restcountries.com/v3.1/all"
     try {
         const resultado = await axios.get(url) 
         //console.log(resultado.data)
         for(elementos of resultado.data){
            console.log(elementos)
            //console.log(elementos.name.common)// Retorna os nomes do países
            //console.log(elementos.capital[0]) // Retorna as capitais dos países
            //console.log(elementos.area) // Retorna a Área dos países
            //console.log(Object.keys(elementos.currencies)) // Retorna o tipo de moeda , OBject.keys retorna chave do objeto 
            const tr = document.createElement("tr")
            const tdName = document.createElement("td") 
            const tdCapital = document.createElement("td") 
            const tdArea = document.createElement("td") 
            const tdCourrencies = document.createElement("td") 


            tdName.textContent = elementos.name.common
            tdCapital.textContent = elementos.capital[0]
            tdArea.textContent = elementos.area
            tdCourrencies.textContent = Object.keys(elementos.currencies)

            tr.append(tdName,tdCapital,tdArea,tdCourrencies)
            tbody.append(tr)
         }
        
    } catch (error) {
    console.log(error)     
     }
     
 }
 getData()