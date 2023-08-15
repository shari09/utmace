interface IData {
  main: {
    title: string
    description: string
  }
  events: {
    title: string
    data: {
      title: string
      description: string
      photo: string
    }[]
  }
  about: {
    title: string
    description: string
    presidents: {
      name: string
      position: string
      photo: string
    }[]
    others: {
      name: string
      position: string
      photo: string
    }[]
  }
  gallery: {
    title: string
    description: string
    content: {
      photo: string
    }[]
  }
}

const data: IData = {
  main: {
    title: 'Be the Next Business Leader',
    description: `
      Formerly DECA UTM, ACE UTM is a University of Toronto Mississauga club organizing various events helping students improve communication skills, 
      analytical skills, and critical thinking, prepping them to be the next generation of leaders. 
    `,
  },
  events: {
    title: 'Our Main Events',
    data: [
      {
        title: 'Mock Nationals',
        description: `
          This event provided our members with the perfect opportunity to put their presentation skills to the test. 
          Individuals (or teams) were able to compete in one of the following categories: (1) Business-to-Business Marketing 
          (2) Corporate Finance, and (3) Management Consulting. Attendees were given the case three days in advance and were required to 
          present a 10 to 15 minute solution.The day was filled with networking opportunities, gaining professional experience, and receiving 
          constructive feedback from judges. Special thanks to our distinguished panel of judges and industry
        `,
        photo:
          'https://media.licdn.com/dms/image/C5622AQEgsMiWfPrPfQ/feedshare-shrink_2048_1536/0/1670547006422?e=1694044800&v=beta&t=VTStlpYbMhmIxygGaxN-eqSGsjL8twIqqlWR_dUPk5E',
      },
      {
        title: 'ACE Nationals',
        description: `
          This event provided our members with the perfect opportunity to put their presentation skills to the test. 
          Individuals (or teams) were able to compete in one of the following categories: (1) Business-to-Business Marketing 
          (2) Corporate Finance, and (3) Management Consulting. Attendees were given the case three days in advance and were required to 
          present a 10 to 15 minute solution.The day was filled with networking opportunities, gaining professional experience, and receiving 
          constructive feedback from judges. Special thanks to our distinguished panel of judges and industry
        `,
        photo:
          'https://media.licdn.com/dms/image/C5622AQEgsMiWfPrPfQ/feedshare-shrink_2048_1536/0/1670547006422?e=1694044800&v=beta&t=VTStlpYbMhmIxygGaxN-eqSGsjL8twIqqlWR_dUPk5E',
      },
      {
        title: 'Hack The Case',
        description: `
          This event provided our members with the perfect opportunity to put their presentation skills to the test. 
          Individuals (or teams) were able to compete in one of tasdfa sdfasdfsd fds fsd f sd fasd fsad fss-to-Business Marketing 
          (2) Corporate Finance, and (3) Management Consulting. Attendees were given the case three days in advance and were required to 
          present a 10 to 15 minute solution.The day was filled with networking opportunities, gaining professional experience, and receiving 
          constructive feedback from judges. Special thanks to our distinguished panel of judges and industry
        `,
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg',
      },
    ],
  },
  about: {
    title: 'Who We Are',
    description: `
      Formerly known as DECA UTM, ACE UTM stands as one of the largest and most prominent organizations at the University of Toronto Mississauga. Our focus revolves around equipping students with the skills required for excelling in business case competitions, enabling them to adeptly tackle challenges and present their solutions with a touch of formality.
Our primary objective is to foster self-assurance among students when navigating public environments, empowering them to chase after their career ambitions and cultivate a polished professional identity. Through our efforts, ACE UTM aims to establish a connection between emerging young adults and seasoned business enthusiasts, bridging the generational gap with knowledge and insight.
    `,
    presidents: [
      {
        name: 'Adam Aboul Hosn',
        position: 'Co-President',
        photo:
          'https://drive.google.com/file/d/1IUJVhqJgmQ_DflKlkx_t7ExvNFHUggrc/view',
      },
      {
        name: 'Cheuk Hin Leung',
        position: 'Co-President',
        photo:
          'https://drive.google.com/file/d/1n3vPjqxRV5RbNlv_ZuuuYPd5Ou6hRwBR/view',
      },
    ],
    others: [
      {
        name: 'Curtis Quon',
        position: 'VP Marketing',
        photo:
          'https://drive.google.com/file/d/1N6YQBWpcfDsbG3rmzOQke9Zo1hfNQnoO/view',
      },
      {
        name: 'Karen Kosugi',
        position: 'VP Equity',
        photo:
          'https://drive.google.com/file/d/1lhIsw-zIvZfBb3SdmkhicyuPccRTbyDN/view',
      },
      {
        name: 'Mikas Agarwal',
        position: 'VP Internal',
        photo:
          'https://drive.google.com/file/d/1H4CkB1jgMPfWbruj9HdP9ywX4U6Q4Vcj/view',
      },
      {
        name: 'Nirmit Nirankari',
        position: 'VP Chapter Development',
        photo:
          'https://drive.google.com/file/d/105pMNvv5fIs2XEwKI9Xy23oazxODb6zi/view',
      },
      {
        name: 'Seoghee Hwang',
        position: 'VP External',
        photo:
          'https://drive.google.com/file/d/1pNXhDpowPOJOUiox25np2RCrgBnnHxtC/view',
      },
      {
        name: 'Sharifamo Odinamamadova',
        position: 'VP Finance',
        photo:
          'https://drive.google.com/file/d/19OYLeXNvdPqgQxbHwjC-yAF8wnxV2ccE/view',
      },
    ],
  },
  gallery: {
    title: 'Gallery',
    description: 'this is a desciprotn blahb lhbaalbh alhblah blab l',
    content: [
      {
        photo: 'https://drive.google.com/file/d/1yjPxFo8iVqrA2t-2Y91kryV0t8wSf-LD/view',
      },
      {
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg',
      },
      {
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg',
      },
      {
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg',
      },
      {
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg',
      },
      {
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg',
      },
      {
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg',
      },
      {
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg',
      },
      {
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg',
      },
      {
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg',
      },
      {
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg',
      },
      {
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg',
      },
      {
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg',
      },
      {
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg',
      },
      {
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg',
      },
      {
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg',
      },
      {
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/1200px-Orange-Fruit-Pieces.jpg',
      },
    ],
  },
}

export default data
