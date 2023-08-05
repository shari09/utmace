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
}

const data: IData = {
  main: {
    title: 'Be the Next Business Leader',
    description: `
      Formerly DECA UTM, ACE is a University of Toronto Mississauga club organizing various events helping students improve communication skills, 
      analytical skills, and critical thinking, prepping them to be the next generation of leaders.
    `,
  },
  events: {
    title: 'Join our next events',
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
        title: 'This is a title',
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
        title: 'This is a orange',
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
    title: 'Who we are',
    description: `
      This event provided our members with the perfect opportunity to put their presentation skills to the test. 
      Individuals (or teams) were able to compete in one of the following categories: (1) Business-to-Business Marketing 
      (2) Corporate Finance, and (3) Management Consulting. Attendees were given the case three days in advance and were required to 
      present a 10 to 15 minute solution.The day was filled with networking opportunities, gaining professional experience, and receiving 
      constructive feedback from judges. Special thanks to our distinguished panel of judges and industry
    `,
    presidents: [
      {
        name: 'Adam Hosn',
        position: 'Co-President',
        photo: 'https://drive.google.com/file/d/1AZK-4T_t3h2MR9ofJLs6vPwuBVsUrIC5/view',
      },
      {
        name: 'Christopher',
        position: 'Co-President',
        photo: 'https://media.licdn.com/dms/image/D5603AQHYr3r-wtefWA/profile-displayphoto-shrink_400_400/0/1668490162882?e=1696464000&v=beta&t=ZmbGrXXyjoe4NLrzQ_KN_PvjsSrD6lfCB6xiQIH2ge4',
      },
    ],
    others: [
      {
        name: 'Shari Sun',
        position: 'President',
        photo: 'https://media.licdn.com/dms/image/D5603AQHYr3r-wtefWA/profile-displayphoto-shrink_400_400/0/1668490162882?e=1696464000&v=beta&t=ZmbGrXXyjoe4NLrzQ_KN_PvjsSrD6lfCB6xiQIH2ge4',
      },
      {
        name: 'Shari Sun',
        position: 'President',
        photo: 'https://media.licdn.com/dms/image/D5603AQHYr3r-wtefWA/profile-displayphoto-shrink_400_400/0/1668490162882?e=1696464000&v=beta&t=ZmbGrXXyjoe4NLrzQ_KN_PvjsSrD6lfCB6xiQIH2ge4',
      },
      {
        name: 'Shari Sun',
        position: 'President',
        photo: 'https://media.licdn.com/dms/image/D5603AQHYr3r-wtefWA/profile-displayphoto-shrink_400_400/0/1668490162882?e=1696464000&v=beta&t=ZmbGrXXyjoe4NLrzQ_KN_PvjsSrD6lfCB6xiQIH2ge4',
      },
      {
        name: 'Shari Sun',
        position: 'President',
        photo: 'https://media.licdn.com/dms/image/D5603AQHYr3r-wtefWA/profile-displayphoto-shrink_400_400/0/1668490162882?e=1696464000&v=beta&t=ZmbGrXXyjoe4NLrzQ_KN_PvjsSrD6lfCB6xiQIH2ge4',
      },
      {
        name: 'Shari Sun',
        position: 'marketing',
        photo: 'https://media.licdn.com/dms/image/D5603AQHYr3r-wtefWA/profile-displayphoto-shrink_400_400/0/1668490162882?e=1696464000&v=beta&t=ZmbGrXXyjoe4NLrzQ_KN_PvjsSrD6lfCB6xiQIH2ge4',
      },
      {
        name: 'Shari Sun',
        position: 'President',
        photo: 'https://media.licdn.com/dms/image/D5603AQHYr3r-wtefWA/profile-displayphoto-shrink_400_400/0/1668490162882?e=1696464000&v=beta&t=ZmbGrXXyjoe4NLrzQ_KN_PvjsSrD6lfCB6xiQIH2ge4',
      },
    ]
  },
}

export default data
