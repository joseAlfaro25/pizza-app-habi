import React from 'react'

const useProduct = () => {

    const listSelectd:any = [];
    const onChange = (item:any) => {
    console.log('ITEM',item)
      let contador = 0;
      if (listSelectd.length > 0) {
        console.log("hola2");
        for (let i = 0; i < listSelectd.length; i += 1) {
          console.log(listSelectd[i].id === item.id);
          if (listSelectd[i].id === item.id) {
            contador = i;
          }
        }
  
        if (contador !== 0) {
          listSelectd[contador].checked = false;
        } else {
          listSelectd.push({ value: item.value, checked: true, name: item.name });
        }
      } else {
        
        listSelectd.push({ value: item.value, checked: true, name: item.name });
        console.log("hola1");
      }
      console.log(listSelectd, "listSelected");
    };
  
  return {onChange}
}

export default useProduct