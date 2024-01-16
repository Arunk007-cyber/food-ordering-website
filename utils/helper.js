export function filterData(searchInput, restraunt) {
    return restraunt.filter((res)=>res.info.name.toLowerCase().includes(searchInput.toLowerCase()));
   
  }