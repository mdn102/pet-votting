function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
}
const products = [
    {
      id: 1,
      title: 'Maltipooch',
      description: 'Hi I\'m Toby and I love to chase balls.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'https://photos.puppyspot.com/2/listing/614002/photo/5152364_medium.jpg',
      
    },
    {
        id: 2,
        title: 'Fluffy Bunnies',
        description: 'Hi I\'m fluffers and I likes to hop around and eat carrots',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: "https://i.pinimg.com/originals/35/e8/40/35e8407cca3a26188e78b75847b2d883.jpg"
        
    },
    {
        id: 3,
        title: 'Piglets',
        description: 'Hi I\'m piglet and I love to bathe in water or mud to keep cool',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'https://i.pinimg.com/originals/54/85/bc/5485bc4a91898ae61c679fd10cee33c8.jpg'
        
      },
      {
          id: 4,
          title: 'Giraffy',
          description: 'Hi I\'m Giraffy and I like to roam around and eat acai leaves.',
          url: '#',
          votes: generateVoteCount(),
          submitterAvatarUrl: 'https://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-2.jpg',
          
      },
      {
        id: 5,
        title: 'Foxy',
        description: 'Hi I\'m foxy and I like to climb trees and am most active after sun goes down.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'https://i.pinimg.com/564x/e6/44/ea/e644eacfa75ecb5cb73e220bb0c7ef01.jpg'
      },
      {
          id: 6,
          title: 'Kitty',
          description: 'Hi I\'m Snowball and I love to be petted and cuddles.',
          url: '#',
          votes: generateVoteCount(),
          submitterAvatarUrl: 'https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg',
          
      }
]

export default products