class Filters{
    static categoryFilter(array, category){
        let arrayFilter = array.filter( elem => elem.categoria === category)
        return arrayFilter
    }

    static filterBySearch (array , text){
        let arrayFilter = array.filter( elem => elem.nome.toLowerCase().includes(text.toLowerCase()))
        return arrayFilter
    }
}
export{Filters}