export const state = () => ({
  plants: [
    {
      id: 2,
      name: 'Aloe Vera',
      nic: 'Vera',
      img:
        'https://images.unsplash.com/photo-1569745358610-b01866003860?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80',
      position: 'Kitchen cupboard'
    },
    {
      id: 3,
      name: 'Monstera',
      nic: 'Boogie',
      img:
        'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80',
      position: 'toilet corner'
    },
    {
      id: 4,
      name: 'Cressula',
      nic: 'Carla',
      img: 'https://files.catbox.moe/306fjv.jpeg',
      position: 'on the table'
    }
  ]
})

export const getters = {
  getPlant: (state) => (id) => {
    return state.plants.find((plant) => {
      if (plant.id.toString() === id) {
        return plant
      }
    })
  }
}
