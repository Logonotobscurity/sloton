
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // For now, we'll just return a mock user.
      // In a real application, you'd validate the credentials against a database.
      authorize: async (credentials) => {
        // You can add your own logic here to validate credentials.
        // For demonstration, we'll accept any credentials and return a mock user.
        console.log('Authorizing user with credentials:', credentials);
        
        // IMPORTANT: In a real app, you would look up the user in your database
        // and verify the password. NEVER do this in production.
        return {
          id: '1',
          name: 'Test User',
          email: 'test@example.com',
          image: 'https://picsum.photos/200',
        };
      },
    }),
  ],
  // Add other NextAuth options here if needed, like pages, callbacks, etc.
  pages: {
    // We can define custom pages later if we want
    // signIn: '/login',
  }
});
