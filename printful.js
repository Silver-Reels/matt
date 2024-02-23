import fetch from "node-fetch";

let url='https://api.printful.com/orders';
let publicToken="8HxN2R8URgXsw3wrWxZJ34vplXjpi3gnoR2o7jbJ";
let payload={
    "recipient":{
        "name": "recipients name",
        "address1": "12 address avenue, Bankstown",
        "city": "Sydney",
        "state_code": "NSW",
        "country_code": "AU",
        "zip": "2200"
    },
    "items": [{
        "variant_id": 11513,
        "quantity": 1,
        "files":[{
                "url": "http://example.com/files/posters/poster_1.jpg"
        }]
    }]
};

let init={
    method:'POST',
    headers:{'Content-Type':'application/json','Authorization': `Bearer ${publicToken}`},
    body:JSON.stringify(payload)
  };


export const handler= async (event,context)=>{
  try{
    const response = await fetch(url,init);
    const data = await response.json();
    
    return {statusCode:200,body:JSON.stringify({data})};
  }
  catch (e){
    return {statusCode:500,body:JSON.stringify({error:e})};
  }
};

// after ordering (as draft), should be here? https://www.printful.com/dashboard/default/orders