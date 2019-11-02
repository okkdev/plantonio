export const state = () => ({
  plants: [
    {
      id: 1,
      name: 'Cle',
      nic: 'sda',
      img:
        'https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60',
      position: 'somewhere in the corner to die'
    },
    {
      id: 2,
      name: 'Cle1',
      nic: 'sda1',
      img:
        'https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
      position: 'somewhere in the corner to die'
    },
    {
      id: 3,
      name: 'Cle2',
      nic: 'sda2',
      img:
        'https://images.unsplash.com/photo-1494516192674-b82b5f1e61dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1233&q=80',
      position: 'somewhere in the corner to die'
    },
    {
      id: 4,
      name: 'Cle3',
      nic: 'sda3',
      img:
        'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80',
      position: 'somewhere in the corner to die'
    },
    {
      id: 5,
      name: 'Cle4',
      nic: 'sda4',
      img:
        'https://images.unsplash.com/photo-1459664018906-085c36f472af?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
      position: 'somewhere in the corner to die'
    },
    {
      id: 6,
      name: 'Cle5',
      nic: 'sd5a',
      img:
        'https://images.unsplash.com/photo-1517042256700-ce7bb683950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1224&q=80',
      position: 'somewhere in the corner to die'
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
