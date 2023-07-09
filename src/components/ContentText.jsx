import { Text } from "@chakra-ui/react";

export default function ContentText({ children, ...props }) {
  return (
    <Text
      color="#FFFFFF"
      fontFamily="Fedra Sans Std"
      fontSize="18px"
      fontStyle="normal"
      fontWeight="400"
      lineHeight="30px"
      {...props}
    >
      {children}
    </Text>
  );
}
