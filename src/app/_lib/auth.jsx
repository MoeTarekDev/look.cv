// import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";
// import { createUser, getUser } from "./data-service";
// const authConfig = {
//   providers: [
//     Google({
//       clientId: process.env.AUTH_GOOGLE_ID,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET,
//     }),
//   ],
//   callbacks: {
//     authorized({ auth, request }) {
//       return !!auth?.user;
//     }, // runs after the user put his information but before signing in
//     async signIn({ user, account, profile }) {
//       try {
//         const existingGuest = await getUser(user.email);

//         if (!existingGuest) {
//           await createUser({
//             fullName: user.name,
//             email: user.email,
//             isComplete: false,
//           });
//         }
//         return true;
//       } catch (error) {
//         console.log(error);

//         return false;
//       }
//     }, //runs after signIn callback and each time the session checked out
//     async session({ session }) {
//       const user = await getUser(session.user.email);
//       if (user) {
//         session.user.userId = user.id;
//         session.user.isComplete = user.isComplete;
//         session.user.userName = user.userName;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/login",
//   },
// };

// export const {
//   auth,
//   signIn,
//   signOut,
//   handlers: { GET, POST },
//   //@ts-ignore
// } = NextAuth(authConfig);
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUser } from "./data-service";
const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    }, // runs after the user put his information but before signing in
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getUser(user.email);

        if (!existingGuest) {
          await createUser({
            fullName: user.name,
            email: user.email,
            isComplete: false,
            avatar_url: user.image,
          });
        }
        return true;
      } catch (error) {
        console.log(error);

        return false;
      }
    }, //runs after signIn callback and each time the session checked out
    async session({ session, token }) {
      // Always fetch fresh user data from DB
      const user = await getUser(session.user.email);
      if (user) {
        session.user = {
          ...session.user,
          userId: user.id,
          isComplete: user.isComplete,
          userName: user.userName,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
  //@ts-ignore
} = NextAuth(authConfig);
