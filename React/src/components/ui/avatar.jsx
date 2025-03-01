import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";

const AvatarUi = ({ user }) => {
  return (
    <Stack gap="8">
      <HStack key={user.email} gap="4">
        <Avatar.Root>
          <Avatar.Fallback name={user.userName} />
          <Avatar.Image />
        </Avatar.Root>
        <Stack gap="0">
          <Text fontWeight="medium">{user.userName}</Text>
          <Text color="fg.muted" textStyle="sm">
            {user.email}
          </Text>
        </Stack>
      </HStack>
    </Stack>
  );
};

export default AvatarUi;
