import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStoreData = create(
  persist(
    (set) => ({
      users: [],
      currentUser: null,
      addUser: (newUser) =>
        set((state) => ({
          users: [newUser, ...state.users],
        })),
      loginUser: (email, password) =>
        set((state) => {
          const user = state.users.find(
            (user) => user.email === email && user.password === password
          );
          return { currentUser: user || null };
        }),
      updateData: (update) =>
        set((state) => ({ currentUser: { ...state.currentUser, ...update } })),
      logOut: () => set(() => ({ currentUser: null })),
    })
    // {
    //   name: "userStorage",
    //   getStorage: () => localStorage,
    // }
  )
);

export default useStoreData;
