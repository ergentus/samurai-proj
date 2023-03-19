type DataDialogsType = {
   id: number
   name: string
   avatar: string
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

export type ProfilePageType = {
   posts: DataPostType[]
}

export type DialogsPageType = {
   dialogs: DataDialogsType[],
   messages: DataMessagestype[]
}

type SidebarPageType = {
   sidebar: any //! dont forget
}

type RootPagesType = {
   profilePage: ProfilePageType
   dialogsPage: DialogsPageType
   sidebar: SidebarPageType
}

let state:RootPagesType = {
   profilePage: {
      posts: [
         { id: 1, message: 'Hi! How are you?', likesCount: 15 },
         { id: 2, message: 'Hi!', likesCount: 152 },
         { id: 3, message: 'Ha-ha-ha-ha', likesCount: 115 },
      ],
   },
   dialogsPage: {
      dialogs: [
         { id: 1, name: 'Oleg', avatar: "https://cs6.pikabu.ru/avatars/760/v760056-585817783.jpg"},
         { id: 2, name: 'Victor', avatar: "https://cs6.pikabu.ru/avatars/1227/v1227155-231214202.jpg"},
         { id: 3, name: 'Anna', avatar: "https://greennova.shop/pics/79f93db6b28dc27596c8931dbfa39895.jpg"},
         { id: 4, name: 'Alex', avatar: "https://android-obzor.com/wp-content/uploads/2022/04/4-7-300x300.jpg"},
         { id: 5, name: 'Ivan', avatar:"https://i.imgur.com/q2eCFBN.png" },
      ],
      messages: [
         { id: 1, message: 'Hi' },
         { id: 2, message: 'How are u?' },
         { id: 3, message: 'Meet at 6 p.m.' },
         { id: 4, message: 'Yoh' },
         { id: 5, message: 'Yoho-ho' },
      ],
   },

   sidebar: { //! dont forget
      sidebar: 'any' //! dont forget
   }
}

export default state

