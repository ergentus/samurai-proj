type DataDialogsType = {
   id: number
   name: string
}

type DataMessagestype = {
   id: number
   message: string
}

export type DataPostType = {
   id: number
   message: string
   likesCount: number
}

export type profilePageType = {
   posts: DataPostType[]
}

export type dialogsPageType = {
   dialogs: DataDialogsType[],
   messages: DataMessagestype[]
}

export type pagesType = {
   profilePage: profilePageType
   dialogsPage: dialogsPageType
}

export type stateType = {
   state: pagesType
}

let state = {
   profilePage: {
      posts: [
         { id: 1, message: 'Hi! How are you?', likesCount: 15 },
         { id: 2, message: 'Hi!', likesCount: 152 },
         { id: 3, message: 'Ha-ha-ha-ha', likesCount: 115 },
         { id: 4, message: 'It`s my first post', likesCount: 56 },
      ],
   },
   dialogsPage: {
      dialogs: [
         { id: 1, name: 'Oleg' },
         { id: 2, name: 'Victor' },
         { id: 3, name: 'Anna' },
         { id: 4, name: 'Alex' },
         { id: 5, name: 'Ivan' },
      ],
      messages: [
         { id: 1, message: 'Hi' },
         { id: 2, message: 'How are u?' },
         { id: 3, message: 'Meet at 6 p.m.' },
         { id: 4, message: 'Yoh' },
         { id: 5, message: 'Yoho-ho' },
      ],
   },
}

export default state

