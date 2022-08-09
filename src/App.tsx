import { Button, ChakraProvider } from "@chakra-ui/react";
import "./styles.css";
import { Client, Account } from "appwrite";

const client = new Client();

// Init your Web SDK
client.setEndpoint("http://138.68.74.191/v1").setProject("ffxi-party-finder"); // Your project ID

const account = new Account(client);

export default function App() {
  return (
    <ChakraProvider>
      <Button onClick={createAccount} colorScheme="green">
        Create
      </Button>
    </ChakraProvider>
  );
}

const createAccount = async () => {
  try {
    const response = await account.create(
      "unique()",
      "me@example.com",
      "password",
      "Jane Doe"
    );
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};
