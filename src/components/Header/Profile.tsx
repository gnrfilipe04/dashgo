import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Filipe Souza</Text>
          <Text color="gray.300" fontSize="small">
            gnr_filipe@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Filipe Souza"
        src="https://github.com/gnrfilipe04.png"
      />
    </Flex>
  );
}
