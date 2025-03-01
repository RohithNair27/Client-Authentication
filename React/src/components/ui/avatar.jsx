import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";

const AvatarUi = ({ user }) => {
  return (
    <Stack gap="8">
      <HStack key={user.email} gap="4">
        <Avatar.Root>
          <Avatar.Fallback name={user.name} />
          <Avatar.Image src={user.avatar} />
        </Avatar.Root>
        <Stack gap="0">
          <Text fontWeight="medium">{user.name}</Text>
          <Text color="fg.muted" textStyle="sm">
            {user.email}
          </Text>
        </Stack>
      </HStack>
    </Stack>
  );
};

export default AvatarUi;

const users = [
  {
    id: "2",
    name: "Melissa Jones",
    email: "melissa.jones@example.com",
    avatar: "https://i.pravatar.cc/300?u=po",
  },
];
