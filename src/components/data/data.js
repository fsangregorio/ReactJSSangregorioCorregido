const productos = [
    { id: 101, name: 'Picada para 2', description: 'Picada para 2 personas', category:'picadas', price: 1000, pictureUrl: 'https://i.ibb.co/1rbk1nt/picada2.jpg', stock:50},
    { id: 102, name: 'Picada para 4', description: 'Picada para 4 personas', category:'picadas', price: 2000, pictureUrl: 'https://i.ibb.co/Z6tQ0Xf/picada4.jpg', stock:35},
    { id: 103, name: 'Picada para 6', description: 'Picada para 6 personas', category:'picadas', price: 3000, pictureUrl: 'https://i.ibb.co/0mVy1Zd/picada6.jpg', stock:25},
    { id: 104, name: 'Picada para 8', description: 'Picada para 8 personas', category:'picadas', price: 4000, pictureUrl: 'https://i.ibb.co/0mVy1Zd/picada6.jpg', stock:10},
    { id: 201, name: '1 Cerveza', description: 'Cerveza artesanal calidad premium', category:'cervezas', price: 300, pictureUrl: 'https://i.ibb.co/BGtHFPs/cerveza.jpg', stock:200},
    { id: 202, name: '2 Cervezas', description: 'Cervezas artesanales calidad premium', category:'cervezas', price: 600, pictureUrl: 'https://i.ibb.co/BGtHFPs/cerveza.jpg', stock:100}
  ]

   export const data = new Promise((resolve, reject) => {
    let condition = true
    setTimeout(()=> {
      if(condition){
        resolve(productos)
      }else{
        reject('Se ha registrado un error.')
    }
},2000)
})