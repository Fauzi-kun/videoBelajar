import { create } from "zustand";
import { persist } from "zustand/middleware";
import { url } from "../../services/api/api";

const useStore = create(
  persist((set) => ({
    data: [],
    currentUser: {},
    addData: async () => {
      try {
        const response = await url.get();
        set({ data: response.data });
      } catch (err) {
        console.log(err);
      }
    },
    loginUser: (user) =>
      set(() => ({
        currentUser: user,
      })),
    editUser: async (user, id) => {
      try {
        const response = await url.put(`/${id}`, user);
        set((state) => ({
          data: state.data.map((item) =>
            item.id === id ? response.data : item
          ),
          currentUser: user,
        }));
      } catch (err) {
        console.log(err);
      }
    },
  }))
);

export default useStore;
